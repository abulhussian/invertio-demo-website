import React from 'react';
import Link from 'next/link';

const StatsSection = ({ data }) => {
      if (!data) return null;

      return (
            <section className="py-24 bg-white text-center">
                  <div className="max-w-7xl mx-auto px-6">
                        {/* Header */}
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                              {data.title}
                        </h2>
                        <p className="text-slate-600 text-md md:text-xl mb-16 max-w-2xl mx-auto">
                              {data.subtitle}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                              {data.stats.map((stat, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                          <span className="text-5xl md:text-5xl font-bold text-blue-600 mb-3">
                                                {stat.value}
                                          </span>
                                          <span className="text-slate-900 font-bold text-md">
                                                {stat.label}
                                          </span>
                                    </div>
                              ))}
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center">
                              <Link
                                    href={data.href || "#"}
                                    className="bg-[#ff8c42] hover:bg-[#f07d32] text-white px-10 py-4 rounded-full font-bold text-lg transition-all "
                              >
                                    {data.buttonText}
                              </Link>
                        </div>
                  </div>
            </section>
      );
};

export default StatsSection;