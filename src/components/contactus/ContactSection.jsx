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
                        <div className="flex flex-col gap-8">

                              <div>
                                    <p className="text-purple-600 font-medium mb-4">
                                          Get In Touch
                                    </p>

                                    <h2 className="text-4xl lg:text-5xl font-semibold text-[#0F172A] leading-tight mb-6">
                                          We’d Love to Hear From You
                                    </h2>

                                    <p className="text-gray-600 text-md font-bold max-w-xl">
                                          Have a question, project idea, or partnership opportunity?
                                          Reach out to us — our team will respond promptly to help you
                                          move forward with confidence.
                                    </p>
                              </div>

                              {/* Contact Cards */}
                              <div className="space-y-4">

                                    {/* Email */}
                                    <div className="flex items-start gap-4 border border-gray-200 bg-white rounded-xl p-5">
                                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                                <Image
                                                      src="/contact/email.png"
                                                      alt="Email Icon"
                                                      width={20}
                                                      height={20}
                                                />
                                          </div>
                                          <div>
                                                <p className="font-semibold text-[#0F172A]">Email Us</p>
                                                <p className="text-gray-500 text-sm">
                                                      info@invertiosolutions.com
                                                </p>
                                          </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4 border border-gray-200 bg-white rounded-xl p-5">
                                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                                <Image
                                                      src="/contact/telephone.png"
                                                      alt="Phone Icon"
                                                      width={20}
                                                      height={20}
                                                />
                                          </div>
                                          <div>
                                                <p className="font-semibold text-[#0F172A]">Call Us</p>
                                                <p className="text-gray-500 text-sm">
                                                      +91 81219 10307
                                                </p>
                                          </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start gap-4 border border-gray-200 bg-white rounded-xl p-5">
                                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                                <Image
                                                      src="/contact/email.png"
                                                      alt="Location Icon"
                                                      width={20}
                                                      height={20}
                                                />
                                          </div>
                                          <div>
                                                <p className="font-semibold text-[#0F172A]">Office Address</p>
                                                <p className="text-gray-500 text-sm max-w-md">
                                                      8-1-332-3/B/L, 7 Tombs Rd, JPB Colony, Aravind Nagar Colony,
                                                      Shaikpet, Hyderabad, Telangana 500008
                                                </p>
                                          </div>
                                    </div>

                              </div>
                        </div>

                        {/* RIGHT SIDE FORM */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

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
                                    <div className="flex justify-end xs:justify-start">
                                          <button
                                                type="submit"
                                                className="bg-[#0F172A] text-white px-8 py-3 rounded-md font-medium hover:bg-[#1E293B] transition "
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