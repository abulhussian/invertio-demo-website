"use client";

import React, { useState } from 'react';
import { ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';

const TailoredTechSection = () => {
      // State to track which card is currently expanded
      const [activeIndex, setActiveIndex] = useState(0);

      return (
            <section className="bg-[#fcfbf7] py-24 px-8 font-sans">
                  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

                        {/* Left Content Side */}
                        <div className="lg:w-1/3 flex flex-col justify-between">
                              <div>
                                    <h2 className="text-[#051139] text-5xl font-bold leading-[1.1] mb-6">
                                          Tailored Tech for <br /> All Business Types
                                    </h2>
                                    <p className="text-gray-500 text-lg max-w-sm leading-relaxed">
                                          Our services cater to the needs of businesses of different types and sizes.
                                    </p>
                              </div>

                              <div className="flex gap-4 mt-12">
                                    <button
                                          onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : 2))}
                                          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#051139] hover:text-white transition-all"
                                    >
                                          <ArrowLeft size={20} />
                                    </button>
                                    <button
                                          onClick={() => setActiveIndex((prev) => (prev < 2 ? prev + 1 : 0))}
                                          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#051139] hover:text-white transition-all"
                                    >
                                          <ArrowRight size={20} />
                                    </button>
                              </div>
                        </div>

                        {/* Right Cards Side */}
                        <div className="lg:w-2/3 flex gap-4 h-[500px]">

                              {/* Card 1: Early-Stage Startups */}
                              <div
                                    onClick={() => setActiveIndex(0)}
                                    className={`relative transition-all duration-700 ease-in-out cursor-pointer rounded-[40px] overflow-hidden p-10 flex flex-col justify-between ${activeIndex === 0 ? 'flex-[2.5] bg-white shadow-2xl' : 'flex-1 group'
                                          }`}
                              >
                                    {/* Background Image (Hidden when active) */}
                                    <div className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === 0 ? 'opacity-0' : 'opacity-100'}`}>
                                          <img src="/images/startup-bg.jpg" alt="" className="w-full h-full object-cover brightness-[0.4]" />
                                    </div>

                                    <div className="relative z-10 flex justify-between items-start">
                                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={activeIndex === 0 ? "#f59e0b" : "white"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-500">
                                                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                                <path d="M9 12H4s.5-1 1-4c2 0 3 .5 3 .5" />
                                                <path d="M15 6s1 .5 4 1c0 2-.5 3-.5 3" />
                                                <circle cx="15" cy="9" r="1" fill={activeIndex === 0 ? "#f59e0b" : "white"} />
                                          </svg>
                                          <ChevronDown size={28} className={`transition-all duration-500 ${activeIndex === 0 ? 'text-amber-500 rotate-180' : 'text-white'}`} />
                                    </div>

                                    <div className="relative z-10 space-y-4">
                                          <h3 className={`text-2xl font-bold transition-colors duration-500 ${activeIndex === 0 ? 'text-[#051139]' : 'text-white'}`}>
                                                Early-Stage Startups
                                          </h3>
                                          <div className={`transition-all duration-700 overflow-hidden ${activeIndex === 0 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <p className="text-gray-500 text-[15px] leading-relaxed">
                                                      We help early-stage startups transform ideas into market-ready solutions with cost-efficient development, rapid iterations, and scalable technology foundations.
                                                </p>
                                          </div>
                                    </div>
                              </div>

                              {/* Card 2: Scaling Startups */}
                              <div
                                    onClick={() => setActiveIndex(1)}
                                    className={`relative transition-all duration-700 ease-in-out cursor-pointer rounded-[40px] overflow-hidden p-10 flex flex-col justify-between ${activeIndex === 1 ? 'flex-[2.5] bg-white shadow-2xl' : 'flex-1 group'
                                          }`}
                              >
                                    <div className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === 1 ? 'opacity-0' : 'opacity-100'}`}>
                                          <img src="/images/scaling-bg.jpg" alt="" className="w-full h-full object-cover brightness-[0.4]" />
                                    </div>

                                    <div className="relative z-10 flex justify-between items-start">
                                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={activeIndex === 1 ? "#f59e0b" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-500">
                                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                                <polyline points="16 7 22 7 22 13" />
                                          </svg>
                                          <ChevronDown size={28} className={`transition-all duration-500 ${activeIndex === 1 ? 'text-amber-500 rotate-180' : 'text-white'}`} />
                                    </div>

                                    <div className="relative z-10 space-y-4">
                                          <h3 className={`text-2xl font-bold transition-colors duration-500 ${activeIndex === 1 ? 'text-[#051139]' : 'text-white'}`}>
                                                Scaling Startups
                                          </h3>
                                          <div className={`transition-all duration-700 overflow-hidden ${activeIndex === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <p className="text-gray-500 text-[15px] leading-relaxed">
                                                      Optimize your infrastructure and scale your team with precision-engineered AI solutions built for high-growth environments.
                                                </p>
                                          </div>
                                    </div>
                              </div>

                              {/* Card 3: Enterprises */}
                              <div
                                    onClick={() => setActiveIndex(2)}
                                    className={`relative transition-all duration-700 ease-in-out cursor-pointer rounded-[40px] overflow-hidden p-10 flex flex-col justify-between ${activeIndex === 2 ? 'flex-[2.5] bg-white shadow-2xl' : 'flex-1 group'
                                          }`}
                              >
                                    <div className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === 2 ? 'opacity-0' : 'opacity-100'}`}>
                                          <img src="/images/enterprise-bg.jpg" alt="" className="w-full h-full object-cover brightness-[0.4]" />
                                    </div>

                                    <div className="relative z-10 flex justify-between items-start">
                                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={activeIndex === 2 ? "#f59e0b" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-500">
                                                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                                                <path d="M9 22v-4h6v4" />
                                                <path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" />
                                          </svg>
                                          <ChevronDown size={28} className={`transition-all duration-500 ${activeIndex === 2 ? 'text-amber-500 rotate-180' : 'text-white'}`} />
                                    </div>

                                    <div className="relative z-10 space-y-4">
                                          <h3 className={`text-2xl font-bold transition-colors duration-500 ${activeIndex === 2 ? 'text-[#051139]' : 'text-white'}`}>
                                                Enterprises
                                          </h3>
                                          <div className={`transition-all duration-700 overflow-hidden ${activeIndex === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <p className="text-gray-500 text-[15px] leading-relaxed">
                                                      Leverage enterprise-grade security and robust AI strategy to modernize legacy systems and drive organizational efficiency.
                                                </p>
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div>
            </section>
      );
};

export default TailoredTechSection;