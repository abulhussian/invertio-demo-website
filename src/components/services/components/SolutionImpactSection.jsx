import Image from "next/image";
import Section from "@/components/common/ui/Section";

const SolutionImpactSection = ({ data }) => {
      return (
            <Section>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-start">

                        {/* LEFT LIST */}
                        <div className="flex flex-col gap-4">
                              {data?.points?.map((item, index) => (
                                    <div
                                          key={index}
                                          className="flex items-start gap-4 border border-[#D5D9EB] rounded-xl p-5 bg-white hover:shadow-md transform transition-all duration-300 hover:-translate-y-1"
                                    >
                                          <Image
                                                src="/common/check.svg"
                                                alt="check"
                                                width={26}
                                                height={26}
                                          />

                                          <p className="text-sm text-[#101323] leading-relaxed">
                                                {item}
                                          </p>
                                    </div>
                              ))}
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="flex flex-col gap-4 max-w-xl">
                              <span className="text-sm font-semibold text-gray-500">
                                    {data?.badge}
                              </span>

                              <h2 className="text-3xl md:text-4xl font-semibold text-[#101323]">
                                    {data?.heading}
                              </h2>

                              <p className="text-gray-500 leading-relaxed">
                                    {data?.description}
                              </p>
                        </div>

                  </div>
            </Section>
      );
};

export default SolutionImpactSection;