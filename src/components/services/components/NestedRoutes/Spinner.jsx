"use client";
import Image from "next/image";

const Spinner = () => {
      const rings = [
            {
                  icons: ["/icons/react.svg", "/icons/github.svg"],
                  radius: 90,
                  speed: 25,
            },
            {
                  icons: ["/icons/angular.svg", "/icons/node.svg", "/icons/aws.svg", "/icons/html.svg"],
                  radius: 150,
                  speed: 40,
            },
            {
                  icons: ["/icons/figma.svg", "/icons/docker.svg", "/icons/js.svg", "/icons/gitlab.svg", "/icons/mongodb.svg"],
                  radius: 210,
                  speed: 60,
            },
      ];

      return (
            <div className="relative w-full max-w-[520px] aspect-square mx-auto">

                  {/* CENTER */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="w-28 h-28 bg-[#0B1120] rounded-full flex items-center justify-center shadow-xl">
                              <Image
                                    src="/logo/logo.svg"
                                    alt="logo"
                                    width={80}
                                    height={80}
                                    className="object-contain"
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
                                                      {/* Keep icons upright */}
                                                      <div style={{ transform: `rotate(-${angle}deg)` }}>
                                                            <Image
                                                                  src={icon}
                                                                  alt="tech"
                                                                  width={26}
                                                                  height={26}
                                                                  className="opacity-90 hover:opacity-100 transition"
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