import React from "react";
import { ArrowRight } from "lucide-react";

const CircularStats = ({ text, value, subValue }) => {
      return (
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center group">
                  <svg
                        className="absolute w-full h-full animate-spin-slow group-hover:pause"
                        viewBox="0 0 100 100"
                  >
                        <defs>
                              <path
                                    id="circlePath"
                                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                              />
                        </defs>

                        <text className="text-[8px] uppercase tracking-[0.2em] fill-white/30 font-medium">
                              <textPath xlinkHref="#circlePath">
                                    {text} • {text} • {text} •
                              </textPath>
                        </text>
                  </svg>

                  <div className="text-center z-10">
                        <div className="text-xl md:text-2xl font-bold text-white">
                              {value}
                        </div>

                        <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider">
                              {subValue}
                        </div>
                  </div>
            </div>
      );
};

const StrategyCTA = ({ data }) => {
      return (
            <section className="bg-[#051139] py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
                  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

                        {/* LEFT CONTENT */}
                        <div className="max-w-2xl text-center lg:text-left">

                              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    {data?.title}
                              </h2>

                              <p className="text-white/60 text-lg mb-10 max-w-lg">
                                    {data?.description}
                              </p>

                              <div className="flex justify-center lg:justify-start">
                                    <button className="group relative flex items-center gap-6 border border-white/30 rounded-full pl-8 pr-2 py-2 hover:bg-white hover:text-[#051139] transition-all duration-300">

                                          <span className="text-sm md:text-base font-bold text-white group-hover:text-[#051139]">
                                                {data?.buttonText}
                                          </span>

                                          <div className="bg-white text-[#051139] rounded-full p-3 shadow-lg group-hover:bg-[#051139] group-hover:text-white transition-all">
                                                <ArrowRight size={20} strokeWidth={3} />
                                          </div>

                                    </button>
                              </div>

                        </div>

                        {/* RIGHT SIDE STATS */}
                        <div className="flex flex-wrap justify-center gap-6 md:gap-12">

                              {data?.stats?.map((item, index) => (
                                    <CircularStats
                                          key={index}
                                          text={item.text}
                                          value={item.value}
                                          subValue={item.subValue}
                                    />
                              ))}

                        </div>

                  </div>
            </section>
      );
};

export default StrategyCTA;