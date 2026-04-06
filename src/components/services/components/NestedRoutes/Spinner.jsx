import Image from "next/image";

const Spinner = () => {
      const innerIcons = ["/icons/react.svg", "/icons/github.svg", "/icons/aws.svg"];
      const middleIcons = ["/icons/angular.svg", "/icons/node.svg", "/icons/html.svg", "/icons/css.svg"];
      const outerIcons = ["/icons/figma.svg", "/icons/azure.svg", "/icons/mongodb.svg", "/icons/gitlab.svg", "/icons/docker.svg", "/icons/js.svg"];

      const radius1 = 80;
      const radius2 = 140;
      const radius3 = 200;

      return (
            /* Removed Section and Grid to make it a standalone component */
            <div className="relative w-full max-w-[500px] aspect-square mx-auto lg:max-w-[550px]">

                  {/* Center Logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-[#0B1120] rounded-full flex items-center justify-center z-10 shadow-2xl">
                              <Image
                                    src="/logo/logo.svg"
                                    alt="logo"
                                    width={100}
                                    height={100}
                                    className="w-[60%] h-[60%] object-contain"
                              />
                        </div>
                  </div>

                  {/* Orbit Guide Rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                        <div style={{ width: radius1 * 2, height: radius1 * 2 }} className="border border-gray-100 rounded-full" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                        <div style={{ width: radius2 * 2, height: radius2 * 2 }} className="border border-gray-100 rounded-full" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                        <div style={{ width: radius3 * 2, height: radius3 * 2 }} className="border border-gray-100 rounded-full" />
                  </div>

                  {/* RINGS ANIMATION (Reusing your logic) */}
                  {[
                        { icons: innerIcons, radius: radius1, speed: '20s' },
                        { icons: middleIcons, radius: radius2, speed: '35s' },
                        { icons: outerIcons, radius: radius3, speed: '50s' }
                  ].map((ring, rIdx) => (
                        <div
                              key={rIdx}
                              className="absolute inset-0 hover:[animation-play-state:paused]"
                              style={{ animation: `spin ${ring.speed} linear infinite` }}
                        >
                              {ring.icons.map((icon, index) => {
                                    const angle = (360 / ring.icons.length) * index;
                                    return (
                                          <div
                                                key={index}
                                                className="absolute top-1/2 left-1/2"
                                                style={{
                                                      transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${ring.radius}px)`
                                                }}
                                          >
                                                <div style={{ transform: `rotate(-${angle}deg)` }}>
                                                      <div className="bg-white rounded-full p-2 sm:p-3 border border-gray-100 shadow-sm flex items-center justify-center transition-transform hover:scale-110">
                                                            <Image src={icon} alt="tech" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                                                      </div>
                                                </div>
                                          </div>
                                    );
                              })}
                        </div>
                  ))}
            </div>
      );
};

export default Spinner;