import Section from "@/components/common/ui/Section";
import Link from "next/link";

const SolutionFinalCTA = ({ data }) => {
      if (!data) return null;

      return (
            <Section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0B1E3F] via-[#0F2A5C] to-[#0B1E3F] text-white">

                  <div className="relative mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-8 px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">

                        {/* LEFT */}
                        <div className="max-w-2xl">
                              <p className="text-xs sm:text-sm text-gray-300 mb-2">
                                    {data.tag}
                              </p>

                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
                                    {data.heading}
                              </h2>

                              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                    {data.description}
                              </p>
                        </div>

                        {/* BUTTON */}
                        <div className="w-full lg:w-auto">
                              <Link
                                    href={data.button?.href || "/contact-us"}
                                    className="w-full lg:w-auto inline-flex items-center justify-center px-6 sm:px-7 h-11 sm:h-12 rounded-full bg-orange-500 text-white font-semibold text-sm sm:text-base hover:bg-orange-600 transition shadow-lg"
                              >
                                    {data.button?.text || "Contact Us"}
                              </Link>
                        </div>

                  </div>
            </Section>
      );
};

export default SolutionFinalCTA;