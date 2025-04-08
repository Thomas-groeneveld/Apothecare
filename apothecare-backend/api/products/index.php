<?php
// Products endpoint - Get all products

// Include necessary files
require_once '../../utils/cors.php';
require_once '../../utils/response.php';
require_once '../../config/database.php';

// Enable CORS
enableCors();

// Handle different request methods
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        // Get all products
        getAllProducts();
        break;
    case 'POST':
        // Create a new product (requires authentication in production)
        createProduct();
        break;
    default:
        sendErrorResponse('Method not allowed', 405);
        break;
}

/**
 * Get all products from the database
 */
function getAllProducts() {
    // Connect to database
    $conn = getDbConnection();
    
    // Query to get all products with category information
    $query = "SELECT p.*, c.name as category_name 
              FROM products p 
              LEFT JOIN categories c ON p.category_id = c.id 
              ORDER BY p.name";
    
    // Execute query
    $result = $conn->query($query);
    
    // Check if products exist
    if ($result && $result->num_rows > 0) {
        // Fetch all products
        $products = [];
        while ($row = $result->fetch_assoc()) {
            $products[] = $row;
        }
        
        // Send success response
        sendSuccessResponse(['products' => $products]);
    } else {
        // No products found
        sendSuccessResponse(['products' => []], 200);
    }
    
    // Close database connection
    $conn->close();
}

/**
 * Create a new product in the database
 */
function createProduct() {
    // In a real application, authenticate the user first
    // and check if they have admin privileges
    
    // Get JSON input
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Check if required fields are provided
    if (!isset($data['name']) || !isset($data['price'])) {
        sendErrorResponse('Name and price are required', 400);
        exit;
    }
    
    // Sanitize input
    $name = htmlspecialchars(strip_tags($data['name']));
    $description = isset($data['description']) ? htmlspecialchars(strip_tags($data['description'])) : null;
    $price = floatval($data['price']);
    $imageUrl = isset($data['image_url']) ? htmlspecialchars(strip_tags($data['image_url'])) : null;
    $categoryId = isset($data['category_id']) ? intval($data['category_id']) : null;
    $stock = isset($data['stock']) ? intval($data['stock']) : 0;
    $isFeatured = isset($data['is_featured']) ? (bool)$data['is_featured'] : false;
    
    // Connect to database
    $conn = getDbConnection();
    
    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO products (name, description, price, image_url, category_id, stock, is_featured) 
                           VALUES (?, ?, ?, ?, ?, ?, ?)");
    
    // Bind parameters
    $stmt->bind_param("ssdsiii", $name, $description, $price, $imageUrl, $categoryId, $stock, $isFeatured);
    
    // Execute query
    if ($stmt->execute()) {
        $productId = $conn->insert_id;
        
        // Get the new product
        $stmt = $conn->prepare("SELECT p.*, c.name as category_name 
                               FROM products p 
                               LEFT JOIN categories c ON p.category_id = c.id 
                               WHERE p.id = ?");
        $stmt->bind_param("i", $productId);
        $stmt->execute();
        $product = $stmt->get_result()->fetch_assoc();
        
        // Send success response
        sendSuccessResponse([
            'product' => $product,
            'message' => 'Product created successfully'
        ], 201);
    } else {
        sendErrorResponse('Failed to create product: ' . $stmt->error, 500);
    }
    
    // Close database connection
    $stmt->close();
    $conn->close();
} 