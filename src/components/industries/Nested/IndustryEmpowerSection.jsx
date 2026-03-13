"use client";

const IndustryEmpowerSection = ({ data }) => {
      if (!data) return null;

      const { title, description, points = [], logos = [], awards = [], awardsTitle } = data;

      const duplicatedLogos = [...logos, ...logos];

      return (
            <section className="py-24 bg-white px-6">
                  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT SIDE */}
                        <div>

                              <h2 className="text-4xl font-bold text-[#0f2a44] mb-6">
                                    {title}
                              </h2>

                              <p className="text-gray-600 mb-8">
                                    {description}
                              </p>

                              <ul className="space-y-3">
                                    {points.map((point, index) => (
                                          <li key={index} className="flex items-start gap-3 text-gray-700">
                                                <span className="text-orange-500 mt-1">●</span>
                                                {point}
                                          </li>
                                    ))}
                              </ul>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="space-y-10">

                              {/* Scrolling Logos */}
                              <div className="overflow-hidden">
                                    <div className="flex animate-scroll gap-10 items-center whitespace-nowrap">
                                          {duplicatedLogos.map((logo, index) => (
                                                <img
                                                      key={index}
                                                      src={logo}
                                                      className="h-10 w-auto opacity-80"
                                                />
                                          ))}
                                    </div>
                              </div>

                              {/* Awards */}
                              <div>

                                    <h4 className="font-semibold text-[#0f2a44] mb-6">
                                          {awardsTitle}
                                    </h4>

                                    <div className="grid grid-cols-3 gap-6">

                                          {awards.map((award, index) => (
                                                <div
                                                      key={index}
                                                      className="border rounded-lg p-4 flex items-center justify-center"
                                                >
                                                      <img
                                                            src={award.logo}
                                                            alt={award.name}
                                                            className="h-8 object-contain"
                                                      />
                                                </div>
                                          ))}

                                    </div>

                              </div>

                        </div>

                  </div>

                  {/* Scroll Animation */}
                  <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>

            </section>
      );
};

export default IndustryEmpowerSection;