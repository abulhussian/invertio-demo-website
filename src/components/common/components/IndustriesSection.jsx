import React from "react";

const industries = [
  {
    title: "Banking & Financial Services",
    desc: "Secure and scalable fintech solutions enabling digital banking, payments, and financial service transformation.",
  },
  {
    title: "Healthcare & Life Sciences",
    desc: "Light healthcare platforms improving patient care, operational efficiency, and medical research capabilities.",
  },
  {
    title: "Retail & E-commerce",
    desc: "Omnichannel solutions that enhance customer engagement and accelerate digital commerce growth.",
  },
  {
    title: "Manufacturing",
    desc: "Industry 4.0 solutions powered by automation, IoT, and smart factory innovations for operational excellence.",
  },
  {
    title: "Automotive",
    desc: "Connected vehicle platforms, smart mobility solutions, and intelligent manufacturing technologies.",
  },
  {
    title: "Telecommunications",
    desc: "Next-generation telecom solutions supporting 5G, IoT integration, and network infrastructure modernization.",
  },
];

const icon = "/Home/AI.svg";

const IndustriesSection = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-2  lg:px-6">

        {/* Header */}
        <div className="mb-4 lg:mb-12">
          <p className="text-md font-bold text-black mb-3">Industries We Serve</p>

          <h2 className="text-md md:text-2xl lg:text-[36px] font-bold text-gray-900 max-w-xl md:max-w-full lg:max-w-full leading-snug">
            Delivering Industry-Focused Technology Solutions That Drive Real Impact
          </h2>

          <p className="text-gray-600 mt-4 max-w-4xl lg:max-w-full text-[8px] md:text-md lg:text-sm ">
            We combine deep domain expertise with modern technology to address
            unique industry challenges and accelerate digital innovation.
          </p>
        </div>

        {/* Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((item, index) => (
            <div
              key={index}
            className="flex flex-col bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition"
            >
              {/* Icon */}
<div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-md mb-3">               <img
                  src={icon}
                  alt={item.title}
                  className="w-5 h-5"
                />
              </div>

              {/* Content */}
              <div>
<h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {item.title}
                </h3>
<p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;