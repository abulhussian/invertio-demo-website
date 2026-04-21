import Link from "next/link";

const CTASection = ({ data }) => {
      return (
            <section className="w-full">
                  <div className="w-full bg-gradient-to-r from-[#6E79B8] to-[#4E5FA8] py-12 px-8 md:px-14 lg:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

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
                              className="px-6 py-3 rounded-full bg-[#0F172A] text-white text-sm font-semibold hover:bg-[#1E293B] transition w-fit"
                        >
                              {data?.button?.text || "Talk To Our Experts"}
                        </Link>

                  </div>
            </section>
      );
};

export default CTASection;