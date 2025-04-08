<?php
// Featured products endpoint

// Include necessary files
require_once '../../utils/cors.php';
require_once '../../utils/response.php';
require_once '../../config/database.php';

// Enable CORS
enableCors();

// Only allow GET method
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendErrorResponse('Only GET method is allowed', 405);
    exit;
}

// Get limit parameter
$limit = isset($_GET['limit']) ? intval($_GET['limit']) : 4;

// Connect to database
$conn = getDbConnection();

// Query to get featured products with category information
$query = "SELECT p.*, c.name as category_name 
          FROM products p 
          LEFT JOIN categories c ON p.category_id = c.id 
          WHERE p.is_featured = 1 
          ORDER BY p.name 
          LIMIT ?";

// Prepare and execute statement
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $limit);
$stmt->execute();
$result = $stmt->get_result();

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
$stmt->close();
$conn->close(); 