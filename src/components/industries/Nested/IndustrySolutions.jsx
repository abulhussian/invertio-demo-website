"use client";

import { useState } from "react";

const IndustrySolutions = ({ data }) => {
      const [activeIndex, setActiveIndex] = useState(4);

      const toggleAccordion = (index) => {
            setActiveIndex(index === activeIndex ? null : index);
      };

      if (!data) return null;

      const { title, description, image, solutions = [] } = data;

      return (
            <section className="bg-white py-20">
                  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 items-start">

                        {/* LEFT SIDE */}
                        <div>
                              <h2 className="text-3xl lg:text-4xl font-bold text-[#0f2a44] mb-6">
                                    {title}
                              </h2>

                              <p className="text-gray-600 mb-10 max-w-md">
                                    {description}
                              </p>

                              <img
                                    src={image}
                                    alt="industry"
                                    className="rounded-lg w-full object-cover"
                              />
                        </div>

                        {/* RIGHT SIDE ACCORDION */}
                        <div className="space-y-6">
                              {solutions.map((item, index) => (
                                    <div key={index} className="border-b pb-4">

                                          {/* Accordion Header */}
                                          <button
                                                onClick={() => toggleAccordion(index)}
                                                className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800"
                                          >
                                                {item.title}

                                                <span className="text-orange-500 text-xl">
                                                      {activeIndex === index ? "-" : "+"}
                                                </span>
                                          </button>

                                          {/* Accordion Content */}
                                          {activeIndex === index && (
                                                <div className="mt-4 text-gray-600 text-sm space-y-2">
                                                      {item.points?.map((point, i) => (
                                                            <p key={i}>• {point}</p>
                                                      ))}
                                                </div>
                                          )}

                                    </div>
                              ))}
                        </div>

                  </div>
            </section>
      );
};

export default IndustrySolutions;