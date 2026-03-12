import React from "react";
import { Play, Star, ChevronLeft, ChevronRight } from "lucide-react";

const ClientTestimonials = ({ content }) => {
      return (
            <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
                  <div className="max-w-7xl mx-auto">

                        {/* Header */}
                        <div className="text-center mb-16">
                              <h2 className="text-[#051139] text-4xl md:text-5xl font-bold mb-6">
                                    {content.title}
                              </h2>

                              <p className="text-gray-500 text-lg max-w-4xl mx-auto">
                                    {content.description}
                              </p>
                        </div>

                        {/* Featured Testimonial */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

                              {/* Video */}
                              <div className="relative group cursor-pointer overflow-hidden rounded-[2rem] shadow-2xl aspect-video lg:h-[400px]">
                                    <img
                                          src={content.featured.videoThumbnail}
                                          alt="Client Video"
                                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                          <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg">
                                                <Play fill="currentColor" size={32} className="ml-1" />
                                          </div>
                                    </div>
                              </div>

                              {/* Quote */}
                              <div className="relative lg:pl-10">
                                    <span className="absolute -top-10 left-0 text-[120px] text-amber-100 font-serif">
                                          “
                                    </span>

                                    <p className="text-gray-600 text-xl italic mb-8">
                                          {content.featured.quote}
                                    </p>

                                    <div>
                                          <h4 className="text-[#051139] text-2xl font-bold">
                                                {content.featured.name}
                                          </h4>

                                          <p className="text-gray-400">{content.featured.role}</p>

                                          <div className="flex text-amber-500 gap-1 pt-2">
                                                {[...Array(content.featured.rating)].map((_, i) => (
                                                      <Star key={i} size={20} fill="currentColor" />
                                                ))}
                                          </div>
                                    </div>
                              </div>

                        </div>

                        {/* Client Cards */}
                        <div className="relative flex items-center">

                              <button className="hidden md:flex absolute -left-12 w-10 h-10 border border-gray-200 rounded-full items-center justify-center text-gray-400 hover:bg-[#051139] hover:text-white">
                                    <ChevronLeft size={24} />
                              </button>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                                    {content.items.map((client, i) => (
                                          <div
                                                key={i}
                                                className="bg-white border border-gray-100 p-6 rounded-2xl flex items-center gap-4"
                                          >
                                                <img
                                                      src={client.image}
                                                      className="w-14 h-14 rounded-full object-cover"
                                                />

                                                <div>
                                                      <h5 className="text-[#051139] font-bold">
                                                            {client.name}
                                                      </h5>

                                                      <p className="text-xs text-gray-400 uppercase">
                                                            {client.role}
                                                      </p>
                                                </div>

                                          </div>
                                    ))}
                              </div>

                              <button className="hidden md:flex absolute -right-12 w-10 h-10 border border-gray-200 rounded-full items-center justify-center text-gray-400 hover:bg-[#051139] hover:text-white">
                                    <ChevronRight size={24} />
                              </button>

                        </div>

                  </div>
            </section>
      );
};

export default ClientTestimonials;