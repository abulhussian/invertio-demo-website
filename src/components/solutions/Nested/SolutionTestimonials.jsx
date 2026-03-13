"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, PlayCircle, Star } from "lucide-react";

const SolutionTestimonials = ({ data }) => {
      const [activeIndex, setActiveIndex] = useState(0);

      if (!data || !data.items) return null;

      const { title, description, items } = data;
      const active = items[activeIndex];

      const next = () => {
            setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
      };

      const prev = () => {
            setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
      };

      return (
            <section className="py-28 bg-[#020617] text-white px-6 md:px-12 lg:px-24 overflow-hidden relative">
                  {/* Decorative background glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

                  <div className="max-w-7xl mx-auto relative z-10">

                        {/* Header: High Impact */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                              <div className="max-w-2xl">
                                    <div className="flex items-center gap-3 text-[#ccff00] mb-4">
                                          <Star size={16} fill="currentColor" />
                                          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Customer Success</span>
                                    </div>
                                    <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
                                          {title}
                                    </h2>
                              </div>
                              <p className="text-gray-400 text-lg max-w-sm border-l-2 border-white/10 pl-6 hidden lg:block">
                                    {description}
                              </p>
                        </div>

                        {/* Main Stage: Video & Quote Split */}
                        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">

                              {/* Video Container (7 Columns) */}
                              <div className="lg:col-span-7 relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-[#ccff00] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                    <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-black border border-white/10 shadow-2xl">
                                          <video
                                                key={active.video} // Forces reload on change
                                                src={active.video}
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                                controls
                                          />
                                          {/* Overlay Play Indicator (Visual Only) */}
                                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-500">
                                                {!active.isPlaying && <PlayCircle size={80} className="text-white/20" strokeWidth={1} />}
                                          </div>
                                    </div>
                              </div>

                              {/* Quote Container (5 Columns) */}
                              <div className="lg:col-span-5 relative">
                                    <Quote className="absolute -top-10 -left-6 text-[#ccff00]/10 w-32 h-32 -z-10" strokeWidth={3} />

                                    <div className="space-y-6">
                                          <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                      <Star key={i} size={14} fill={i < active.rating ? "#ccff00" : "none"} className={i < active.rating ? "text-[#ccff00]" : "text-white/20"} />
                                                ))}
                                          </div>

                                          <p className="text-2xl md:text-3xl font-medium leading-tight tracking-tight text-white italic">
                                                "{active.quote}"
                                          </p>

                                          <div className="pt-8 border-t border-white/10">
                                                <h4 className="text-2xl font-black text-white">{active.name}</h4>
                                                <p className="text-[#ccff00] font-bold text-xs uppercase tracking-widest mt-1">
                                                      {active.role}
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* Dynamic Selector: Thumbnail Navigation */}
                        <div className="flex items-center gap-6">
                              <button
                                    onClick={prev}
                                    className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
                              >
                                    <ChevronLeft size={24} className="group-active:-translate-x-1 transition-transform" />
                              </button>

                              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {items.map((item, index) => {
                                          const isActive = activeIndex === index;
                                          return (
                                                <div
                                                      key={index}
                                                      onClick={() => setActiveIndex(index)}
                                                      className={`relative p-6 rounded-[1.5rem] cursor-pointer transition-all duration-500 overflow-hidden group/thumb ${isActive
                                                            ? "bg-white/10 border-white/20 ring-1 ring-[#ccff00]/50"
                                                            : "bg-white/5 border-transparent hover:bg-white/[0.08]"
                                                            } border`}
                                                >
                                                      <div className="relative z-10">
                                                            <h5 className={`font-black text-sm uppercase tracking-tighter transition-colors ${isActive ? "text-[#ccff00]" : "text-gray-400 group-hover/thumb:text-white"
                                                                  }`}>
                                                                  {item.name}
                                                            </h5>
                                                            <p className="text-[10px] text-gray-500 font-bold uppercase truncate">
                                                                  {item.role}
                                                            </p>
                                                      </div>

                                                      {/* Active Progress Bar */}
                                                      {isActive && (
                                                            <div className="absolute bottom-0 left-0 h-1 bg-[#ccff00] animate-[shimmer_2s_infinite]">
                                                                  <div className="w-full h-full" />
                                                            </div>
                                                      )}
                                                </div>
                                          );
                                    })}
                              </div>

                              <button
                                    onClick={next}
                                    className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-[#ccff00] hover:text-black transition-all group"
                              >
                                    <ChevronRight size={24} className="group-active:translate-x-1 transition-transform" />
                              </button>
                        </div>
                  </div>

                  <style jsx>{`
        @keyframes shimmer {
          0% { width: 0%; opacity: 0; }
          50% { width: 100%; opacity: 1; }
          100% { width: 100%; opacity: 0; }
        }
      `}</style>
            </section>
      );
};

export default SolutionTestimonials;