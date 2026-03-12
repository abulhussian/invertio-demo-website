"use client";

import { CheckCircle } from "lucide-react";

const DiscoveryServices = ({ data }) => {
      if (!data) return null;

      const { title, description, services } = data;

      return (
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                  <div className="max-w-7xl mx-auto">

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-[#051139] mb-4">
                              {title}
                        </h2>

                        <p className="text-gray-500 max-w-3xl mb-12">
                              {description}
                        </p>

                        {/* Services Grid */}
                        <div className="grid md:grid-cols-2 gap-6">

                              {services?.map((service, index) => (
                                    <div
                                          key={index}
                                          className="border rounded-xl p-8 hover:shadow-md transition"
                                    >

                                          {/* Card Title */}
                                          <h3 className="font-semibold text-[#051139] mb-3 pb-2 border-b border-yellow-400">
                                                {service.title}
                                          </h3>

                                          <p className="text-gray-500 text-sm mb-4">
                                                {service.description}
                                          </p>

                                          {/* Points */}
                                          <ul className="space-y-3">

                                                {service.points?.map((point, i) => (
                                                      <li key={i} className="flex items-start gap-3">

                                                            <CheckCircle
                                                                  size={16}
                                                                  className="text-yellow-500 mt-1"
                                                            />

                                                            <span className="text-gray-600 text-sm">
                                                                  {point}
                                                            </span>

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

export default DiscoveryServices;