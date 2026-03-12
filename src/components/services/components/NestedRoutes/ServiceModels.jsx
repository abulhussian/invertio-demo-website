import React from "react";
import { Settings, Users, Globe, CheckCircle2 } from "lucide-react";

const iconMap = {
      Settings,
      Users,
      Globe,
};

const ServiceModels = ({ content }) => {
      return (
            <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">

                  <div className="max-w-7xl mx-auto text-center px-4 py-12">
                        <h2 className="text-[40px] leading-tight font-bold text-[#001B44] mb-6">
                              {content.title}
                        </h2>

                        <p className="max-w-[1000px] mx-auto text-[18px] leading-relaxed text-[#546272]">
                              {content.description}
                        </p>
                  </div>

                  <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                              {content.models.map((item, index) => {
                                    const Icon = iconMap[item.icon];

                                    return (
                                          <div
                                                key={index}
                                                className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-10 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300"
                                          >
                                                <div className="mb-6">
                                                      <Icon className="text-[#F7A600]" size={32} />
                                                </div>

                                                <h3 className="text-[#051139] text-2xl font-bold mb-4">
                                                      {item.title}
                                                </h3>

                                                <div className="space-y-4 mb-8 flex-grow">

                                                      <p className="text-gray-600 font-medium">{item.tagline}</p>

                                                      <p className="text-gray-500 text-sm">
                                                            {item.description}
                                                      </p>

                                                      <div className="pt-4">
                                                            <p className="font-bold text-[#051139] text-sm mb-4">
                                                                  What it is:
                                                            </p>

                                                            <ul className="space-y-3">
                                                                  {item.points.map((point, i) => (
                                                                        <li key={i} className="flex gap-3 text-sm text-gray-600">
                                                                              <CheckCircle2 className="text-[#F7A600]" size={18} />
                                                                              {point}
                                                                        </li>
                                                                  ))}
                                                            </ul>
                                                      </div>

                                                      <div className="space-y-4 pt-4 text-sm">
                                                            <p className="text-gray-500">
                                                                  <span className="font-bold text-[#051139]">Billing:</span> {item.billing}
                                                            </p>

                                                            <p className="text-gray-500">
                                                                  <span className="font-bold text-[#051139]">Best for:</span> {item.bestFor}
                                                            </p>

                                                            <div>
                                                                  <p className="font-bold text-[#051139] mb-1">How it works:</p>
                                                                  <p className="text-gray-500">{item.howItWorks}</p>
                                                            </div>
                                                      </div>

                                                </div>

                                                <div className="pt-6">
                                                      <button className="w-full py-4 px-6 border border-[#051139] text-[#051139] rounded-full font-bold hover:bg-[#051139] hover:text-white transition-all">
                                                            {item.cta}
                                                      </button>
                                                </div>

                                          </div>
                                    );
                              })}

                        </div>
                  </div>
            </section>
      );
};

export default ServiceModels;