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
      <div className=" mx-auto grid lg:grid-cols-2 gap-16 items-start ">
        {/* LEFT CONTENT */}
        <div className="sticky top-0 pt-30">
          <SectionHeader
            badge="Our Core Values"
            heading="The Principles That Shape Everything We Build"
            size="md"
          />
        </div>

        {/* RIGHT VALUES LIST */}
        <div className="flex flex-col gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 bg-[#FCFCFD] border border-[#D5D9EB] rounded-xl p-6 hover:shadow-xl ${index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"}  shadow-gray-100 transition`}
            >
              {/* ICON */}
              <div className="">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-lg font-semibold font-jakarta text-gray-900">
                  {value.title}
                </h3>
                <p className=" text-sm font-medium text-gray-600">
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
