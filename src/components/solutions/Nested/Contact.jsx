"use client";

import React from "react";
import {
      Phone,
      Mail,
      Award,
      Users,
      Star,
      ChevronDown,
      ArrowRight,
      ShieldCheck,
      Zap,
} from "lucide-react";

const Contact = () => {
      return (
            <section className="bg-[#020617] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                  {/* Background Decorative Elements */}
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full" />
                  <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full" />

                  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">

                        {/* LEFT COLUMN: Trust & Authority */}
                        <div className="lg:col-span-5 space-y-12">
                              <div>
                                    <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                                          <Zap size={14} fill="currentColor" />
                                          Direct Access
                                    </div>
                                    <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8">
                                          Let's build <br />
                                          <span className="text-amber-500 italic">the future.</span>
                                    </h2>

                                    <div className="flex gap-8 text-white/60 font-bold text-sm">
                                          <a href="tel:+" className="flex items-center gap-2 hover:text-amber-500 transition-colors group">
                                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-500/50">
                                                      <Phone size={16} />
                                                </div>
                                                Book A Call
                                          </a>
                                          <a href="mailto:info@example.com" className="flex items-center gap-2 hover:text-amber-500 transition-colors group">
                                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-500/50">
                                                      <Mail size={16} />
                                                </div>
                                                Email Us
                                          </a>
                                    </div>
                              </div>

                              {/* Stats Cards */}
                              <div className="space-y-4">
                                    {[
                                          { icon: <Award size={20} />, title: "20+ Years Experience", desc: "Complex enterprise-grade architectures.", color: "text-blue-400" },
                                          { icon: <Users size={20} />, title: "4500+ Clients", desc: "From stealth startups to Fortune 500s.", color: "text-amber-400" },
                                          { icon: <Star size={20} />, title: "700+ Experts", desc: "Top 1% specialized industry talent.", color: "text-emerald-400" },
                                    ].map((stat, i) => (
                                          <div key={i} className="flex gap-5 p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all group">
                                                <div className={`${stat.color} p-3 rounded-2xl bg-white/[0.03] group-hover:scale-110 transition-transform`}>
                                                      {stat.icon}
                                                </div>
                                                <div>
                                                      <h4 className="font-bold text-white text-lg leading-none mb-1">{stat.title}</h4>
                                                      <p className="text-gray-500 text-sm font-medium">{stat.desc}</p>
                                                </div>
                                          </div>
                                    ))}
                              </div>

                              {/* Trust Badges */}
                              <div className="pt-6 border-t border-white/5">
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-6">Preferred Partner Of</p>
                                    <div className="flex gap-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                                          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="h-5" alt="Microsoft" />
                                          <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" className="h-5" alt="AWS" />
                                          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Cloud_Logo.svg" className="h-5" alt="Google" />
                                    </div>
                              </div>
                        </div>

                        {/* RIGHT COLUMN: The Command Center Form */}
                        <div className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-14 shadow-2xl relative">
                              <div className="absolute top-8 right-12 hidden md:block">
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                                          <ShieldCheck size={14} /> 8h Response Guarantee
                                    </div>
                              </div>

                              <h3 className="text-[#020617] text-4xl font-black tracking-tight mb-2">Book Free Consultation</h3>
                              <p className="text-gray-400 font-medium mb-12">Share your project brief and our strategy team will reach out.</p>

                              <form className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                          <div className="group space-y-2">
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name *</label>
                                                <input type="text" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-amber-500 transition-all outline-none font-medium placeholder:text-gray-300" placeholder="John Doe" />
                                          </div>
                                          <div className="group space-y-2">
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address *</label>
                                                <input type="email" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-amber-500 transition-all outline-none font-medium placeholder:text-gray-300" placeholder="john@company.com" />
                                          </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                          <div className="group space-y-2">
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                                                <input type="tel" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-amber-500 transition-all outline-none font-medium placeholder:text-gray-300" placeholder="+1 (555) 000-0000" />
                                          </div>
                                          <div className="group space-y-2 relative">
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Project Category *</label>
                                                <select className="w-full bg-gray-50 border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-amber-500 transition-all outline-none font-medium appearance-none cursor-pointer">
                                                      <option>Artificial Intelligence</option>
                                                      <option>Web Development</option>
                                                      <option>Mobile Apps</option>
                                                </select>
                                                <ChevronDown className="absolute right-6 top-[54px] text-gray-400 pointer-events-none" size={18} />
                                          </div>
                                    </div>

                                    <div className="group space-y-2">
                                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Project Brief *</label>
                                          <div className="relative">
                                                <textarea rows="5" className="w-full bg-gray-50 border-none rounded-[2rem] px-6 py-6 focus:ring-2 focus:ring-amber-500 transition-all outline-none font-medium resize-none placeholder:text-gray-300" placeholder="Tell us about your goals..."></textarea>
                                                <div className="absolute bottom-4 left-4">
                                                      <button type="button" className="bg-white border border-gray-100 px-4 py-2 rounded-xl text-[10px] font-black text-gray-500 hover:bg-gray-50 transition-colors shadow-sm uppercase">
                                                            Attach Files +
                                                      </button>
                                                </div>
                                          </div>
                                    </div>

                                    <button className="w-full bg-[#020617] text-white py-6 rounded-[2rem] font-black text-lg flex items-center justify-center gap-4 hover:bg-amber-500 transition-all duration-500 group shadow-2xl shadow-blue-900/20">
                                          INITIATE PROJECT
                                          <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                              </form>
                        </div>
                  </div>

                  {/* Footer Tags: Maximalist List */}
                  <div className="max-w-7xl mx-auto mt-32 border-t border-white/5 pt-12">
                        <p className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] mb-8 text-center">Industry Leading Specializations</p>
                        <div className="flex flex-wrap justify-center gap-3">
                              {[
                                    "Artificial Intelligence Services", "AI Development", "AI Implementation",
                                    "MCP Engineering", "Chatbot Development", "Cloud Architecture"
                              ].map((tag) => (
                                    <span key={tag} className="bg-white/5 border border-white/5 rounded-full px-6 py-3 text-[11px] font-bold text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all cursor-pointer">
                                          {tag}
                                    </span>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default Contact;