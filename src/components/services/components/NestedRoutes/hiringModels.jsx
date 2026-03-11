"use client";

import { Users, Brain, Globe } from "lucide-react";

const iconMap = {
      Brain,
      Users,
      Globe,
};

export default function HiringModels({ data }) {
      return (
            <section className="py-20 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-6">

                        {/* Heading */}
                        <div className="text-center mb-16">
                              <h2 className="text-4xl font-bold text-[#0B2A5B]">
                                    {data?.title}
                              </h2>

                              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                                    {data?.description}
                              </p>
                        </div>

                        {/* Cards */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {data?.models?.map((model, index) => {

                                    const Icon = iconMap[model.icon];

                                    return (
                                          <div
                                                key={index}
                                                className="bg-white rounded-xl border p-8 shadow-sm hover:shadow-md transition"
                                          >

                                                {/* Icon */}
                                                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-orange-100 mb-4">
                                                      {Icon && <Icon className="text-orange-500" size={20} />}
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-lg font-semibold text-[#0B2A5B]">
                                                      {model.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="mt-3 text-gray-600 text-sm">
                                                      {model.description1}
                                                </p>

                                                <p className="text-gray-600 text-sm mb-4">
                                                      {model.description2}
                                                </p>

                                                {/* What it is */}
                                                <h4 className="font-semibold text-sm mb-2">
                                                      What it is:
                                                </h4>

                                                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                                                      {model.points?.map((point, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                  <span className="text-orange-500 mt-[3px]">●</span>
                                                                  {point}
                                                            </li>
                                                      ))}
                                                </ul>

                                                {/* Billing */}
                                                <p className="text-sm text-gray-600 mb-2">
                                                      <span className="font-semibold text-black">Billing:</span>{" "}
                                                      {model.billing}
                                                </p>

                                                {/* Best For */}
                                                <p className="text-sm text-gray-600 mb-2">
                                                      <span className="font-semibold text-black">Best for:</span>{" "}
                                                      {model.bestFor}
                                                </p>

                                                {/* How it works */}
                                                <p className="text-sm text-gray-600 mb-8">
                                                      <span className="font-semibold text-black">
                                                            How it works:
                                                      </span>{" "}
                                                      {model.how}
                                                </p>

                                                {/* Button */}
                                                <button className="w-full border border-[#0B2A5B] text-[#0B2A5B] py-2 rounded-full hover:bg-[#0B2A5B] hover:text-white transition">
                                                      {model.button}
                                                </button>

                                          </div>
                                    );
                              })}
                        </div>

                  </div>
            </section>
      );
}