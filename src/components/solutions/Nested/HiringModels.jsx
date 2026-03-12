"use client";

import { Users, Brain, Globe } from "lucide-react";

const iconMap = {
      brain: Brain,
      team: Users,
      globe: Globe
};

const HiringModels = ({ data }) => {

      if (!data) return null;

      return (
            <section className="py-24 bg-gray-50 px-6">
                  <div className="max-w-7xl mx-auto">

                        {/* Title */}
                        <div className="text-center mb-16">
                              <h2 className="text-4xl font-bold text-[#0b1f5b]">
                                    {data.title}
                              </h2>

                              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                                    {data.description}
                              </p>
                        </div>

                        {/* Cards */}
                        <div className="grid md:grid-cols-3 gap-8">

                              {data.models.map((model, index) => {

                                    const Icon = iconMap[model.icon];

                                    return (
                                          <div
                                                key={index}
                                                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition"
                                          >

                                                {/* Icon */}
                                                <Icon className="text-yellow-500 mb-4" size={36} />

                                                {/* Title */}
                                                <h3 className="text-xl font-semibold text-[#0b1f5b]">
                                                      {model.title}
                                                </h3>

                                                <p className="text-gray-600 mt-2">
                                                      {model.subtitle}
                                                </p>

                                                <p className="text-gray-500 mt-3">
                                                      {model.description}
                                                </p>

                                                {/* Points */}
                                                <ul className="mt-6 space-y-2 text-gray-600">
                                                      {model.points.map((point, i) => (
                                                            <li key={i}>• {point}</li>
                                                      ))}
                                                </ul>

                                                {/* Billing */}
                                                <p className="mt-4 text-sm">
                                                      <strong>Billing:</strong> {model.billing}
                                                </p>

                                                {/* Best For */}
                                                <p className="text-sm mt-2">
                                                      <strong>Best for:</strong> {model.bestFor}
                                                </p>

                                                {/* How it works */}
                                                <p className="text-sm mt-2">
                                                      <strong>How it works:</strong> {model.howItWorks}
                                                </p>

                                                {/* Button */}
                                                <button className="mt-6 w-full border border-[#0b1f5b] text-[#0b1f5b] py-2 rounded-full hover:bg-[#0b1f5b] hover:text-white transition">
                                                      {model.buttonText}
                                                </button>

                                          </div>
                                    );
                              })}

                        </div>

                  </div>
            </section>
      );
};

export default HiringModels;