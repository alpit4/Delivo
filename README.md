
# Food Delivery Website
for testing
email - user@1.com
pswd - user@123
- **Video**
  

https://github.com/user-attachments/assets/899a0673-edc2-43ce-9c98-934a3b70c9ae


## Overview

This project is a full-featured food delivery website built with separate modules for admin management, backend services, and user frontend. The system allows restaurant admins to manage food items and orders, while users can browse, order food, and process payments.

## Project Structure

The project is divided into three main directories:

- **admin**: Handles the restaurant's administrative functionalities.
- **backend**: Manages the server-side logic and data handling.
- **frontend**: Provides the user interface and client-side interactions.

## Features

### Admin

- **Food Management**:
  - Add food items with images, descriptions, prices, and categories.
  - View and update order statuses.

### Frontend

- **User Authentication**:
  - User registration and login using JWT (JSON Web Tokens).
- **Food Display**:
  - View available food items.
- **Cart Functionality**:
  - Add items to the cart.
  - Adjust item quantities.
  - View and modify cart items.
- **Payment Integration**:
  - Complete payments using Stripe.

### Backend

- **Models**:
  - Define models for User, Food, and Order.
- **Controllers**:
  - Handle business logic and interactions for food, user, and order functionalities.
- **Authorization Middleware**:
  - Manage user authentication and authorization.
- **Routes**:
  - Define API routes for user operations, food management, and order processing.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git

2. ## Install Dependencies

Navigate to each directory and install the required dependencies:

**Admin**:

```bash
cd admin
npm install
```

**Backend**
```bash
cd ../backend
npm install
```

**Frontend**
```bash
cd ../frontend
npm install
```
## Configuration
- **Backend**:
  - Set up environment variables for database connection, JWT secret, and Stripe keys in a .env file.
- **Frontend**:
  - Configure the API base URL for making requests to the backend.

## Run the Application

To start the application, use the following commands in each respective directory:

- **Backend**
   ```bash
   cd backend
   npm run server
- **Frontend**
   ```bash
   cd frontend
   npm run dev
- **Admin**
   ```bash
   cd admin
   npm run dev
   ```
## Usage
- **Admin**
   - Access the admin interface to manage food items and orders.
- **User**
   - Navigate to the frontend to browse food items, manage the cart, and complete purchases.
 
