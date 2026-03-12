"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SolutionTestimonials = ({ data }) => {

      // Prevent crashes if section missing
      if (!data || !data.items) return null;

      const { title, description, items } = data;

      const [activeIndex, setActiveIndex] = useState(0)

      const active = items[activeIndex];

      const next = () => {
            setActiveIndex((prev) =>
                  prev === items.length - 1 ? 0 : prev + 1
            );
      };

      const prev = () => {
            setActiveIndex((prev) =>
                  prev === 0 ? items.length - 1 : prev - 1
            );
      };

      return (
            <section className="py-24 bg-white px-6">
                  <div className="max-w-7xl mx-auto">

                        {/* Title */}
                        <div className="text-center mb-16">

                              <h2 className="text-[#051139] text-4xl md:text-5xl font-bold mb-6">
                                    {title}
                              </h2>

                              <p className="text-gray-500 text-lg max-w-4xl mx-auto">
                                    {description}
                              </p>

                        </div>

                        {/* Main testimonial */}
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">

                              {/* Video */}
                              <div className="rounded-xl overflow-hidden shadow">
                                    <video
                                          src={active.video}
                                          className="w-full"
                                          controls
                                    />
                              </div>

                              {/* Quote */}
                              <div>

                                    <p className="text-gray-600 text-lg leading-relaxed">
                                          {active.quote}
                                    </p>

                                    <h4 className="mt-6 font-semibold text-lg text-[#051139]">
                                          {active.name}
                                    </h4>

                                    <p className="text-gray-500">
                                          {active.role}
                                    </p>

                                    <div className="text-yellow-500 mt-2">
                                          {"★".repeat(active.rating)}
                                    </div>

                              </div>

                        </div>

                        {/* Bottom selector */}
                        <div className="flex items-center gap-6">

                              <button onClick={prev}>
                                    <ChevronLeft />
                              </button>

                              <div className="grid grid-cols-4 gap-6 flex-1">

                                    {items.map((item, index) => (

                                          <div
                                                key={index}
                                                onClick={() => setActiveIndex(index)}
                                                className={`p-4 rounded-lg border cursor-pointer transition ${activeIndex === index
                                                      ? "border-yellow-400"
                                                      : "border-gray-200"
                                                      }`}
                                          >

                                                <h5 className="font-semibold text-sm text-[#051139]">
                                                      {item.name}
                                                </h5>

                                                <p className="text-xs text-gray-500">
                                                      {item.role}
                                                </p>

                                          </div>

                                    ))}

                              </div>

                              <button onClick={next}>
                                    <ChevronRight />
                              </button>

                        </div>

                  </div>
            </section>
      );
};

export default SolutionTestimonials;