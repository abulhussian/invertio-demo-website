

"use client";

import { useEffect, useState } from "react";
import JobCard from "@/components/careers/JobCard";
import defaultJobs from "@/data/jobs.json";
import SectionHeader from "@/components/common/ui/SectionHeader";
import Image from "next/image";
import NoJobsAvalible from "@/components/careers/NoJobsAvalible";


export default function JobsPage() {

      const [search, setSearch] = useState("");
      const [jobs, setJobs] = useState([]);
      const filteredJobs = jobs.filter((job) =>
            job.title.toLowerCase().includes(search.toLowerCase())
      );

      const handleSearchClick = () => {
            if (!search.trim()) {
                  toast.error("Please enter a role to search");
                  return;
            }
      };
      //       useEffect(() => {

      //   const storedJobs = JSON.parse(localStorage.getItem("jobs"));

      //   if (storedJobs) {
      //     setJobs([...defaultJobs, ...storedJobs]);
      //   }

      // }, []);

      useEffect(() => {
            const fetchJobs = async () => {
                  try {
                        const res = await fetch("https://invertiosolutions.com/get-jobs.php");
                        const data = await res.json();
                        setJobs(data);
                  } catch (error) {
                        console.error("Failed to load jobs:", error);
                        setJobs(defaultJobs);
                  }
            };

            fetchJobs();
      }, []);;

      return (
            <div className="px-8 md:px-14 lg:px-20 bg-[#F8F9FC]">

                  {/* HEADER */}
                  <SectionHeader
                        badge="Open Positions"
                        heading="Current Job Openings"
                        subheading="Explore our latest opportunities and apply for the position that fits your expertise and career goals."
                        size="md"
                        headingColor="#0F172A"
                        subheadingColor="#475569"
                  />

                  {/* SEARCH BAR */}
                  <div className="flex justify-center mt-10">
                        <div className="relative w-full max-w-2xl">

                              <input
                                    type="text"
                                    placeholder="Search Role"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full h-14 pl-6 pr-16 rounded-full border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F172A]"
                              />

                              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center"
                                    onClick={handleSearchClick}
                              >
                                    <Image
                                          src="/icons/search.png"
                                          alt="search"
                                          width={18}
                                          height={18}
                                    />
                              </button>

                        </div>
                  </div>

                  {/* JOB GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 pb-4">

                        {filteredJobs.map((job, index) => (
                              <JobCard
                                    key={job.slug}
                                    {...job}
                                    isActive={index === 0}
                              />
                        ))}

                  </div>

                  {/* NO RESULTS */}
                  {filteredJobs.length === 0 && <NoJobsAvalible />}

            </div>
      );
}