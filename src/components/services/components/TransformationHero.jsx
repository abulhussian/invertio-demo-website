import Section from "@/components/common/ui/Section";
import SectionHeader from "@/components/common/ui/SectionHeader";
import Image from "next/image";
import Link from "next/link";

const TransformationHero = ({ data }) => {
  const benefits = data?.benefits || [];

  return (
    <Section>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-4 sm:gap-6 order-2 lg:order-1">
          {benefits.map((value, index) => (
            <div
              key={index}
              className={`flex items-start sm:items-center gap-4 bg-[#FCFCFD] border border-[#D5D9EB] rounded-xl p-4 sm:p-6 shadow-gray-100 transition duration-300 hover:shadow-xl ${index % 2 === 0 ? "lg:hover:rotate-1" : "lg:hover:-rotate-1"
                }`}
            >
              {/* ICON */}
              <div className="flex-shrink-0">
                <Image
                  src="/common/check.svg"
                  alt="check"
                  width={32}
                  height={32}
                  className="object-contain sm:w-[40px] sm:h-[40px]"
                />
              </div>

              {/* TEXT */}
              <h3 className="text-base sm:text-lg lg:text-xl font-medium text-[#101323] leading-relaxed">
                {value}
              </h3>
            </div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center order-1 lg:order-2">
          <SectionHeader
            badge={data?.badge}
            heading={data?.heading}
            subheading={data?.subheading}
            size="md"
          />

          <div className="mt-6 flex flex-col sm:flex-row">
            <Link
              href={data?.button?.href || "/contact-us"}
              className="px-8 sm:px-10 h-12 sm:h-14 rounded-full bg-[#0F172A] text-white font-bold hover:bg-[#1E293B] transition shadow-md flex items-center justify-center gap-2"
            >
              {data?.button?.text || "Contact Us"}
              <Image
                src="/arrows/rightTopFace.svg"
                alt="arrow"
                width={18}
                height={18}
              />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TransformationHero;
