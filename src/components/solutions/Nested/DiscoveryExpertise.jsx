"use client";

import { CheckCircle, Trophy, Globe } from "lucide-react";

const DiscoveryExpertise = ({ data }) => {
      if (!data) return null;

      const {
            eyebrow,
            title,
            description,
            uspTitle,
            uspList,
            clients,
            awardsTitle,
            awards
      } = data;

      return (
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
                  {/* Subtle background element */}
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 -skew-x-12 translate-x-1/2 pointer-events-none" />

                  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

                        {/* LEFT SIDE: Narrative & USPs */}
                        <div className="relative z-10">
                              <div className="flex items-center gap-3 mb-4">
                                    <Globe className="text-blue-600" size={18} />
                                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600/60">
                                          {eyebrow}
                                    </span>
                              </div>

                              <h2 className="text-4xl lg:text-5xl font-black text-[#051139] mb-8 leading-[1.1] tracking-tight">
                                    {title}
                              </h2>

                              <p className="text-gray-500 text-lg leading-relaxed mb-10 border-l-4 border-yellow-400 pl-6">
                                    {description}
                              </p>

                              <div className="space-y-6">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">
                                          {uspTitle}
                                    </h4>
                                    <ul className="grid sm:grid-cols-1 gap-4">
                                          {uspList?.map((item, i) => (
                                                <li key={i} className="flex items-center gap-4 group">
                                                      <div className="bg-blue-50 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                                            <CheckCircle size={18} className="text-blue-600 group-hover:text-white" />
                                                      </div>
                                                      <span className="text-[#051139] font-medium transition-colors group-hover:text-blue-600">
                                                            {item}
                                                      </span>
                                                </li>
                                          ))}
                                    </ul>
                              </div>
                        </div>

                        {/* RIGHT SIDE: The Trust Wall */}
                        <div className="relative">
                              <div className="bg-[#051139] rounded-[3rem] p-10 lg:p-14 shadow-2xl relative overflow-hidden">
                                    {/* Background pattern inside the dark box */}
                                    <div className="absolute inset-0 opacity-[0.03]"
                                          style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />

                                    {/* Clients Section */}
                                    <div className="mb-12 relative z-10">
                                          <p className="text-blue-300/50 text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-center">
                                                Global Network
                                          </p>
                                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                                {clients?.map((logo, i) => (
                                                      <div
                                                            key={i}
                                                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                                                      >
                                                            <img
                                                                  src={logo}
                                                                  alt="client"
                                                                  className="h-5 lg:h-6 object-contain invert brightness-200 opacity-60 group-hover:opacity-100 transition-opacity"
                                                            />
                                                      </div>
                                                ))}
                                          </div>
                                    </div>

                                    {/* Awards Section */}
                                    <div className="relative z-10 pt-10 border-t border-white/10">
                                          <div className="flex items-center justify-between mb-8">
                                                <h3 className="text-white font-bold text-lg flex items-center gap-3">
                                                      <Trophy className="text-yellow-400" size={20} />
                                                      {awardsTitle}
                                                </h3>
                                          </div>

                                          <div className="grid grid-cols-2 gap-4">
                                                {awards?.map((award, i) => (
                                                      <div
                                                            key={i}
                                                            className="bg-gradient-to-br from-white/10 to-transparent border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center group hover:border-yellow-400/50 transition-all"
                                                      >
                                                            <img
                                                                  src={award}
                                                                  alt="award"
                                                                  className="h-12 w-auto object-contain mb-2 grayscale group-hover:grayscale-0 transition-all"
                                                            />
                                                            <div className="h-1 w-8 bg-yellow-400/20 group-hover:w-12 group-hover:bg-yellow-400 transition-all mt-2 rounded-full" />
                                                      </div>
                                                ))}
                                          </div>
                                    </div>
                              </div>

                              {/* Floating Decorative Tag */}
                              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-[#051139] px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl animate-bounce">
                                    Top Rated Agency
                              </div>
                        </div>

                  </div>
            </section>
      );
};

export default DiscoveryExpertise;