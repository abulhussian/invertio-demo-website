"use client";

import { useState } from "react";

export default function AdminJobs() {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [job, setJob] = useState({
        title: "",
        slug: "",
        pay: "",
        skills: "",
        description: "",
        job_title: "",
        job_type: "",
        location: "",
        summary: "",
        responsibilities: "",
        qualifications: "",
        preferred: "",
        benefits: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingJobs = JSON.parse(localStorage.getItem("jobs")) || [];

        // Reset messages
        setError("");
        setSuccess("");

        // Check duplicate job
        const isDuplicate = existingJobs.some(
            (existing) =>
                existing.slug === job.slug &&
                existing.title === job.title &&
                existing.pay === job.pay &&
                existing.description === job.description
        );

        if (isDuplicate) {
            setError("⚠️ This job is already posted. Please check title, slug, salary, or description.");
            return;
        }

        const newJob = {
            id: Date.now(),
            ...job,
            date: new Date().toDateString(),
            company: "Invertio",
            logo: "/logo/logo.png",

            skills: job.skills.split(","),

            responsibilities: job.responsibilities.split("\n"),
            qualifications: job.qualifications.split("\n"),
            preferred: job.preferred.split("\n"),
            benefits: job.benefits.split("\n"),
        };

        const updatedJobs = [...existingJobs, newJob];

        localStorage.setItem("jobs", JSON.stringify(updatedJobs));

        setSuccess("✅ Job posted successfully!");

        setJob({
            title: "",
            slug: "",
            pay: "",
            skills: "",
            description: "",
            job_title: "",
            job_type: "",
            location: "",
            summary: "",
            responsibilities: "",
            qualifications: "",
            preferred: "",
            benefits: "",
        });
    };

    return (
        <div className="max-w-2xl mx-auto py-20">


            <h1 className="text-3xl font-bold mb-10">
                Post New Job
            </h1>

            {error && (
                <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-600 text-sm">
                    {error}
                </div>
            )}

            {success && (
                <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 text-sm">
                    {success}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

                <input
                    placeholder="Job Title"
                    value={job.title}
                    onChange={(e) =>
                        setJob({ ...job, title: e.target.value })
                    }
                    className="w-full border p-3"
                />

                <input
                    placeholder="Slug (example: react-developer)"
                    value={job.slug}
                    onChange={(e) =>
                        setJob({ ...job, slug: e.target.value })
                    }
                    className="w-full border p-3"
                />

                <input
                    placeholder="Salary"
                    value={job.pay}
                    onChange={(e) =>
                        setJob({ ...job, pay: e.target.value })
                    }
                    className="w-full border p-3"
                />

                <input
                    placeholder="Skills (comma separated)"
                    value={job.skills}
                    onChange={(e) =>
                        setJob({ ...job, skills: e.target.value })
                    }
                    className="w-full border p-3"
                />

                <textarea
                    placeholder="Job Description"
                    value={job.description}
                    onChange={(e) =>
                        setJob({ ...job, description: e.target.value })
                    }
                    className="w-full border p-3"
                />
                <input
                    placeholder="Job Title"
                    value={job.job_title}
                    onChange={(e) => setJob({ ...job, job_title: e.target.value })}
                    className="w-full border p-3"
                />

                <input
                    placeholder="Job Type (Full-Time / Internship)"
                    value={job.job_type}
                    onChange={(e) => setJob({ ...job, job_type: e.target.value })}
                    className="w-full border p-3"
                />

                <input
                    placeholder="Location"
                    value={job.location}
                    onChange={(e) => setJob({ ...job, location: e.target.value })}
                    className="w-full border p-3"
                />

                <textarea
                    placeholder="Job Summary"
                    value={job.summary}
                    onChange={(e) => setJob({ ...job, summary: e.target.value })}
                    className="w-full border p-3"
                />
                <textarea
                    placeholder="Responsibilities (one per line)"
                    value={job.responsibilities}
                    onChange={(e) => setJob({ ...job, responsibilities: e.target.value })}
                    className="w-full border p-3"
                />

                <textarea
                    placeholder="Qualifications (one per line)"
                    value={job.qualifications}
                    onChange={(e) => setJob({ ...job, qualifications: e.target.value })}
                    className="w-full border p-3"
                />

                <textarea
                    placeholder="Preferred Qualifications (one per line)"
                    value={job.preferred}
                    onChange={(e) => setJob({ ...job, preferred: e.target.value })}
                    className="w-full border p-3"
                />

                <textarea
                    placeholder="Benefits (one per line)"
                    value={job.benefits}
                    onChange={(e) => setJob({ ...job, benefits: e.target.value })}
                    className="w-full border p-3"
                />

                <button className="bg-black text-white px-6 py-3 rounded">
                    Post Job
                </button>

            </form>
        </div>
    );
}