"use client";

import { useState } from "react";

const IndustryUserGuide = ({ data }) => {
      const [activeIndex, setActiveIndex] = useState(0);
      if (!data) return null;

      const { title, topics = [] } = data;


      const activeTopic = topics[activeIndex];

      return (
            <section className="py-24 px-6 bg-white">
                  <div className="max-w-7xl mx-auto">

                        {/* Title */}
                        <h2 className="text-4xl font-bold text-center text-[#0f2a44] mb-16">
                              {title}
                        </h2>

                        <div className="grid lg:grid-cols-3 gap-16">

                              {/* LEFT SIDE MENU */}
                              <div className="space-y-4">

                                    <p className="text-sm font-semibold text-gray-500 uppercase mb-6">
                                          Guide Topics
                                    </p>

                                    {topics.map((topic, index) => (
                                          <button
                                                key={index}
                                                onClick={() => setActiveIndex(index)}
                                                className={`block w-full text-left px-4 py-3 rounded-md transition 
                ${activeIndex === index
                                                            ? "bg-orange-100 text-[#0f2a44] font-semibold"
                                                            : "text-gray-600 hover:bg-gray-100"
                                                      }`}
                                          >
                                                {topic.title}
                                          </button>
                                    ))}
                              </div>

                              {/* RIGHT CONTENT */}
                              <div className="lg:col-span-2 transition-all duration-500">

                                    <h3 className="text-xl font-semibold text-[#0f2a44] mb-6">
                                          {activeTopic.title}
                                    </h3>

                                    <img
                                          src={activeTopic.image}
                                          alt={activeTopic.title}
                                          className="w-full rounded-lg mb-6"
                                    />

                                    <p className="text-gray-600 leading-relaxed">
                                          {activeTopic.description}
                                    </p>

                              </div>

                        </div>

                  </div>
            </section>
      );
};

export default IndustryUserGuide;