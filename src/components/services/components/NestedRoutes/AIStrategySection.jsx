"use client";

const AIStrategySection = ({ content }) => {
      return (
            <section className="bg-[#0b1f5b] text-white py-20 px-6 lg:px-16">
                  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

                        {/* Left */}
                        <div className="lg:w-1/2">
                              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    {content.title}
                              </h2>

                              <p className="text-gray-300 text-lg mb-10 max-w-lg">
                                    {content.description}
                              </p>

                              <button className="group flex items-center gap-4 border border-white rounded-full pl-8 pr-2 py-2 text-lg font-medium hover:bg-white hover:text-[#0b1f5b] transition-all">
                                    {content.cta}

                                    <span className="flex items-center justify-center w-10 h-10 bg-white text-[#0b1f5b] rounded-full">
                                          →
                                    </span>
                              </button>
                        </div>

                        {/* Stats */}
                        <div className="lg:w-1/2 flex justify-center lg:justify-end gap-4 md:gap-8">

                              {content.stats.map((stat, i) => (
                                    <div
                                          key={i}
                                          className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
                                    >
                                          <CircularText text={stat.circleText} id={`circle-${i}`} />

                                          <div className="text-center absolute">
                                                <div className="text-xl md:text-2xl font-bold">
                                                      {stat.value}
                                                </div>

                                                <div className="text-[10px] md:text-xs text-gray-400 uppercase">
                                                      {stat.label}
                                                </div>
                                          </div>

                                    </div>
                              ))}

                        </div>
                  </div>
            </section>
      );
};

const CircularText = ({ text, id }) => (
      <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-[spin_10s_linear_infinite] opacity-40">
            <defs>
                  <path id={id} d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="text-[8px] uppercase tracking-[2px] fill-current">
                  <textPath xlinkHref={`#${id}`}>{text}</textPath>
            </text>
      </svg>
);

export default AIStrategySection;