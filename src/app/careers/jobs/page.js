"use client";

import { useState } from "react";
import JobCard from "@/components/careers/JobCard";
import SectionHeader from "@/components/common/ui/SectionHeader";
import Image from "next/image";

const jobs = [
      {
            date: "Mar 10, 2026",
            title: "UI/UX Designer",
            company: "Invertio",
            logo: "/logo/logo.png",
            skills: ["Figma", "Wireframing", "User Research", "Prototyping"],
            pay: "₹40,000 – ₹90,000 / month",
      },
      {
            date: "Mar 10, 2026",
            title: "Frontend Developer (React.js)",
            company: "Invertio",
            logo: "/logo/logo.png",
            skills: ["React.js", "JavaScript", "HTML5", "Tailwind CSS"],
            pay: "₹50,000 – ₹1,20,000 / month",
      },
      {
            date: "Mar 10, 2026",
            title: "Backend Developer (Node.js)",
            company: "Invertio",
            logo: "/logo/logo.png",
            skills: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
            pay: "₹60,000 – ₹1,40,000 / month",
      },
      {
            date: "Mar 10, 2026",
            title: "Data Analyst",
            company: "Invertio",
            logo: "/logo/logo.png",
            skills: ["Data Visualization", "SQL", "Power BI", "Python"],
            pay: "₹45,000 – ₹1,10,000 / month",
      },
      {
            date: "Mar 10, 2026",
            title: "Cybersecurity Analyst",
            company: "Invertio",
            logo: "/logo/logo.png",
            skills: [
                  "Network Security",
                  "Vulnerability Assessment",
                  "SIEM Tools",
                  "Ethical Hacking",
            ],
            pay: "₹70,000 – ₹1,60,000 / month",
      },
      {
            date: "Mar 10, 2026",
            title: "Cloud Engineer (AWS)",
            company: "Invertio",
            logo: "/logo/logo.png",
            skills: ["AWS Cloud", "DevOps", "Docker", "Kubernetes"],
            pay: "₹80,000 – ₹1,80,000 / month",
      },
];

export default function JobsPage() {
      const [search, setSearch] = useState("");

      const filteredJobs = jobs.filter((job) =>
            job.title.toLowerCase().includes(search.toLowerCase())
      );

      return (
            <div className="px-8 md:px-14 lg:px-20 py-20 bg-[#F8F9FC]">

                  {/* Header */}
                  <SectionHeader
                        badge="Careers"
                        heading="Current Job Openings"
                        subheading="Explore exciting opportunities to grow your career with Invertio."
                        size="md"
                        headingColor="#0F172A"
                        subheadingColor="#475569"
                  />

                  {/* Search Bar */}
                  <div className="flex justify-center mt-10">
                        <div className="relative w-full max-w-2xl">

                              <input
                                    type="text"
                                    placeholder="Search Role"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full h-14 pl-6 pr-16 rounded-full border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                              />

                              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center">
                                    <Image
                                          src="/icons/search.svg"
                                          alt="search"
                                          width={18}
                                          height={18}
                                    />
                              </button>

                        </div>
                  </div>

                  {/* Job Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
                        {filteredJobs.map((job) => (
                              <JobCard key={job.title} {...job} />
                        ))}
                  </div>

                  {/* No Results */}
                  {filteredJobs.length === 0 && (
                        <p className="text-center text-gray-500 mt-12">
                              No jobs found for this role.
                        </p>
                  )}

            </div>
      );
}