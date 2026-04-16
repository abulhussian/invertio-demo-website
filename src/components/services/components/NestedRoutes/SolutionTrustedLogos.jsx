import Image from "next/image";

const SolutionTrustedLogos = ({ data }) => {
      if (!data) return null;

      return (
            <section className="bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6">
                  <div className="max-w-[1380px] mx-auto text-center">

                        {/* Text */}
                        <p className="text-xs sm:text-sm font-medium text-gray-700 mb-6 sm:mb-8">
                              {data.text}
                        </p>

                        {/* Logos */}
                        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
                              {data.logos.map((logo, index) => (
                                    <div
                                          key={index}
                                          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] flex items-center justify-center"
                                    >
                                          <Image
                                                src={logo}
                                                alt="client"
                                                width={160}
                                                height={60}
                                                className="w-full h-auto object-contain opacity-70 hover:opacity-100 transition"
                                          />
                                    </div>
                              ))}
                        </div>

                  </div>
            </section>
      );
};

export default SolutionTrustedLogos;