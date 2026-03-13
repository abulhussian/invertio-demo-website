"use client";

import { Users, Brain, Globe, CheckCircle2, Zap } from "lucide-react";

const iconMap = {
      brain: Brain,
      team: Users,
      globe: Globe
};

const HiringModels = ({ data }) => {
      if (!data) return null;

      return (
            <section className="py-28 bg-[#f8fafc] px-6 md:px-12 lg:px-24 relative overflow-hidden">
                  {/* Background Decor */}
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

                  <div className="max-w-7xl mx-auto relative z-10">

                        {/* Title & Narrative */}
                        <div className="text-center mb-20">
                              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/5 border border-blue-600/10 text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                                    <Zap size={14} fill="currentColor" />
                                    Tailored Engagement
                              </div>
                              <h2 className="text-5xl md:text-6xl font-black text-[#0b1f5b] tracking-tighter mb-6">
                                    {data.title}
                              </h2>
                              <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                                    {data.description}
                              </p>
                        </div>

                        {/* Models Grid */}
                        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                              {data.models.map((model, index) => {
                                    const Icon = iconMap[model.icon] || Globe;

                                    return (
                                          <div
                                                key={index}
                                                className="group relative flex flex-col bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500"
                                          >
                                                {/* 1. HEADER AREA */}
                                                <div className="mb-8">
                                                      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ccff00] group-hover:rotate-6 transition-all duration-500">
                                                            <Icon className="text-blue-600 group-hover:text-black transition-colors" size={32} />
                                                      </div>
                                                      <h3 className="text-2xl font-black text-[#0b1f5b] mb-1">
                                                            {model.title}
                                                      </h3>
                                                      <p className="text-blue-600 font-bold text-xs uppercase tracking-widest">
                                                            {model.subtitle}
                                                      </p>
                                                </div>

                                                {/* 2. DESCRIPTION */}
                                                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                                      {model.description}
                                                </p>

                                                {/* 3. CORE POINTS */}
                                                <div className="flex-grow">
                                                      <ul className="space-y-4 mb-10">
                                                            {model.points.map((point, i) => (
                                                                  <li key={i} className="flex items-start gap-3 group/item">
                                                                        <CheckCircle2 size={18} className="text-[#ccff00] mt-0.5 shrink-0" fill="black" />
                                                                        <span className="text-gray-700 text-sm font-medium group-hover/item:text-black transition-colors">
                                                                              {point}
                                                                        </span>
                                                                  </li>
                                                            ))}
                                                      </ul>
                                                </div>

                                                {/* 4. LOGISTICS BOX (Glassmorphism) */}
                                                <div className="bg-gray-50/80 backdrop-blur-sm rounded-3xl p-6 space-y-4 border border-gray-100 mb-8">
                                                      <div className="flex justify-between items-center text-[11px]">
                                                            <span className="font-black uppercase tracking-wider text-gray-400">Billing</span>
                                                            <span className="font-bold text-[#0b1f5b]">{model.billing}</span>
                                                      </div>
                                                      <div className="flex justify-between items-center text-[11px]">
                                                            <span className="font-black uppercase tracking-wider text-gray-400">Best For</span>
                                                            <span className="font-bold text-[#0b1f5b]">{model.bestFor}</span>
                                                      </div>
                                                      <div className="pt-3 border-t border-gray-200/50">
                                                            <p className="text-[10px] italic text-gray-500">
                                                                  <span className="font-bold uppercase not-italic">Process:</span> {model.howItWorks}
                                                            </p>
                                                      </div>
                                                </div>

                                                {/* 5. ACTION BUTTON */}
                                                <button className="group/btn relative w-full overflow-hidden bg-[#0b1f5b] text-white font-black uppercase tracking-widest text-xs py-5 rounded-2xl transition-all hover:bg-black active:scale-95">
                                                      <span className="relative z-10">{model.buttonText}</span>
                                                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                                </button>
                                          </div>
                                    );
                              })}
                        </div>
                  </div>
            </section>
      );
};

export default HiringModels;