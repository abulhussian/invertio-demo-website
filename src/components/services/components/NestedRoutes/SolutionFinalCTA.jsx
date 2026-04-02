import Section from "@/components/common/ui/Section";
import Link from "next/link";

const SolutionFinalCTA = ({ data }) => {
      if (!data) return null;

      return (
            <Section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0B1E3F] via-[#0F2A5C] to-[#0B1E3F] text-white">

                  {/* 🔥 SUBTLE PATTERN (blue overlay) */}
                  <div className="absolute inset-0 opacity-[0.08]">
                        <svg
                              className="w-full h-full"
                              viewBox="0 0 800 400"
                              fill="none"
                        >
                              <path
                                    d="M0 300 L300 0 L800 0 L500 400 Z"
                                    fill="#3B82F6"
                              />
                        </svg>
                  </div>

                  {/* CONTENT */}
                  <div className="relative mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 px-8 py-12">

                        {/* LEFT */}
                        <div className="max-w-2xl">
                              <p className="text-sm text-gray-300 mb-2">
                                    {data.tag}
                              </p>

                              <h2 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
                                    {data.heading}
                              </h2>

                              <p className="text-gray-400 text-sm sm:text-base">
                                    {data.description}
                              </p>
                        </div>

                        {/* BUTTON */}
                        <div>
                              <Link
                                    href={data.button?.href || "/contact-us"}
                                    className="inline-flex items-center justify-center px-7 h-12 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition shadow-lg"
                              >
                                    {data.button?.text || "Contact Us"}
                              </Link>
                        </div>

                  </div>
            </Section>
      );
};

export default SolutionFinalCTA;