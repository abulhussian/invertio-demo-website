import Image from "next/image";
const SolutionTrustedLogos = ({ data }) => {
      return (
            <section className="bg-white py-10 px-6">
                  <div className="max-w-6xl mx-auto text-center">

                        <p className="text-sm font-medium text-gray-700 mb-8">
                              {data.text}
                        </p>

                        <div className="flex flex-wrap justify-center gap-8">
                              {data.logos.map((logo, index) => (
                                    <Image
                                          key={index}
                                          src={logo}
                                          alt="client"
                                          width={160}
                                          height={60}
                                          className=" object-contain opacity-80 hover:opacity-100 transition"
                                    />
                              ))}
                        </div>

                  </div>
            </section>
      );
};

export default SolutionTrustedLogos;