
import NextImage from "next/image";

const SubscribeSection = () => {
      return (
            <section className="relative w-full py-20 px-3 md:px-16 lg:px-24 overflow-hidden bg-[#050A1A]">

                  {/* 1. DECORATIVE IMAGE FIX */}
                  {/* We use negative positioning to "cut" the image off like the design */}
                  <div className="absolute -left-10 -bottom-10 opacity-20 pointer-events-none z-50">
                        <NextImage
                              src="/newsinsight/subimage.png"
                              alt=""
                              width={400} // Increased size to ensure it's visible
                              height={400}
                              className="object-contain"
                              priority
                        />
                  </div>

                  {/* 2. CONTENT LAYER */}
                  <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-10">

                        {/* TEXT CONTENT */}
                        <div className="flex flex-col gap-3">
                              <span className="text-[#94A3B8] text-sm font-semibold tracking-wide uppercase">
                                    News & Insights
                              </span>

                              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                                    Never Miss an Update
                              </h2>

                              <p className="text-[#94A3B8] text-base md:text-lg max-w-xl leading-relaxed">
                                    Subscribe to receive the latest technology insights, innovation stories,
                                    and industry updates directly in your inbox.
                              </p>
                        </div>

                        {/* BUTTON */}
                        <div className="flex-shrink-0">
                              <button className="px-10 py-4 rounded-full bg-[#FF813E] hover:bg-[#e67337] text-white font-bold text-lg transition-transform hover:scale-105 duration-200 shadow-xl">
                                    Subscribe Now
                              </button>
                        </div>

                  </div>
            </section>
      );
};

export default SubscribeSection;