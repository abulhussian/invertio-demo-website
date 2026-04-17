"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = ({ data }) => {
      const [openIndex, setOpenIndex] = useState(0);

      if (!data) return null;

      return (
            <section className="py-10 sm:py-20 md:py-24 bg-white">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6">

                        {/* Header */}
                        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2 sm:px-0">
                              <h2 className="text-[22px] sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4 leading-tight">
                                    {data.heading}
                              </h2>
                              <p className="text-sm sm:text-base text-slate-500 max-w-full sm:max-w-2xl mx-auto">
                                    {data.subheading}
                              </p>
                        </div>

                        {/* FAQ List */}
                        <div className="space-y-2 sm:space-y-4">
                              {data.questions.map((item, idx) => (
                                    <div key={idx} className="border-b border-slate-200">

                                          {/* Question */}
                                          <button
                                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                                className="w-full py-3 sm:py-5 md:py-6 flex justify-between items-start gap-3 sm:gap-4 text-left group"
                                          >
                                                <span className="text-[15px] sm:text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug">
                                                      Q. {item.question}
                                                </span>

                                                <div className="mt-1 shrink-0">
                                                      {openIndex === idx ? (
                                                            <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                                                      ) : (
                                                            <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                                                      )}
                                                </div>
                                          </button>

                                          {/* Answer */}
                                          <div
                                                className={`overflow-hidden transition-all duration-300 ${openIndex === idx
                                                      ? "max-h-[300px] opacity-100 pb-3 sm:pb-6"
                                                      : "max-h-0 opacity-0"
                                                      }`}
                                          >
                                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed pr-2 sm:pr-6">
                                                      {item.answer}
                                                </p>
                                          </div>

                                    </div>
                              ))}
                        </div>

                  </div>
            </section>
      );
};

export default FAQSection;