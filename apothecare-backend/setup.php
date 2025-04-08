<?php
// Database setup script for ApotheCare

// Include database configuration
require_once 'config/database.php';

// Connect to MySQL without selecting a database
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "<h1>ApotheCare Database Setup</h1>";
echo "<p>Starting database setup...</p>";

// Read the SQL script
$sql = file_get_contents('config/setup.sql');

// Execute the SQL script
if ($conn->multi_query($sql)) {
    echo "<p>Database setup completed successfully!</p>";
    echo "<p>The following default users have been created:</p>";
    echo "<ul>";
    echo "<li><strong>Admin:</strong> Username: admin, Password: Admin123!</li>";
    echo "<li><strong>Employee:</strong> Username: employee, Password: Employee123!</li>";
    echo "<li><strong>User:</strong> Username: user, Password: User123!</li>";
    echo "</ul>";
    echo "<p>Sample products and categories have also been added.</p>";
    echo "<p><a href='api/test.php'>Click here to test the API</a></p>";
} else {
    echo "<p>Error setting up database: " . $conn->error . "</p>";
}

$conn->close(); 