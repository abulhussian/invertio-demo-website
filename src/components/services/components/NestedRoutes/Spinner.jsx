"use client";
import Image from "next/image";

const Spinner = () => {
      const rings = [
            {
                  icons: ["/icons/react.svg", "/icons/github.svg"],
                  radius: 70, // reduced base
                  speed: 25,
            },
            {
                  icons: ["/icons/angular.svg", "/icons/node.svg", "/icons/aws.svg", "/icons/html.svg"],
                  radius: 110,
                  speed: 40,
            },
            {
                  icons: ["/icons/figma.svg", "/icons/docker.svg", "/icons/js.svg", "/icons/gitlab.svg", "/icons/mongodb.svg"],
                  radius: 150,
                  speed: 60,
            },
      ];

      return (
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] aspect-square mx-auto">

                  {/* CENTER */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#0B1120] rounded-full flex items-center justify-center shadow-xl">
                              <Image
                                    src="/logo/logo.svg"
                                    alt="logo"
                                    width={60}
                                    height={60}
                                    className="object-contain sm:w-[70px] md:w-[80px]"
                              />
                        </div>
                  </div>

                  {/* RINGS */}
                  {rings.map((ring, rIdx) => (
                        <div key={rIdx} className="absolute inset-0 flex items-center justify-center">

                              {/* Circle */}
                              <div
                                    className="absolute rounded-full border border-gray-200/40"
                                    style={{
                                          width: ring.radius * 2,
                                          height: ring.radius * 2,
                                    }}
                              />

                              {/* Icons */}
                              <div
                                    className="absolute inset-0"
                                    style={{
                                          animation: `spin ${ring.speed}s linear infinite`,
                                    }}
                              >
                                    {ring.icons.map((icon, index) => {
                                          const angle = (360 / ring.icons.length) * index;

                                          return (
                                                <div
                                                      key={index}
                                                      className="absolute top-1/2 left-1/2"
                                                      style={{
                                                            transform: `rotate(${angle}deg) translate(${ring.radius}px)`,
                                                            transformOrigin: "0 0",
                                                      }}
                                                >
                                                      <div style={{ transform: `rotate(-${angle}deg)` }}>
                                                            <Image
                                                                  src={icon}
                                                                  alt="tech"
                                                                  width={20}
                                                                  height={20}
                                                                  className="sm:w-[24px] md:w-[26px] opacity-90 hover:opacity-100 transition"
                                                            />
                                                      </div>
                                                </div>
                                          );
                                    })}
                              </div>
                        </div>
                  ))}

                  {/* Animation */}
                  <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
            </div>
      );
};

export default Spinner;