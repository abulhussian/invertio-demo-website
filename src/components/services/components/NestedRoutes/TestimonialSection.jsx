"use client";

import React, { useState } from "react";

export default function TestimonialSection({ data }) {

      const [activeIdx, setActiveIdx] = useState(0);

      const testimonials = data?.items || [];
      const current = testimonials[activeIdx];

      if (!current) return null;

      return (
            <section className="py-20 px-8 bg-white max-w-7xl mx-auto">

                  {/* Header */}
                  <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-[#0a1128] mb-4">
                              {data?.title}
                        </h2>

                        <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
                              {data?.description}
                        </p>
                  </div>

                  {/* Main Content */}
                  <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">

                        {/* Video */}
                        <div className="w-full lg:w-1/2 relative group cursor-pointer">
                              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gray-200">

                                    <img
                                          src={current.thumbnail}
                                          alt="Video Thumbnail"
                                          className="w-full h-full object-cover"
                                    />

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                ▶
                                          </div>
                                    </div>

                              </div>
                        </div>

                        {/* Text */}
                        <div className="w-full lg:w-1/2 relative pl-8 border-l border-gray-100">

                              <div className="absolute top-0 left-0 -translate-x-4 -translate-y-6 text-8xl text-orange-50 opacity-10 font-serif">
                                    “
                              </div>

                              <p className="text-gray-600 text-lg leading-relaxed italic mb-8">
                                    {current.feedback}
                              </p>

                              <div>
                                    <h4 className="text-xl font-bold text-gray-900">
                                          {current.name}
                                    </h4>

                                    <p className="text-gray-500">
                                          {current.position}, {current.company}
                                    </p>

                                    <div className="flex gap-1 mt-2 text-orange-400">
                                          {[...Array(5)].map((_, i) => (
                                                <span key={i}>★</span>
                                          ))}
                                    </div>

                              </div>
                        </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-4">

                        <button
                              onClick={() =>
                                    setActiveIdx((prev) =>
                                          prev === 0 ? testimonials.length - 1 : prev - 1
                                    )
                              }
                              className="text-gray-400 hover:text-blue-600"
                        >
                              ←
                        </button>

                        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">

                              {testimonials.map((item, idx) => (
                                    <div
                                          key={idx}
                                          onClick={() => setActiveIdx(idx)}
                                          className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4 ${activeIdx === idx
                                                ? "border-orange-500 shadow-md ring-1 ring-orange-500"
                                                : "border-gray-100 bg-gray-50/50 hover:bg-white"
                                                }`}
                                    >

                                          <img
                                                src={item.avatar}
                                                className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                                                alt={item.name}
                                          />

                                          <div className="hidden md:block">
                                                <p className="text-sm font-bold text-gray-700">
                                                      {item.name}
                                                </p>

                                                <p className="text-[10px] text-gray-400 uppercase tracking-tighter">
                                                      {item.position}
                                                </p>
                                          </div>

                                    </div>
                              ))}

                        </div>

                        <button
                              onClick={() =>
                                    setActiveIdx((prev) =>
                                          prev === testimonials.length - 1 ? 0 : prev + 1
                                    )
                              }
                              className="text-gray-400 hover:text-blue-600"
                        >
                              →
                        </button>

                  </div>

            </section>
      );
}