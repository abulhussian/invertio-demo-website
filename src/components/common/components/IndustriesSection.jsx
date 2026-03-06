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
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm text-gray-500 mb-3">Industries We Serve</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-4xl mx-auto">
            Delivering Industry-Focused Technology Solutions That Drive Real Impact
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We combine deep domain expertise with modern technology to address
            unique industry challenges and accelerate digital innovation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {industries.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-md">
                <img
                  src={icon}
                  alt={item.title}
                  className="w-5 h-5"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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