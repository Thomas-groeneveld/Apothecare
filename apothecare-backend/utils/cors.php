<?php
// CORS utility functions for handling cross-origin requests

/**
 * Enable CORS for API responses
 * This function allows cross-origin requests with appropriate headers
 */
function enableCors() {
    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
    } else {
        header('Access-Control-Allow-Origin: *');
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
            header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        }
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        }
        
        // Cache preflight response for 1 hour
        header('Access-Control-Max-Age: 3600');
        header('Content-Length: 0');
        header('Content-Type: text/plain');
        exit;
    }
    
    // Set content type for JSON responses
    header('Content-Type: application/json');
} 