"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const ServiceFAQ = ({ data }) => {

      const [activeIndex, setActiveIndex] = useState(0);

      if (!data) return null;

      const toggleFAQ = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
      };

      return (
            <section className="py-24 bg-white px-6">
                  <div className="max-w-5xl mx-auto">

                        {/* Title */}
                        <h2 className="text-4xl font-bold text-center text-[#0b1f5b] mb-16">
                              {data.title}
                        </h2>

                        {/* FAQ List */}
                        <div className="space-y-6">

                              {data.items.map((faq, index) => {

                                    const isOpen = activeIndex === index;

                                    return (
                                          <div
                                                key={index}
                                                className="border border-gray-200 rounded-lg overflow-hidden"
                                          >

                                                {/* Question */}
                                                <button
                                                      onClick={() => toggleFAQ(index)}
                                                      className="w-full flex justify-between items-center p-6 text-left"
                                                >
                                                      <h3 className="text-lg font-semibold text-[#0b1f5b]">
                                                            {faq.question}
                                                      </h3>

                                                      {isOpen ? (
                                                            <Minus className="text-yellow-500" />
                                                      ) : (
                                                            <Plus className="text-yellow-500" />
                                                      )}
                                                </button>

                                                {/* Answer */}
                                                {isOpen && (
                                                      <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                                                            <p className="pt-4">
                                                                  <span className="font-semibold">Ans:</span> {faq.answer}
                                                            </p>
                                                      </div>
                                                )}

                                          </div>
                                    );
                              })}

                        </div>

                  </div>
            </section>
      );
};

export default ServiceFAQ;