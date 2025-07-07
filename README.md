About Us: 


AdaptNXT is a tech-forward company building scalable digital products with a growing focus on AI- powered solutions. We believe in leveraging modern technology—including artificial intelligence and machine learning—to enhance productivity, personalisation, and decision-making. 
Role Overview: 


We are looking for a motivated Backend Developer Intern with a strong foundation in Node.js to join our development team. This is a hands-on role where you’ll work closely with our engineering team to build scalable backend services. 
Responsibilities: 


a. Assist in designing and developing RESTful APIs using Node.js 
b. Work with databases like MongoDB or PostgreSQL 
c. Write clean, efficient, and well-documented code 
d. Collaborate with frontend developers and designers to integrate user-facing elements e. Participate in code reviews, testing, and debugging 
f. Learn and apply best practices in backend development and security 
Requirements: 
a. Understanding of JavaScript and Node.js 
b. Interest or basic understanding of AI/ML APIs and tools 
c. Familiarity with Express.js, MongoDB or SQL databases 
d. Understanding of RESTful APIs and JSON 
e. Good problem-solving and communication skills 
f. Ability to work independently and in a team 
g. Pursuing a degree or recently graduated 
Bonus Skills (Nice to Have): 
a. Experience with version control systems like Git 
b. Exposure to cloud services (e.g., AWS, Firebase) 
c. Understanding of authentication (JWT, OAuth) 
d. Knowledge of unit testing frameworks (e.g., Jest) 
e. Experience with GPT-based tools 
What You’ll Gain: 
a. Real-world project experience 
b. Mentorship from experienced developers 
c. Opportunity to contribute to live projects and see your work in action d. Potential for a full-time offer based on performance 
Assignment: Simple E-commerce API 
Project Requirements: 
- Product Listings, The API should allow users to fetch a list of available products. - Cart Management, Users should be able to manage their shopping cart (add, update, remove items).
- Order Creation, Users should be able to create an order from their cart. - User Roles and Authentication, Implement user authentication and two roles (customer, admin). - JWT (JSON Web Tokens) should be used for securing routes 
- Customer: Can only view products, add them to the cart, and place orders. 
- Admin: Can also manage (add, update, delete) products. 
- Basic Frontend (Optional but Recommended), Create a basic HTML page with forms or buttons to interact with the API. 
- Additional Features (Optional for Extra Credit): 
- Implement pagination for product listing 
- Add product search by name or category.




########
// README.md
# Simple E-commerce API

A RESTful API for a simple e-commerce application built with Node.js, Express, and MongoDB.

## Features

- **User Authentication**: JWT-based authentication with role-based access control
- **Product Management**: CRUD operations for products (Admin only)
- **Shopping Cart**: Add, update, remove items from cart
- **Order Management**: Create orders from cart, view order history
- **Search & Pagination**: Search products by name/category with pagination
- **User Roles**: Customer and Admin roles with different permissions

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Tokens)
- bcryptjs for password hashing
- express-validator for input validation
- Jest for testing

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ```

4. Start MongoDB service on your system

5. Seed the database with sample data:
   ```bash
   node seed.js
   ```

6. Start the server:
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user info

### Products
- `GET /api/products` - Get all products (with pagination & search)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update/:productId` - Update item quantity
- `DELETE /api/cart/remove/:productId` - Remove item from cart
- `DELETE /api/cart/clear` - Clear entire cart

### Orders
- `POST /api/orders` - Create order from cart
- `GET /api/orders` - Get user's orders
- `GET /api/orders/:id` - Get single order
- `GET /api/orders/admin/all` - Get all orders (Admin only)
- `PUT /api/orders/:id/status` - Update order status (Admin only)

## Sample Usage

### Register a new user:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Login:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get products with search:
```bash
curl "http://localhost:5000/api/products?search=laptop&page=1&limit=10"
```

### Add item to cart:
```bash
curl -X POST http://localhost:5000/api/cart/add \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "productId": "PRODUCT_ID",
    "quantity": 2
  }'