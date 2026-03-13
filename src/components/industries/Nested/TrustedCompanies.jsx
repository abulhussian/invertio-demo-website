"use client";

const TrustedCompanies = ({ data }) => {
      if (!data) return null;

      const { title, highlight, suffix, logos = [] } = data;

      const duplicatedLogos = [...logos, ...logos];

      return (
            <section className="bg-white py-20 overflow-hidden">
                  <div className="max-w-7xl mx-auto px-6">

                        {/* Title */}
                        <div className="flex flex-col items-center mb-14">
                              <h2 className="text-gray-700 text-xl md:text-2xl font-semibold text-center">
                                    {title}{" "}
                                    <span className="text-orange-500 font-bold">{highlight}</span>{" "}
                                    {suffix}
                              </h2>
                        </div>

                        {/* Slider */}
                        <div className="relative">

                              {/* Left Fade */}
                              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

                              {/* Right Fade */}
                              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                              <div className="flex overflow-hidden group border-y border-gray-200 py-10">
                                    <div className="flex animate-scroll gap-16 items-center whitespace-nowrap">

                                          {duplicatedLogos.map((logo, index) => (
                                                <div key={index} className="flex-shrink-0 px-4">
                                                      <img
                                                            src={logo.src}
                                                            alt={logo.name}
                                                            className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                                                      />
                                                </div>
                                          ))}

                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Animation */}
                  <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 35s linear infinite;
        }

        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
            </section>
      );
};

export default TrustedCompanies;