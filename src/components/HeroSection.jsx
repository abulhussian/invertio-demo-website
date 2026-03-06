import Link from "next/link";
import React from "react";

const HeroSection = () => {
    return (
        <div className="w-full -mt-[120px] ">

            {/* HERO SECTION */}
            <section className="relative w-full h-[650px]">

                {/* background image */}
                <img
                    src="/services/hero.jpeg"
                    alt="hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#06030E00] to-[#06030E]"></div>

                {/* content */}
                <div className="relative h-full flex items-end  px-8 pb-12">

                    <div className="flex flex-col lg:flex-row w-full lg:items-end gap-6">

                        {/* LEFT TEXT */}
                        <div className="flex-1  text-white">

                            <p className="text-sm mb-2 text-white">
                                Welcome to Invertio
                            </p>

                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2">
                                Engineering Scalable Digital Solutions for Modern Businesses
                            </h1>

                            <p className="text-gray-300 text-sm md:text-base mb-2">
                                We help organizations design, build, and scale high-performance digital products through strategic thinking, modern technology, and expert engineering — turning complex ideas into powerful business solutions.
                            </p>
                            <p className="text-gray-300 text-sm md:text-base">
                                Trusted by growing startups and enterprises across industries worldwide.
                            </p>

                        </div>

                        {/* RIGHT BUTTONS */}
                        <div className="flex flex-col sm:flex-row lg:flex-col gap-4">

                            <Link
                                href="/contact-us"
                                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-sm font-medium text-white text-center"
                            >
                                Start Your Project
                            </Link>

                            <Link
                                href="/contact-us"
                                className="border border-white px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black transition text-white text-center"
                            >
                                Book A Consultation
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            {/* STATS SECTION */}
            <section className="bg-gray-100 py-16 ">

                <div className="max-w-6xl mx-auto px-6 text-center">

                    <p className="text-xs text-gray-500 mb-2">
                        Proven Results. Measurable Impact. Trusted Delivery.
                    </p>

                    <h2 className="text-3xl font-bold mb-3">
                        Delivering Consistent Value Through Innovation and Expertise
                    </h2>

                    <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-sm">
                        We help businesses grow with scalable technology solutions built
                        for agility, performance, and long-term collaboration.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

                        <div>
                            <h3 className="text-4xl font-bold text-blue-600">25+</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Successful Projects Delivered
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-blue-600">25+</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Enterprises & Growing Clients
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-blue-600">04+</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Countries Served Globally
                            </p>
                        </div>

                        <div>
                            <h3 className="text-4xl font-bold text-blue-600">98%</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Client Satisfaction Rate
                            </p>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default HeroSection;