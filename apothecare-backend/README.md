# ApotheCare Backend API

This is a simple PHP backend API for the ApotheCare project.

## Setup Instructions

1. Make sure you have XAMPP installed and running (Apache and MySQL)
2. Place this folder in your htdocs directory
3. Access the setup script to initialize the database:
   ```
   http://localhost/school/school/projecten/apothecare/apothecare-backend/setup.php
   ```
4. Test the API:
   ```
   http://localhost/school/school/projecten/apothecare/apothecare-backend/api/test.php
   ```

## Available Endpoints

### Authentication
- `POST /api/user/login.php` - Login with username and password
- `POST /api/user/register.php` - Register a new user

### Products
- `GET /api/products/index.php` - Get all products
- `POST /api/products/index.php` - Create a new product
- `GET /api/products/featured.php` - Get featured products

### Categories
- `GET /api/categories/index.php` - Get all product categories

### Image Upload
- `POST /api/upload/image.php` - Upload a product image

## Default Users

The setup script creates the following default users:

1. **Admin**
   - Username: `admin`
   - Password: `Admin123!`
   - Role: `admin`

2. **Employee**
   - Username: `employee`
   - Password: `Employee123!`
   - Role: `employee`

3. **User**
   - Username: `user`
   - Password: `User123!`
   - Role: `user` 