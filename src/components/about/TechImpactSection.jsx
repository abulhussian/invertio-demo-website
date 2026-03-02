import Image from "next/image";
import Section from "../common/ui/Section";
import SectionHeader from "../common/ui/SectionHeader";

const TechImpactSection = () => {
  return (
    <Section>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <div className="relative w-full max-w-xl mx-auto order-2 lg:order-1 ">
          <Image
            src="/about/tech-impact.svg"
            alt="Technology ecosystem visualization"
            width={780}
            height={780}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-1 lg:order-2">
          <SectionHeader
            badge="Our Impact"
            heading="Helping Businesses Grow Through Technology"
            subheading={`Our solutions have supported organizations across industries and regions in achieving digital success.
           From enterprise modernization to AI-driven innovation, we help
          businesses adapt to changing markets, improve operational efficiency, and build technology ecosystems ready for the future. `}
            size="md"
            align="left"
          />
        </div>
      </div>
    </Section>
  );
};

export default TechImpactSection;
