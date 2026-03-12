"use client";

const EmpowerSection = ({ content }) => {
      return (
            <section className="bg-white py-20 px-6 lg:px-16 font-sans">
                  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                        {/* Left */}
                        <div>
                              <h2 className="text-[40px] leading-tight font-bold text-[#001B44] mb-6">
                                    {content.title}
                              </h2>

                              <p className="text-gray-500 font-medium mb-6">
                                    {content.subtitle}
                              </p>

                              <p className="text-gray-500 mb-10 leading-relaxed">
                                    {content.description}
                              </p>

                              <ul className="space-y-4">
                                    {content.points.map((item, i) => (
                                          <li key={i} className="flex items-center gap-3 text-[#001B44] font-medium">
                                                <span className="text-orange-400">✔</span>
                                                {item}
                                          </li>
                                    ))}
                              </ul>
                        </div>

                        {/* Right */}
                        <div className="flex flex-col gap-10">

                              {/* Logo Grid */}
                              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                                    {[...Array(content.logoGridCount)].map((_, i) => (
                                          <div
                                                key={i}
                                                className="aspect-[2/1] bg-white border border-gray-100 shadow-sm rounded-md flex items-center justify-center p-2"
                                          >
                                                <div className="w-full h-full bg-gray-50 animate-pulse rounded"></div>
                                          </div>
                                    ))}
                              </div>

                              {/* Awards */}
                              <div>
                                    <h4 className="text-[#001B44] font-bold mb-6 flex items-center gap-2">
                                          {content.awardsTitle}
                                          <span className="w-8 h-[2px] bg-[#001B44]"></span>
                                    </h4>

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                          {content.awards.map((award, i) => (
                                                <div
                                                      key={i}
                                                      className="border border-gray-100 rounded-xl p-4 text-center shadow-sm"
                                                >
                                                      <p className="font-bold">{award.title}</p>

                                                      {award.rating && (
                                                            <p className="text-sm text-gray-500">{award.rating}</p>
                                                      )}

                                                      {award.subtitle && (
                                                            <p className="text-xs text-gray-400">{award.subtitle}</p>
                                                      )}

                                                      {award.stars && (
                                                            <div className="text-orange-500 text-xs">{award.stars}</div>
                                                      )}
                                                </div>
                                          ))}
                                    </div>

                              </div>

                        </div>
                  </div>
            </section>
      );
};

export default EmpowerSection;