import React from 'react';
import Spinner from './Spinner';

const TechStackWrapper = ({ data }) => {
      if (!data) return null;

      return (
            <section className="py-10 sm:py-16 md:py-20 bg-white overflow-hidden">
                  <div className="max-w-[1380px] mx-auto px-4 sm:px-6">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">

                              {/* COLUMN 1: Spinner */}
                              <div className="flex justify-center items-center">
                                    <Spinner />
                              </div>

                              {/* COLUMN 2: Text */}
                              <div className="max-w-full sm:max-w-xl mx-auto lg:mx-0 text-center lg:text-left px-2 sm:px-0">

                                    {/* Badge */}
                                    {data.badge && (
                                          <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider">
                                                {data.badge}
                                          </span>
                                    )}

                                    {/* Title */}
                                    <h2 className="text-[22px] sm:text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 sm:mt-4 mb-2 sm:mb-4 leading-tight">
                                          {data.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-6">
                                          {data.description}
                                    </p>

                                    {/* Subtext */}
                                    {data.subtext && (
                                          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                                                {data.subtext}
                                          </p>
                                    )}

                              </div>

                        </div>
                  </div>
            </section>
      );
};

export default TechStackWrapper;