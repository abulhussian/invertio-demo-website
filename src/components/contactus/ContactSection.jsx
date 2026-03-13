"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
      const [selectedService, setSelectedService] = useState("Data & Analytics");

      const services = [
            "Data & Analytics",
            "Cybersecurity",
            "IT Consulting",
            "Cloud Services",
            "Software Development",
      ];

      return (
            <section className="w-full py-16">
                  <div className="grid lg:grid-cols-2 gap-16">

                        {/* LEFT SIDE */}
                        <div className="flex flex-col lg:flex-row gap-12 lg:items-start max-w-7xl mx-auto px-4 py-12">
                              {/* Heading Section */}
                              <div className="lg:w-1/3">
                                    <p className="text-purple-600 font-semibold mb-3 text-sm tracking-wide uppercase">
                                          Get In Touch
                                    </p>

                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-4">
                                          We’d Love to Hear From You
                                    </h2>

                                    <p className="text-gray-600 text-base sm:text-lg">
                                          Have a question, project idea, or partnership opportunity?
                                          Reach out to us — our team will respond promptly to help you
                                          move forward with confidence.
                                    </p>
                              </div>

                              {/* Contact Cards Grid */}
                              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">

                                    {/* Email - md:col-span-2 makes this one full width on tablet if you prefer */}
                                    <div className="border border-gray-100 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                                          <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                                                <Image
                                                      src="/contact/email.png"
                                                      alt="Email Icon"
                                                      width={24}
                                                      height={24}
                                                />
                                          </div>
                                          <div>
                                                <p className="font-bold text-[#0F172A] text-lg">Email Us</p>
                                                <a
                                                      href="mailto:info@invertiosolutions.com"
                                                      className="text-gray-500 text-sm sm:text-base hover:text-purple-600 transition-colors break-all"
                                                >
                                                      info@invertiosolutions.com
                                                </a>
                                          </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="border border-gray-100 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                                          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                                                <Image
                                                      src="/contact/telephone.png"
                                                      alt="Phone Icon"
                                                      width={24}
                                                      height={24}
                                                />
                                          </div>
                                          <div>
                                                <p className="font-bold text-[#0F172A] text-lg">Call Us</p>
                                                <a href="tel:+918121910307" className="text-gray-500 text-sm sm:text-base hover:text-blue-600 transition-colors">
                                                      +91 81219 10307
                                                </a>
                                          </div>
                                    </div>

                                    {/* Address - Full width on tablet/desktop for better readability */}
                                    <div className="md:col-span-2 border border-gray-100 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                                          <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                                                <Image
                                                      src="/contact/email.png"
                                                      alt="Location Icon"
                                                      width={24}
                                                      height={24}
                                                />
                                          </div>
                                          <div>
                                                <p className="font-bold text-[#0F172A] text-lg">Office Address</p>
                                                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                                                      8-1-332-3/B/L, 7 Tombs Rd, JPB Colony, Aravind Nagar Colony,
                                                      Shaikpet, Hyderabad, Telangana 500008
                                                </p>
                                          </div>
                                    </div>

                              </div>
                        </div>

                        {/* RIGHT SIDE FORM */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">

                              <h3 className="text-2xl font-semibold text-[#0F172A] mb-2">
                                    Send Us a Message
                              </h3>

                              <p className="text-gray-500 mb-6">
                                    Fill out the form below and our specialists will get back to you shortly.
                              </p>

                              <form className="space-y-5">

                                    <div className="grid md:grid-cols-2 gap-5">
                                          <Input label="Full Name *" placeholder="Enter Your Full Name" className="rounded-xs" />
                                          <Input label="Company Name *" placeholder="Enter Company Name" className="rounded-xs" />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                          <Input label="Email *" placeholder="example@gmail.com" className="rounded-xs" />
                                          <Input label="Contact Number *" placeholder="+91 Enter 10 Digit Mobile Number" className="rounded-xs" />
                                    </div>

                                    {/* Service Selection */}
                                    <div>
                                          <p className="text-sm font-medium text-[#0F172A] mb-3">
                                                Service Interested In *
                                          </p>

                                          <div className="flex flex-wrap gap-3">
                                                {services.map((service) => (
                                                      <button
                                                            type="button"
                                                            key={service}
                                                            onClick={() => setSelectedService(service)}
                                                            className={`px-4 py-2 rounded-full border text-sm transition
                      ${selectedService === service
                                                                        ? "bg-orange-500 text-white border-orange-500"
                                                                        : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                                                                  }`}
                                                      >
                                                            {service}
                                                      </button>
                                                ))}
                                          </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                          <label className="text-sm font-medium text-[#0F172A] mb-2 block">
                                                Message *
                                          </label>
                                          <textarea
                                                rows="4"
                                                className="w-full border border-gray-200 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                                                placeholder="Message..."
                                          />
                                    </div>

                                    {/* Submit */}
                                    <div>
                                          <button
                                                type="submit"
                                                className="w-full md:w-auto bg-[#0F172A] text-white px-8 py-3 rounded-md font-medium hover:bg-[#1E293B] transition"
                                          >
                                                Send Message
                                          </button>
                                    </div>

                              </form>
                        </div>

                  </div>
            </section>

      );
}

function Input({ label, placeholder }) {
      return (
            <div>
                  <label className="text-sm font-medium text-[#0F172A] mb-2 block">
                        {label}
                  </label>
                  <input
                        type="text"
                        placeholder={placeholder}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
            </div>
      );
}