"use client";

import { ArrowRight, Zap } from "lucide-react";

const CASection = ({ data }) => {
      if (!data) return null;

      const { title, description, buttonText, stats } = data;

      return (
            <section className="bg-[#020617] text-white py-28 px-6 md:px-12 lg:px-24 overflow-hidden relative">

                  {/* 1. AMBIENT BACKGROUND LAYER */}
                  <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

                  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

                        {/* LEFT CONTENT: High-Impact Typography */}
                        <div className="space-y-8">
                              <div className="flex items-center gap-3 text-yellow-400">
                                    <Zap size={20} fill="currentColor" />
                                    <span className="text-xs font-black uppercase tracking-[0.4em]">Next Level Growth</span>
                              </div>

                              <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
                                    {title}
                              </h2>

                              <p className="text-gray-400 text-xl max-w-lg leading-relaxed border-l-2 border-white/10 pl-8">
                                    {description}
                              </p>

                              <button className="group relative inline-flex items-center gap-6 bg-white text-black px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#ccff00] transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl">
                                    {buttonText}
                                    <div className="bg-black text-white rounded-full p-2 group-hover:rotate-45 transition-transform duration-500">
                                          <ArrowRight size={22} />
                                    </div>
                              </button>
                        </div>

                        {/* RIGHT CONTENT: High-Tech Rotating Gauges */}
                        <div className="flex flex-wrap justify-center lg:justify-end gap-12 relative">
                              {stats?.map((item, i) => (
                                    <div key={i} className="group relative w-[180px] h-[180px] flex items-center justify-center">

                                          {/* Outer Decorative Glow Ring */}
                                          <div className="absolute inset-0 border border-white/5 rounded-full group-hover:border-yellow-400/30 transition-colors duration-700" />
                                          <div className="absolute inset-4 border border-white/10 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />

                                          {/* Rotating SVG Text Path */}
                                          <svg
                                                viewBox="0 0 200 200"
                                                className="absolute w-full h-full animate-[spin_10s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite] transition-all"
                                          >
                                                <defs>
                                                      <path
                                                            id={`circlePath${i}`}
                                                            d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                                                      />
                                                </defs>

                                                <text fill="rgba(255,255,255,0.4)" fontSize="11" fontWeight="900" letterSpacing="5" className="uppercase group-hover:fill-yellow-400 transition-colors">
                                                      <textPath href={`#circlePath${i}`}>
                                                            {item.circleText} • {item.circleText} •
                                                      </textPath>
                                                </text>
                                          </svg>

                                          {/* Center Statistical Core */}
                                          <div className="relative z-10 bg-white/5 backdrop-blur-xl w-32 h-32 rounded-full flex flex-col items-center justify-center border border-white/10 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                                <span className="text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-300 group-hover:to-orange-500">
                                                      {item.value}
                                                </span>
                                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                                                      {item.label}
                                                </span>
                                          </div>

                                          {/* Ambient Pulse behind the circle */}
                                          <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                              ))}
                        </div>

                  </div>

                  <style jsx>{`
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
            </section>
      );
};

export default CASection;