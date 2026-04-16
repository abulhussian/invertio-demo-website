import Section from "../common/ui/Section";
import SectionHeader from "../common/ui/SectionHeader";
import Image from "next/image";

const values = [
  {
    title: "Innovation",
    description: "Continuously exploring better ways to solve problems.",
    icon: "/about/Innovation.svg",
  },
  {
    title: "Quality",
    description: "Delivering reliable and high-performance solutions.",
    icon: "/about/Quality.svg",
  },
  {
    title: "Collaboration",
    description: "Working as partners, not vendors.",
    icon: "/about/Collaboration.svg",
  },
  {
    title: "Integrity",
    description: "Maintaining transparency and trust in every engagement.",
    icon: "/about/Integration.svg",
  },
  {
    title: "Excellence",
    description: "Striving for continuous improvement and impact.",
    icon: "/about/Excellance.svg",
  },
];

const CoreValuesSection = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* LEFT CONTENT */}
        <div className="pt-10 lg:pt-28 lg:sticky lg:top-24">
          <SectionHeader
            badge="Our Core Values"
            heading="The Principles That Shape Everything We Build"
            size="md"
          />
        </div>

        {/* RIGHT VALUES LIST */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 sm:gap-4 bg-[#FCFCFD] border border-[#D5D9EB] 
        rounded-xl p-4 sm:p-5 md:p-6 
        shadow-sm hover:shadow-xl transition duration-300
        ${index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"}`}
            >

              {/* ICON */}
              <div className="flex-shrink-0">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={32}
                  height={32}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold font-jakarta text-gray-900">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">
                  {value.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};

export default CoreValuesSection;
