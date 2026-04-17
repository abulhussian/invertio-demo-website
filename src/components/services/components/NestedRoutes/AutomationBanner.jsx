import React from 'react';
import Link from 'next/link';

const AutomationBanner = ({ data }) => {
      if (!data) return null;

      return (
            <div className="w-full bg-[#0b1220] py-8 sm:py-10 px-4 sm:px-6 md:px-20 overflow-hidden relative mb-10 sm:mb-16">

                  {/* Background */}
                  <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none">
                        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                              <path d="M0 200L100 0L200 200H0Z" fill="#1d69d8" />
                        </svg>
                  </div>

                  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-8 relative z-10">

                        {/* Text */}
                        <div className="text-left max-w-full sm:max-w-[600px]">
                              <h2 className="text-[20px] sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 leading-snug">
                                    {data.title}
                              </h2>
                              <p className="text-slate-400 text-sm sm:text-base font-medium">
                                    {data.description}
                              </p>
                        </div>

                        {/* Button */}
                        <Link
                              href={data.href || "#"}
                              className="w-full md:w-auto text-center bg-gradient-to-r from-[#ff8c42] to-[#ff7b2d] text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-orange-900/20"
                        >
                              {data.buttonText}
                        </Link>

                  </div>
            </div>
      );
};

export default AutomationBanner;