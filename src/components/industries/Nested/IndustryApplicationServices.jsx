"use client";

const IndustryApplicationServices = ({ data }) => {
      if (!data) return null;

      const { title, description, services = [] } = data;

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

                        {/* Services Grid */}
                        <div className="grid md:grid-cols-2 gap-12">

                              {services.map((service, index) => (
                                    <div key={index} className="border-t-4 border-orange-400 pt-6">

                                          <h3 className="text-lg font-semibold text-[#0f2a44] mb-3">
                                                {service.title}
                                          </h3>

                                          <p className="text-gray-600 mb-4 text-sm">
                                                {service.description}
                                          </p>

                                          <ul className="space-y-2">
                                                {service.points?.map((point, i) => (
                                                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                            <span className="text-orange-500 mt-1">•</span>
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

export default IndustryApplicationServices;