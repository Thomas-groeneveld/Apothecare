<?php
// Categories endpoint

// Include necessary files
require_once '../../utils/cors.php';
require_once '../../utils/response.php';
require_once '../../config/database.php';

// Enable CORS
enableCors();

// Only allow GET method for now
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendErrorResponse('Only GET method is allowed', 405);
    exit;
}

// Connect to database
$conn = getDbConnection();

// Query to get all categories
$query = "SELECT * FROM categories ORDER BY name";

// Execute query
$result = $conn->query($query);

// Check if categories exist
if ($result && $result->num_rows > 0) {
    // Fetch all categories
    $categories = [];
    while ($row = $result->fetch_assoc()) {
        $categories[] = $row;
    }
    
    // Send success response
    sendSuccessResponse(['categories' => $categories]);
} else {
    // No categories found
    sendSuccessResponse(['categories' => []], 200);
}

// Close database connection
$conn->close(); 