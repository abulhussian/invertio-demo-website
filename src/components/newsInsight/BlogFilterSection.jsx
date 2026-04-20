"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import NoBlogsFound from "./NoBlogsFound";


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


const BlogFilterSection = () => {
      const [insights, setInsights] = useState([]);
      const [activeCategory, setActiveCategory] = useState("All");
      const [searchTerm, setSearchTerm] = useState("");
      const [currentPage, setCurrentPage] = useState(1);
      const postsPerPage = 8;

      useEffect(() => {
            fetch("/news-insights/blogs.json")
                  .then((res) => res.json())
                  .then((data) => setInsights(data))
                  .catch((err) => console.error("Error loading blogs:", err));
      }, []);
      const filteredBlogs = insights.filter((blog) => {
            const matchCategory =
                  activeCategory === "All" || blog.category === activeCategory;

            const matchSearch =
                  blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  blog.description.toLowerCase().includes(searchTerm.toLowerCase());

            return matchCategory && matchSearch;
      });
      const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;

      const currentBlogs = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);
      const pageNumbers = [];

      for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
      }
      return (
            <>
                  <section className="w-full py-6">
                        <div className="w-full">

                              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0F172A] mb-3">
                                    What’s Happening at Invertio
                              </h1>

                              <p className="text-gray-500 text-[15px]  w-full mb-4">
                                    Discover company announcements, partnership updates, product releases, and milestone achievements as we continue helping organizations innovate and grow through technology.
                              </p>

                              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between overflow-hidden">

                                    {/* Categories - No Wrap */}
                                    <div className="flex flex-wrap gap-2 w-full">
                                          {categories.map((cat, index) => (
                                                <button
                                                      key={index}
                                                      onClick={() => setActiveCategory(cat)}
                                                      className={`px-3 py-2 text-[10px] font-bold rounded-full transition-all duration-200 flex-shrink-0
      ${activeCategory === cat
                                                                  ? "bg-[#0F172A] text-white"
                                                                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                                            }`}
                                                >
                                                      {cat}
                                                </button>
                                          ))}
                                    </div>

                                    {/* Search Input */}
                                    <div className="relative w-full sm:w-72 flex-shrink-0">
                                          <input
                                                type="text"
                                                placeholder="Search Blog"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                className="w-full bg-gray-100 text-sm px-4 py-2 rounded-full outline-none"
                                          />
                                          <Image
                                                src="/newsinsight/search.png"
                                                alt="Search"
                                                width={16}
                                                height={16}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60"
                                          />
                                    </div>

                              </div>
                        </div>
                  </section>

                  {currentBlogs.length === 0 && (
                        <NoBlogsFound />
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {currentBlogs.map((item) => (
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
                        <div className="flex items-center justify-between w-full gap-2">

                              {/* Previous */}
                              <button
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition flex-shrink-0"
                              >
                                    ← <span>Previous</span>
                              </button>

                              {/* Page Numbers */}
                              <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto flex-1 justify-center">
                                    {pageNumbers.map((number) => (
                                          <button
                                                key={number}
                                                onClick={() => setCurrentPage(number)}
                                                className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-sm sm:text-base flex-shrink-0
          ${currentPage === number
                                                            ? "bg-[#0F172A] text-white font-semibold"
                                                            : "text-gray-700 hover:bg-gray-100"
                                                      }`}
                                          >
                                                {number}
                                          </button>
                                    ))}
                              </div>

                              {/* Next */}
                              <button
                                    onClick={() =>
                                          setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                                    }
                                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition flex-shrink-0"
                              >
                                    <span>Next</span> →
                              </button>

                        </div>
                  </div>
            </>
      );
};

export default BlogFilterSection;