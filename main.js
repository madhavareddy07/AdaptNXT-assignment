<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple E-commerce</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: #333;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #667eea;
        }

        .user-info {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }

        .btn-primary {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
            background: #f8f9fa;
            color: #495057;
            border: 1px solid #dee2e6;
        }

        .btn-secondary:hover {
            background: #e9ecef;
        }

        .btn-danger {
            background: #dc3545;
            color: white;
        }

        .btn-danger:hover {
            background: #c82333;
        }

        .section {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .section h2 {
            color: #667eea;
            margin-bottom: 20px;
            font-size: 24px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #495057;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-row {
            display: flex;
            gap: 20px;
        }

        .form-row .form-group {
            flex: 1;
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .product-card {
            background: white;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .product-card:hover {
            transform: translateY(-5px);
        }

        .product-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 15px;
        }

        .product-name {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }

        .product-description {
            color: #666;
            margin-bottom: 15px;
            line-height: 1.4;
        }

        .product-price {
            font-size: 20px;
            font-weight: bold;
            color: #667eea;
            margin-bottom: 15px;
        }

        .product-actions {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .quantity-input {
            width: 60px;
            padding: 5px;
            border: 1px solid #dee2e6;
            border-radius: 4px;
        }

        .cart-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            margin-bottom: 10px;
        }

        .cart-item-image {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 6px;
        }

        .cart-item-details {
            flex: 1;
        }

        .cart-item-name {
            font-weight: bold;
            margin-bottom: 5px;
        }

        .cart-item-price {
            color: #667eea;
            font-weight: bold;
        }

        .cart-item-actions {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .cart-total {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
            text-align: center;
        }

        .cart-total h3 {
            color: #667eea;
            font-size: 24px;
        }

        .hidden {
            display: none;
        }

        .alert {
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
        }

        .alert-success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .alert-error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        .search-bar {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        .search-bar input {
            flex: 1;
            padding: 12px;
            border: 1px solid #dee2e6;
            border-radius: 8px;
        }

        .pagination {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
        }

        .pagination button {
            padding: 8px 16px;
            border: 1px solid #dee2e6;
            background: white;
            border-radius: 4px;
            cursor: pointer;
        }

        .pagination button:hover {
            background: #f8f9fa;
        }

        .pagination button.active {
            background: #667eea;
            color: white;
            border-color: #667eea;
        }

        @media (max-width: 768px) {
            .container {
                padding: 10px;
            }

            .nav {
                flex-direction: column;
                gap: 15px;
            }

            .form-row {
                flex-direction: column;
            }

            .products-grid {
                grid-template-columns: 1fr;
            }

            .cart-item {
                flex-direction: column;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="nav">
                <div class="logo">🛒 Simple E-commerce</div>
                <div class="user-info">
                    <span id="userDisplay" class="hidden">Welcome, <span id="username"></span></span>
                    <button id="cartBtn" class="btn btn-secondary hidden">Cart (<span id="cartCount">0</span>)</button>
                    <button id="logoutBtn" class="btn btn-danger hidden">Logout</button>
                </div>
            </div>
        </div>

        <!-- Authentication Section -->
        <div id="authSection" class="section">
            <h2>Login / Register</h2>
            <div class="form-row">
                <div class="form-group">
                    <h3>Login</h3>
                    <form id="loginForm">
                        <div class="form-group">
                            <label for="loginEmail">Email:</label>
                            <input type="email" id="loginEmail" required>
                        </div>
                        <div class="form-group">
                            <label for="loginPassword">Password:</label>
                            <input type="password" id="loginPassword" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
                <div class="form-group">
                    <h3>Register</h3>
                    <form id="registerForm">
                        <div class="form-group">
                            <label for="registerUsername">Username:</label>
                            <input type="text" id="registerUsername" required>
                        </div>
                        <div class="form-group">
                            <label for="registerEmail">Email:</label>
                            <input type="email" id="registerEmail" required>
                        </div>
                        <div class="form-group">
                            <label for="registerPassword">Password:</label>
                            <input type="password" id="registerPassword" required>
                        </div>
                        <div class="form-group">
                            <label for="registerRole">Role:</label>
                            <select id="registerRole">
                                <option value="customer">Customer</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Admin Product Management -->
        <div id="adminSection" class="section hidden">
            <h2>Product Management (Admin)</h2>
            <form id="productForm">
                <div class="form-row">
                    <div class="form-group">
                        <label for="productName">Product Name:</label>
                        <input type="text" id="productName" required>
                    </div>
                    <div class="form-group">
                        <label for="productPrice">Price:</label>
                        <input type="number" id="productPrice" step="0.01" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="productCategory">Category:</label>
                        <input type="text" id="productCategory" required>
                    </div>
                    <div class="form-group">
                        <label for="productStock">Stock:</label>
                        <input type="number" id="productStock" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="productDescription">Description:</label>
                    <textarea id="productDescription" rows="3" required></textarea>
                </div>
                <div class="form-group">
                    <label for="productImage">Image URL:</label>
                    <input type="url" id="productImage">
                </div>
                <button type="submit" class="btn btn-primary">Add Product</button>
            </form>
        </div>

        <!-- Products Section -->
        <div id="productsSection" class="section hidden">
            <h2>Products</h2>
            <div class="search-bar">
                <input type="text" id="searchInput" placeholder="Search products...">
                <button id="searchBtn" class="btn btn-secondary">Search</button>
                <button id="clearSearchBtn" class="btn btn-secondary">Clear</button>
            </div>
            <div id="productsGrid" class="products-grid"></div>
            <div id="productsPagination" class="pagination"></div>
        </div>

        <!-- Cart Section -->
        <div id="cartSection" class="section hidden">
            <h2>Shopping Cart</h2>
            <div id="cartItems"></div>
            <div id="cartTotal" class="cart-total">
                <h3>Total: $<span id="totalAmount">0.00</span></h3>
                <button id="checkoutBtn" class="btn btn-primary">Create Order</button>
                <button id="clearCartBtn" class="btn btn-danger">Clear Cart</button>
            </div>
        </div>

        <!-- Orders Section -->
        <div id="ordersSection" class="section hidden">
            <h2>My Orders</h2>
            <div id="ordersList"></div>
        </div>

        <!-- Alerts -->
        <div id="alerts"></div>
    </div>

    <script>
        // Global variables
        let currentUser = null;
        let currentToken = null;
        let currentPage = 1;
        let currentSearch = '';
        let cart = [];

        // API base URL
        const API_BASE = 'http://localhost:5000/api';

        // DOM elements
        const authSection = document.getElementById('authSection');
        const adminSection = document.getElementById('adminSection');
        const productsSection = document.getElementById('productsSection');
        const cartSection = document.getElementById('cartSection');
        const ordersSection = document.getElementById('ordersSection');
        const userDisplay = document.getElementById('userDisplay');
        const username = document.getElementById('username');
        const cartBtn = document.getElementById('cartBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        const cartCount = document.getElementById('cartCount');

        // Initialize app
        document.addEventListener('DOMContentLoaded', function() {
            // Check if user is logged in
            const token = localStorage.getItem('token');
            const user = localStorage.getItem('user');
            
            if (token && user) {
                currentToken = token;
                currentUser = JSON.parse(user);
                showLoggedInState();
            } else {
                showLoggedOutState();
            }

            // Event listeners
            document.getElementById('loginForm').addEventListener('submit', handleLogin);
            document.getElementById('registerForm').addEventListener('submit', handleRegister);
            document.getElementById('productForm').addEventListener('submit', handleAddProduct);
            document.getElementById('searchBtn').addEventListener('click', handleSearch);
            document.getElementById('clearSearchBtn').addEventListener('click', clearSearch);
            document.getElementById('cartBtn').addEventListener('click', showCart);
            document.getElementById('logoutBtn').addEventListener('click', handleLogout);
            document.getElementById('checkoutBtn').addEventListener('click', handleCheckout);
            document.getElementById('clearCartBtn').addEventListener('click', clearCart);
        });

        // Authentication functions
        async function handleLogin(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            try {
                const response = await fetch(`${API_BASE}/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                const data = await response.json();

                if (response.ok) {
                    currentToken = data.token;
                    currentUser = data.user;
                    localStorage.setItem('token', currentToken);
                    localStorage.setItem('user', JSON.stringify(currentUser));
                    showAlert('Login successful!', 'success');
                    showLoggedInState();
                } else {
                    showAlert(data.message || 'Login failed', 'error');
                }
            } catch (error) {
                showAlert('Network error. Please try again.', 'error');
            }
        }

        async function handleRegister(e) {
            e.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const role = document.getElementById('registerRole').value;

            try {
                const response = await fetch(`${API_BASE}/auth/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, email, password, role }),
                });

                const data = await response.json();

                if (response.ok) {
                    currentToken = data.token;
                    currentUser = data.user;
                    localStorage.setItem('token', currentToken);
                    localStorage.setItem('user', JSON.stringify(currentUser));
                    showAlert('Registration successful!', 'success');
                    showLoggedInState();
                } else {
                    showAlert(data.message || 'Registration failed', 'error');
                }
            } catch (error) {
                showAlert('Network error. Please try again.', 'error');
            }
        }

        function handleLogout() {
            currentToken = null;
            currentUser = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            showLoggedOutState();
            showAlert('Logged out successfully!', 'success');
        }

        // UI state functions
        function showLoggedInState() {
            authSection.classList.add('hidden');
            productsSection.classList.remove('hidden');
            userDisplay.classList.remove('hidden');
            cartBtn.classList.remove('hidden');
            logoutBtn.classList.remove('hidden');
            username.textContent = currentUser.username;

            if (currentUser.role === 'admin') {
                adminSection.classList.remove('hidden');
            }

            loadProducts();
            loadCart();