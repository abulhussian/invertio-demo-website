import React from 'react';

const ProcessTimeline = ({ data }) => {
      if (!data) return null;

      return (
            <section className="py-24 bg-white overflow-hidden">
                  <div className="max-w-7xl mx-auto px-6">
                        {/* Header */}
                        <div className="text-center mb-20">
                              <h2 className="text-5xl font-bold text-slate-900 mb-6">{data.heading}</h2>
                              <p className="text-slate-600 text-lg max-w-5xl mx-auto leading-relaxed">
                                    {data.subheading}
                              </p>
                        </div>

                        {/* Timeline Container */}
                        <div className="relative">
                              {/* Connecting Dashed Line */}
                              <div className="hidden lg:block absolute top-[15%] left-0 w-full h-0.5 border-t-2 border-dashed border-blue-400 z-0" />

                              {/* Steps Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
                                    {data.steps.map((step, idx) => (
                                          <div key={idx} className="flex flex-col items-center">

                                                {/* Connector Dot (Desktop) */}
                                                <div className="hidden lg:flex items-center justify-center w-full mb-8">
                                                      <div className="w-4 h-4 bg-blue-600 rounded-full ring-4 ring-blue-100" />
                                                </div>

                                                {/* Card */}
                                                <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-100 text-center flex flex-col h-full hover:shadow-md transition-shadow">
                                                      <h3 className="text-xl font-bold text-blue-600 mb-6 min-h-[3.5rem] flex items-center justify-center">
                                                            {step.title}
                                                      </h3>
                                                      <p className="text-slate-600 text-[13px] leading-relaxed">
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