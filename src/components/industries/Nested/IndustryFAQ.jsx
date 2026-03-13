"use client";

import { useState } from "react";

const IndustryFAQ = ({ data }) => {
      if (!data) return null;

      const { title, description, items = [] } = data;

      const [activeIndex, setActiveIndex] = useState(0);

      const toggle = (index) => {
            setActiveIndex(index === activeIndex ? null : index);
      };

      return (
            <section className="py-24 bg-white px-6">
                  <div className="max-w-4xl mx-auto">

                        {/* Header */}
                        <div className="text-center mb-12">
                              <h2 className="text-4xl font-bold text-[#0f2a44] mb-3">
                                    {title}
                              </h2>
                              <p className="text-gray-600">
                                    {description}
                              </p>
                        </div>

                        {/* Accordion */}
                        <div className="space-y-6">

                              {items.map((item, index) => (
                                    <div
                                          key={index}
                                          className="border rounded-lg p-6"
                                    >

                                          {/* Question */}
                                          <button
                                                onClick={() => toggle(index)}
                                                className="flex justify-between w-full text-left font-semibold text-[#0f2a44]"
                                          >
                                                {item.question}
                                                <span className="text-orange-500 text-xl">
                                                      {activeIndex === index ? "-" : "+"}
                                                </span>
                                          </button>

                                          {/* Answer */}
                                          {activeIndex === index && (
                                                <div className="mt-4 text-gray-600 text-sm space-y-3">

                                                      <p>{item.answer}</p>

                                                      {item.points && (
                                                            <ul className="space-y-2">
                                                                  {item.points.map((point, i) => (
                                                                        <li key={i} className="flex gap-2">
                                                                              <span className="text-orange-500">●</span>
                                                                              {point}
                                                                        </li>
                                                                  ))}
                                                            </ul>
                                                      )}

                                                </div>
                                          )}

                                    </div>
                              ))}

                        </div>

                  </div>
            </section>
      );
};

export default IndustryFAQ;