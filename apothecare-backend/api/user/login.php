<?php
// User login endpoint

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
if (!isset($data['username']) || !isset($data['password'])) {
    sendErrorResponse('Username and password are required', 400);
    exit;
}

// Sanitize input
$username = htmlspecialchars(strip_tags($data['username']));
$password = $data['password'];

// Connect to database
$conn = getDbConnection();

// Prepare SQL statement to get user
$stmt = $conn->prepare("SELECT id, username, password, email, firstname, lastname, role FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

// Check if user exists
if ($result->num_rows === 0) {
    sendErrorResponse('Invalid username or password', 401);
    exit;
}

// Get user data
$user = $result->fetch_assoc();

// Verify password
if (!verifyPassword($password, $user['password'])) {
    sendErrorResponse('Invalid username or password', 401);
    exit;
}

// Remove password from response
unset($user['password']);

// Send success response with user data
sendSuccessResponse([
    'user' => $user,
    'message' => 'Login successful'
]); 