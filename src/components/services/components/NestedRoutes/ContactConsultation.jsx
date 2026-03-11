"use client";

import { Phone, Mail, Trophy } from "lucide-react";

export default function ContactConsultation({ data }) {
      return (
            <section className="w-full bg-[#F4F6F8] py-20">
                  <div className="max-w-7xl mx-auto grid lg:grid-cols-2">

                        {/* LEFT SIDE */}
                        <div className="bg-[#F1F1F1] p-12 flex flex-col justify-between">

                              {/* Top Links */}
                              <div className="flex gap-6 text-sm text-[#0B2A5B]">
                                    {data?.topLinks?.map((link, i) => (
                                          <button key={i} className="flex items-center gap-2 hover:underline">
                                                {i === 0 ? <Phone size={16} /> : <Mail size={16} />}
                                                {link.label}
                                          </button>
                                    ))}
                              </div>

                              {/* Trust text */}
                              <p className="mt-8 text-[#0B2A5B] font-medium">
                                    {data?.trustText}
                              </p>

                              {/* Points */}
                              <div className="mt-8 space-y-8">
                                    {data?.stats?.map((item, i) => (
                                          <div key={i} className="flex gap-4">
                                                <div className="bg-white p-3 rounded-full">
                                                      <Trophy size={20} />
                                                </div>

                                                <div>
                                                      <p className="font-semibold text-gray-800">
                                                            {item.title}
                                                      </p>
                                                      <p className="text-gray-500 text-sm">
                                                            {item.description}
                                                      </p>
                                                </div>
                                          </div>
                                    ))}
                              </div>

                              {/* Partner Logos */}
                              <div className="flex gap-4 mt-10">
                                    {data?.partners?.map((logo, i) => (
                                          <img
                                                key={i}
                                                src={logo.image}
                                                alt={logo.alt}
                                                className="h-10 object-contain"
                                          />
                                    ))}
                              </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="bg-white p-12">

                              <h2 className="text-4xl font-bold text-[#0B2A5B]">
                                    Book Free Consultation
                              </h2>

                              <p className="text-gray-500 mt-2 mb-8">
                                    Guaranteed response within 8 business hours.
                              </p>

                              <form className="space-y-6">

                                    {/* Row 1 */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                          <input
                                                type="text"
                                                placeholder="Full Name"
                                                className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                          />

                                          <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                          />
                                    </div>

                                    {/* Row 2 */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                          <input
                                                type="text"
                                                placeholder="Phone Number (Optional)"
                                                className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                          />

                                          <select className="border rounded-md px-4 py-3 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Country</option>
                                                <option>India</option>
                                                <option>USA</option>
                                                <option>UK</option>
                                          </select>
                                    </div>

                                    {/* Service */}
                                    <select className="border rounded-md px-4 py-3 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                          <option>Please Select From The Dropdown</option>
                                          <option>Web Development</option>
                                          <option>Mobile App Development</option>
                                          <option>Cloud Services</option>
                                          <option>AI Solutions</option>
                                    </select>

                                    {/* Message */}
                                    <textarea
                                          rows="6"
                                          placeholder="Project Brief"
                                          className="border rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ></textarea>

                                    {/* Upload */}
                                    <div>
                                          <button
                                                type="button"
                                                className="text-xs border px-4 py-2 rounded-md hover:bg-gray-100"
                                          >
                                                BROWSE | DROP FILES HERE
                                          </button>
                                    </div>

                                    {/* Submit */}
                                    <div className="flex justify-end pt-4">
                                          <button
                                                type="submit"
                                                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium"
                                          >
                                                ENQUIRE NOW →
                                          </button>
                                    </div>

                              </form>

                        </div>

                  </div>
            </section>
      );
}