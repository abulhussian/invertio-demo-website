import React from 'react';

const ProcessTimeline = ({ data }) => {
      if (!data) return null;

      return (
            <section className="py-24 bg-white overflow-hidden">
                  <div className="max-w-7xl mx-auto px-6">
                        {/* Header */}
                        <div className="text-center mb-20">
                              <h2 className="text-4xl font-bold text-slate-900 mb-6">{data.heading}</h2>
                              <p className="text-slate-600 text-lg max-w-full mx-auto leading-relaxed">
                                    {data.subheading}
                              </p>
                        </div>

                        {/* Timeline Container */}
                        <div className="relative">

                              {/* Line */}
                              <div className="hidden lg:block absolute top-[32px] left-0 w-full border-t border-dashed border-blue-400 z-0" />

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
                                    {data.steps.map((step, idx) => (
                                          <div key={idx} className="relative flex flex-col items-center text-center h-full">

                                                {/* Dot */}
                                                <div className="hidden lg:block absolute top-[24px] w-2.5 h-2.5 bg-blue-600 rounded-full" />

                                                {/* Card */}
                                                <div className="bg-[#f8fafc] px-4 pt-10 pb-5 rounded-xl border border-slate-200 w-full h-full flex flex-col">

                                                      {/* Title */}
                                                      <div className="bg-slate-100 text-blue-600 text-[13px] font-semibold px-3 py-2 rounded-lg mb-4 inline-block">
                                                            {step.title}
                                                      </div>

                                                      {/* Description */}
                                                      <p className="text-[12.5px] text-slate-600 leading-snug flex-grow">
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