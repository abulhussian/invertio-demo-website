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

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

      {/* RIGHT CONTENT - comes first on mobile */}
      <div className="order-1 lg:order-2 flex flex-col justify-center">

        <span className="text-md font-bold text-black mb-2">
          Who We Are
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
          A Technology Partner Committed to Innovation, Quality, and Sustainable Growth
        </h2>

        <p className="text-gray-500 mt-4">
          Invertio helps businesses transform ideas into scalable digital
          solutions through strategy, design, and advanced engineering expertise.
        </p>

        <Link
          href="/about-us"
          className="mt-6 inline-flex items-center gap-2 bg-black text-white
          px-5 py-3 rounded-full hover:bg-gray-800 transition text-sm w-fit"
        >
          About US
          <img
            src="/arrows/rightTopFace.svg"
            alt="arrow"
            className="w-4 h-4"
          />
        </Link>
      </div>


      {/* FEATURES */}
      <div className="order-2 lg:order-1 space-y-4">

        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 border border-gray-200 rounded-xl p-4 bg-white"
          >

            {/* Icon Box */}
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100">
              <Image
                src={item.icon}
                alt={item.title}
                width={22}
                height={22}
              />
            </div>

            {/* Text */}
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

    </div>

  </div>
</div>
    );
};

export default HomeSection;