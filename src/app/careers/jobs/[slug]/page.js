"use client";

import { useState, useEffect, use } from "react";
import jobs from "@/data/jobs.json";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function JobDetails({ params: paramsPromise }) {
      // Unwrap params in Next.js 15
      const params = use(paramsPromise);
      const { slug } = params;

      const job = jobs.find((j) => j.slug === slug);
      const [isSticky, setIsSticky] = useState(true);

      // useEffect to prevent the form from overflowing if the screen is too small
      useEffect(() => {
            const handleResize = () => {
                  const formElement = document.getElementById("apply-form-container");
                  if (formElement) {
                        // Only stick if the form height is less than the window height
                        setIsSticky(formElement.offsetHeight < window.innerHeight - 40);
                  }
            };

            handleResize();
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
      }, []);

      if (!job) return notFound();

      return (
            <div className="px-8 md:px-14 lg:px-20 py-12 bg-white min-h-screen">
                  {/* MAIN LAYOUT GRID:
          lg:grid-cols-6 creates 6 columns.
          items-start is required to keep the sticky form from stretching.
      */}
                  <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 items-start">

                        {/* LEFT SIDE: JOB DETAILS (Takes 4 columns) */}
                        <div className="lg:col-span-4 space-y-10">
                              <div className="mb-6">
                                    <Image
                                          src={job.logo}
                                          alt={job.company}
                                          width={110}
                                          height={40}
                                          className="object-contain"
                                    />
                              </div>

                              <div>
                                    <h1 className="text-[40px] md:text-[48px] font-bold text-[#0F172A] leading-tight mb-3">
                                          {job.title}
                                    </h1>
                                    <p className="text-[18px] text-gray-500 font-medium">
                                          Pay : <span className="text-[#0F172A] font-bold">{job.pay}</span>
                                    </p>
                              </div>

                              {/* Skills Tags */}
                              <div className="flex flex-wrap gap-2">
                                    {job.skills?.map((skill, i) => (
                                          <span
                                                key={i}
                                                className="text-[12px] px-4 py-2 border border-gray-200 rounded-lg text-gray-600 bg-white font-medium shadow-sm"
                                          >
                                                {skill}
                                          </span>
                                    ))}
                              </div>

                              {/* Content Sections */}
                              <div className="space-y-10">
                                    <Section title="Job Description">
                                          <div className="space-y-4">
                                                <p className="text-[#475569] leading-relaxed text-[16px]">
                                                      {job.description}
                                                </p>
                                                <div className="space-y-1">
                                                      <MetaRow label="Job Title" value={job.job_title} />
                                                      <MetaRow label="Job Type" value={job.job_type} />
                                                      <MetaRow label="Location" value={job.location} />
                                                </div>
                                          </div>
                                    </Section>

                                    {job.summary && (
                                          <Section title="Job Summary">
                                                <p className="text-[#475569] leading-relaxed text-[16px]">
                                                      {job.summary}
                                                </p>
                                          </Section>
                                    )}

                                    <ListSection title="Key Responsibilities" items={job.responsibilities} />
                                    <ListSection title="Required Skills & Qualifications" items={job.qualifications} />
                                    <ListSection title="Preferred Qualifications" items={job.preferred} />
                                    <ListSection title="Benefits" items={job.benefits} />
                              </div>
                        </div>

                        {/* RIGHT SIDE: APPLY FORM (Takes 2 columns) */}
                        <div className="lg:col-span-2">
                              <div
                                    id="apply-form-container"
                                    className={`bg-white p-8 rounded-[32px] border border-gray-200 shadow-sm transition-all
              ${isSticky ? "sticky top-8" : "relative"}`}
                              >
                                    <h3 className="text-[28px] font-bold text-[#0F172A] mb-6">Apply now</h3>

                                    <form className="space-y-5">
                                          {/* Grid-col-2 inside the form for First/Last Name */}
                                          <div className="grid grid-cols-2 gap-4">
                                                <InputGroup label="First Name" placeholder="Enter Your First Name" />
                                                <InputGroup label="Last Name" placeholder="Enter Your Last Name" />
                                          </div>

                                          <InputGroup label="Email" placeholder="Enter Your Email Address" type="email" />

                                          <div className="space-y-1.5">
                                                <label className="text-[13px] font-bold text-[#0F172A] ml-1">Phone Number</label>
                                                <div className="flex items-center w-full h-14 px-4 rounded-xl border border-gray-300 focus-within:border-[#0F172A] transition-all">
                                                      <span className="text-gray-900 font-bold border-r border-gray-300 pr-3 mr-3">+91</span>
                                                      <input
                                                            type="tel"
                                                            placeholder="Enter Mobile Number"
                                                            className="w-full outline-none text-[15px] bg-transparent"
                                                      />
                                                </div>
                                          </div>

                                          <div className="space-y-1.5">
                                                <label className="text-[13px] font-bold text-[#0F172A] ml-1">Upload your resume</label>
                                                <label className="flex flex-col items-center justify-center w-full h-20 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition-all group">
                                                      <div className="flex items-center gap-2 text-gray-500 group-hover:text-[#0F172A]">
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                                            </svg>
                                                            <span className="text-[14px]">Upload Resume</span>
                                                      </div>
                                                      <input type="file" className="hidden" />
                                                </label>
                                          </div>

                                          <button
                                                type="submit"
                                                className="w-full bg-[#0F172A] text-white py-4 rounded-xl font-bold text-[16px] hover:bg-black transition-all active:scale-[0.98] mt-2"
                                          >
                                                Apply Now
                                          </button>

                                          <p className="text-[11px] text-gray-500 text-center leading-relaxed px-2">
                                                {job.application_note}
                                          </p>
                                    </form>
                              </div>
                        </div>

                  </div>
            </div>
      );
}

// --- HELPER COMPONENTS ---

function InputGroup({ label, placeholder, type = "text" }) {
      return (
            <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-[#0F172A] ml-1">{label}</label>
                  <input
                        type={type}
                        placeholder={placeholder}
                        className="w-full h-14 px-5 rounded-xl border border-gray-300 focus:border-[#0F172A] outline-none text-[15px] transition-all placeholder:text-gray-400"
                  />
            </div>
      );
}

function Section({ title, children }) {
      return (
            <div className="border-b border-gray-100 pb-8 last:border-0">
                  <h2 className="text-[22px] font-bold text-[#0F172A] mb-4">{title}</h2>
                  {children}
            </div>
      );
}

function ListSection({ title, items }) {
      if (!items || items.length === 0) return null;
      return (
            <div className="border-b border-gray-100 pb-8 last:border-0">
                  <h2 className="text-[22px] font-bold text-[#0F172A] mb-4">{title}</h2>
                  <ul className="space-y-3">
                        {items.map((item, index) => (
                              <li key={index} className="flex items-start gap-3 text-[#475569] text-[15px] leading-relaxed">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0F172A] shrink-0" />
                                    {item}
                              </li>
                        ))}
                  </ul>
            </div>
      );
}

function MetaRow({ label, value }) {
      return (
            <p className="text-[15px] text-[#475569]">
                  <span className="font-bold text-[#0F172A]">{label} :</span> {value}
            </p>
      );
}