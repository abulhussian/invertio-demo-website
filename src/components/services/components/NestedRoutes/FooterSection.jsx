import React from 'react';
import { Plus, Minus, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const FooterSection = () => {
      return (
            <div className="bg-white">

                  {/* 1. FAQ SECTION */}
                  <section className="py-24 px-6 md:px-12 lg:px-24">
                        <div className="max-w-4xl mx-auto">
                              <h2 className="text-[#051139] text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>

                              <div className="space-y-4">
                                    {/* Question 1 - Open */}
                                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                          <div className="flex justify-between items-center p-6 bg-[#fcfbf7] cursor-pointer">
                                                <h3 className="text-[#051139] font-bold text-lg">Why choose ValueCoders as AI consulting company?</h3>
                                                <Minus className="text-amber-500" size={20} />
                                          </div>
                                          <div className="p-6 pt-0 bg-[#fcfbf7] text-gray-500 leading-relaxed border-t border-gray-100">
                                                Choose ValueCoders as your AI consulting firm for we offer an expert team, tailored solutions, cutting-edge tech, and a proven track record of successful AI projects.
                                          </div>
                                    </div>

                                    {/* Question 2 - Open */}
                                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                          <div className="flex justify-between items-center p-6 bg-[#fcfbf7] cursor-pointer">
                                                <h3 className="text-[#051139] font-bold text-lg">How is AI consulting different from AI development?</h3>
                                                <Minus className="text-amber-500" size={20} />
                                          </div>
                                          <div className="p-6 pt-0 bg-[#fcfbf7] text-gray-500 leading-relaxed border-t border-gray-100">
                                                <span className="font-bold text-[#051139]">Ans:</span> Consulting focuses on strategy, readiness, governance, and integration decisions, while development focuses on building solutions. A strong AI consulting services company helps ensure development efforts are aligned with business outcomes.
                                          </div>
                                    </div>

                                    {/* Question 3 - Closed */}
                                    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-amber-200 transition-colors">
                                          <div className="flex justify-between items-center p-6 cursor-pointer">
                                                <h3 className="text-[#051139] font-bold text-lg">Can AI consulting support integration with existing systems?</h3>
                                                <Plus className="text-amber-500" size={20} />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

            </div>
      );
};

export default FooterSection;