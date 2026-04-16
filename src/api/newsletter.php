<?php
require_once "helpers.php";

setHeaders();

$data = getJsonInput();
$email = $data['email'] ?? '';

if (!$email) {
    response(["success" => false, "message" => "Email required"]);
}

$to = "info@zeroqueries.com";
$subject = "Newsletter Subscription";

$message = "New Subscriber: $email";

$headers = "From: noreply@zeroqueries.com";

$mail = mail($to, $subject, $message, $headers);

response(["success" => $mail]);