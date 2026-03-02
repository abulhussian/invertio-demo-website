import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import Section from "../ui/Section";

const CtaSection = () => {
  return (
    <Section bg="#0B1120">
      <div className="relative  mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 z-4">
          <SectionHeader
            badge="Let’s Build Together"
            heading="Start Your Digital Transformation Journey with Invertio"
            subheading={`Partner with us to turn your ideas into scalable, high-impact digital solutions.
             Our team is ready to collaborate, innovate, and deliver technology
            that drives measurable business growth.`}
            align="left"
            size="md"
            headingColor="#FFFFFF"
            subheadingColor="#fff"
            badgeColor="#fff"
          />

          <p className="mt-4 text-slate-300 max-w-2xl"></p>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex flex-col gap-4">
          <button className="px-8 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition cursor-pointer ">
            Start Your Journey
          </button>

          <button className="px-8 py-3 rounded-full bg-orange-500/20 text-orange-400 font-semibold hover:bg-orange-500/40 transition cursor-pointer">
            View Our Work
          </button>
        </div>

        {/* Decorative Background Shape */}
        <Image
          className="absolute -left-40 top-20  "
          src="/logo/Logo-ForDarkBox.svg"
          alt="Logo"
          width={353}
          height={464}
        />
      </div>
    </Section>
  );
};

export default CtaSection;
