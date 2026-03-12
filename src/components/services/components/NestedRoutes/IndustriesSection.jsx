"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const IndustriesSection = ({ content }) => {
      const [activeCard, setActiveCard] = useState(0);

      return (
            <section className="bg-[#fcfbf7] py-20 px-6 font-sans">
                  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

                        {/* Left */}
                        <div className="lg:w-1/3 flex flex-col justify-between py-6">
                              <div>
                                    <h2 className="text-[#051139] text-5xl font-extrabold leading-[1.1] mb-6">
                                          {content.title}
                                    </h2>

                                    <p className="text-gray-500 text-lg max-w-xs">
                                          {content.description}
                                    </p>
                              </div>

                              <div className="flex gap-4 mt-10">
                                    <button
                                          onClick={() =>
                                                setActiveCard((prev) =>
                                                      prev > 0 ? prev - 1 : content.cards.length - 1
                                                )
                                          }
                                          className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#051139] hover:text-white transition-all"
                                    >
                                          <ArrowLeft size={24} />
                                    </button>

                                    <button
                                          onClick={() =>
                                                setActiveCard((prev) =>
                                                      prev < content.cards.length - 1 ? prev + 1 : 0
                                                )
                                          }
                                          className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#051139] hover:text-white transition-all"
                                    >
                                          <ArrowRight size={24} />
                                    </button>
                              </div>
                        </div>

                        {/* Cards */}
                        <div className="lg:w-2/3 flex flex-col md:flex-row gap-4 h-[550px]">
                              {content.cards.map((card, index) => (
                                    <div
                                          key={index}
                                          onClick={() => setActiveCard(index)}
                                          className={`relative cursor-pointer rounded-[40px] overflow-hidden transition-all duration-700 ease-in-out p-10 flex flex-col justify-between ${activeCard === index
                                                ? "flex-[2.5] bg-white shadow-2xl"
                                                : "flex-1 group"
                                                }`}
                                    >

                                          <div
                                                className={`absolute inset-0 transition-opacity duration-700 ${activeCard === index ? "opacity-0" : "opacity-100"
                                                      }`}
                                          >
                                                <img
                                                      src={card.image}
                                                      alt={card.title}
                                                      className="w-full h-full object-cover brightness-[0.4]"
                                                />
                                          </div>

                                          <div className="relative z-10 flex justify-between items-start">
                                                <span
                                                      className={`text-4xl transition-opacity duration-500 ${activeCard === index ? "opacity-100" : "opacity-0"
                                                            }`}
                                                >
                                                      {card.icon}
                                                </span>

                                                <div
                                                      className={
                                                            activeCard === index ? "text-amber-500" : "text-white"
                                                      }
                                                >
                                                      {activeCard === index ? (
                                                            <ChevronUp size={32} />
                                                      ) : (
                                                            <ChevronDown size={32} />
                                                      )}
                                                </div>
                                          </div>

                                          <div className="relative z-10">
                                                <h3
                                                      className={`text-2xl font-bold mb-4 transition-colors duration-500 ${activeCard === index ? "text-[#051139]" : "text-white"
                                                            }`}
                                                >
                                                      {card.title}
                                                </h3>

                                                <div
                                                      className={`transition-all duration-700 overflow-hidden ${activeCard === index
                                                            ? "max-h-40 opacity-100"
                                                            : "max-h-0 opacity-0"
                                                            }`}
                                                >
                                                      <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                                            {card.description}
                                                      </p>
                                                </div>
                                          </div>

                                    </div>
                              ))}
                        </div>

                  </div>
            </section>
      );
};

export default IndustriesSection;