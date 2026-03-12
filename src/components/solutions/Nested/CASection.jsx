"use client";

import { ArrowRight } from "lucide-react";

const CASection = ({ data }) => {
      if (!data) return null;

      const { title, description, buttonText, stats } = data;

      return (
            <section className="bg-[#0f1c4d] text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
                  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    {title}
                              </h2>

                              <p className="text-gray-300 max-w-lg mb-8">
                                    {description}
                              </p>

                              <button className="flex items-center gap-4 border border-white rounded-full px-6 py-3 hover:bg-white hover:text-[#0f1c4d] transition">

                                    {buttonText}

                                    <span className="bg-white text-[#0f1c4d] rounded-full p-2">
                                          <ArrowRight size={18} />
                                    </span>

                              </button>
                        </div>

                        {/* RIGHT ROTATING STATS */}
                        <div className="flex justify-center gap-10 relative">

                              {stats?.map((item, i) => (
                                    <div key={i} className="relative w-[150px] h-[150px] flex items-center justify-center">

                                          {/* Rotating Text */}
                                          <svg
                                                viewBox="0 0 200 200"
                                                className="absolute w-full h-full animate-spin-slow"
                                          >
                                                <defs>
                                                      <path
                                                            id={`circlePath${i}`}
                                                            d="M 100,100
                       m -75,0
                       a 75,75 0 1,1 150,0
                       a 75,75 0 1,1 -150,0"
                                                      />
                                                </defs>

                                                <text fill="rgba(255,255,255,0.25)" fontSize="10" letterSpacing="3">
                                                      <textPath href={`#circlePath${i}`}>
                                                            {item.circleText}
                                                      </textPath>
                                                </text>

                                          </svg>

                                          {/* Center Number */}
                                          <div className="text-center">
                                                <h3 className="text-xl font-bold">
                                                      {item.value}
                                                </h3>

                                                <p className="text-sm text-gray-300">
                                                      {item.label}
                                                </p>
                                          </div>

                                    </div>
                              ))}

                        </div>

                  </div>
            </section>
      );
};

export default CASection;