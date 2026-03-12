"use client";

const SolutionDynamicHero = ({ data }) => {
      const { breadcrumb, title, description, ctaText, testimonial, ratings, partners } = data || {};
      return (
            <section className="bg-[#0b1f5b] text-white py-24 px-6 lg:px-16 overflow-hidden">
                  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                              {/* Breadcrumb */}
                              <div className="text-sm text-gray-300 mb-6 flex items-center gap-2">
                                    {breadcrumb?.map((item, i) => (
                                          <span key={i} className={i === breadcrumb.length - 1 ? "text-white font-medium" : ""}>
                                                {item}
                                                {i !== breadcrumb.length - 1 && <span className="mx-2 text-gray-500">›</span>}
                                          </span>
                                    ))}
                              </div>

                              {/* Heading */}
                              <h1 className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-6 leading-tight">
                                    {title}
                              </h1>

                              {/* Description */}
                              <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-10">
                                    {description}
                              </p>

                              {/* CTA */}
                              <button className="group flex items-center gap-4 border border-white rounded-full pl-8 pr-2 py-2 text-lg font-medium hover:bg-white hover:text-[#0b1f5b] transition-all duration-300">
                                    {ctaText}
                                    <span className="flex items-center justify-center w-12 h-12 bg-white text-[#0b1f5b] rounded-full transition-transform group-hover:translate-x-1">
                                          →
                                    </span>
                              </button>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="relative">

                              {/* Testimonial Card */}
                              <div className="bg-gray-100 text-gray-800 rounded-2xl p-8 shadow-2xl max-w-md ml-auto relative">

                                    {/* Avatar */}
                                    <div className="absolute -top-12 right-10 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                          <img
                                                src={testimonial?.image}
                                                alt={testimonial?.name}
                                                className="w-full h-full object-cover"
                                          />
                                    </div>

                                    <p className="text-[15px] leading-relaxed italic text-gray-700 mt-6">
                                          {testimonial?.message}
                                    </p>

                                    <p className="mt-4 font-semibold text-gray-900">
                                          — {testimonial?.name}
                                    </p>

                                    {/* Ratings */}
                                    <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                                          {ratings?.map((rating, i) => (
                                                <div key={i} className="text-center flex-1">
                                                      <div className="text-orange-500 text-lg">★★★★★</div>
                                                      <p className="text-xs text-gray-500 mt-1">
                                                            Rated {rating.score} stars on {rating.platform}
                                                      </p>
                                                </div>
                                          ))}
                                    </div>

                              </div>

                              {/* Partner Logos */}
                              <div className="flex gap-6 mt-10 justify-end flex-wrap">
                                    {partners?.map((partner, i) => (
                                          <img
                                                key={i}
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="h-6 brightness-0 invert opacity-80"
                                          />
                                    ))}
                              </div>

                        </div>
                  </div>
            </section>
      );
};

export default SolutionDynamicHero;