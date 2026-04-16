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

                        {/* TEXT */}
                        <div className={imagePosition === "left" ? "md:order-2" : ""}>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0F172A] mb-4">
                                    {title}
                              </h2>

                              <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                                    {description}
                              </p>

                              <Link
                                    href={`/our-work/${slug}`}
                                    className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1E4FD8] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm transition-all"
                              >
                                    {buttonText}
                                    <span className="text-lg">&#8599;</span>
                              </Link>
                        </div>

                        {/* IMAGE */}
                        <div className={imagePosition === "left" ? "md:order-1" : ""}>
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

                  </div>
            </section>
      );
};

export default ProjectSection;