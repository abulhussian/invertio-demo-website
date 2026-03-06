"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";


const categories = [
      "All",
      "Data & Analytics",
      "Cybersecurity",
      "Cloud & Infrastructure",
      "Software Development",
      "IT Consulting",
      "Digital Transformation",
      "Mobile & Web Applications",
      "AI & Automation",
];

// const insights = [
//       {
//             id: 1,
//             image: "/common/insights/insight1.png",
//             date: "March 10, 2026",
//             category: "Mobile App Development",
//             title: "Native vs Cross-Platform Application Development — How to Choose?",
//             description:
//                   "The Asset Management module now features improved tracking, performance insights, and real-time alerts for enhanced operations.",
//             slug: "native-vs-cross-platform-development",
//       },
//       {
//             id: 2,
//             image: "/common/insights/insight2.png",
//             date: "February 28, 2026",
//             category: "Startup & Innovation",
//             title: "On-Demand Applications: Powering the Digital Economy",
//             description:
//                   "On-demand platforms are reshaping industries by enabling real-time services and seamless customer experiences.",
//             slug: "on-demand-applications-digital-economy",
//       },
//       {
//             id: 3,
//             image: "/common/insights/insight3.png",
//             date: "February 14, 2026",
//             category: "Mobile App Development",
//             title: "What’s New in the Latest Flutter Ecosystem",
//             description:
//                   "Flutter continues to accelerate cross-platform development with improved performance, UI flexibility, and faster deployment cycles.",
//             slug: "latest-flutter-ecosystem-updates",
//       },
//       {
//             id: 4,
//             image: "/common/insights/insight4.png",
//             date: "January 30, 2026",
//             category: "Technology Trends",
//             title: "Top Mobile App Development Trends Shaping the Future",
//             description:
//                   "From AI integration and super apps to enhanced security and immersive user experiences, explore the major mobile technology shifts.",
//             slug: "mobile-app-development-trends-2026",
//       },

//       // NEW ROW (From Screenshot)

//       {
//             id: 5,
//             image: "/common/insights/insight5.png",
//             date: "January 21, 2026",
//             category: "Data & Analytics",
//             title: "How Data Analytics Is Transforming Business Decision-Making",
//             description:
//                   "Modern organizations rely on real-time analytics to drive smarter strategies, improve efficiency, and unlock actionable insights.",
//             slug: "data-analytics-transforming-business",
//       },
//       {
//             id: 6,
//             image: "/common/insights/insight6.png",
//             date: "January 15, 2026",
//             category: "Cybersecurity",
//             title: "Why Zero-Trust Security Is the Future of Enterprise Protection",
//             description:
//                   "With cyber threats becoming more sophisticated, Zero-Trust architecture is emerging as the gold standard for modern security.",
//             slug: "zero-trust-security-enterprise",
//       },
//       {
//             id: 7,
//             image: "/common/insights/insight7.png",
//             date: "January 05, 2026",
//             category: "Cloud Computing",
//             title: "Cloud Migration Strategies for Scalable Digital Growth",
//             description:
//                   "Migrating to the cloud enhances flexibility, cost efficiency, and operational resilience for modern enterprises.",
//             slug: "cloud-migration-strategies",
//       },
//       {
//             id: 8,
//             image: "/common/insights/insight8.png",
//             date: "December 28, 2025",
//             category: "AI & Automation",
//             title: "Automation & AI: Redefining Modern Enterprise Operations",
//             description:
//                   "AI-powered automation is helping organizations streamline workflows, reduce costs, and enhance productivity at scale.",
//             slug: "ai-automation-enterprise-operations",
//       },
// ];


