import React from 'react';
import * as Icons from 'lucide-react';

const IndustriesGrid = ({ data }) => {
      if (!data) return null;

      return (
            <section className="py-20 bg-[#F8F9FC]">
                  <div className="max-w-7xl mx-auto px-6">
                        {/* Header */}
                        <div className="mb-14">
                              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
                                    {data.badge}
                              </span>
                              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-4">
                                    {data.heading}
                              </h2>
                              <p className="text-slate-600 text-md max-w-4xl">
                                    {data.subheading}
                              </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {data.items.map((item, idx) => {
                                    const IconComponent = Icons[item.icon] || Icons.HelpCircle;

                                    return (
                                          <div
                                                key={idx}
                                                className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 transition-all duration-200 hover:shadow-md hover:-translate-y-[2px]"
                                          >
                                                {/* Icon */}
                                                <div className="bg-slate-50 p-2.5 rounded-lg">
                                                      <IconComponent className="w-5 h-5 text-blue-600" />
                                                </div>

                                                {/* Content */}
                                                <div>
                                                      <h3 className="text-[15px] font-semibold text-slate-900 leading-tight mb-1">
                                                            {item.title}
                                                      </h3>
                                                      <p className="text-[13px] text-slate-500 leading-snug">
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