import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeSection = () => {
    const features = [
        {
            icon: "/Home/lamp-charge.svg",
            title: "Innovation-Driven Approach",
            desc: "Leveraging modern technologies and forward-thinking strategies to create future-ready digital solutions.",
        },
        {
            icon: "/Home/proven.svg",
            title: "Proven Delivery Excellence",
            desc: "Consistently delivering reliable, high-quality solutions across industries and business environments.",
        },
        {
            icon: "/Home/recycle.svg",
            title: "End-to-End Digital Solutions",
            desc: "Managing the entire product lifecycle from strategy and design to deployment and continuous improvement.",
        },
        {
            icon: "/Home/Global.svg",
            title: "Global Expertise & Support",
            desc: "Providing dependable collaboration and ongoing support across regions and time zones.",
        },
    ];

    const services = [
        {
            icon: "/Home/monitor-recorder.svg",
            title: "Digital Transformation",
            desc: "Modernizing business processes and systems to improve efficiency, enable innovation, and drive sustainable growth.",
            path: "services/software-development",
        },
        {
            icon: "/Home/cloud-notif.svg",
            title: "Cloud Services",
            desc: "Providing secure, scalable, and reliable cloud infrastructure that supports performance, flexibility, and continuous innovation.",
            path: "services/software-development",
        },
        {
            icon: "/Home/SoftwareDevelopment.svg",
            title: "Software Development",
            desc: "Building custom software solutions tailored to business goals with a focus on scalability, security, and long-term performance.",
            path: "services/software-development",
        },
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                    {/* Left Features */}
                    <div className="border border-dashed border-gray-300 p-6 rounded-lg space-y-6 bg-white">
                        {features.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">

                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={28}
                                    height={28}
                                />

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-1">
                                        {item.desc}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Right Content */}
                    <div className="border border-dashed border-gray-300 p-8 rounded-lg bg-white flex flex-col justify-center">
                        <span className="text-sm text-gray-500 mb-2">
                            Who We Are
                        </span>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">                            A Technology Partner Committed to Innovation, Quality, and
                            Sustainable Growth
                        </h2>

                        <p className="text-gray-500 mt-4">
                            Invertio helps businesses transform ideas into scalable
                            digital solutions through strategy, design, and engineering
                            expertise.
                        </p>

                        <Link
                            href="/about-us"
                            className="mt-6 inline-flex items-center gap-1.5 sm:gap-2 bg-black text-white 
  px-4 sm:px-5 py-2.5 sm:py-3 rounded-full hover:bg-gray-800 
  transition text-xs sm:text-sm md:text-base w-fit"
                        >
                            ABOUT US
                            <span className="flex items-center">
                                <img
                                    src="/arrows/rightTopFace.svg"
                                    alt="arrow"
                                    className="w-3 h-3 sm:w-4 sm:h-4"
                                />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Services Section */}
                <div className="mt-16 sm:mt-20">
                    <p className="text-gray-500 text-sm mb-2">Our Services</p>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">                        End-to-End Technology Solutions Built for Business Growth
                    </h2>

                    <p className="text-gray-500 mt-3 max-w-3xl">
                        From transforming business operations to designing user-focused
                        experiences, our services combine strategy, technology, and
                        engineering expertise to create scalable and future-ready
                        digital platforms.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">                        {services.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-5 sm:p-6 bg-white hover:shadow-lg transition"                        >

                            <div className="w-12 h-12 flex items-center justify-center mb-4 bg-blue-600 rounded-md">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={40}
                                    height={40}
                                />
                            </div>

                            <h3 className="font-semibold text-lg text-gray-800">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-sm mt-2">
                                {item.desc}
                            </p>

                            <Link
                                href={item.path}
                                className="font-semibold text-sm mt-4 flex items-center gap-1 hover:underline"
                            >
                                Learn More →
                            </Link>
                        </div>
                    ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeSection;