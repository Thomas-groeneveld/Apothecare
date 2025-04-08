<?php
// Test endpoint to verify API is working

// Include necessary files
require_once '../utils/cors.php';
require_once '../utils/response.php';

// Enable CORS
enableCors();

// Prepare response data
$data = [
    'message' => 'API is working correctly!',
    'timestamp' => date('Y-m-d H:i:s'),
    'status' => 'success'
];

// Send success response
sendSuccessResponse($data); 