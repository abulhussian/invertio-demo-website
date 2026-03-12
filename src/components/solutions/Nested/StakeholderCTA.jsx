"use client";

import { ArrowRight } from "lucide-react";

const StakeholderCTA = ({ data }) => {
      if (!data) return null;

      const { title, description, buttonText, avatars } = data;

      return (
            <section className="px-6 md:px-12 lg:px-24 py-16">
                  <div className="max-w-7xl mx-auto">

                        <div className="relative bg-gradient-to-r from-[#0d1c4a] to-[#162a6b] rounded-2xl p-12 overflow-hidden">

                              <div className="grid lg:grid-cols-2 items-center gap-10">

                                    {/* LEFT SIDE */}
                                    <div>
                                          <h2 className="text-white text-3xl font-bold mb-4">
                                                {title}
                                          </h2>

                                          <p className="text-gray-300 max-w-md mb-6">
                                                {description}
                                          </p>

                                          <button className="flex items-center gap-3 border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#0d1c4a] transition">

                                                {buttonText}

                                                <span className="bg-white text-[#0d1c4a] rounded-full p-1">
                                                      <ArrowRight size={18} />
                                                </span>

                                          </button>
                                    </div>

                                    {/* RIGHT SIDE AVATARS */}
                                    <div className="relative h-[120px] hidden md:block">

                                          {avatars?.map((item, i) => (
                                                <div
                                                      key={i}
                                                      className="absolute bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-md"
                                                      style={{ top: item.top, left: item.left }}
                                                >

                                                      <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-8 h-8 rounded-full object-cover"
                                                      />

                                                      <div className="text-xs">
                                                            <p className="font-semibold text-[#051139]">
                                                                  {item.name}
                                                            </p>

                                                            <p className="text-gray-500">
                                                                  {item.role}
                                                            </p>
                                                      </div>

                                                </div>
                                          ))}

                                    </div>

                              </div>

                        </div>

                  </div>
            </section>
      );
};

export default StakeholderCTA;