import Image from "next/image";
import Section from "../common/ui/Section";
import SectionHeader from "../common/ui/SectionHeader";

const TechImpactSection = () => {
  const innerIcons = [
    "/icons/react.svg",
    "/icons/github.svg",
    "/icons/aws.svg",
  ];

  const middleIcons = [
    "/icons/angular.svg",
    "/icons/node.svg",
    "/icons/html.svg",
    "/icons/css.svg",
  ];

  const outerIcons = [
    "/icons/figma.svg",
    "/icons/azure.svg",
    "/icons/mongodb.svg",
    "/icons/gitlab.svg",
    "/icons/docker.svg",
    "/icons/js.svg",
  ];
  const radius1 = 110; // Inner
  const radius2 = 170; // Middle (60px gap)
  const radius3 = 230;
  return (
    <Section>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <div className="relative w-[600px] h-[600px] mx-auto overflow-hidden">

          {/* Center Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-36 h-36 bg-[#0B1120] rounded-full flex items-center justify-center z-10">
              <Image src="/logo/logo.svg" alt="logo" width={110} height={110} />
            </div>
          </div>

          {/* Orbit Guide Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div style={{ width: radius1 * 2, height: radius1 * 2 }} className="border border-gray-200 rounded-full"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div style={{ width: radius2 * 2, height: radius2 * 2 }} className="border border-gray-200 rounded-full"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div style={{ width: radius3 * 2, height: radius3 * 2 }} className="border border-gray-200 rounded-full"></div>
          </div>

          {/* Inner Ring */}
          <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
            {innerIcons.map((icon, index) => {
              const angle = (360 / innerIcons.length) * index;
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius1}px)`
                  }}
                >
                  <div style={{ transform: `rotate(-${angle}deg)` }}>
                    <div className="bg-white rounded-full p-3 border border-gray-100 flex items-center justify-center transition-transform duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer">
                      <Image
                        src={icon}
                        alt="tech"
                        width={34}
                        height={34}
                        className="brightness-110 contrast-110"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Middle Ring */}
          <div className="absolute inset-0 animate-[spin_35s_linear_infinite]">
            {middleIcons.map((icon, index) => {
              const angle = (360 / middleIcons.length) * index;
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius2}px)`
                  }}
                >
                  <div style={{ transform: `rotate(-${angle}deg)` }}>
                    <div className="bg-white rounded-full p-3  border border-gray-100 flex items-center justify-center">
                      <Image
                        src={icon}
                        alt="tech"
                        width={34}
                        height={34}
                        className="brightness-110 contrast-110"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Outer Ring */}
          <div className="absolute inset-0 animate-[spin_50s_linear_infinite]">
            {outerIcons.map((icon, index) => {
              const angle = (360 / outerIcons.length) * index;
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius3}px)`
                  }}
                >
                  <div style={{ transform: `rotate(-${angle}deg)` }}>
                    <div className="bg-white rounded-full p-3  border border-gray-100 flex items-center justify-center">
                      <Image
                        src={icon}
                        alt="tech"
                        width={34}
                        height={34}
                        className="brightness-110 contrast-110"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

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
