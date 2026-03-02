import Image from "next/image";
import Section from "../common/ui/Section";
import SectionHeader from "../common/ui/SectionHeader";

const SisterCompaniesSection = () => {
  return (
    <Section bg="#FCFCFD">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT CONTENT */}
        <div>
          <SectionHeader
            badge="Our Sister Companies"
            heading="Building a Strong Ecosystem of Innovation and Technology Excellence"
            subheading={`Together with our sister organizations, we expand our capabilities
            to deliver advanced solutions across cloud, AI, and digital
            innovation.
                     Our collaborative ecosystem enables us to combine expertise,
            technology, and industry knowledge to create impactful solutions
            that empower businesses worldwide and drive continuous innovation. `}
            size="md"
            align="left"
          />

          <button className="mt-8 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition flex items-center gap-2">
            Contact Us
            <span>↗</span>
          </button>
        </div>

        {/* RIGHT TIMELINE */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-blue-400 z-0" />

          {/* TOP CARD */}
          <div className="relative z-10 w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-16">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-gray-900">AVIAAH</h3>
              <Image
                src="/about/aviaah.png"
                alt="Aviaah Logo"
                width={80}
                height={30}
                className="object-contain"
              />
            </div>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              A global provider of cloud and infrastructure solutions, helping
              organizations enhance scalability, optimize performance, and
              accelerate digital transformation initiatives.
            </p>

            {/* Connector Dot */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full" />
          </div>

          {/* MIDDLE CARD (HIGHLIGHTED) */}
          <div className="relative z-10 w-full max-w-md bg-blue-600 text-white rounded-2xl p-8 shadow-lg mb-16">
            <span className="absolute top-4 right-4 bg-white text-blue-600 px-4 py-1 text-sm rounded-lg font-semibold">
              Invertio.
            </span>

            <h3 className="text-3xl font-bold">INVERTO TAXIATION</h3>

            <p className="mt-4 text-sm leading-relaxed opacity-95">
              Focused on AI and machine learning–driven platforms that enable
              intelligent automation, advanced analytics, and smarter business
              decision-making.
            </p>

            {/* Connector Dot */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full" />
          </div>

          {/* BOTTOM CARD */}
          <div className="relative z-10 w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-gray-900">NOVANAL</h3>
              <Image
                src="/about/novanal.png"
                alt="Novanal Logo"
                width={80}
                height={30}
                className="object-contain"
              />
            </div>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Delivering next-generation financial and blockchain-powered
              solutions designed to modernize digital banking and financial
              service ecosystems.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SisterCompaniesSection;
