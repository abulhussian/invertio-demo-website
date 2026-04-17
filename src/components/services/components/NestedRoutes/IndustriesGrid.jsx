import React from 'react';
import * as Icons from 'lucide-react';

const IndustriesGrid = ({ data }) => {
      if (!data) return null;

      return (
            <section className="py-10 sm:py-16 md:py-20 bg-[#F8F9FC]">
                  <div className="max-w-[1380px] mx-auto px-4 sm:px-6">

                        {/* Header */}
                        <div className="mb-8 sm:mb-12 md:mb-14 px-2 sm:px-0">
                              <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider">
                                    {data.badge}
                              </span>

                              <h2 className="text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-2 sm:mb-4 leading-tight">
                                    {data.heading}
                              </h2>

                              <p className="text-sm sm:text-base text-slate-600 max-w-full sm:max-w-4xl">
                                    {data.subheading}
                              </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-5">
                              {data.items.map((item, idx) => {
                                    const IconComponent = Icons[item.icon] || Icons.HelpCircle;

                                    return (
                                          <div
                                                key={idx}
                                                className="bg-white p-3 sm:p-5 rounded-lg sm:rounded-xl border border-slate-200 flex items-start gap-2 sm:gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-[2px]"
                                          >
                                                {/* Icon */}
                                                <div className="bg-slate-50 p-2 rounded-md sm:rounded-lg shrink-0">
                                                      <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
                                                </div>

                                                {/* Content */}
                                                <div>
                                                      <h3 className="text-sm sm:text-[15px] md:text-base font-semibold text-slate-900 leading-snug mb-1">
                                                            {item.title}
                                                      </h3>

                                                      <p className="text-xs sm:text-sm text-slate-500 leading-snug">
                                                            {item.description}
                                                      </p>
                                                </div>
                                          </div>
                                    );
                              })}
                        </div>

                  </div>
            </section>
      );
};

export default IndustriesGrid;