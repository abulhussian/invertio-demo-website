import React from 'react'

import { Play, Star, ChevronLeft, ChevronRight } from 'lucide-react';
const SolutionClientTestimonials = () => {

      return (
            <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
                  <div className="max-w-7xl mx-auto">

                        {/* Header Section */}
                        <div className="text-center mb-16">
                              <h2 className="text-[#051139] text-4xl md:text-5xl font-bold mb-6">
                                    What Our Clients Have to Say About Us
                              </h2>
                              <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
                                    We are grateful for our clientstrust in us, and we take great pride in delivering quality solutions that exceed their expectations.
                                    Here is what some of them have to say about us:
                              </p>
                        </div>

                        {/* Main Testimonial Area */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

                              {/* Video Thumbnail */}
                              <div className="relative group cursor-pointer overflow-hidden rounded-[2rem] shadow-2xl aspect-video lg:aspect-auto lg:h-[400px]">
                                    <img
                                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                                          alt="Client Video Testimonial"
                                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                          <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                                                <Play fill="currentColor" size={32} className="ml-1" />
                                          </div>
                                    </div>
                              </div>

                              {/* Quote Content */}
                              <div className="relative pl-0 lg:pl-10">
                                    {/* Giant Quote Mark Background */}
                                    <span className="absolute -top-10 left-0 lg:left-10 text-[120px] leading-none text-amber-100 font-serif select-none">“</span>

                                    <div className="relative z-10">
                                          <p className="text-gray-600 text-xl md:text-2xl italic leading-relaxed mb-8">
                                                The team at ValueCoders has provided us with exceptional services in creating this one-of-a-kind portal,
                                                and it has been a fantastic experience. I was particularly impressed by how efficiently and quickly the
                                                team always came up with creative solutions to provide us with all the functionalities we had requested.
                                          </p>

                                          <div className="space-y-1">
                                                <h4 className="text-[#051139] text-2xl font-bold">Judith Mueller</h4>
                                                <p className="text-gray-400 font-medium text-lg">Executive Director, Mueller Health Foundation</p>
                                                <div className="flex text-amber-500 gap-1 pt-2">
                                                      {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {/* Client Slider/Switcher */}
                        <div className="relative flex items-center">

                              {/* Left Arrow */}
                              <button className="hidden md:flex absolute -left-12 w-10 h-10 border border-gray-200 rounded-full items-center justify-center text-gray-400 hover:bg-[#051139] hover:text-white transition-colors">
                                    <ChevronLeft size={24} />
                              </button>

                              {/* Client Cards Grid */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">

                                    {/* Active Card */}
                                    <div className="bg-white border-b-4 border-amber-500 shadow-xl p-6 rounded-2xl flex items-center gap-4 transition-all">
                                          <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100" className="w-14 h-14 rounded-full object-cover" alt="Judith" />
                                          <div>
                                                <h5 className="text-[#051139] font-bold">Judith Mueller</h5>
                                                <p className="text-xs text-gray-400 uppercase tracking-wider">Executive Director</p>
                                          </div>
                                    </div>

                                    {/* Inactive Card 1 */}
                                    <div className="bg-white border border-gray-100 p-6 rounded-2xl flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" className="w-14 h-14 rounded-full object-cover grayscale" alt="James" />
                                          <div>
                                                <h5 className="text-[#051139] font-bold">James Kelly</h5>
                                                <p className="text-xs text-gray-400 uppercase tracking-wider">Co-founder, Miracle Choice</p>
                                          </div>
                                    </div>

                                    {/* Inactive Card 2 */}
                                    <div className="bg-white border border-gray-100 p-6 rounded-2xl flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                                          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" className="w-14 h-14 rounded-full object-cover grayscale" alt="Kris" />
                                          <div>
                                                <h5 className="text-[#051139] font-bold">Kris Bruynson</h5>
                                                <p className="text-xs text-gray-400 uppercase tracking-wider">Director</p>
                                          </div>
                                    </div>

                                    {/* Inactive Card 3 */}
                                    <div className="bg-white border border-gray-100 p-6 rounded-2xl flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                                          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" className="w-14 h-14 rounded-full object-cover grayscale" alt="Mohammed" />
                                          <div>
                                                <h5 className="text-[#051139] font-bold">Mohammed Mirza</h5>
                                                <p className="text-xs text-gray-400 uppercase tracking-wider">Director</p>
                                          </div>
                                    </div>

                              </div>

                              {/* Right Arrow */}
                              <button className="hidden md:flex absolute -right-12 w-10 h-10 border border-gray-200 rounded-full items-center justify-center text-gray-400 hover:bg-[#051139] hover:text-white transition-colors">
                                    <ChevronRight size={24} />
                              </button>
                        </div>
                  </div>
            </section>
      );
};



export default SolutionClientTestimonials