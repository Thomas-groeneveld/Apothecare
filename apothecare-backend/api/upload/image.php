<?php
// Image upload endpoint

// Include necessary files
require_once '../../utils/cors.php';
require_once '../../utils/response.php';

// Enable CORS
enableCors();

// Only allow POST method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendErrorResponse('Only POST method is allowed', 405);
    exit;
}

// Define upload directory (create if it doesn't exist)
$uploadDir = '../../../uploads/images/';
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

// Check if file was uploaded
if (!isset($_FILES['image']) || !$_FILES['image']['tmp_name']) {
    sendErrorResponse('No image uploaded', 400);
    exit;
}

// Validate file
$file = $_FILES['image'];
$fileName = $file['name'];
$fileTmpPath = $file['tmp_name'];
$fileSize = $file['size'];
$fileError = $file['error'];

// Check for errors
if ($fileError !== UPLOAD_ERR_OK) {
    sendErrorResponse('Upload failed with error code: ' . $fileError, 500);
    exit;
}

// Validate file size (max 5MB)
$maxSize = 5 * 1024 * 1024; // 5MB
if ($fileSize > $maxSize) {
    sendErrorResponse('File is too large. Maximum size is 5MB', 400);
    exit;
}

// Validate file type
$allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
$fileType = mime_content_type($fileTmpPath);
if (!in_array($fileType, $allowedTypes)) {
    sendErrorResponse('Invalid file type. Only JPG, PNG, GIF, and WEBP are allowed', 400);
    exit;
}

// Generate unique filename
$fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);
$newFileName = uniqid() . '.' . $fileExtension;
$targetFilePath = $uploadDir . $newFileName;

// Move uploaded file
if (move_uploaded_file($fileTmpPath, $targetFilePath)) {
    // File was uploaded successfully
    $imageUrl = 'uploads/images/' . $newFileName;
    
    // Send success response
    sendSuccessResponse([
        'url' => $imageUrl,
        'message' => 'Image uploaded successfully'
    ], 201);
} else {
    // Failed to move file
    sendErrorResponse('Failed to upload image', 500);
} 