import React from 'react';
import Link from 'next/link';

const StatsSection = ({ data }) => {
      if (!data) return null;

      return (
            <section className="py-14 sm:py-16 md:py-20 bg-white text-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6">

                        {/* Header */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 sm:mb-4 tracking-tight">
                              {data.title}
                        </h2>

                        <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-10 sm:mb-12 md:mb-16 max-w-xl sm:max-w-2xl mx-auto">
                              {data.subtitle}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-10 sm:mb-12 md:mb-16">
                              {data.stats.map((stat, idx) => (
                                    <div key={idx} className="flex flex-col items-center">

                                          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2 sm:mb-3">
                                                {stat.value}
                                          </span>

                                          <span className="text-sm sm:text-base font-semibold text-slate-900">
                                                {stat.label}
                                          </span>

                                    </div>
                              ))}
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center">
                              <Link
                                    href={data.href || "#"}
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full bg-[#ff8c42] hover:bg-[#f07d32] text-white font-semibold text-sm sm:text-base md:text-lg transition-all"
                              >
                                    {data.buttonText}
                              </Link>
                        </div>

                  </div>
            </section>
      );
};

export default StatsSection;