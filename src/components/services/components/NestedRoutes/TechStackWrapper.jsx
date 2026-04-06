import React from 'react';
import Spinner from './Spinner';

const TechStackWrapper = ({ data }) => {
      if (!data) return null;

      return (
            <section className="py-24 bg-white overflow-hidden">
                  <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                              {/* COLUMN 1: The Static Spinner (No Props) */}
                              <div className="flex justify-center items-center overflow-hidden">
                                    <Spinner />
                              </div>

                              {/* COLUMN 2: The Dynamic Text from ServiceTemplate */}
                              <div className="max-w-full">
                                    {data.badge && (
                                          <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
                                                {data.badge}
                                          </span>
                                    )}
                                    <h2 className="text-4xl lg:text-3xl font-extrabold text-slate-900 mt-4 mb-2 leading-tight">
                                          {data.title}
                                    </h2>
                                    <p className="text-slate-600 text-xs leading-relaxed mb-6">
                                          {data.description}
                                    </p>
                                    {data.subtext && (
                                          <p className="text-slate-500 text-base leading-relaxed">
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