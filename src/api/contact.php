<?php
require_once "helpers.php";

setHeaders();

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$service = $_POST['service'] ?? '';
$message = $_POST['message'] ?? '';

if (!$email || !$name) {
    response(["status" => "error", "message" => "Required fields missing"]);
}

$to = "info@invertio.us";
$subject = "New Contact Message";

$content = "Name: $name\nEmail: $email\nPhone: $phone\nService: $service\nMessage:\n$message";

$headers = "From: $email";

$mail = mail($to, $subject, $content, $headers);

response([
    "status" => $mail ? "success" : "error",
    "message" => $mail ? "Message sent!" : "Failed to send"
]);