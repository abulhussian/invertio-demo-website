"use client";

import { ArrowRight, Sparkles } from "lucide-react";

const StakeholderCTA = ({ data }) => {
      if (!data) return null;

      const { title, description, buttonText, avatars } = data;

      return (
            <section className="px-6 md:px-12 lg:px-24 py-20 bg-white">
                  <div className="max-w-7xl mx-auto">
                        <div className="relative bg-[#051139] rounded-[2.5rem] p-8 md:p-16 overflow-hidden shadow-2xl shadow-blue-900/20">

                              {/* 1. ARCHITECTURAL BACKGROUND ELEMENTS */}
                              <div className="absolute inset-0 opacity-10"
                                    style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
                              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full" />
                              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-yellow-500/10 blur-[80px] rounded-full" />

                              <div className="grid lg:grid-cols-2 items-center gap-16 relative z-10">

                                    {/* LEFT SIDE: Persuasive Content */}
                                    <div className="space-y-8">
                                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-xs font-bold uppercase tracking-widest">
                                                <Sparkles size={14} />
                                                Ready to scale?
                                          </div>

                                          <h2 className="text-white text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
                                                {title}
                                          </h2>

                                          <p className="text-blue-100/70 text-lg md:text-xl max-w-md leading-relaxed">
                                                {description}
                                          </p>

                                          <button className="group relative flex items-center gap-4 bg-[#ccff00] text-black px-8 py-4 rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                                                {buttonText}
                                                <div className="bg-black text-white rounded-lg p-1 group-hover:translate-x-1 transition-transform">
                                                      <ArrowRight size={20} />
                                                </div>
                                          </button>
                                    </div>

                                    {/* RIGHT SIDE: Animated Floating Stakeholders */}
                                    <div className="relative h-[300px] lg:h-[400px] hidden md:block">
                                          {avatars?.map((item, i) => (
                                                <div
                                                      key={i}
                                                      className="absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl animate-float transition-all duration-500 hover:bg-white hover:scale-110 group cursor-default"
                                                      style={{
                                                            top: item.top,
                                                            left: item.left,
                                                            animationDelay: `${i * 0.5}s`,
                                                            animationDuration: '6s'
                                                      }}
                                                >
                                                      <div className="relative">
                                                            <img
                                                                  src={item.image}
                                                                  alt={item.name}
                                                                  className="w-10 h-10 rounded-xl object-cover ring-2 ring-white/20 group-hover:ring-blue-500/50 transition-all"
                                                            />
                                                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#051139] rounded-full" />
                                                      </div>

                                                      <div>
                                                            <p className="font-bold text-white group-hover:text-[#051139] text-sm transition-colors leading-none mb-1">
                                                                  {item.name}
                                                            </p>
                                                            <p className="text-blue-200 group-hover:text-gray-500 text-[10px] font-medium uppercase tracking-wider transition-colors">
                                                                  {item.role}
                                                            </p>
                                                      </div>
                                                </div>
                                          ))}
                                    </div>

                              </div>
                        </div>
                  </div>

                  <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
            </section>
      );
};

export default StakeholderCTA;