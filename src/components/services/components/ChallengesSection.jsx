import Image from "next/image";
import Section from "@/components/common/ui/Section";

const ChallengesSection = ({ data }) => {
      return (
            <Section>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* LEFT CONTENT */}
                        <div className="flex flex-col gap-4">
                              <span className="text-sm font-semibold text-gray-500">
                                    {data?.badge}
                              </span>

                              <h2 className="text-3xl md:text-4xl font-semibold text-[#101323] leading-tight">
                                    {data?.heading}
                              </h2>

                              <p className="text-gray-500 leading-relaxed max-w-lg">
                                    {data?.description}
                              </p>
                        </div>

                        {/* RIGHT LIST */}
                        <div className="flex flex-col gap-4">
                              {data?.items?.map((item, index) => (
                                    <div
                                          key={index}
                                          className="flex items-start gap-4 border border-[#D5D9EB] rounded-xl p-5 bg-white hover: transform transition-all duration-300 hover:-translate-y-1"
                                    >
                                          {/* ICON */}
                                          <Image
                                                src="/services/image.png"
                                                alt="icon"
                                                width={28}
                                                height={28}
                                                className="mt-1"
                                          />

                                          {/* TEXT */}
                                          <div>
                                                <h4 className="text-lg font-semibold text-[#101323]">
                                                      {item.title}
                                                </h4>

                                                <p className="text-sm text-gray-500 mt-1">
                                                      {item.description}
                                                </p>
                                          </div>
                                    </div>
                              ))}
                        </div>

                  </div>
            </Section>
      );
};

export default ChallengesSection;