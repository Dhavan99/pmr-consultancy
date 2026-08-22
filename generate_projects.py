import json
import random

# Core domains
domains = ["AI/ML", "IoT", "Web", "Blockchain", "Cybersecurity"]

# Components for generation
ai_ml_techs = ["Deep Learning", "Transformers", "LLMs", "Computer Vision", "NLP", "Reinforcement Learning", "Federated Learning"]
ai_ml_apps = ["Disease Prediction", "Fraud Detection", "Autonomous Navigation", "Sentiment Analysis", "Generative Art", "Predictive Maintenance", "Smart Chatbot", "Anomaly Detection", "Medical Image Segmentation"]

iot_techs = ["ESP32", "Raspberry Pi", "LoRaWAN", "Edge Computing", "MQTT", "Arduino"]
iot_apps = ["Smart Agriculture", "Patient Health Monitoring", "Smart Grid", "Industrial Automation", "Smart Parking", "Asset Tracking", "Environmental Monitoring", "Smart Home Automation"]

web_techs = ["React & Node.js", "Django & React", "Next.js & Supabase", "GraphQL", "Microservices", "Serverless"]
web_apps = ["E-Commerce Platform", "Real-time Collaboration Tool", "Online Learning Management System", "Telemedicine Portal", "Event Management System", "Task Management Dashboard", "SaaS Billing Platform"]

crypto_techs = ["Ethereum", "Solidity", "Web3.js", "Hyperledger Fabric", "Polygon", "IPFS"]
crypto_apps = ["Decentralized Identity Verification", "Supply Chain Provenance", "NFT Marketplace", "E-Voting System", "DeFi Lending Protocol", "Decentralized File Storage", "Smart Contract Audit Tool"]

cyber_techs = ["Intrusion Detection", "Zero Trust Architecture", "Cryptography", "Network Forensics", "SIEM"]
cyber_apps = ["Ransomware Detection", "Phishing Email Classifier", "Secure Password Vault", "Network Traffic Analyzer", "Vulnerability Scanner", "Blockchain-based Authentication"]

all_pools = {
    "AI/ML": (ai_ml_techs, ai_ml_apps),
    "IoT": (iot_techs, iot_apps),
    "Web": (web_techs, web_apps),
    "Blockchain": (crypto_techs, crypto_apps),
    "Cybersecurity": (cyber_techs, cyber_apps)
}

adjectives = ["Advanced", "Next-Gen", "Real-time", "Scalable", "Distributed", "Secure", "Intelligent", "Automated", "Cutting-edge", "Decentralized"]
degrees = ["BTech", "MTech"]

projects = []
id_counter = 1

# Base projects to ensure core ones exist
base_projects = [
    {
        "title": "AI-Based Disease Prediction System",
        "description": "A machine learning project that predicts multiple diseases based on patient symptoms. Includes a web interface built with Flask.",
        "degree": "BTech",
        "domain": "AI/ML",
        "price": 1500,
        "features": ["Python Source Code", "Flask Web App", "40-page Project Report", "PPT Presentation", "Dataset Included"]
    },
    {
        "title": "IoT Smart Home Controller",
        "description": "An Internet of Things project to control home appliances using an ESP32 microcontroller and a custom Android application.",
        "degree": "BTech",
        "domain": "IoT",
        "price": 2000,
        "features": ["Arduino/ESP32 Code", "Android App Source", "Circuit Diagram", "50-page Report", "PPT Presentation"]
    }
]

for bp in base_projects:
    bp["id"] = f"p{id_counter}"
    projects.append(bp)
    id_counter += 1

# Generate 150 random but realistic projects
generated_titles = set()

while len(projects) < 150:
    domain = random.choice(domains)
    techs, apps = all_pools[domain]
    
    app = random.choice(apps)
    tech = random.choice(techs)
    adj = random.choice(adjectives)
    degree = random.choice(degrees)
    
    # Title formatting variations
    formats = [
        f"{adj} {app} using {tech}",
        f"{app} via {tech}",
        f"{tech}-based {app}",
        f"{adj} {tech} Architecture for {app}"
    ]
    title = random.choice(formats)
    
    if title in generated_titles:
        continue
    generated_titles.add(title)
    
    # MTech projects are generally more expensive and complex
    price = random.randint(120, 250) * 10 if degree == "BTech" else random.randint(250, 500) * 10
    
    desc_templates = [
        f"A cutting-edge implementation of {app} utilizing the power of {tech}. Ideal for final year engineering students.",
        f"This project demonstrates {adj.lower()} concepts in {domain} by building a robust {app} with {tech}.",
        f"Explore the intersection of modern engineering and {domain} through this comprehensive {app} system using {tech}.",
        f"An innovative approach to {app.lower()} designed specifically for {degree} students, architected with {tech}."
    ]
    description = random.choice(desc_templates)
    
    features = []
    if domain == "AI/ML":
        features = ["Python Scripts", "Jupyter Notebooks", "Pre-trained Models", "Dataset", "Project Report", "PPT Presentation"]
    elif domain == "IoT":
        features = ["Microcontroller Code", "Hardware Schematics", "Cloud Backend", "Project Report", "PPT Presentation"]
    elif domain == "Web":
        features = ["Full Stack Source Code", "Database Schema", "Installation Guide", "Project Report", "PPT Presentation"]
    elif domain == "Blockchain":
        features = ["Smart Contracts", "Frontend DApp", "Testnet Deployment Scripts", "Project Report", "PPT Presentation"]
    elif domain == "Cybersecurity":
        features = ["Analysis Scripts", "Security Audit Report", "Implementation Code", "Project Report", "PPT Presentation"]
        
    projects.append({
        "id": f"p{id_counter}",
        "title": title,
        "description": description,
        "degree": degree,
        "domain": domain,
        "price": price,
        "features": features
    })
    id_counter += 1

# Write to data.js
js_content = "const products = " + json.dumps(projects, indent=4) + ";"

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Successfully generated {len(projects)} projects.")
