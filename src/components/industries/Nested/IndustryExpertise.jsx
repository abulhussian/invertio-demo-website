"use client";

const IndustryExpertise = ({ data }) => {
      if (!data) return null;

      const { title, description, items = [] } = data;

      return (
            <section className="bg-white py-24 px-6">
                  <div className="max-w-7xl mx-auto">

                        {/* Header */}
                        <div className="grid lg:grid-cols-2 gap-12 mb-16">
                              <h2 className="text-4xl font-bold text-[#0f2a44]">
                                    {title}
                              </h2>

                              <p className="text-gray-600 max-w-xl">
                                    {description}
                              </p>
                        </div>

                        {/* Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                              {items.map((item, index) => (
                                    <div
                                          key={index}
                                          className="border-t-4 border-orange-400 pt-6 flex flex-col justify-between"
                                    >

                                          <div>
                                                <h3 className="text-lg font-semibold text-[#0f2a44] mb-3">
                                                      {item.title}
                                                </h3>

                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                      {item.description}
                                                </p>
                                          </div>

                                          {/* Bottom Arrow */}
                                          <div className="flex justify-end mt-10 border-t pt-4">
                                                <button className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
                                                      →
                                                </button>
                                          </div>

                                    </div>
                              ))}

                        </div>

                  </div>
            </section>
      );
};

export default IndustryExpertise;