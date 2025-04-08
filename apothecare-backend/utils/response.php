<?php
// Response utility functions for consistent API responses

/**
 * Send a JSON success response with optional data
 * 
 * @param array $data Data to include in the response
 * @param int $statusCode HTTP status code
 */
function sendSuccessResponse($data = [], $statusCode = 200) {
    http_response_code($statusCode);
    header('Content-Type: application/json');
    echo json_encode([
        'status' => 'success',
        'data' => $data
    ]);
    exit;
}

/**
 * Send a JSON error response
 * 
 * @param string $message Error message
 * @param int $statusCode HTTP status code
 * @param array $errors Additional error details
 */
function sendErrorResponse($message, $statusCode = 400, $errors = []) {
    http_response_code($statusCode);
    header('Content-Type: application/json');
    echo json_encode([
        'status' => 'error',
        'message' => $message,
        'errors' => $errors
    ]);
    exit;
} 