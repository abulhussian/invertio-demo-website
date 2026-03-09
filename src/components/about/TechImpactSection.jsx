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

  // Responsive orbit radii
  const radius1 = 80;
  const radius2 = 140;
  const radius3 = 200;

  return (
    <Section>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ORBIT SECTION */}
        <div className="relative w-full max-w-[500px] aspect-square mx-auto lg:max-w-[550px]">

          {/* Center Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-[#0B1120] rounded-full flex items-center justify-center z-10">
              <Image
                src="/logo/logo.svg"
                alt="logo"
                width={90}
                height={90}
                className="sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px]"
              />
            </div>
          </div>

          {/* Orbit Guide Rings */}

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              style={{ width: radius1 * 2, height: radius1 * 2 }}
              className="border border-gray-200 rounded-full"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              style={{ width: radius2 * 2, height: radius2 * 2 }}
              className="border border-gray-200 rounded-full"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              style={{ width: radius3 * 2, height: radius3 * 2 }}
              className="border border-gray-200 rounded-full"
            />
          </div>

          {/* INNER RING */}

          <div className="absolute inset-0 animate-[spin_20s_linear_infinite] hover:[animation-play-state:paused]">
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
                    <div className="bg-white rounded-full p-2 sm:p-3 md:p-4 border border-gray-100 flex items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer">

                      <Image
                        src={icon}
                        alt="tech"
                        width={24}
                        height={24}
                        className="sm:w-6 sm:h-6 md:w-7 md:h-7"
                      />

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* MIDDLE RING */}

          <div className="absolute inset-0 animate-[spin_35s_linear_infinite] hover:[animation-play-state:paused]">
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
                    <div className="bg-white rounded-full p-2 sm:p-3 md:p-4 border border-gray-100 flex items-center justify-center">

                      <Image
                        src={icon}
                        alt="tech"
                        width={26}
                        height={26}
                        className="sm:w-7 sm:h-7 md:w-8 md:h-8"
                      />

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* OUTER RING */}

          <div className="absolute inset-0 animate-[spin_50s_linear_infinite] hover:[animation-play-state:paused]">
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
                    <div className="bg-white rounded-full p-2 sm:p-3 md:p-4 border border-gray-100 flex items-center justify-center">

                      <Image
                        src={icon}
                        alt="tech"
                        width={26}
                        height={26}
                        className="sm:w-7 sm:h-7 md:w-8 md:h-8"
                      />

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className="mt-10 lg:mt-0">

          <SectionHeader
            badge="Our Impact"
            heading="Helping Businesses Grow Through Technology"
            subheading={`Our solutions have supported organizations across industries and regions in achieving digital success.
From enterprise modernization to AI-driven innovation, we help
businesses adapt to changing markets, improve operational efficiency, and build technology ecosystems ready for the future.`}
            size="md"
            align="left"
          />

        </div>

      </div>
    </Section>
  );
};

export default TechImpactSection;