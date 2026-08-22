from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
import sqlite3
import os
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests

app = Flask(__name__, static_folder='.', static_url_path='')
# Enable CORS for all routes
CORS(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')


# In production, load this from environment variables!
app.config['SECRET_KEY'] = 'super-secret-secure-key-12345'
# The user will replace this with their actual client ID
app.config['GOOGLE_CLIENT_ID'] = '198121120085-1m8i3v8iqr5btth5hbuprros2ff9dhuj.apps.googleusercontent.com'
DB_FILE = 'database.db'

def get_db_connection():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn

# Helper to require token
def token_required(f):
    def decorator(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            parts = request.headers['Authorization'].split()
            if len(parts) == 2 and parts[0] == 'Bearer':
                token = parts[1]
                
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            current_user_email = data['email']
        except:
            return jsonify({'message': 'Token is invalid!'}), 401

        return f(current_user_email, *args, **kwargs)
    decorator.__name__ = f.__name__
    return decorator

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not name or not email or not password:
        return jsonify({'message': 'Missing data'}), 400

    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

    conn = get_db_connection()
    try:
        conn.execute('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)',
                     (name, email, hashed_password))
        conn.commit()
    except sqlite3.IntegrityError:
        conn.close()
        return jsonify({'message': 'Email already registered.'}), 409
    finally:
        conn.close()

    # Generate JWT Token for auto-login
    token = jwt.encode({
        'email': email,
        'name': name,
        'exp': datetime.datetime.now(datetime.UTC) + datetime.timedelta(hours=24)
    }, app.config['SECRET_KEY'], algorithm="HS256")

    return jsonify({'message': 'User registered successfully!', 'token': token, 'name': name}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Missing data'}), 400

    conn = get_db_connection()
    user = conn.execute('SELECT * FROM users WHERE email = ?', (email,)).fetchone()
    conn.close()

    if not user or not check_password_hash(user['password_hash'], password):
        return jsonify({'message': 'Invalid email or password.'}), 401

    # Generate JWT Token
    token = jwt.encode({
        'email': user['email'],
        'name': user['name'],
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
    }, app.config['SECRET_KEY'], algorithm="HS256")

    return jsonify({'token': token, 'name': user['name']}), 200

@app.route('/api/google-login', methods=['POST'])
def google_login():
    data = request.get_json()
    token = data.get('credential')

    if not token:
        return jsonify({'message': 'Missing credential'}), 400

    try:
        # Verify the Google token
        idinfo = id_token.verify_oauth2_token(
            token, 
            google_requests.Request(), 
            app.config['GOOGLE_CLIENT_ID']
        )
        
        email = idinfo['email']
        name = idinfo.get('name', 'Google User')

        conn = get_db_connection()
        user = conn.execute('SELECT * FROM users WHERE email = ?', (email,)).fetchone()

        if not user:
            # Auto-register the user with a dummy password since they use Google
            dummy_password_hash = generate_password_hash('GOOGLE_OAUTH_NO_PASSWORD', method='pbkdf2:sha256')
            conn.execute('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)',
                         (name, email, dummy_password_hash))
            conn.commit()
            user = conn.execute('SELECT * FROM users WHERE email = ?', (email,)).fetchone()

        conn.close()

        # Issue our own JWT token
        jwt_token = jwt.encode({
            'email': email,
            'name': user['name'],
            'exp': datetime.datetime.now(datetime.UTC) + datetime.timedelta(hours=24)
        }, app.config['SECRET_KEY'], algorithm="HS256")

        return jsonify({'token': jwt_token, 'name': user['name']}), 200

    except ValueError:
        return jsonify({'message': 'Invalid Google token.'}), 401

@app.route('/api/profile', methods=['GET'])
@token_required
def get_profile(current_user_email):
    conn = get_db_connection()
    cursor = conn.cursor()

    # Get user details
    user = cursor.execute('SELECT id, name, email, created_at FROM users WHERE email = ?', (current_user_email,)).fetchone()
    
    if not user:
        conn.close()
        return jsonify({'message': 'User not found'}), 404

    # Get user orders
    orders_rows = cursor.execute('SELECT * FROM orders WHERE user_email = ? ORDER BY created_at DESC', (current_user_email,)).fetchall()
    
    orders = []
    for order in orders_rows:
        order_dict = dict(order)
        # Fetch items for this order
        items = cursor.execute('SELECT * FROM order_items WHERE order_id = ?', (order['id'],)).fetchall()
        order_dict['items'] = [dict(item) for item in items]
        orders.append(order_dict)

    conn.close()

    return jsonify({
        'user': dict(user),
        'orders': orders
    }), 200

@app.route('/api/checkout', methods=['POST'])
def checkout():
    # Allow both authenticated and guest users
    data = request.get_json()
    email = data.get('email')
    payment_method = data.get('payment_method')
    cart_items = data.get('cart_items', [])

    if not email or not cart_items:
        return jsonify({'message': 'Email and cart items are required.'}), 400

    total_amount = sum(item['price'] for item in cart_items)
    tax = round(total_amount * 0.18)
    final_total = total_amount + tax

    conn = get_db_connection()
    cursor = conn.cursor()

    # Insert Order
    cursor.execute('INSERT INTO orders (user_email, total_amount, payment_method) VALUES (?, ?, ?)',
                 (email, final_total, payment_method))
    order_id = cursor.lastrowid

    # Insert Order Items
    for item in cart_items:
        cursor.execute('INSERT INTO order_items (order_id, product_id, product_title, price) VALUES (?, ?, ?, ?)',
                     (order_id, item['id'], item['title'], item['price']))

    conn.commit()
    conn.close()

    # Generate mock order ID based on DB ID
    return jsonify({
        'message': 'Transaction recorded securely.',
        'order_id': f'#PMR&CO-{100000 + order_id}'
    }), 201

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.json
    name = data.get('name')
    sender_email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')
    
    # Target email is securely hidden in the backend
    TARGET_EMAIL = 'tejasmarkthree@gmail.com'

    # Save to database as a reliable backup
    conn = get_db_connection()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS contact_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            subject TEXT,
            message TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.execute('INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)',
                 (name, sender_email, subject, message))
    conn.commit()
    conn.close()

    # To actually send via SMTP, the user must set these environment variables.
    # Otherwise, we just save to the DB and simulate success to the frontend.
    import smtplib
    from email.mime.text import MIMEText
    from email.mime.multipart import MIMEMultipart
    import os

    SMTP_USER = os.environ.get('SMTP_USER')
    SMTP_PASSWORD = os.environ.get('SMTP_PASSWORD')

    if SMTP_USER and SMTP_PASSWORD:
        try:
            msg = MIMEMultipart()
            msg['From'] = SMTP_USER
            msg['To'] = TARGET_EMAIL
            msg['Subject'] = f"PMR&Co Inquiry: {subject}"
            
            body = f"Name: {name}\nEmail: {sender_email}\n\nMessage:\n{message}"
            msg.attach(MIMEText(body, 'plain'))
            
            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.sendmail(SMTP_USER, TARGET_EMAIL, msg.as_string())
            server.quit()
        except Exception as e:
            print(f"Failed to send email via SMTP: {e}")
            # We don't return 500 because it was safely stored in the database!

    return jsonify({'status': 'success', 'message': 'Message received!'}), 200

if __name__ == '__main__':
    # Initialize DB if it doesn't exist
    if not os.path.exists(DB_FILE):
        import init_db
        init_db.init_db()
        
    print("Starting Secure API Server...")
    app.run(debug=True, port=5000)
