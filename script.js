document.addEventListener('DOMContentLoaded', () => {
    // State
    let cart = JSON.parse(localStorage.getItem('pmr_cart')) || [];
    let currentDegreeFilter = 'all';
    let currentDomainFilter = 'all';
    let currentSearchQuery = '';

    // DOM Elements
    const projectsGrid = document.getElementById('projects-grid');
    const degreeFilterBtns = document.querySelectorAll('[data-filter]');
    const domainFilterBtns = document.querySelectorAll('[data-domain]');
    const searchInput = document.getElementById('project-search');
    
    // Cart Elements
    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartBadge = document.getElementById('cart-badge');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Modal Elements
    const quickViewModal = document.getElementById('quick-view-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalFeatures = document.getElementById('modal-features');
    const modalPrice = document.getElementById('modal-price');
    const modalBadges = document.getElementById('modal-badges');
    const modalAddCartBtn = document.getElementById('modal-add-cart-btn');

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if(navbar) {
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Toast Notification System
    function showToast(message) {
        const container = document.getElementById('toast-container');
        if(!container) return;
        
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            ${message}
        `;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('hiding');
            toast.addEventListener('animationend', () => toast.remove());
        }, 3000);
    }

    // Init
    if (projectsGrid) {
        renderProjects();
    }
    updateCartUI();

    // Filters Logic
    if (degreeFilterBtns.length > 0) {
        degreeFilterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                degreeFilterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentDegreeFilter = e.target.getAttribute('data-filter');
                renderProjects();
            });
        });
    }

    if (domainFilterBtns.length > 0) {
        domainFilterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                domainFilterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentDomainFilter = e.target.getAttribute('data-domain');
                renderProjects();
            });
        });
    }

    // Search Logic
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value.toLowerCase().trim();
            renderProjects();
        });
    }

    // Render Projects Function
    function renderProjects() {
        if (!projectsGrid) return;
        projectsGrid.innerHTML = '';
        
        let filteredProducts = products.filter(product => {
            const matchDegree = currentDegreeFilter === 'all' || product.degree === currentDegreeFilter;
            const matchDomain = currentDomainFilter === 'all' || product.domain === currentDomainFilter;
            
            let matchSearch = true;
            if (currentSearchQuery) {
                const searchString = `${product.title} ${product.description} ${product.tech_stack || ''}`.toLowerCase();
                matchSearch = searchString.includes(currentSearchQuery);
            }

            return matchDegree && matchDomain && matchSearch;
        });

        // Limit the number of products if data-limit is specified
        const limit = projectsGrid.getAttribute('data-limit');
        if (limit && !isNaN(limit)) {
            filteredProducts = filteredProducts.slice(0, parseInt(limit, 10));
        }

        if (filteredProducts.length === 0) {
            projectsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--clr-text-secondary); padding: var(--space-8);">No projects found matching your criteria.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="card-tags">
                    <span class="tag">${product.degree}</span>
                    <span class="tag">${product.domain}</span>
                </div>
                <h3 class="card-title">${product.title}</h3>
                <p class="card-desc">${product.description}</p>
                <div class="card-footer">
                    <span class="card-price">₹${product.price}</span>
                    <button class="add-cart-btn" data-id="${product.id}" aria-label="Add ${product.title} to cart">Add to Cart</button>
                </div>
            `;

            // Open project details page on click (except add to cart btn)
            card.addEventListener('click', (e) => {
                if(!e.target.classList.contains('add-cart-btn')) {
                    window.location.href = `project-details.html?id=${product.id}`;
                }
            });

            // Add to cart btn click
            const addBtn = card.querySelector('.add-cart-btn');
            addBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(product);
            });

            projectsGrid.appendChild(card);
        });
    }

    // Modal Logic
    function openModal(product) {
        if (!quickViewModal) return;
        
        modalTitle.textContent = product.title;
        modalDesc.textContent = product.description;
        modalPrice.textContent = `₹${product.price}`;
        
        modalBadges.innerHTML = `
            <span class="tag">${product.degree}</span>
            <span class="tag">${product.domain}</span>
        `;
        
        modalFeatures.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');
        
        modalAddCartBtn.onclick = () => {
            addToCart(product);
            closeModal();
        };

        quickViewModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    window.closeModal = function() {
        if (!quickViewModal) return;
        quickViewModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (quickViewModal) {
        quickViewModal.addEventListener('click', (e) => {
            if(e.target === quickViewModal) closeModal();
        });
    }

    // Cart Logic
    function addToCart(product) {
        // Check if already in cart
        if (cart.find(item => item.id === product.id)) {
            alert("This project is already in your cart.");
            return;
        }
        cart.push(product);
        saveCart();
        updateCartUI();
        
        // Visual feedback
        showToast("Added to Cart successfully");
        if (cartBtn) {
            cartBtn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartBtn.style.transform = 'scale(1)';
            }, 200);
        }
    }

    window.removeFromCart = function(id) {
        cart = cart.filter(item => item.id !== id);
        saveCart();
        updateCartUI();
    };

    function saveCart() {
        localStorage.setItem('pmr_cart', JSON.stringify(cart));
    }

    function updateCartUI() {
        cartBadge.textContent = cart.length;
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart-msg" style="text-align: center; padding: var(--space-8) 0;">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--clr-border)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: var(--space-4);">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <p style="color: var(--clr-text-secondary); margin-bottom: var(--space-4);">Your cart is currently empty.</p>
                </div>
            `;
            cartTotalPrice.textContent = '₹0';
            return;
        }

        let total = 0;
        cartItemsContainer.innerHTML = '';
        
        cart.forEach(item => {
            total += item.price;
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <p>₹${item.price}</p>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart('${item.id}')">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartTotalPrice.textContent = `₹${total}`;
    }

    // Cart Sidebar Toggle
    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeCartBtn.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    cartOverlay.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Checkout
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if(cart.length === 0) return;
            
            const token = localStorage.getItem('pmr_token');
            if(token) {
                // User is already logged in, skip the login/guest choice
                window.location.href = 'payment.html';
            } else {
                window.location.href = 'checkout.html';
            }
        });
    }

    // Auth State Handler
    const updateAuthUI = () => {
        const token = localStorage.getItem('pmr_token');
        const userName = localStorage.getItem('pmr_user');
        
        // Find all Log In buttons/links
        const loginLinks = document.querySelectorAll('a[href="login.html"]');
        
        if (token && userName) {
            loginLinks.forEach(link => {
                // If it's a primary button, change it to user profile
                if(link.classList.contains('btn-primary')) {
                    link.outerHTML = `
                        <div class="user-menu-container" style="position: relative; display: flex; align-items: center; gap: 0.5rem; margin-right: 0.5rem;">
                            <span style="font-weight: 600; font-size: 0.9rem; color: var(--clr-text-primary);">Hi, ${userName.split(' ')[0]}</span>
                            <div id="user-avatar-btn" style="width: 38px; height: 38px; border-radius: 50%; background-color: var(--clr-surface); border: 1px solid var(--clr-border); display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--clr-text-secondary); transition: all 0.2s ease;">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div id="user-dropdown" style="position: absolute; top: calc(100% + 10px); right: 0; background: var(--clr-bg); border: 1px solid var(--clr-border); border-radius: var(--radius-lg); box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); width: 160px; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: all 0.2s ease; z-index: 100; overflow: hidden; display: flex; flex-direction: column;">
                                <a href="profile.html" style="padding: 0.75rem 1rem; color: var(--clr-text-primary); text-decoration: none; font-size: 0.9rem; border-bottom: 1px solid var(--clr-border); transition: background 0.2s;" onmouseover="this.style.backgroundColor='var(--clr-surface)'" onmouseout="this.style.backgroundColor='transparent'">My Profile</a>
                                <button id="logout-btn" style="text-align: left; background: none; border: none; padding: 0.75rem 1rem; color: #ef4444; cursor: pointer; font-size: 0.9rem; transition: background 0.2s;" onmouseover="this.style.backgroundColor='var(--clr-surface)'" onmouseout="this.style.backgroundColor='transparent'">Sign Out</button>
                            </div>
                        </div>
                    `;
                } else {
                    link.style.display = 'none'; // Hide text-only login links
                }
            });

            // Attach Dropdown Logic
            const avatarBtn = document.getElementById('user-avatar-btn');
            const dropdown = document.getElementById('user-dropdown');
            if (avatarBtn && dropdown) {
                avatarBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const isVisible = dropdown.style.visibility === 'visible';
                    if (isVisible) {
                        dropdown.style.opacity = '0';
                        dropdown.style.visibility = 'hidden';
                        dropdown.style.transform = 'translateY(-10px)';
                    } else {
                        dropdown.style.opacity = '1';
                        dropdown.style.visibility = 'visible';
                        dropdown.style.transform = 'translateY(0)';
                    }
                });
                
                // Close when clicking outside
                document.addEventListener('click', (e) => {
                    if (!dropdown.contains(e.target) && !avatarBtn.contains(e.target)) {
                        dropdown.style.opacity = '0';
                        dropdown.style.visibility = 'hidden';
                        dropdown.style.transform = 'translateY(-10px)';
                    }
                });
            }

            const logoutBtn = document.getElementById('logout-btn');
            if(logoutBtn) {
                logoutBtn.addEventListener('click', () => {
                    localStorage.removeItem('pmr_token');
                    localStorage.removeItem('pmr_user');
                    localStorage.removeItem('pmr_user_email');
                    window.location.reload();
                });
            }
        }
    };

    updateAuthUI();

    // Contact Form Logic
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const submitBtn = contactForm.querySelector('button[type="submit"]');

            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, subject, message })
                });

                if (response.ok) {
                    showToast('Message sent successfully! We will get back to you shortly.');
                    contactForm.reset();
                } else {
                    showToast('Failed to send message. Please try again.');
                }
            } catch (error) {
                console.error('Error sending message:', error);
                showToast('Failed to send message. Please check your connection.');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});
