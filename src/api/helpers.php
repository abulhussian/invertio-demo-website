<?php

function setHeaders() {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        exit(0);
    }
}

function getJsonInput() {
    return json_decode(file_get_contents("php://input"), true);
}

function readJobs($file) {
    if (!file_exists($file)) {
        file_put_contents($file, json_encode([]));
    }
    return json_decode(file_get_contents($file), true);
}

function saveJobs($file, $jobs) {
    file_put_contents($file, json_encode($jobs, JSON_PRETTY_PRINT));
}

function response($data) {
    echo json_encode($data);
    exit;
}