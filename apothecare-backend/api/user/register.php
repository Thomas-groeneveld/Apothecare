<?php
// User registration endpoint

// Include necessary files
require_once '../../utils/cors.php';
require_once '../../utils/response.php';
require_once '../../utils/auth.php';
require_once '../../config/database.php';

// Enable CORS
enableCors();

// Only allow POST method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendErrorResponse('Only POST method is allowed', 405);
    exit;
}

// Get JSON input
$data = json_decode(file_get_contents('php://input'), true);

// Check if required fields are provided
if (!isset($data['firstname']) || !isset($data['lastname']) || 
    !isset($data['email']) || !isset($data['username']) || !isset($data['password'])) {
    sendErrorResponse('All fields are required', 400);
    exit;
}

// Sanitize input
$firstname = htmlspecialchars(strip_tags($data['firstname']));
$lastname = htmlspecialchars(strip_tags($data['lastname']));
$email = htmlspecialchars(strip_tags($data['email']));
$username = htmlspecialchars(strip_tags($data['username']));
$password = $data['password'];

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendErrorResponse('Invalid email format', 400);
    exit;
}

// Validate password strength (at least 8 characters, containing letters and numbers)
if (strlen($password) < 8 || !preg_match('/[A-Za-z]/', $password) || !preg_match('/[0-9]/', $password)) {
    sendErrorResponse('Password must be at least 8 characters and contain both letters and numbers', 400);
    exit;
}

// Hash password
$hashedPassword = hashPassword($password);

// Connect to database
$conn = getDbConnection();

// Check if username or email already exists
$stmt = $conn->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
$stmt->bind_param("ss", $username, $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    sendErrorResponse('Username or email already exists', 409);
    exit;
}

// Insert new user
$stmt = $conn->prepare("INSERT INTO users (firstname, lastname, email, username, password, role) VALUES (?, ?, ?, ?, ?, 'user')");
$stmt->bind_param("sssss", $firstname, $lastname, $email, $username, $hashedPassword);

// Execute query
if ($stmt->execute()) {
    $userId = $conn->insert_id;
    
    // Get the new user's data
    $stmt = $conn->prepare("SELECT id, username, email, firstname, lastname, role FROM users WHERE id = ?");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $user = $stmt->get_result()->fetch_assoc();
    
    // Send success response
    sendSuccessResponse([
        'user' => $user,
        'message' => 'Registration successful'
    ], 201);
} else {
    sendErrorResponse('Registration failed: ' . $stmt->error, 500);
}

// Close database connection
$stmt->close();
$conn->close(); 