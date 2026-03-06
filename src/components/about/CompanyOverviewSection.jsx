import Image from "next/image";
import React from "react";
import Link from "next/link";
import Section from "../common/ui/Section";

const CompanyOverviewSection = () => {
  return (
    <Section>
      <div className="flex flex-col gap-6 lg:gap-8">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Top Blue Card */}
          <div className="relative overflow-hidden rounded-[20px] p-6 sm:p-8 lg:p-10 bg-linear-to-r from-blue-600 to-blue-500 text-white shadow-lg flex flex-col gap-3">
            <span className="text-[20px] font-bold opacity-90">
              Our Purpose
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-bold font-jakarta leading-snug">
              Driven by Innovation. Guided by Impact.
            </h2>

            <p className="text-base sm:text-lg font-medium opacity-90">
              To empower businesses with intelligent technology solutions that
              accelerate innovation, improve efficiency, and create measurable
              value.
              <br />
              To become a global technology partner recognized for delivering
              innovative, scalable, and sustainable digital solutions.
            </p>

            {/* Background Shape */}

            <Image
              className="absolute right-6 top-6 "
              src="/logo/Logo-ForBlueBox.svg"
              alt="Logo"
              width={218}
              height={280}
            />
          </div>

          {/* Bottom Light Card */}
          <div className="relative overflow-hidden rounded-[20px] p-6 sm:p-8 lg:p-10 bg-gray-200 flex flex-col gap-3">
            <span className="text-[20px] font-bold  text-blue-600">
              Our Approach
            </span>

            {/* <h2 className="mt-4 text-3xl font-bold text-gray-900 leading-snug">
          </h2> */}
            <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-bold text-gray-900 font-jakarta leading-snug">
              Strategy, Design, and Engineering Working Together
            </h2>

            <p className="text-base sm:text-lg text-gray-600 font-medium">
              We follow a collaborative and structured approach to deliver
              solutions that align technology with business objectives.
              <br />
              From discovery and planning to development and continuous
              improvement, our process ensures transparency, agility, and
              quality delivery. Every solution is built with scalability,
              performance, and long-term adaptability in mind.
            </p>

            {/* Background Shape */}
            <Image
              className="absolute right-6 bottom-6 "
              src="/logo/Logo-ForGrayBox.svg"
              alt="Logo"
              width={218}
              height={280}
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative overflow-hidden rounded-[20px] p-6 sm:p-8 lg:p-12 bg-[#0B1120] text-white shadow-xl flex flex-col justify-center gap-3">
          <span className="text-[20px] font-bold opacity-90">Who We Are</span>

          <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-bold font-jakarta leading-snug">
            A Trusted Technology Partner Focused on Long-Term Success
          </h2>

          <p className="text-base sm:text-lg font-medium">
            Our team brings together strategic thinking, creative design, and
            advanced engineering to solve complex business challenges.
            <br />
            We believe technology should enable growth, not complexity. That’s
            why we work closely with clients to understand their goals and
            deliver scalable, secure, and future-ready systems tailored to their
            evolving needs.
          </p>

          <Link href="/contact-us">
            <button className="mt-8 w-fit bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-200 cursor-pointer transition flex items-center gap-2">
              Contact Us
              <span className="text-lg">↗</span>
            </button>
          </Link>

          {/* Decorative Shape */}
          <Image
            className="absolute right-10 top-20 "
            src="/logo/Logo-ForDarkBox.svg"
            alt="Logo"
            width={353}
            height={464}
          />
        </div>
      </div>
    </Section>
  );
};

export default CompanyOverviewSection;
