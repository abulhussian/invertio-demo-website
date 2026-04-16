"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
      {
            title: "Digital Transformation",
            desc: "Modernizing business processes and systems to improve efficiency, enable innovation, and drive sustainable growth.",
            icon: "/icons/service.png",
            slug: "digital-transformation",
      },
      {
            title: "Cloud Services",
            desc: "Providing secure, scalable, and reliable cloud infrastructure that supports performance, flexibility, and continuous innovation.",
            icon: "/icons/seervice2.png",
            slug: "cloud-service2.png",
      },
      {
            title: "Software Development",
            desc: "Building custom software solutions tailored to business goals with a focus on scalability, security, and long-term performance.",
            icon: "/icons/service3.png",
            slug: "software-development",
      },
];

export default function ServicesSection() {
      return (
            <section className="w-full bg-[#F8F9FC] py-12 sm:py-16 px-4 sm:px-8 md:px-14 lg:px-20">

                  {/* HEADER */}
                  <div className="max-w-4xl mb-10">
                        <span className="text-sm text-gray-500 font-medium">
                              Our Services
                        </span>

                        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-[#0F172A] mt-2 leading-snug">
                              End-to-End Technology Solutions Built for Business Growth
                        </h2>

                        <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
                              From transforming business operations to designing user-focused experiences,
                              our services combine strategy, technology, and engineering expertise to create scalable and future-ready digital platforms.
                        </p>
                  </div>

                  {/* CARDS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

                        {services.map((item, index) => (
                              <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl p-4 sm:p-5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                              >

                                    {/* ICON */}
                                    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-100 mb-4">
                                          <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={22}
                                                height={22}
                                          />
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="text-[14px] sm:text-base font-semibold text-[#0F172A] mb-2">
                                          {item.title}
                                    </h3>

                                    {/* DESC */}
                                    <p className="text-[12px] sm:text-sm text-gray-500 leading-relaxed mb-4">
                                          {item.desc}
                                    </p>

                                    {/* LINK */}
                                    <Link
                                          href={`/services/${item.slug}`}
                                          className="inline-flex items-center gap-2 text-sm font-medium text-[#0F172A] hover:underline"
                                    >
                                          Learn More →
                                    </Link>

                              </div>
                        ))}

                  </div>

            </section>
      );
}