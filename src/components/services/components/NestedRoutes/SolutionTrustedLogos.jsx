import Image from "next/image";

const SolutionTrustedLogos = ({ data }) => {
      if (!data) return null;

      return (
            <section className="bg-white py-6 sm:py-10 md:py-12">
                  <div className="max-w-[1380px] mx-auto px-4 sm:px-6 text-center">

                        {/* Text */}
                        <p className="text-xs sm:text-sm font-medium text-gray-700 mb-4 sm:mb-8 px-2 sm:px-0">
                              {data.text}
                        </p>

                        {/* Logos */}
                        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-8 items-center">
                              {data.logos.map((logo, index) => (
                                    <div
                                          key={index}
                                          className="flex items-center justify-center h-[36px] sm:h-[50px] md:h-[60px]"
                                    >
                                          <Image
                                                src={logo}
                                                alt="client"
                                                width={160}
                                                height={60}
                                                className="max-h-full w-auto object-contain opacity-70 hover:opacity-100 transition"
                                          />
                                    </div>
                              ))}
                        </div>

                  </div>
            </section>
      );
};

export default SolutionTrustedLogos;