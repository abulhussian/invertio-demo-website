"use client";

import React, { useState } from 'react';

const GuideSection = ({ data }) => {
      if (!data) return null;

      const [activeTab, setActiveTab] = useState(data.topics[0].id);
      const activeContent = data.topics.find((t) => t.id === activeTab)?.content;

      return (
            <section className="py-10 sm:py-20 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">

                        {/* LEFT SIDE */}
                        <div className="lg:w-1/4">

                              {/* Title */}
                              <h2 className="text-[22px] sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-8">
                                    {data.title}
                              </h2>

                              {/* MOBILE: Horizontal Scroll Tabs */}
                              <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 no-scrollbar px-1">
                                    {data.topics.map((topic) => (
                                          <button
                                                key={topic.id}
                                                onClick={() => setActiveTab(topic.id)}
                                                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition
                ${activeTab === topic.id
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-slate-100 text-slate-600"
                                                      }`}
                                          >
                                                {topic.label}
                                          </button>
                                    ))}
                              </div>

                              {/* DESKTOP: Sidebar */}
                              <div className="hidden lg:flex flex-col border-l-2 border-slate-100">
                                    {data.topics.map((topic) => (
                                          <button
                                                key={topic.id}
                                                onClick={() => setActiveTab(topic.id)}
                                                className={`text-left py-4 px-6 text-sm font-medium transition-all relative
                ${activeTab === topic.id
                                                            ? 'text-blue-600 border-l-2 border-blue-600 -ml-[2px] bg-blue-50/50'
                                                            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                                                      }`}
                                          >
                                                {topic.label}
                                          </button>
                                    ))}
                              </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="lg:w-3/4">

                              {/* Heading */}
                              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-8">
                                    {activeContent.heading}
                              </h3>

                              {/* Image */}
                              <img
                                    src={activeContent.image}
                                    alt="Process Diagram"
                                    className="w-full h-auto rounded-md mb-4 sm:mb-6"
                              />

                              {/* Description */}
                              <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-10">
                                    {activeContent.description}
                              </p>

                              {/* Points */}
                              <div className="space-y-6 sm:space-y-10">
                                    {activeContent.points.map((point, idx) => (
                                          <div key={idx}>
                                                <h4 className="text-base sm:text-xl font-bold text-slate-900 mb-2">
                                                      {point.title}
                                                </h4>

                                                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                                                      {point.text}
                                                </p>

                                                <ul className="space-y-2 sm:space-y-3">
                                                      {point.bullets.map((bullet, i) => (
                                                            <li
                                                                  key={i}
                                                                  className="flex items-start gap-2 sm:gap-3 text-slate-500 text-sm sm:text-base"
                                                            >
                                                                  <span className="text-blue-500 mt-1">•</span>
                                                                  {bullet}
                                                            </li>
                                                      ))}
                                                </ul>
                                          </div>
                                    ))}
                              </div>

                        </div>

                  </div>
            </section>
      );
};

export default GuideSection;