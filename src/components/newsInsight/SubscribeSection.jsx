import Image from "next/image";

const SubscribeSection = () => {
      return (
            <section className="relative w-full py-12 overflow-hidden bg-[#0B1120]">

                  {/* Decorative Background Shape (same style as CTA) */}
                  <Image
                        className="absolute -left-40 top-16 opacity-20"
                        src="/newsinsight/subimage.png"
                        alt="Background Shape"
                        width={353}
                        height={464}
                  />

                  {/* Content */}
                  <div className="relative w-full mx-auto px-8 md:px-14 lg:px-20 
      flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                        {/* LEFT */}
                        <div className="flex flex-col gap-4 max-w-2xl">
                              <span className="text-sm text-gray-400 font-medium">
                                    News & Insights
                              </span>

                              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                                    Never Miss an Update
                              </h2>

                              <p className="text-gray-300 text-sm md:text-base">
                                    Subscribe to receive the latest technology insights, innovation stories,
                                    and industry updates directly in your inbox.
                              </p>
                        </div>

                        {/* RIGHT BUTTON */}
                        <div className="flex-shrink-0">
                              <button className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition">
                                    Subscribe Now
                              </button>
                        </div>

                  </div>

            </section>
      );
};

export default SubscribeSection;