"use client";

import Section from "@/components/common/ui/Section";
import SectionHeader from "@/components/common/ui/SectionHeader";
import Image from "next/image";
import Link from "next/link";

const TransformationHero = ({ data }) => {
  const benefits = data?.benefits || [];

  return (
    <Section>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-10 lg:gap-16 mt-3">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-3 sm:gap-4 max-w-[520px] w-full order-2 lg:order-1">

          {benefits.map((value, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 sm:gap-4 bg-[#FCFCFD] border border-[#D5D9EB] rounded-xl px-3 py-3 sm:px-5 sm:py-4 transition duration-300 hover:shadow-md ${index % 2 === 0
                ? "lg:hover:rotate-[0.6deg]"
                : "lg:hover:-rotate-[0.6deg]"
                }`}
            >
              {/* ICON */}
              <Image
                src="/common/check.svg"
                alt="check"
                width={24}
                height={24}
                className="flex-shrink-0"
              />

              {/* TEXT */}
              <p className="text-[14px] sm:text-base font-medium text-[#101323] leading-snug sm:leading-relaxed">
                {value}
              </p>
            </div>
          ))}

        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center max-w-[520px] order-1 lg:order-2">

          <SectionHeader
            badge={data?.badge}
            heading={data?.heading}
            subheading={data?.subheading}
            size="md"
            align="left"
          />

          <div className="mt-4 sm:mt-6">
            <Link
              href={data?.button?.href || "/contact-us"}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-4 sm:px-8 h-10 sm:h-12 rounded-full bg-[#0F172A] text-white text-sm sm:text-base font-semibold hover:bg-[#1E293B] transition shadow-sm"
            >
              {data?.button?.text || "Contact Us"}

              <Image
                src="/arrows/rightTopFace.svg"
                alt="arrow"
                width={14}
                height={14}
                className="sm:w-4 sm:h-4"
              />
            </Link>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default TransformationHero;