import React from "react";

const DynamicHero = ({ content }) => {
      return (
            <section className="bg-[#0b1f5b] text-white py-24 px-6 lg:px-16 overflow-hidden">
                  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <div>

                              {/* Breadcrumb */}
                              <nav className="text-sm text-gray-300 mb-6 flex items-center gap-1">
                                    {content.breadcrumb.map((item, i) => (
                                          <div key={i} className="flex items-center gap-1">
                                                <span className={i === content.breadcrumb.length - 1 ? "text-white font-medium" : ""}>
                                                      {item}
                                                </span>

                                                {i < content.breadcrumb.length - 1 && (
                                                      <span className="text-gray-500">›</span>
                                                )}
                                          </div>
                                    ))}
                              </nav>

                              <h1 className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-6 leading-tight">
                                    {content.title}
                              </h1>

                              <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-10">
                                    {content.description}
                              </p>

                              <button className="group flex items-center gap-4 border border-white rounded-full pl-8 pr-2 py-2 text-lg font-medium hover:bg-white hover:text-[#0b1f5b] transition-all duration-300">
                                    {content.cta}

                                    <span className="flex items-center justify-center w-12 h-12 bg-white text-[#0b1f5b] rounded-full transition-transform group-hover:translate-x-1">
                                          →
                                    </span>
                              </button>
                        </div>

                        {/* Testimonial */}
                        <div className="relative">
                              <div className="bg-gray-100 text-gray-800 rounded-2xl p-8 relative shadow-2xl max-w-md ml-auto">

                                    <div className="absolute -top-10 right-10 w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                                          <img
                                                src={content.testimonial.avatar}
                                                alt={content.testimonial.author}
                                                className="w-full h-full object-cover"
                                          />
                                    </div>

                                    <div className="text-[15px] leading-relaxed mt-6 italic text-gray-700">
                                          {content.testimonial.text}
                                    </div>

                                    <p className="mt-4 font-bold text-gray-900">
                                          — {content.testimonial.author}
                                    </p>

                                    <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                                          {content.testimonial.ratings.map((rating, i) => (
                                                <div key={i} className="text-center">
                                                      <div className="text-orange-500 text-lg">{rating.stars}</div>
                                                      <p className="text-[10px] uppercase tracking-wider text-gray-500 mt-1 font-bold">
                                                            {rating.label}
                                                      </p>
                                                </div>
                                          ))}
                                    </div>

                              </div>

                              {/* Partner Logos */}
                              <div className="flex gap-6 mt-10 justify-end items-center flex-wrap opacity-80">
                                    {content.partners.map((partner, i) => (
                                          <img
                                                key={i}
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="h-6 brightness-0 invert"
                                          />
                                    ))}
                              </div>

                        </div>

                  </div>
            </section>
      );
};

export default DynamicHero;