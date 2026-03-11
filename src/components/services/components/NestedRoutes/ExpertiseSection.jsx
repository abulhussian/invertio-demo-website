import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const ExpertiseSection = ({ data }) => {
      return (
            <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT CONTENT */}
                        <div className="flex flex-col">

                              <h2 className="text-[#051139] text-4xl md:text-5xl font-bold leading-tight mb-8">
                                    {data?.title}
                              </h2>

                              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                                    {data?.description?.map((text, i) => (
                                          <p key={i}>{text}</p>
                                    ))}
                              </div>

                              {/* Feature List */}
                              <ul className="grid grid-cols-1 gap-4">
                                    {data?.points?.map((point, index) => (
                                          <li
                                                key={index}
                                                className="flex items-center gap-3 text-[#42526B] font-medium"
                                          >
                                                <CheckCircle2
                                                      className="text-[#F7A600] shrink-0"
                                                      size={22}
                                                      fill="currentColor"
                                                      fillOpacity={0.1}
                                                />
                                                {point}
                                          </li>
                                    ))}
                              </ul>

                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="flex flex-col">

                              {/* Client Logos */}
                              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-12">
                                    {data?.clientLogos?.map((logo, i) => (
                                          <div
                                                key={i}
                                                className="h-16 bg-white border border-gray-100 rounded-lg flex items-center justify-center p-3 shadow-sm hover:shadow-md transition-shadow"
                                          >
                                                <div className="relative w-full h-full">
                                                      <Image
                                                            src={logo}
                                                            alt="Client logo"
                                                            fill
                                                            className="object-contain grayscale hover:grayscale-0 transition-all"
                                                      />
                                                </div>
                                          </div>
                                    ))}
                              </div>

                              {/* Certifications Label */}
                              <div className="flex items-center gap-2 mb-6">
                                    <span className="text-[#051139] font-bold text-lg">
                                          Awards & Certifications —
                                    </span>
                              </div>

                              {/* Certifications */}
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {data?.certifications?.map((cert, i) => (
                                          <div
                                                key={i}
                                                className="h-28 bg-white border border-gray-100 rounded-xl flex items-center justify-center p-4 shadow-sm"
                                          >
                                                <div className="relative w-full h-full">
                                                      <Image
                                                            src={cert.src}
                                                            alt={cert.alt}
                                                            fill
                                                            className="object-contain"
                                                      />
                                                </div>
                                          </div>
                                    ))}
                              </div>

                        </div>

                  </div>
            </section>
      );
};

export default ExpertiseSection;