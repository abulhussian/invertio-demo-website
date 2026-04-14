"use client";
import React from "react";

const ProcessTimeline = ({ data }) => {
      if (!data || !data.steps) return null;

      return (
            <section className="py-14 sm:py-16 md:py-20 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6">

                        {/* Header */}
                        <div className="text-center mb-10 sm:mb-12 md:mb-16">
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
                                    {data.title || data.heading}
                              </h2>
                              <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
                                    {data.description || data.subheading}
                              </p>
                        </div>

                        {/* Timeline */}
                        <div className="relative">

                              {/* DESKTOP LINE */}
                              <div className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2 border-t border-dashed border-blue-300 opacity-60 z-0" />

                              {/* MOBILE VERTICAL LINE */}
                              <div className="lg:hidden absolute top-0 left-3 w-[2px] h-full bg-blue-100" />

                              {/* Grid */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5 relative z-10">
                                    {data.steps.map((step, idx) => (
                                          <div key={idx} className="relative flex flex-col h-full">

                                                {/* DOT */}
                                                <div className="absolute left-3 top-6 lg:top-1/2 lg:left-1/2 -translate-x-1/2 lg:-translate-y-1/2 w-2.5 h-2.5 bg-blue-600 rounded-full z-20" />

                                                {/* CARD */}
                                                <div className="ml-8 lg:ml-0 bg-[#F8FAFC] px-4 sm:px-5 pt-5 sm:pt-6 pb-4 sm:pb-5 rounded-[14px] sm:rounded-[16px] border border-slate-200 w-full h-full flex flex-col transition-all duration-300 hover:shadow-md">

                                                      {/* Title */}
                                                      <div className="bg-[#F1F5F9] text-blue-600 text-xs sm:text-[13px] font-semibold px-3 py-1.5 sm:py-2 rounded-lg mb-3 sm:mb-4 w-fit">
                                                            {step.title}
                                                      </div>

                                                      {/* Description */}
                                                      <p className="text-xs sm:text-[13px] md:text-sm text-slate-600 leading-relaxed">
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