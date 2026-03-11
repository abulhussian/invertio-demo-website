import Image from "next/image";

export default function TrustedCompanies({ data }) {
      return (
            <section className="bg-[#F5F5F5] px-4 sm:px-6 md:px-10 lg:px-20 py-14 sm:py-16 md:py-20">
                  <div className="mx-auto max-w-7xl">

                        {/* Title */}
                        <div className="mb-10 sm:mb-12 md:mb-14 flex items-center gap-4 sm:gap-6">

                              <div className="h-px flex-1 bg-[#AEB8C9]" />

                              <h2 className="shrink-0 text-center text-sm sm:text-lg md:text-[20px] font-semibold text-[#42526B]">
                                    {data?.title}{" "}
                                    <span className="text-[#F7A600]">{data?.highlight}</span>{" "}
                                    {data?.suffix}
                              </h2>

                              <div className="h-px flex-1 bg-[#AEB8C9]" />

                        </div>

                        {/* Logos */}
                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:gap-x-12 md:gap-x-14 md:gap-y-12">

                              {data?.companies?.map((company, index) => (
                                    <div
                                          key={index}
                                          className="relative h-10 w-[120px] sm:h-12 sm:w-[140px] md:h-14 md:w-[170px] lg:w-[180px]"
                                    >
                                          <Image
                                                src={company.logo}
                                                alt={company.name}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 170px, 180px"
                                          />
                                    </div>
                              ))}

                        </div>

                  </div>
            </section>
      );
}