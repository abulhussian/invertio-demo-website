"use client";

const IndustryTestimonials = ({ data }) => {
      if (!data) return null;

      const { title, description, items = [] } = data;

      return (
            <section className="py-24 bg-white px-6">
                  <div className="max-w-7xl mx-auto">

                        {/* Header */}
                        <div className="text-center mb-16">
                              <h2 className="text-4xl font-bold text-[#0f2a44] mb-4">
                                    {title}
                              </h2>
                              <p className="text-gray-600 max-w-2xl mx-auto">
                                    {description}
                              </p>
                        </div>

                        {/* Cards */}
                        <div className="grid md:grid-cols-3 gap-8">

                              {items.map((item, index) => (
                                    <div
                                          key={index}
                                          className="border rounded-lg overflow-hidden shadow-sm"
                                    >

                                          {/* Thumbnail */}
                                          <div className="relative">
                                                <img
                                                      src={item.thumbnail}
                                                      alt={item.name}
                                                      className="w-full h-48 object-cover"
                                                />

                                                {/* Play Button */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                      <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl">
                                                            ▶
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Content */}
                                          <div className="p-6 text-center">

                                                <p className="text-gray-600 text-sm mb-4">
                                                      {item.review}
                                                </p>

                                                {/* Stars */}
                                                <div className="text-yellow-400 mb-3">
                                                      {"★".repeat(item.rating)}
                                                </div>

                                                <h4 className="font-semibold text-[#0f2a44]">
                                                      {item.name}
                                                </h4>

                                                <p className="text-sm text-gray-500">
                                                      {item.role}
                                                </p>

                                          </div>

                                    </div>
                              ))}

                        </div>

                  </div>
            </section>
      );
};

export default IndustryTestimonials;