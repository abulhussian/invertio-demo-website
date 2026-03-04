import Link from "next/link";

function LeftSideSection({
      title,
      description,
      buttonText,
      image,
      slug,
}) {
      return (
            <section className="w-full bg-[#F4F6FA] py-20">
                  <div className="flex flex-col lg:flex-row items-center gap-8">

                        {/* IMAGE */}
                        <div className="flex-1 order-1 lg:order-2">
                              <div className="bg-white rounded-2xl">
                                    <img
                                          src={image}
                                          alt="preview"
                                          className="w-full rounded-xl object-contain"
                                    />
                              </div>
                        </div>

                        {/* TEXT */}
                        <div className="flex-1 max-w-xl order-2 lg:order-1">
                              <h2 className="text-md md:text-4xl font-semibold text-[#0F172A] mb-4">
                                    {title}
                              </h2>

                              <p className="text-gray-600 leading-relaxed text-[14px] mb-4">
                                    {description}
                              </p>

                              <Link href={`/our-work/${slug}`}>
                                    <button className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1E4FD8] text-white text-sm font-medium px-6 py-3 rounded-full transition">
                                          {buttonText}
                                          <span className="text-xl font-bold">&#8599;</span>
                                    </button>
                              </Link>
                        </div>

                  </div>
            </section>
      );
}

export default LeftSideSection;