import React from "react";
import { Plus, Minus } from "lucide-react";

const FooterSection = ({ content }) => {
      return (
            <div className="bg-white">
                  <section className="py-24 px-6 md:px-12 lg:px-24">
                        <div className="max-w-4xl mx-auto">

                              <h2 className="text-[#051139] text-4xl font-bold text-center mb-16">
                                    {content.title}
                              </h2>

                              <div className="space-y-4">

                                    {content.items.map((faq, index) => (
                                          <div
                                                key={index}
                                                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                                          >

                                                <div className="flex justify-between items-center p-6 bg-[#fcfbf7] cursor-pointer">
                                                      <h3 className="text-[#051139] font-bold text-lg">
                                                            {faq.question}
                                                      </h3>

                                                      {faq.open ? (
                                                            <Minus className="text-amber-500" size={20} />
                                                      ) : (
                                                            <Plus className="text-amber-500" size={20} />
                                                      )}
                                                </div>

                                                {faq.open && (
                                                      <div className="p-6 pt-0 bg-[#fcfbf7] text-gray-500 leading-relaxed border-t border-gray-100">
                                                            {faq.answer}
                                                      </div>
                                                )}

                                          </div>
                                    ))}

                              </div>
                        </div>
                  </section>
            </div>
      );
};

export default FooterSection;