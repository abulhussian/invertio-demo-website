"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

const IndustriesSection = ({ data }) => {
      if (!data) return null;

      const { title, description, industries } = data;

      return (
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#f8f9fb]">
                  <div className="max-w-7xl mx-auto">

                        {/* Header */}
                        <div className="flex justify-between items-start mb-10">
                              <div>
                                    <h2 className="text-4xl font-bold text-[#051139] mb-3">
                                          {title}
                                    </h2>

                                    <p className="text-gray-500 max-w-xl">
                                          {description}
                                    </p>
                              </div>

                              {/* Arrows */}
                              <div className="flex gap-3">
                                    <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white">
                                          <ArrowLeft size={18} />
                                    </button>

                                    <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white">
                                          <ArrowRight size={18} />
                                    </button>
                              </div>
                        </div>

                        {/* Industry Cards */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                              {industries?.map((item, index) => (
                                    <div
                                          key={index}
                                          className="relative rounded-xl overflow-hidden group"
                                    >
                                          <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
                                          />

                                          {/* Overlay */}
                                          <div className="absolute inset-0 bg-black/30 flex items-end p-6">

                                                <h3 className="text-white font-semibold text-lg">
                                                      {item.title}
                                                </h3>

                                          </div>
                                    </div>
                              ))}

                        </div>
                  </div>
            </section>
      );
};

export default IndustriesSection;