const BlogFilterSection = () => {
      const [insights, setInsights] = useState([]);

      useEffect(() => {
            fetch("/news-insights/blogs.json")
                  .then((res) => res.json())
                  .then((data) => setInsights(data))
                  .catch((err) => console.error("Error loading blogs:", err));
      }, []);
      return (
            <>
                  <section className="w-full py-12">
                        <div className="w-full">

                              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0F172A] mb-3">
                                    What’s Happening at Invertio
                              </h1>

                              <p className="text-gray-500 text-[15px]  w-full mb-4">
                                    Discover company announcements, partnership updates, product releases, and milestone achievements as we continue helping organizations innovate and grow through technology.
                              </p>

                              <div className="flex items-center justify-between gap-6 overflow-hidden">

                                    {/* Categories - No Wrap */}
                                    <div className="flex gap-2 whitespace-nowrap overflow-x-auto scrollbar-hide">
                                          {categories.map((cat, index) => (
                                                <button
                                                      key={index}
                                                      className={`px-3 py-2 text-[10px] font-bold rounded-full transition-all duration-200 flex-shrink-0
          ${cat === "All"
                                                                  ? "bg-[#0F172A] text-white"
                                                                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                                            }`}
                                                >
                                                      {cat}
                                                </button>
                                          ))}
                                    </div>

                                    {/* Search Input */}
                                    <div className="relative w-72 flex-shrink-0">
                                          <input
                                                type="text"
                                                placeholder="Search Blog"
                                                className="w-full bg-gray-100 text-sm px-4 py-2 rounded-full outline-none "
                                          />
                                          <img
                                                src="/newsinsight/search.png"   // replace with your icon path
                                                alt="Search"
                                                className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60"
                                          />
                                    </div>

                              </div>
                        </div>
                  </section>


                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {insights.map((item) => (
                              <div
                                    key={item.id}
                                    className="group bg-white rounded-xl overflow-hidden 
      border border-gray-200 shadow-sm 
      transition duration-300 hover:shadow-md"
                              >
                                    {/* IMAGE */}
                                    <div className="relative w-full h-52 overflow-hidden">
                                          <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                          />
                                    </div>

                                    {/* CONTENT */}
                                    <div className="p-5 flex flex-col gap-3">

                                          {/* Meta */}
                                          <div className="flex flex-wrap gap-2">
                                                <span className="px-2 py-1 bg-gray-100 rounded-md text-[10px] font-semibold text-[#06030e]">
                                                      {item.date}
                                                </span>

                                                <span className="px-2 py-1 bg-gray-100 rounded-md text-[10px] font-semibold text-[#06030e]">
                                                      {item.category}
                                                </span>
                                          </div>

                                          {/* Title */}
                                          <h3 className="text-[15px] font-semibold text-[#0F172A] leading-snug">
                                                {item.title}
                                          </h3>

                                          {/* Description */}
                                          <p className="text-[13px] text-gray-600 line-clamp-2">
                                                {item.description}
                                          </p>

                                          {/* Button */}
                                          <div className="flex justify-end items-center pt-2">
                                                <a
                                                      href={`/news-insights/${item.slug}.html`}
                                                      className="text-[13px] font-semibold text-[#0F172A] flex items-center gap-2 group"
                                                >
                                                      Read More
                                                      <Image
                                                            src="/newsinsight/rightFace.png"
                                                            alt="arrow"
                                                            width={16}
                                                            height={16}
                                                            className="brightness-0 transition-transform duration-300 group-hover:translate-x-1"
                                                      />
                                                </a>
                                          </div>

                                    </div>
                              </div>
                        ))}
                  </div>

                  <div className="mt-8 flex justify-center px-4">
                        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">

                              {/* Previous */}
                              <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
                                    ← <span className="hidden sm:inline">Previous</span>
                              </button>
                              {/* Page Numbers */}
                              <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-full">

                                    <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-[#0F172A] text-white text-sm sm:text-base font-semibold">
                                          1
                                    </button>

                                    <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 text-sm sm:text-base">
                                          2
                                    </button>

                                    <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100">
                                          3
                                    </button>

                                    <span className="hidden sm:inline px-2 text-gray-500">...</span>

                                    <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100">
                                          9
                                    </button>

                                    <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 text-sm sm:text-base">
                                          10
                                    </button>
                              </div>

                              {/* Next */}
                              <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
                                    <span className="hidden sm:inline">Next</span> →
                              </button>

                        </div>
                  </div>
            </>
      );
};

export default BlogFilterSection;