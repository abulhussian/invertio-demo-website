"use client";
import React from "react";

const ProcessTimeline = ({ data }) => {
      if (!data || !data.steps) return null;

      return (
            <section className="py-20 bg-white">
                  <div className="max-w-7xl mx-auto px-6">

                        {/* Header */}
                        <div className="text-center mb-16">
                              <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                                    {data.title || data.heading}
                              </h2>
                              <p className="text-[15px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                                    {data.description || data.subheading}
                              </p>
                        </div>

                        {/* Timeline */}
                        <div className="relative">

                              {/* LINE → perfectly centered */}
                              <div className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2 border-t border-dashed border-blue-300 opacity-60 z-0" />

                              {/* Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 relative z-10">
                                    {data.steps.map((step, idx) => (
                                          <div key={idx} className="relative flex flex-col h-full">

                                                {/* DOT → centered on line */}
                                                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full z-20" />

                                                {/* CARD */}
                                                <div className="bg-[#F8FAFC] px-5 pt-6 pb-5 rounded-[16px] border border-slate-200 w-full h-full flex flex-col">

                                                      {/* Title */}
                                                      <div className="bg-[#F1F5F9] text-blue-600 text-[13px] font-semibold px-3 py-2 rounded-lg mb-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] w-fit">
                                                            {step.title}
                                                      </div>

                                                      {/* Description */}
                                                      <p className="text-[13px] text-slate-600 leading-relaxed">
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

export default ProcessTimeline;