import React from 'react';
import Link from 'next/link';

const AutomationBanner = ({ data }) => {
      if (!data) return null;

      return (
            <div className="w-full bg-[#0b1220] py-12 px-6 md:px-20 rounded-3xl overflow-hidden relative mb-16">
                  {/* Background Subtle Accent (The dark shape in the bottom left of your image) */}
                  <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none">
                        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                              <path d="M0 200L100 0L200 200H0Z" fill="#1d69d8" />
                        </svg>
                  </div>

                  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="text-left">
                              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                                    {data.title}
                              </h2>
                              <p className="text-slate-400 text-lg md:text-xl font-medium">
                                    {data.description}
                              </p>
                        </div>

                        <Link
                              href={data.href || "#"}
                              className="whitespace-nowrap bg-gradient-to-r from-[#ff8c42] to-[#ff7b2d] text-white px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-orange-900/20"
                        >
                              {data.buttonText}
                        </Link>
                  </div>
            </div>
      );
};

export default AutomationBanner;