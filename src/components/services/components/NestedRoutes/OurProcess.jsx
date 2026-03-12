import React from 'react';

const OurProcess = () => {
      const steps = [
            {
                  title: "Discovery & Assessment",
                  description: "Identify opportunities, constraints, and priorities."
            },
            {
                  title: "Strategy & Roadmap",
                  description: "Define AI adoption approach and milestones."
            },
            {
                  title: "Design & Advisory",
                  description: "Guide architecture, models, and integration decisions."
            },
            {
                  title: "Execution Oversight",
                  description: "Support implementation and rollout."
            },
            {
                  title: "Optimization & Support",
                  description: "Refine and evolve AI initiatives over time."
            }
      ];

      return (
            <section className="py-20 px-6 bg-white overflow-hidden">
                  <div className="max-w-7xl mx-auto text-center">
                        {/* Header */}
                        <h2 className="text-[#051139] text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
                        <p className="text-gray-500 text-lg mb-20">
                              A structured approach focused on clarity, feasibility, and execution readiness.
                        </p>

                        {/* Steps Container */}
                        <div className="relative">

                              {/* Connecting Line (Desktop Only) */}
                              <div className="absolute top-[40px] left-[10%] right-[10%] hidden lg:block">
                                    <svg width="100%" height="20" fill="none" className="overflow-visible">
                                          <path
                                                d="M 0 10 H 1000"
                                                stroke="#E5E7EB"
                                                strokeWidth="2"
                                                strokeDasharray="6 6"
                                          />
                                          {/* Arrows */}
                                          {[20, 40, 60, 80].map((pos) => (
                                                <path
                                                      key={pos}
                                                      d="M 5 0 L 12 7 L 5 14"
                                                      fill="none"
                                                      stroke="#F7A600"
                                                      strokeWidth="2"
                                                      transform={`translate(${pos * 10}, 3)`}
                                                />
                                          ))}
                                    </svg>
                              </div>

                              {/* Cards Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                                    {steps.map((step, index) => (
                                          <div key={index} className="flex flex-col items-center group">

                                                {/* Step Circle/Dot */}
                                                <div className="w-5 h-5 rounded-full border-4 border-white bg-white ring-2 ring-[#F7A600] mb-8 z-20 transition-transform group-hover:scale-125 duration-300 shadow-sm" />

                                                {/* Card */}
                                                <div className="bg-white border border-gray-100 rounded-[32px] p-8 min-h-[280px] flex flex-col items-center justify-start shadow-sm hover:shadow-md transition-all duration-300 w-full">
                                                      <h3 className="text-[#051139] text-xl font-bold mb-4 leading-tight">
                                                            {step.title}
                                                      </h3>
                                                      <p className="text-gray-500 text-sm leading-relaxed text-center">
                                                            {step.description}
                                                      </p>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default OurProcess;