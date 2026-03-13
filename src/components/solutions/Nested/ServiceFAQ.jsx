"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const ServiceFAQ = ({ data }) => {
      const [activeIndex, setActiveIndex] = useState(0);

      if (!data) return null;

      const toggleFAQ = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
      };

      return (
            <section className="py-28 bg-white px-6 md:px-12 lg:px-24 relative overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  <div className="max-w-4xl mx-auto relative z-10">

                        {/* Header Section */}
                        <div className="text-center mb-20">
                              <div className="flex justify-center mb-6">
                                    <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                                          <HelpCircle size={32} />
                                    </div>
                              </div>
                              <h2 className="text-5xl md:text-6xl font-black text-[#0b1f5b] tracking-tighter mb-6">
                                    {data.title}
                              </h2>
                              <p className="text-gray-500 text-lg">
                                    Everything you need to know about our workflow and expertise.
                              </p>
                        </div>

                        {/* FAQ List */}
                        <div className="space-y-4">
                              {data.items.map((faq, index) => {
                                    const isOpen = activeIndex === index;

                                    return (
                                          <div
                                                key={index}
                                                className={`transition-all duration-500 rounded-[2rem] border ${isOpen
                                                      ? "border-blue-100 bg-blue-50/30 shadow-xl shadow-blue-900/5"
                                                      : "border-gray-100 bg-white hover:border-gray-300"
                                                      }`}
                                          >
                                                {/* Question Area */}
                                                <button
                                                      onClick={() => toggleFAQ(index)}
                                                      className="w-full flex justify-between items-center p-8 text-left group"
                                                >
                                                      <div className="flex items-center gap-6">
                                                            <span className={`text-xs font-black transition-colors ${isOpen ? "text-blue-600" : "text-gray-300"
                                                                  }`}>
                                                                  {String(index + 1).padStart(2, '0')}
                                                            </span>
                                                            <h3 className={`text-xl font-bold tracking-tight transition-colors ${isOpen ? "text-[#0b1f5b]" : "text-gray-600 group-hover:text-black"
                                                                  }`}>
                                                                  {faq.question}
                                                            </h3>
                                                      </div>

                                                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-blue-600 text-white rotate-180" : "bg-gray-50 text-gray-400 group-hover:bg-gray-100"
                                                            }`}>
                                                            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                                      </div>
                                                </button>

                                                {/* Answer Area (Collapsible) */}
                                                <div
                                                      className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                                            }`}
                                                >
                                                      <div className="px-8 pb-10 ml-14">
                                                            <div className="h-[1px] w-12 bg-blue-200 mb-6" />
                                                            <p className="text-gray-600 leading-relaxed text-lg">
                                                                  {faq.answer}
                                                            </p>

                                                            {/* Optional: Call to action within FAQ */}
                                                            <div className="mt-8 flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] cursor-pointer hover:gap-4 transition-all">
                                                                  Learn More About This <span className="text-lg leading-none">→</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    );
                              })}
                        </div>

                        {/* Bottom Support Link */}
                        <div className="mt-16 text-center">
                              <p className="text-gray-400 font-medium">
                                    Still have questions? {" "}
                                    <a href="#contact" className="text-blue-600 font-black border-b-2 border-blue-600 pb-1 hover:text-blue-700 transition-colors">
                                          Contact our strategy team
                                    </a>
                              </p>
                        </div>
                  </div>
            </section>
      );
};

export default ServiceFAQ;