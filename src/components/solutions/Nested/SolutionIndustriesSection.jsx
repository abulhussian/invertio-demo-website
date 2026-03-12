"use client"


import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronUp, ChevronDown } from 'lucide-react';
const SolutionIndustriesSection = () => {
      const [activeCard, setActiveCard] = useState(0);

      const cardData = [
            {
                  title: "Early-Stage Startups",
                  desc: "We help early-stage startups transform ideas into market-ready solutions with cost-efficient development, rapid iterations, and scalable technology foundations.",
                  img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000",
                  icon: "🚀"
            },
            {
                  title: "Scaling Startups",
                  desc: "Accelerate your growth with robust architecture, automated workflows, and dedicated engineering teams that scale with your user base.",
                  img: "https://images.unsplash.com/photo-1522071823991-b1ae5e6a3024?q=80&w=1000",
                  icon: "📈"
            },
            {
                  title: "Enterprises",
                  desc: "Modernize legacy systems and implement complex digital transformation strategies with enterprise-grade security and reliability.",
                  img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
                  icon: "🏢"
            }
      ];

      return (
            <section className="bg-[#fcfbf7] py-20 px-6 font-sans">
                  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

                        {/* Left Side: Header & Nav */}
                        <div className="lg:w-1/3 flex flex-col justify-between py-6">
                              <div>
                                    <h2 className="text-[#051139] text-5xl font-extrabold leading-[1.1] mb-6">
                                          Tailored Tech for <br /> All Business Types
                                    </h2>
                                    <p className="text-gray-500 text-lg max-w-xs">
                                          Our services cater to the needs of businesses of different types and sizes.
                                    </p>
                              </div>

                              <div className="flex gap-4 mt-10">
                                    <button
                                          onClick={() => setActiveCard((prev) => (prev > 0 ? prev - 1 : cardData.length - 1))}
                                          className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#051139] hover:text-white transition-all"
                                    >
                                          <ArrowLeft size={24} />
                                    </button>
                                    <button
                                          onClick={() => setActiveCard((prev) => (prev < cardData.length - 1 ? prev + 1 : 0))}
                                          className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#051139] hover:text-white transition-all"
                                    >
                                          <ArrowRight size={24} />
                                    </button>
                              </div>
                        </div>

                        {/* Right Side: Expanding Cards */}
                        <div className="lg:w-2/3 flex flex-col md:flex-row gap-4 h-[550px]">
                              {cardData.map((card, index) => (
                                    <div
                                          key={index}
                                          onClick={() => setActiveCard(index)}
                                          className={`relative cursor-pointer rounded-[40px] overflow-hidden transition-all duration-700 ease-in-out p-10 flex flex-col justify-between ${activeCard === index ? 'flex-[2.5] bg-white shadow-2xl' : 'flex-1 group'
                                                }`}
                                    >
                                          {/* Static Background Image (Visible when inactive) */}
                                          <div className={`absolute inset-0 transition-opacity duration-700 ${activeCard === index ? 'opacity-0' : 'opacity-100'}`}>
                                                <img src={card.img} alt="" className="w-full h-full object-cover brightness-[0.4]" />
                                          </div>

                                          {/* Top Row: Icon and Toggle */}
                                          <div className="relative z-10 flex justify-between items-start">
                                                <span className={`text-4xl transition-opacity duration-500 ${activeCard === index ? 'opacity-100' : 'opacity-0'}`}>
                                                      {card.icon}
                                                </span>
                                                <div className={activeCard === index ? 'text-amber-500' : 'text-white'}>
                                                      {activeCard === index ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
                                                </div>
                                          </div>

                                          {/* Bottom Row: Text Content */}
                                          <div className="relative z-10">
                                                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${activeCard === index ? 'text-[#051139]' : 'text-white'}`}>
                                                      {card.title}
                                                </h3>
                                                <div className={`transition-all duration-700 overflow-hidden ${activeCard === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                      <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                                            {card.desc}
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              ))}
                        </div>

                  </div>
            </section>
      );

}

export default SolutionIndustriesSection