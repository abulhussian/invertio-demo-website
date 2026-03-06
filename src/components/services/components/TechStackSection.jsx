import Image from "next/image";
import Section from "@/components/common/ui/Section";

const TechStackSection = ({ data }) => {
      return (
            <Section>
                  <div className="flex flex-col items-center gap-10">

                        {/* TITLE */}
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#101323] text-center">
                              {data?.heading || "Tech Stack Used"}
                        </h2>

                        {/* GRID */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-6xl">

                              {data?.items?.map((tech, index) => (
                                    <div
                                          key={index}
                                          className="flex flex-col items-center justify-center gap-3 bg-white border border-[#E5E7EB] rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                                    >
                                          <Image
                                                src={tech.icon}
                                                alt={tech.name}
                                                width={80}
                                                height={80}
                                                className="object-cover"
                                          />

                                          <span className="text-sm font-medium text-gray-600">
                                                {tech.name}
                                          </span>
                                    </div>
                              ))}

                        </div>
                  </div>
            </Section>
      );
};

export default TechStackSection;