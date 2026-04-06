import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = ({ data }) => {
      if (!data) return null;

      return (
            <section className="py-20 bg-white">
                  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Content */}
                        <div className="lg:w-1/2">
                              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                    {data.title}
                              </h2>

                              <div className="space-y-4 mb-8">
                                    {data.description.map((para, i) => (
                                          <p key={i} className="text-slate-600 leading-relaxed">
                                                {para}
                                          </p>
                                    ))}
                              </div>

                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {data.features.map((feature, idx) => (
                                          <li key={idx} className="flex items-center gap-3 text-slate-800 font-semibold text-sm">
                                                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                                {feature}
                                          </li>
                                    ))}
                              </ul>
                        </div>

                        {/* Right Logo Grid */}
                        <div className="lg:w-1/2 bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
                              <div className="grid grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
                                    {data.logos.map((logo, idx) => (
                                          <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 w-full flex justify-center hover:shadow-md transition-shadow">
                                                <img
                                                      src={logo}
                                                      alt="Client Logo"
                                                      className="h-8 object-contain grayscale hover:grayscale-0 transition-all"
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