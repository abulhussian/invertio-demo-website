"use client";

import Link from "next/link";
import Image from "next/image";

const ProjectSection = ({
      title,
      description,
      image,
      slug,
      buttonText = "Read More",
      imagePosition = "right",
}) => {
      return (
            <section className="py-10 md:py-16">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

                        {/* IMAGE */}
                        <div
                              className={`order-1 ${imagePosition === "left" ? "md:order-1" : "md:order-2"
                                    }`}
                        >
                              <div className="relative w-full h-[200px] sm:h-[260px] md:h-[420px]">
                                    <Image
                                          src={image}
                                          alt={title}
                                          fill
                                          className="object-cover rounded-xl"
                                          sizes="(max-width: 768px) 100vw, 50vw"
                                          priority
                                    />
                              </div>
                        </div>

                        {/* TEXT */}
                        <div
                              className={`order-2 ${imagePosition === "left" ? "md:order-2" : "md:order-1"
                                    }`}
                        >
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0F172A] mb-4">
                                    {title}
                              </h2>

                              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                                    {description}
                              </p>

                              {/* ✅ Desktop Button */}
                              <Link
                                    href={`/our-work/${slug}`}
                                    className="hidden md:inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1E4FD8] text-white px-6 py-3 rounded-full text-sm transition-all"
                              >
                                    {buttonText}
                                    <span className="text-lg">&#8599;</span>
                              </Link>
                        </div>

                        {/* ✅ Mobile Button */}
                        <div className="order-3 md:hidden">
                              <Link
                                    href={`/our-work/${slug}`}
                                    className="w-full inline-flex justify-center items-center gap-2 bg-[#2563EB] hover:bg-[#1E4FD8] text-white px-6 py-3 rounded-full text-sm transition-all"
                              >
                                    {buttonText}
                                    <span className="text-lg">&#8599;</span>
                              </Link>
                        </div>

                  </div>
            </section>
      );
};

export default ProjectSection;