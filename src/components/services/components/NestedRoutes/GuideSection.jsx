
"use client";

import React, { useState } from 'react';

const GuideSection = ({ data }) => {
      if (!data) return null;

      const [activeTab, setActiveTab] = useState(data.topics[0].id);
      const activeContent = data.topics.find((t) => t.id === activeTab).content;

      return (
            <section className="py-20 bg-white">
                  <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">

                        {/* Left Sidebar */}
                        <div className="lg:w-1/4">
                              <h2 className="text-3xl font-bold text-slate-900 mb-8">{data.title}</h2>
                              <div className="flex flex-col border-l-2 border-slate-100">
                                    {data.topics.map((topic) => (
                                          <button
                                                key={topic.id}
                                                onClick={() => setActiveTab(topic.id)}
                                                className={`text-left py-4 px-6 text-sm font-medium transition-all relative ${activeTab === topic.id
                                                      ? 'text-blue-600 border-l-2 border-blue-600 -ml-[2px] bg-blue-50/50'
                                                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                                                      }`}
                                          >
                                                {topic.label}
                                          </button>
                                    ))}
                              </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="lg:w-3/4 animate-in fade-in duration-500">
                              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                                    {activeContent.heading}
                              </h3>


                              <img
                                    src={activeContent.image}
                                    alt="Process Diagram"
                                    className="w-full h-auto rounded-md"
                              />

                              <p className="text-slate-600 mb-10 text-md">
                                    {activeContent.description}
                              </p>

                              {/* Dynamic Points */}
                              <div className="space-y-10">
                                    {activeContent.points.map((point, idx) => (
                                          <div key={idx}>
                                                <h4 className="text-xl font-bold text-slate-900 mb-2">{point.title}</h4>
                                                <p className="text-slate-600 mb-4">{point.text}</p>
                                                <ul className="space-y-3">
                                                      {point.bullets.map((bullet, i) => (
                                                            <li key={i} className="flex items-start gap-3 text-slate-500 text-sm">
                                                                  <span className="text-blue-500 mt-1.5">•</span>
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