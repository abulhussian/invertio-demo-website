"use client";

import Link from "next/link";

const IndustryInsights = ({ data }) => {
      if (!data) return null;

      const { items = [] } = data;

      return (
            <section className="bg-white w-full overflow-hidden">
                  {/* Grid with no gaps and no padding */}
                  <div className="grid md:grid-cols-2 w-full">
                        {items.map((item, index) => {
                              // Determine if this is a "text-first" or "image-first" block
                              // This creates the alternating pattern seen in the image
                              const isReversed = index % 2 !== 0;

                              return (
                                    <div key={index} className="grid grid-cols-2 h-[320px] w-full">
                                          {/* Image Side */}
                                          <div className={`relative h-full overflow-hidden ${isReversed ? 'order-2' : 'order-1'}`}>
                                                <img
                                                      src={item.image}
                                                      alt={item.title}
                                                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                />
                                          </div>

                                          {/* Text Side */}
                                          <div
                                                className={`p-8 flex flex-col justify-between ${isReversed ? 'order-1' : 'order-2'} 
                ${item.type === "blog" ? "bg-[#0a1942]" : "bg-[#2d0a0a]"}`}
                                          >
                                                <div>
                                                      {/* Tag */}
                                                      <span className="inline-block border border-white/50 text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded">
                                                            {item.type === "blog" ? "Blog" : "Case Study"}
                                                      </span>

                                                      {/* Title */}
                                                      <h3 className="text-white text-xl font-bold mt-4 leading-tight">
                                                            {item.title}
                                                      </h3>

                                                      {/* Description */}
                                                      <p className="text-gray-300 text-xs mt-3 line-clamp-3 leading-relaxed">
                                                            {item.description}
                                                      </p>

                                                      {/* Core Tech (Only for Case Studies) */}
                                                      {item.coreTech && (
                                                            <p className="text-gray-400 text-xs mt-4">
                                                                  <span className="font-semibold text-white/80">Core tech</span> &nbsp; {item.coreTech}
                                                            </p>
                                                      )}
                                                </div>

                                                {/* Learn More */}
                                                <Link
                                                      href={item.link || "#"}
                                                      className="text-white text-xs font-medium flex items-center gap-2 hover:underline"
                                                >
                                                      Learn More
                                                      <span className="border border-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">→</span>
                                                </Link>
                                          </div>
                                    </div>
                              );
                        })}
                  </div>
            </section>
      );
};

export default IndustryInsights;