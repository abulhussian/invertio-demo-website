<?php
require_once "helpers.php";

setHeaders();

$file = __DIR__ . "/data/jobs.json";
$jobs = readJobs($file);

$method = $_GET['action'] ?? 'get';
$data = getJsonInput();

switch ($method) {

    // ✅ GET ALL JOBS
    case "get":
        response($jobs);
        break;

    // ✅ SAVE JOB
    case "save":
        $newJob = [
            "id" => time(),
            "title" => $data["title"],
            "slug" => $data["slug"],
            "pay" => $data["pay"],
            "skills" => explode(",", $data["skills"]),
            "description" => $data["description"],
            "job_title" => $data["job_title"],
            "job_type" => $data["job_type"],
            "location" => $data["location"],
            "summary" => $data["summary"],
            "responsibilities" => explode("\n", $data["responsibilities"]),
            "qualifications" => explode("\n", $data["qualifications"]),
            "preferred" => explode("\n", $data["preferred"]),
            "benefits" => explode("\n", $data["benefits"]),
            "date" => date("Y-m-d"),
            "company" => "Invertio",
            "logo" => "/logo/logo.png"
        ];

        $jobs[] = $newJob;
        saveJobs($file, $jobs);

        response(["success" => true]);
        break;

    // ✅ EDIT JOB
    case "edit":
        foreach ($jobs as &$job) {
            if ($job["id"] == $data["id"]) {
                $job["title"] = $data["title"];
                $job["slug"] = $data["slug"];
                $job["pay"] = $data["pay"];
                $job["skills"] = explode(",", $data["skills"]);
                $job["description"] = $data["description"];
                $job["job_title"] = $data["job_title"];
                $job["job_type"] = $data["job_type"];
                $job["location"] = $data["location"];
                $job["summary"] = $data["summary"];
                $job["responsibilities"] = explode("\n", $data["responsibilities"]);
                $job["qualifications"] = explode("\n", $data["qualifications"]);
                $job["preferred"] = explode("\n", $data["preferred"]);
                $job["benefits"] = explode("\n", $data["benefits"]);
                break;
            }
        }

        saveJobs($file, $jobs);
        response(["success" => true]);
        break;

    // ✅ DELETE JOB
    case "delete":
        $jobs = array_filter($jobs, function ($job) use ($data) {
            return $job["id"] != $data["id"];
        });

        saveJobs($file, array_values($jobs));
        response(["success" => true]);
        break;

    default:
        response(["error" => "Invalid action"]);
}