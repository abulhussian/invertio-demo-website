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
            <section className="py-16">
                  <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* TEXT */}
                        <div className={imagePosition === "left" ? "md:order-2" : ""}>
                              <h2 className="text-3xl md:text-4xl font-semibold text-[#0F172A] mb-4">
                                    {title}
                              </h2>

                              <p className="text-gray-600 mb-6">
                                    {description}
                              </p>

                              <Link
                                    href={`/our-work/${slug}`}
                                    className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1E4FD8] text-white px-6 py-3 rounded-full text-sm"
                              >
                                    {buttonText}
                                    <span className="text-lg">&#8599;</span>
                              </Link>
                        </div>

                        {/* IMAGE */}
                        <div className={imagePosition === "left" ? "md:order-1" : ""}>
                              <div className="relative w-full h-[420px]">
                                    <Image
                                          src={image}
                                          alt={title}
                                          fill
                                          className="object-contain rounded-xl"
                                    />
                              </div>
                        </div>

                  </div>
            </section>
      );
};

export default ProjectSection;