"use client";

import { ArrowLeft, ArrowRight, Compass } from "lucide-react";

const IndustriesSection = ({ data }) => {
      if (!data) return null;

      const { title, description, industries } = data;

      return (
            <section className="py-28 px-6 md:px-12 lg:px-24 bg-[#020617] overflow-hidden">
                  <div className="max-w-7xl mx-auto">

                        {/* 1. HEADER: Dynamic & Aligned */}
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                              <div className="max-w-2xl">
                                    <div className="flex items-center gap-3 mb-4 text-[#ccff00]">
                                          <Compass size={20} className="animate-pulse" />
                                          <span className="text-xs font-black uppercase tracking-[0.4em]">Sectors of Impact</span>
                                    </div>
                                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
                                          {title}
                                    </h2>
                                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-white/10 pl-6">
                                          {description}
                                    </p>
                              </div>

                              {/* Styled Navigation Brackets */}
                              <div className="flex gap-4">
                                    <button className="group w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:border-white transition-all duration-300">
                                          <ArrowLeft size={24} className="text-white group-hover:text-black transition-colors" />
                                    </button>
                                    <button className="group w-14 h-14 rounded-2xl bg-[#ccff00] flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.2)]">
                                          <ArrowRight size={24} className="text-black" />
                                    </button>
                              </div>
                        </div>

                        {/* 2. INDUSTRY CARDS: The "Reveal" Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {industries?.map((item, index) => (
                                    <div
                                          key={index}
                                          className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer"
                                    >
                                          {/* Parallax Image Background */}
                                          <img
                                                src={item.image}
                                                alt={item.title}
                                                className="absolute inset-0 w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                                          />

                                          {/* Dynamic Overlays */}
                                          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                                          {/* Content Container */}
                                          <div className="absolute inset-0 p-8 flex flex-col justify-end">

                                                {/* Tag / Numbering */}
                                                <div className="mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                      <span className="text-[10px] font-black text-[#ccff00] uppercase tracking-[0.3em] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                                            Industry 0{index + 1}
                                                      </span>
                                                </div>

                                                <h3 className="text-3xl font-black text-white mb-2 tracking-tighter group-hover:mb-4 transition-all duration-500">
                                                      {item.title}
                                                </h3>

                                                {/* The "Reveal" Text (Hidden until hover) */}
                                                <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                                                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                                            {item.description || "Tailored solutions designed to optimize performance and drive sustainable growth in this specific sector."}
                                                      </p>
                                                      <div className="flex items-center gap-2 text-[#ccff00] text-xs font-bold uppercase tracking-widest">
                                                            View Case Study <ArrowRight size={14} />
                                                      </div>
                                                </div>

                                                {/* Progress Bar Decor */}
                                                <div className="w-full h-[2px] bg-white/10 mt-6 overflow-hidden">
                                                      <div className="w-full h-full bg-[#ccff00] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
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