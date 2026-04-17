import React from "react";
import { CheckCircle2 } from "lucide-react";

const ServicesGrid = ({ data }) => {
      if (!data || !data.services) return null;

      const { heading, description, services } = data;

      return (
            <section className="bg-white py-10 sm:py-16 md:py-20">
                  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Header */}
                        <div className="text-center mb-8 sm:mb-12 md:mb-14 px-2 sm:px-0">
                              <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight leading-tight">
                                    {heading}
                              </h2>

                              <p className="text-sm sm:text-base text-slate-600 max-w-full sm:max-w-2xl mx-auto leading-relaxed">
                                    {description}
                              </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                              {services.map((service, index) => {
                                    const isBlue = service.isHighlighted;

                                    return (
                                          <div
                                                key={index}
                                                className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border flex flex-col h-full transition-all duration-300
                ${isBlue
                                                            ? "bg-[#1d69d8] text-white border-transparent shadow-lg"
                                                            : "bg-[#f8fafc] text-slate-900 border-slate-200 hover:border-blue-400 hover:shadow-md"
                                                      }`}
                                          >
                                                {/* Title */}
                                                <h3 className="text-sm sm:text-[15px] md:text-[16px] font-semibold leading-snug mb-2 sm:mb-3 min-h-[auto] sm:min-h-[40px]">
                                                      {service.title}
                                                </h3>

                                                {/* Description */}
                                                <p
                                                      className={`text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 flex-grow
                  ${isBlue ? "text-blue-100" : "text-slate-500"}`}
                                                >
                                                      {service.description}
                                                </p>

                                                {/* Divider */}
                                                <div
                                                      className={`w-full h-[1px] mb-3 sm:mb-4 opacity-30
                  ${isBlue ? "bg-white" : "bg-slate-400"}`}
                                                />

                                                {/* Features */}
                                                <ul className="space-y-2 sm:space-y-3">
                                                      {service.features?.map((feature, idx) => (
                                                            <li
                                                                  key={idx}
                                                                  className="flex items-start gap-2 text-xs sm:text-sm font-medium"
                                                            >
                                                                  <CheckCircle2
                                                                        className={`w-4 h-4 mt-[2px] shrink-0
                        ${isBlue ? "text-white" : "text-blue-600"}`}
                                                                  />
                                                                  <span
                                                                        className={isBlue ? "text-white" : "text-slate-700"}
                                                                  >
                                                                        {feature}
                                                                  </span>
                                                            </li>
                                                      ))}
                                                </ul>
                                          </div>
                                    );
                              })}
                        </div>

                  </div>
            </section>
      );
};

export default ServicesGrid;