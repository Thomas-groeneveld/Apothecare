-- Database setup for ApotheCare
-- Run this script to initialize the database

-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS apothecare;
USE apothecare;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    role ENUM('admin', 'employee', 'user') NOT NULL DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255),
    category_id INT,
    stock INT NOT NULL DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

-- Insert default admin user
-- Username: admin, Password: Admin123!
INSERT INTO users (username, password, email, firstname, lastname, role) 
VALUES ('admin', '$2y$10$3jnFkUyXde9dSv6bxLK.mOodpVhzB5Vh7hY5MYJ9dzAjSZIJIUqPe', 'admin@apothecare.nl', 'Admin', 'User', 'admin')
ON DUPLICATE KEY UPDATE username = username;

-- Insert demo employee
-- Username: employee, Password: Employee123!
INSERT INTO users (username, password, email, firstname, lastname, role) 
VALUES ('employee', '$2y$10$rVe0sGz5YWbUczbO7TBt9usvY3uyeXrYkiuqhRPRqgTJ5NlJVgVTC', 'employee@apothecare.nl', 'Employee', 'User', 'employee')
ON DUPLICATE KEY UPDATE username = username;

-- Insert demo user
-- Username: user, Password: User123!
INSERT INTO users (username, password, email, firstname, lastname, role) 
VALUES ('user', '$2y$10$kLH.V34qUPWOK5Qfti6u7.YwZPOQCnlgLQnELGGfPsVTn0JYeK0Uu', 'user@apothecare.nl', 'Regular', 'User', 'user')
ON DUPLICATE KEY UPDATE username = username;

-- Insert default categories
INSERT INTO categories (name, description) VALUES 
('Medicijnen', 'Alle soorten medicijnen en medicatie'),
('Zelfzorg', 'Producten voor persoonlijke verzorging en zelfzorg'),
('Supplementen', 'Vitamines, mineralen en andere voedingssupplementen'),
('Gezondheidsproducten', 'Diverse producten voor gezondheid en welzijn')
ON DUPLICATE KEY UPDATE name = name;

-- Insert sample products
INSERT INTO products (name, description, price, category_id, stock, is_featured) VALUES
('Paracetamol', 'Pijnstillende en koortsverlagende medicatie', 4.99, 1, 100, TRUE),
('Ibuprofen', 'Ontstekingsremmende pijnstiller', 5.99, 1, 80, FALSE),
('Vitamine C', 'Supplement ter ondersteuning van het immuunsysteem', 7.99, 3, 50, TRUE),
('Handcrème', 'Hydraterende crème voor droge handen', 6.49, 2, 30, FALSE),
('Magnesium', 'Supplement voor spieren en zenuwstelsel', 9.99, 3, 40, TRUE),
('Handgel', 'Antibacteriële handgel voor onderweg', 3.99, 2, 60, FALSE)
ON DUPLICATE KEY UPDATE id = id; 