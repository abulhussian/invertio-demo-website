"use client";

import React from 'react';
import { Phone, Mail, Award, Users, Star, ChevronDown, ArrowRight } from 'lucide-react';

const ContactConsultation = () => {
      return (
            <section className="bg-[#fcfbf7] py-20 px-6 md:px-12 lg:px-24">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* LEFT COLUMN: Trust Signals */}
                        <div className="lg:col-span-4 space-y-12">
                              {/* Contact Links */}
                              <div className="flex gap-6 text-[#051139] font-medium">
                                    <a href="#" className="flex items-center gap-2 hover:text-amber-600 transition">
                                          <Phone size={18} /> Book A Call
                                    </a>
                                    <a href="#" className="flex items-center gap-2 hover:text-amber-600 transition">
                                          <Mail size={18} /> Email us
                                    </a>
                              </div>

                              <div className="space-y-10">
                                    <h3 className="text-[#051139] text-xl font-bold border-b border-gray-200 pb-4">
                                          Trusted by Startups and Fortune 500 companies
                                    </h3>

                                    {/* Stats List */}
                                    <div className="space-y-8">
                                          <div className="flex gap-4">
                                                <div className="bg-white p-3 rounded-full shadow-sm h-fit">
                                                      <Award className="text-gray-400" size={24} />
                                                </div>
                                                <div>
                                                      <h4 className="font-bold text-[#051139] text-lg">20+ years of experience</h4>
                                                      <p className="text-gray-500 text-sm">We can handle projects of all complexities.</p>
                                                </div>
                                          </div>

                                          <div className="flex gap-4">
                                                <div className="bg-white p-3 rounded-full shadow-sm h-fit">
                                                      <Users className="text-gray-400" size={24} />
                                                </div>
                                                <div>
                                                      <h4 className="font-bold text-[#051139] text-lg">4500+ satisfied customers</h4>
                                                      <p className="text-gray-500 text-sm">Startups to Fortune 500, we have worked with all.</p>
                                                </div>
                                          </div>

                                          <div className="flex gap-4">
                                                <div className="bg-white p-3 rounded-full shadow-sm h-fit">
                                                      <Star className="text-gray-400" size={24} />
                                                </div>
                                                <div>
                                                      <h4 className="font-bold text-[#051139] text-lg">700+ in-house experts</h4>
                                                      <p className="text-gray-500 text-sm">Top 1% industry talent to ensure your digital success.</p>
                                                </div>
                                          </div>
                                    </div>

                                    {/* Partner Badges */}
                                    <div className="flex gap-4 pt-6 opacity-80">
                                          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="h-6" alt="Microsoft" />
                                          <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" className="h-6" alt="AWS" />
                                          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Cloud_Logo.svg" className="h-6" alt="Google" />
                                    </div>
                              </div>
                        </div>

                        {/* RIGHT COLUMN: The Form */}
                        <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100">
                              <h2 className="text-[#051139] text-3xl md:text-4xl font-bold mb-2">Book Free Consultation</h2>
                              <p className="text-gray-500 mb-10">Guaranteed response within 8 business hours.</p>

                              <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                          {/* Full Name */}
                                          <div className="relative">
                                                <label className="absolute -top-2.5 left-4 bg-white px-2 text-xs font-semibold text-gray-400">Full Name *</label>
                                                <input type="text" placeholder="Full Name" className="w-full border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:border-amber-500 transition" />
                                          </div>
                                          {/* Email */}
                                          <div className="relative">
                                                <label className="absolute -top-2.5 left-4 bg-white px-2 text-xs font-semibold text-gray-400">Email *</label>
                                                <input type="email" placeholder="Email Address" className="w-full border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:border-amber-500 transition" />
                                          </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                          {/* Phone No */}
                                          <div className="relative">
                                                <label className="absolute -top-2.5 left-4 bg-white px-2 text-xs font-semibold text-gray-400">Phone No.</label>
                                                <div className="flex">
                                                      <div className="flex items-center gap-1 border border-r-0 border-gray-200 rounded-l-lg px-3 bg-gray-50 text-sm">🇺🇸 <ChevronDown size={14} /></div>
                                                      <input type="tel" placeholder="Phone Number (Optional)" className="w-full border border-gray-200 rounded-r-lg px-4 py-4 focus:outline-none focus:border-amber-500 transition" />
                                                </div>
                                          </div>
                                          {/* Select Country */}
                                          <div className="relative">
                                                <label className="absolute -top-2.5 left-4 bg-white px-2 text-xs font-semibold text-gray-400">Select Country *</label>
                                                <select className="w-full border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:border-amber-500 transition appearance-none bg-white">
                                                      <option>Country</option>
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                          </div>
                                    </div>

                                    {/* Service Dropdown */}
                                    <div className="relative">
                                          <label className="absolute -top-2.5 left-4 bg-white px-2 text-xs font-semibold text-gray-400">Select Your Service *</label>
                                          <select className="w-full border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:border-amber-500 transition appearance-none bg-white">
                                                <option>Please Select From The Dropdown</option>
                                          </select>
                                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                    </div>

                                    {/* Project Brief */}
                                    <div className="relative">
                                          <label className="absolute -top-2.5 left-4 bg-white px-2 text-xs font-semibold text-gray-400">Your Requirements *</label>
                                          <textarea placeholder="Project Brief" rows="4" className="w-full border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:border-amber-500 transition resize-none"></textarea>

                                          <div className="absolute bottom-4 left-4">
                                                <button type="button" className="text-xs font-bold text-gray-400 border-2 border-dashed border-gray-200 px-3 py-1 rounded-md hover:border-amber-500 transition">
                                                      BROWSE | DROP FILES HERE
                                                </button>
                                          </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex justify-end pt-4">
                                          <button className="bg-amber-500 hover:bg-[#051139] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all duration-300 group shadow-lg shadow-amber-200 hover:shadow-none">
                                                ENQUIRE NOW
                                                <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                                      <ArrowRight size={20} />
                                                </div>
                                          </button>
                                    </div>
                              </form>
                        </div>
                  </div>

                  {/* FOOTER TAGS: Related Services */}
                  <div className="max-w-7xl mx-auto mt-20">
                        <p className="font-bold text-[#051139] mb-4">Related Services :</p>
                        <div className="flex flex-wrap gap-3">
                              {[
                                    "Artificial Intelligence Services", "AI Development", "AI Implementation",
                                    "AI Integration & MCP Engineering Services", "AI Support & Optimization Services",
                                    "AI Chatbot Development Services", "AI-Powered Mobile App Development"
                              ].map((tag) => (
                                    <span key={tag} className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-xs text-gray-500 hover:border-amber-500 transition cursor-pointer">
                                          {tag}
                                    </span>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default ContactConsultation;