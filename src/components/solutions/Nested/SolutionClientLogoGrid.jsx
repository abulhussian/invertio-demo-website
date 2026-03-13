"use client";

const SolutionClientLogoGrid = ({ data }) => {
      if (!data || !data.logos) return null;
      const { title, highlight, logos } = data;
      const duplicatedLogos = [...logos, ...logos, ...logos]; // Triple for smoother extra-wide screens

      return (
            <section className="bg-[#020617] py-20 overflow-hidden">
                  <div className="max-w-7xl mx-auto px-6">

                        {/* Modern Label Style */}
                        <div className="flex flex-col items-center mb-16">
                              <span className="text-blue-500 text-xs font-black uppercase tracking-[0.3em] mb-4">Social Proof</span>
                              <h2 className="text-white text-2xl lg:text-3xl font-bold text-center">
                                    {title} <span className="text-[#ccff00] italic">{highlight}</span>
                              </h2>
                        </div>

                        {/* The Marquee with Gradient Mask */}
                        <div className="relative">
                              {/* LEFT FADE */}
                              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
                              {/* RIGHT FADE */}
                              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

                              <div className="flex overflow-hidden group border-y border-white/5 py-12">
                                    <div className="flex animate-scroll gap-16 items-center whitespace-nowrap">
                                          {duplicatedLogos.map((logo, index) => (
                                                <div key={index} className="flex-shrink-0 px-4">
                                                      <img
                                                            src={logo.src}
                                                            alt={logo.name}
                                                            className="h-8 lg:h-10 w-auto object-contain opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-500 invert brightness-200"
                                                      />
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>

                  <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
            </section>
      );
};

export default SolutionClientLogoGrid