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
                              <p className="text-slate-600 text-lg max-w-3xl">
                                    {data.subheading}
                              </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {data.items.map((item, idx) => {
                                    const IconComponent = Icons[item.icon] || Icons.HelpCircle;
                                    return (
                                          <div
                                                key={idx}
                                                className="bg-white p-8 rounded-2xl border border-slate-100 flex items-start gap-5 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 group"
                                          >
                                                {/* Icon Container */}
                                                <div className="bg-slate-50 p-4 rounded-xl group-hover:bg-blue-50 transition-colors">
                                                      <IconComponent className="w-6 h-6 text-blue-600" />
                                                </div>

                                                {/* Text Content */}
                                                <div>
                                                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                                                            {item.title}
                                                      </h3>
                                                      <p className="text-slate-500 text-sm leading-relaxed">
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