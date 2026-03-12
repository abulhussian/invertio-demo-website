import React from "react";

const VisionToExecution = ({ content }) => {
      return (
            <section className="py-16 px-6 lg:px-16">
                  <div className="max-w-7xl mx-auto bg-[#0b1f5b] rounded-[32px] overflow-hidden relative min-h-[400px] flex items-center p-8 lg:p-16">

                        {/* Background Decorative Waves */}
                        <div className="absolute left-0 bottom-0 opacity-10">
                              <svg width="200" height="200" viewBox="0 0 200 200">
                                    <path d="M0 100 Q 25 75 50 100 T 100 100 T 150 100 T 200 100" fill="none" stroke="white" strokeWidth="2" />
                                    <path d="M0 120 Q 25 95 50 120 T 100 120 T 150 120 T 200 120" fill="none" stroke="white" strokeWidth="2" />
                              </svg>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center w-full z-10">

                              {/* Left Content */}
                              <div>
                                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                          {content.title}
                                    </h2>

                                    <p className="text-gray-300 text-lg mb-10 max-w-md">
                                          {content.description}
                                    </p>

                                    <button className="group flex items-center gap-4 border border-white rounded-full pl-8 pr-2 py-2 text-lg font-medium text-white hover:bg-white hover:text-[#0b1f5b] transition-all duration-300">
                                          {content.cta}
                                          <span className="flex items-center justify-center w-10 h-10 bg-white text-[#0b1f5b] rounded-full">
                                                →
                                          </span>
                                    </button>
                              </div>

                              {/* Right Content */}
                              <div className="relative hidden lg:block h-[300px]">

                                    {content.teamCards.map((person, i) => (
                                          <div
                                                key={i}
                                                className={`absolute ${i === 0 ? "top-10 right-10" : "bottom-10 left-10"
                                                      } bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex items-center gap-4 w-60 shadow-2xl`}
                                          >
                                                <img
                                                      src={person.avatar}
                                                      className="w-12 h-12 rounded-xl object-cover"
                                                      alt={person.name}
                                                />
                                                <div>
                                                      <p className="text-white font-bold text-sm">{person.name}</p>
                                                      <p className="text-gray-400 text-[10px] uppercase tracking-wider">
                                                            {person.role}
                                                      </p>
                                                </div>
                                          </div>
                                    ))}

                                    {content.floatingAvatars.map((avatar, i) => (
                                          <img
                                                key={i}
                                                src={avatar}
                                                className={`absolute ${i === 0 ? "top-0 left-20 w-10 h-10" : "bottom-4 right-32 w-8 h-8"
                                                      } rounded-full border-2 border-white/30`}
                                                alt="team"
                                          />
                                    ))}

                              </div>

                        </div>
                  </div>
            </section>
      );
};

export default VisionToExecution;