"use client";

import { CheckCircle } from "lucide-react";

const DiscoveryExpertise = ({ data }) => {
      if (!data) return null;

      const {
            eyebrow,
            title,
            description,
            uspTitle,
            uspList,
            clients,
            awardsTitle,
            awards
      } = data;

      return (
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                        {/* LEFT SIDE */}
                        <div>

                              <p className="text-gray-500 italic mb-2">
                                    {eyebrow}
                              </p>

                              <h2 className="text-4xl font-bold text-[#051139] mb-6 leading-tight">
                                    {title}
                              </h2>

                              <p className="text-gray-500 mb-6">
                                    {description}
                              </p>

                              <p className="font-semibold text-[#051139] mb-6">
                                    {uspTitle}
                              </p>

                              {/* USP List */}
                              <ul className="space-y-4">

                                    {uspList?.map((item, i) => (
                                          <li key={i} className="flex items-start gap-3">

                                                <CheckCircle
                                                      size={18}
                                                      className="text-yellow-500 mt-1"
                                                />

                                                <span className="text-gray-600">
                                                      {item}
                                                </span>

                                          </li>
                                    ))}

                              </ul>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="space-y-10">

                              {/* Client Logos */}
                              <div className="grid grid-cols-5 gap-4">

                                    {clients?.map((logo, i) => (
                                          <div
                                                key={i}
                                                className="bg-gray-50 rounded-lg p-4 flex items-center justify-center"
                                          >
                                                <img
                                                      src={logo}
                                                      alt="client"
                                                      className="h-6 object-contain"
                                                />
                                          </div>
                                    ))}

                              </div>

                              {/* Awards */}
                              <div>

                                    <h3 className="font-semibold text-[#051139] mb-4">
                                          {awardsTitle}
                                    </h3>

                                    <div className="grid grid-cols-3 gap-4">

                                          {awards?.map((award, i) => (
                                                <div
                                                      key={i}
                                                      className="border rounded-xl p-6 flex items-center justify-center"
                                                >
                                                      <img
                                                            src={award}
                                                            alt="award"
                                                            className="h-10 object-contain"
                                                      />
                                                </div>
                                          ))}

                                    </div>

                              </div>

                        </div>

                  </div>
            </section>
      );
};

export default DiscoveryExpertise;