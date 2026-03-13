"use client";

import { Search, PenTool, Code, Rocket, ArrowRight } from "lucide-react";

// Mapping icons to steps based on index or title keywords
const stepIcons = [
      <Search className="text-blue-600" size={24} />,
      <PenTool className="text-blue-600" size={24} />,
      <Code className="text-blue-600" size={24} />,
      <Rocket className="text-blue-600" size={24} />,
];

const OurProcess = ({ data }) => {
      if (!data) return null;

      const { title, description, steps } = data;

      return (
            <section className="py-28 bg-[#fcfcfd] px-6 md:px-12 lg:px-24 relative overflow-hidden">
                  {/* Background Decor */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

                  <div className="max-w-7xl mx-auto relative z-10">

                        {/* Header */}
                        <div className="text-center max-w-3xl mx-auto mb-20">
                              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                                    Execution Roadmap
                              </div>
                              <h2 className="text-5xl md:text-6xl font-black text-[#051139] mb-6 tracking-tighter">
                                    {title}
                              </h2>
                              <p className="text-gray-500 text-lg leading-relaxed">
                                    {description}
                              </p>
                        </div>

                        {/* Steps Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {steps?.map((step, index) => (
                                    <div key={index} className="group relative">

                                          {/* Connector Arrow (Desktop Only) */}
                                          {index !== steps.length - 1 && (
                                                <div className="hidden lg:flex absolute top-12 -right-6 z-20 text-gray-200 group-hover:text-yellow-400 group-hover:translate-x-2 transition-all duration-500">
                                                      <ArrowRight size={24} />
                                                </div>
                                          )}

                                          <div className="relative bg-white border border-gray-100 rounded-[2.5rem] p-10 h-full shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-3 transition-all duration-500 overflow-hidden">

                                                {/* Backdrop Number */}
                                                <span className="absolute -top-4 -right-2 text-9xl font-black text-gray-50 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity">
                                                      {index + 1}
                                                </span>

                                                {/* Icon Container */}
                                                <div className="relative z-10 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-400 group-hover:rotate-[15deg] transition-all duration-500">
                                                      {/* Fallback to stepIcons or a default if not enough icons */}
                                                      {stepIcons[index] || <Rocket className="text-blue-600 group-hover:text-black" size={24} />}
                                                </div>

                                                {/* Text Content */}
                                                <div className="relative z-10">
                                                      <h3 className="text-xl font-black text-[#051139] mb-4 tracking-tight">
                                                            {step.title}
                                                      </h3>
                                                      <p className="text-gray-500 text-sm leading-relaxed">
                                                            {step.description}
                                                      </p>
                                                </div>

                                                {/* Bottom Border Accent */}
                                                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-yellow-400 group-hover:w-full transition-all duration-700" />
                                          </div>

                                          {/* Mobile Mobile Step Label */}
                                          <div className="lg:hidden flex justify-center mt-4">
                                                <div className="h-8 w-[2px] bg-gradient-to-b from-yellow-400 to-transparent" />
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default OurProcess;