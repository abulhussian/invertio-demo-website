import React from "react";
import { CheckCircle2 } from "lucide-react";

const ServicesGrid = ({ data }) => {
      if (!data || !data.services) return null;

      const { heading, description, services } = data;

      return (
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-[1400px] mx-auto">

                        {/* Header */}
                        <div className="text-center mb-14">
                              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 tracking-tight">
                                    {heading}
                              </h2>
                              <p className="text-[15px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                                    {description}
                              </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                              {services.map((service, index) => {
                                    const isBlue = service.isHighlighted;

                                    return (
                                          <div
                                                key={index}
                                                className={`p-6 rounded-2xl border flex flex-col h-full transition-all duration-300
                ${isBlue
                                                            ? "bg-[#1d69d8] text-white border-transparent shadow-lg"
                                                            : "bg-[#f8fafc] text-slate-900 border-slate-200 hover:border-blue-400 hover:shadow-md"
                                                      }`}
                                          >
                                                {/* Title */}
                                                <h3 className="text-[16px] font-semibold leading-snug mb-4 min-h-[40px] tracking-tight">
                                                      {service.title}
                                                </h3>

                                                {/* Description */}
                                                <p
                                                      className={`text-[13px] leading-relaxed mb-6 flex-grow
                  ${isBlue
                                                                  ? "text-blue-100"
                                                                  : "text-slate-500"
                                                            }`}
                                                >
                                                      {service.description}
                                                </p>

                                                {/* Divider */}
                                                <div
                                                      className={`w-full h-[1px] mb-5 opacity-30
                  ${isBlue ? "bg-white" : "bg-slate-400"}`}
                                                />

                                                {/* Features */}
                                                <ul className="space-y-3">
                                                      {service.features?.map((feature, idx) => (
                                                            <li
                                                                  key={idx}
                                                                  className="flex items-start gap-2 text-[12.5px] font-medium"
                                                            >
                                                                  <CheckCircle2
                                                                        className={`w-4 h-4 mt-[2px] shrink-0
                        ${isBlue ? "text-white" : "text-blue-600"
                                                                              }`}
                                                                  />
                                                                  <span
                                                                        className={
                                                                              isBlue ? "text-white" : "text-slate-700"
                                                                        }
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