"use client";

const SolutionDynamicHero = ({ data }) => {
      const { breadcrumb, title, description, ctaText, testimonial, ratings, partners } = data || {};

      return (
            <section className="relative bg-[#020617] text-white py-16 lg:py-28 px-6 overflow-hidden">

                  {/* 1. THE EDITORIAL LAYER: Large Watermark & Floating Orbs */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[20vw] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
                        {data?.highlight || "Premium"}
                  </div>
                  <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
                  <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full" />

                  <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">

                              {/* 2. THE CONTENT LAYER (6 Columns) */}
                              <div className="lg:col-span-6 space-y-8">
                                    {/* Pill Breadcrumb from Minimalist Style */}
                                    <nav className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                                          {breadcrumb?.map((item, i) => (
                                                <span key={i} className="flex items-center text-[10px] font-black uppercase tracking-[0.2em]">
                                                      <span className={i === breadcrumb.length - 1 ? "text-yellow-400" : "text-gray-400"}>{item}</span>
                                                      {i !== breadcrumb.length - 1 && <span className="mx-2 text-white/20">/</span>}
                                                </span>
                                          ))}
                                    </nav>

                                    <h1 className="text-6xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tighter">
                                          {title?.split(data?.highlight || "").map((part, i) => (
                                                <span key={i}>
                                                      {part}
                                                      {i === 0 && (
                                                            <span className="relative inline-block">
                                                                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
                                                                        {data?.highlight}
                                                                  </span>
                                                                  {/* Abstract underline */}
                                                                  <span className="absolute bottom-2 left-0 w-full h-4 bg-blue-600/30 -rotate-1 -z-10" />
                                                            </span>
                                                      )}
                                                </span>
                                          )) || title}
                                    </h1>

                                    <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-lg border-l-2 border-blue-500/50 pl-6">
                                          {description}
                                    </p>

                                    {/* Brutalist Button with Glow */}
                                    <div className="flex flex-wrap items-center gap-6">
                                          <button className="group relative px-10 py-5 bg-[#ccff00] text-black rounded-2xl font-black text-xl hover:translate-x-1 hover:-translate-y-1 transition-all shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(59,130,246,1)]">
                                                {ctaText}
                                          </button>

                                          <div className="hidden sm:block">
                                                <div className="text-sm font-bold text-white mb-1">Excellent Reputation</div>
                                                <div className="flex text-yellow-400 text-xs">{"★".repeat(5)}</div>
                                          </div>
                                    </div>
                              </div>

                              {/* 3. THE DASHBOARD LAYER (6 Columns) */}
                              <div className="lg:col-span-6 relative">

                                    {/* Floating Glass Testimonial */}
                                    <div className="relative z-20 bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-10 shadow-2xl overflow-hidden">
                                          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />

                                          <div className="flex items-center gap-4 mb-8">
                                                <img src={testimonial?.image} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white/5" alt="" />
                                                <div>
                                                      <div className="font-bold text-lg">{testimonial?.name}</div>
                                                      <div className="text-yellow-400 text-xs font-black uppercase tracking-widest">Verified Expert</div>
                                                </div>
                                          </div>

                                          <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed italic text-gray-200 mb-8">
                                                "{testimonial?.message}"
                                          </blockquote>

                                          {/* Integrated Ratings Bar */}
                                          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                                                {ratings?.slice(0, 3).map((rating, i) => (
                                                      <div key={i} className="text-center lg:text-left">
                                                            <div className="text-white font-black text-lg">{rating.score}</div>
                                                            <div className="text-[9px] uppercase text-gray-500 font-bold tracking-tighter">{rating.platform}</div>
                                                      </div>
                                                ))}
                                          </div>
                                    </div>

                                    {/* Decorative "Status" Tags floating behind */}
                                    <div className="absolute -top-6 -right-6 bg-blue-600 px-6 py-3 rounded-2xl font-bold text-sm shadow-xl z-30 animate-bounce transition-all duration-1000">
                                          Live Data
                                    </div>
                                    <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl z-30">
                                          <div className="flex gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                                <div className="w-2 h-2 rounded-full bg-green-500/20" />
                                          </div>
                                    </div>
                              </div>

                        </div>

                        {/* 4. THE PARTNER LAYER: Sliding Bar Style */}
                        <div className="mt-24">
                              <p className="text-center text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 mb-10">Trusted Global Partners</p>
                              <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                                    {partners?.map((partner, i) => (
                                          <img key={i} src={partner.logo} alt={partner.name} className="h-6 w-auto invert object-contain" />
                                    ))}
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default SolutionDynamicHero;