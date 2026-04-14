import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = ({ data }) => {
      if (!data) return null;

      return (
            <section className="py-14 sm:py-16 md:py-20 bg-white overflow-hidden">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">

                        {/* LEFT */}
                        <div className="w-full lg:w-1/2">

                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-5 sm:mb-6 leading-tight text-center lg:text-left">
                                    {data.title}
                              </h2>

                              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-center lg:text-left">
                                    {data.description.map((para, i) => (
                                          <p key={i} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                                {para}
                                          </p>
                                    ))}
                              </div>

                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    {data.features.map((feature, idx) => (
                                          <li
                                                key={idx}
                                                className="flex items-start gap-3 text-slate-800 font-semibold text-sm sm:text-base"
                                          >
                                                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-[2px]" />
                                                <span className="leading-snug">{feature}</span>
                                          </li>
                                    ))}
                              </ul>

                        </div>

                        {/* RIGHT */}
                        <div className="w-full lg:w-1/2 bg-slate-50/50 p-5 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-100">

                              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 items-center justify-items-center">
                                    {data.logos.map((logo, idx) => (
                                          <div
                                                key={idx}
                                                className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-slate-100 w-full flex justify-center items-center aspect-video hover:shadow-md transition-shadow"
                                          >
                                                <img
                                                      src={logo}
                                                      alt="Client Logo"
                                                      className="max-h-8 sm:max-h-10 md:max-h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
                                                />
                                          </div>
                                    ))}
                              </div>

                        </div>

                  </div>
            </section>
      );
};

export default WhyChooseUs;