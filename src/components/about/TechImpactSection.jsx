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


  const scale = isMobile ? 0.6 : 1;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const radius1 = isMobile ? 70 : 100;
  const radius2 = isMobile ? 120 : 180;
  const radius3 = isMobile ? 170 : 260;

  return (
    <Section>
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* ORBIT SECTION */}
        <div className="flex justify-center">
          <div className="scale-[0.65] sm:scale-[0.8] md:scale-100 origin-center">

            <div className="relative w-[320px] sm:w-[420px] md:w-[500px] lg:w-[650px] aspect-square mx-auto overflow-visible mb-8 md:mb-0">

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#0B1120] rounded-full flex items-center justify-center z-10 shadow-[0_0_40px_rgba(0,0,0,0.2)]">
                  <Image
                    src="/logo/logo.svg"
                    alt="logo"
                    width={90}
                    height={90}
                    className="sm:w-[90px] sm:h-[90px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px]"
                  />
                </div>
              </div>

              {/* Orbit Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  style={{ width: radius1 * 2, height: radius1 * 2 }}
                  className="border border-gray-200/60 rounded-full"
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  style={{ width: radius2 * 2, height: radius2 * 2 }}
                  className="border border-gray-200/40 rounded-full"
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  style={{ width: radius3 * 2, height: radius3 * 2 }}
                  className="border border-gray-200/30 rounded-full"
                />
              </div>

              {/* INNER RING */}
              <div className="absolute inset-0 animate-[spin_30s_linear_infinite] sm:animate-[spin_20s_linear_infinite]">
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
                        <div className="bg-white rounded-full p-1.5 sm:p-2 md:p-2 lg:p-3 border border-gray-100 flex items-center justify-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer">
                          <Image
                            src={icon}
                            alt="tech"
                            width={24}
                            height={24}
                            className="w-4 h-4 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-6 lg:h-6"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* MIDDLE RING */}
              <div className="absolute inset-0 animate-[spin_45s_linear_infinite] sm:animate-[spin_35s_linear_infinite]">
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
                        <div className="bg-white rounded-full p-1.5 sm:p-2 md:p-4 border border-gray-100 flex items-center justify-center shadow-md">
                          <Image
                            src={icon}
                            alt="tech"
                            width={26}
                            height={26}
                            className="w-5 h-5 sm:w-7 sm:h-7 md:w-6 md:h-6 lg:w-7 lg:h-7"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* OUTER RING */}
              <div className="absolute inset-0 animate-[spin_60s_linear_infinite] sm:animate-[spin_50s_linear_infinite]">
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
                        <div className="bg-white rounded-full p-1.5 sm:p-2 md:p-4 border border-gray-100 flex items-center justify-center shadow-md">
                          <Image
                            src={icon}
                            alt="tech"
                            width={26}
                            height={26}
                            className="w-5 h-5 sm:w-7 sm:h-7 md:w-6 md:h-6 lg:w-7 lg:h-7"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left px-2 sm:px-0">

          <p className="text-sm text-slate-500 mb-2">
            Our Impact
          </p>

          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Helping Businesses Grow Through Technology
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-4 leading-relaxed">
            Our solutions have supported organizations across industries and regions in achieving digital success.
          </p>

          <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed">
            From enterprise modernization to AI-driven innovation, we help businesses adapt to changing markets, improve operational efficiency, and build technology ecosystems ready for the future.
          </p>

        </div>

      </div>
    </Section>
  );
};

export default TechImpactSection;