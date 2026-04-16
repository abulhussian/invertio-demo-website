"use client";
import Image from "next/image";

const SubscribeSection = () => {
      const handleScroll = () => {
            const section = document.getElementById("footer-subscribe");

            section?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
            });

            setTimeout(() => {
                  const input = section?.querySelector("input");
                  input?.focus();
            }, 500);
      };

      return (
            <section className="relative w-full py-10 sm:py-12 overflow-hidden bg-[#0B1120]">

                  {/* Background */}
                  <Image
                        className="absolute -left-32 top-10 opacity-20"
                        src="/newsinsight/subimage.png"
                        alt="Background Shape"
                        width={300}
                        height={400}
                  />

                  {/* Content */}
                  <div className="relative w-full mx-auto px-4 sm:px-8 md:px-14 lg:px-20 
      flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:text-left">

                        {/* LEFT */}
                        <div className="flex flex-col gap-2 max-w-[320px] sm:max-w-md md:max-w-xl md:mx-0 text-left">

                              <span className="text-xs sm:text-sm text-gray-400 font-medium  md:text-left">
                                    News & Insights
                              </span>

                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-snug  md:text-left">
                                    Never Miss an Update
                              </h2>

                              <p className="text-gray-300 text-sm sm:text-base leading-relaxed  md:text-left">
                                    Subscribe to receive the latest technology insights, innovation stories,
                                    and industry updates directly in your inbox.
                              </p>

                        </div>

                        {/* BUTTON */}
                        <div className="w-full md:w-auto flex justify-center md:justify-end">
                              <div className="w-full md:w-auto">
                                    <button
                                          onClick={handleScroll}
                                          className="w-full sm:w-auto px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-medium transition"
                                    >
                                          Subscribe Now
                                    </button>
                              </div>
                        </div>

                  </div>

            </section>
      );
};

export default SubscribeSection;