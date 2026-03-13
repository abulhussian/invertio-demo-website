"use client";

import { CheckCircle, ArrowUpRight } from "lucide-react";

const DiscoveryServices = ({ data }) => {
      if (!data) return null;

      const { title, description, services } = data;

      return (
            <section className="relative py-24 px-6 bg-[#fcfcfd] overflow-hidden">
                  {/* Background Decor: Soft Mesh Gradient */}
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 blur-[100px] rounded-full pointer-events-none" />

                  <div className="max-w-7xl mx-auto relative z-10">

                        {/* Heading Section */}
                        <div className="max-w-3xl mb-16">
                              <div className="flex items-center gap-2 mb-4">
                                    <span className="w-8 h-[2px] bg-yellow-400" />
                                    <span className="text-xs font-black uppercase tracking-widest text-blue-600">Expertise</span>
                              </div>
                              <h2 className="text-4xl md:text-5xl font-black text-[#051139] mb-6 tracking-tight">
                                    {title}
                              </h2>
                              <p className="text-gray-500 text-lg leading-relaxed">
                                    {description}
                              </p>
                        </div>

                        {/* Services Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                              {services?.map((service, index) => (
                                    <div
                                          key={index}
                                          className="group relative bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2"
                                    >
                                          {/* Decorative Corner Icon */}
                                          <div className="absolute top-6 right-6 text-gray-200 group-hover:text-yellow-400 transition-colors duration-300">
                                                <ArrowUpRight size={24} />
                                          </div>

                                          {/* Card Title with Animated Underline */}
                                          <h3 className="text-2xl font-bold text-[#051139] mb-4 flex items-center gap-3">
                                                <span className="w-2 h-6 bg-yellow-400 rounded-full" />
                                                {service.title}
                                          </h3>

                                          <p className="text-gray-500 text-base leading-relaxed mb-8">
                                                {service.description}
                                          </p>

                                          {/* Points: Multi-column on larger screens */}
                                          <ul className="grid sm:grid-cols-2 gap-4">
                                                {service.points?.map((point, i) => (
                                                      <li key={i} className="flex items-start gap-3 group/item">
                                                            <div className="mt-1 bg-yellow-50 p-1 rounded-md group-hover/item:bg-yellow-400 transition-colors">
                                                                  <CheckCircle
                                                                        size={14}
                                                                        className="text-yellow-600 group-hover/item:text-white transition-colors"
                                                                  />
                                                            </div>
                                                            <span className="text-gray-600 text-sm font-medium">
                                                                  {point}
                                                            </span>
                                                      </li>
                                                ))}
                                          </ul>

                                          {/* Bottom Glow Effect */}
                                          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default DiscoveryServices;