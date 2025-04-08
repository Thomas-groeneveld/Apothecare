<?php
// Database configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'apothecare');
define('DB_USER', 'root');
define('DB_PASS', '');

// Create a database connection
function getDbConnection() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    // Check connection
    if ($conn->connect_error) {
        http_response_code(500);
        die(json_encode(['error' => 'Database connection failed: ' . $conn->connect_error]));
    }
    
    // Set character set
    $conn->set_charset('utf8');
    
    return $conn;
} 