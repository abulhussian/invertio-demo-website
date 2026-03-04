import Section from "@/components/common/ui/Section";
import Link from "next/link";

const CTASection = ({ data }) => {
      return (
            <Section>
                  <div className="w-full bg-gradient-to-r from-[#6E79B8] to-[#4E5FA8] rounded-2xl  md:px-14 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">

                        {/* LEFT CONTENT */}
                        <div className="max-w-3xl flex flex-col gap-3">

                              <span className="text-sm text-white/80 font-medium">
                                    {data?.badge}
                              </span>

                              <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight">
                                    {data?.heading}
                              </h2>

                              <p className="text-white/80 text-sm md:text-base">
                                    {data?.description}
                              </p>

                        </div>

                        {/* RIGHT BUTTON */}
                        <Link
                              href={data?.button?.href || "/contact-us"}
                              className="px-6 py-3 rounded-full bg-[#0F172A] text-white text-sm font-semibold hover:bg-[#1E293B] transition"
                        >
                              {data?.button?.text || "Talk To Our Experts"}
                        </Link>

                  </div>
            </Section>
      );
};

export default CTASection;