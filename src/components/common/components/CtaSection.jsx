import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import Section from "../ui/Section";
import Link from "next/link";

const CtaSection = () => {
  return (
    <Section bg="#0B1120">
      <div className="relative  mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 z-4">
          <SectionHeader
            badge="Gets Started"
            heading="Ready to Transform Your Business with Technology?"
            subheading={`Partner with Invertio to build scalable digital solutions that accelerate innovation and growth.`}
            para="Let’s collaborate to turn your ideas into impactful technology solutions. Our team is ready to help you navigate digital transformation, optimize operations, and achieve long-term business success."
            align="left"
            size="md"
            headingColor="#FFFFFF"
            subheadingColor="#fff"
            badgeColor="#fff"
          />

          <p className="mt-4 text-slate-300 max-w-2xl"></p>
        </div>

        {/* RIGHT BUTTONS */}
<div className="flex flex-col gap-4 z-10 w-full sm:w-auto">
            <Link
            href="/contact-us"
           className="w-full sm:w-auto px-4 sm:px-8 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition text-center"
          >
            Start Your Journey
          </Link>

          <Link
            href="/our-work"
           className="w-full sm:w-auto px-4 sm:px-8 py-3 rounded-full bg-orange-500/20 text-orange-400 font-semibold hover:bg-orange-500/40 transition text-center"
          >
            View Our Work
          </Link>
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
