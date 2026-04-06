"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = ({ data }) => {
      const [openIndex, setOpenIndex] = useState(0);

      if (!data) return null;

      return (
            <section className="py-24 bg-white">
                  <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-16">
                              <h2 className="text-4xl font-bold text-slate-900 mb-4">{data.heading}</h2>
                              <p className="text-slate-500">{data.subheading}</p>
                        </div>

                        <div className="space-y-4">
                              {data.questions.map((item, idx) => (
                                    <div key={idx} className="border-b border-slate-200">
                                          <button
                                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                                className="w-full py-6 flex justify-between items-center text-left group"
                                          >
                                                <span className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                                      Q. {item.question}
                                                </span>
                                                {openIndex === idx ? (
                                                      <Minus className="w-5 h-5 text-slate-400" />
                                                ) : (
                                                      <Plus className="w-5 h-5 text-slate-400" />
                                                )}
                                          </button>

                                          {openIndex === idx && (
                                                <div className="pb-6 animate-in slide-in-from-top-2 duration-300">
                                                      <p className="text-slate-600 leading-relaxed">
                                                            {item.answer}
                                                      </p>
                                                </div>
                                          )}
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default FAQSection;