"use client";

const AIUseCases = ({ content }) => {
      return (
            <section className="bg-white py-16 px-6 lg:px-16 font-sans">
                  <div className="max-w-7xl mx-auto">

                        {/* Title */}
                        <h2 className="text-[36px] md:text-[42px] font-bold text-[#001B44] mb-4">
                              {content.title}
                        </h2>

                        <p className="text-[#546272] text-lg mb-12 max-w-5xl">
                              {content.description}
                        </p>

                        <h3 className="text-2xl font-bold text-[#001B44] mb-8">
                              {content.categoryTitle}
                        </h3>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                              {content.cases.map((item, i) => (
                                    <div
                                          key={i}
                                          className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                                    >

                                          <h4 className="text-xl font-bold text-[#001B44] mb-2">
                                                {item.title}
                                          </h4>

                                          <p className="text-gray-500 mb-6">
                                                {item.description}
                                          </p>

                                          <ul className="space-y-3">
                                                {item.points.map((point, idx) => (
                                                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                                                            <span className="text-orange-400">✔</span>
                                                            {point}
                                                      </li>
                                                ))}
                                          </ul>

                                    </div>
                              ))}

                        </div>

                  </div>
            </section>
      );
};

export default AIUseCases;