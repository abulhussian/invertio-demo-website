export default function CTASection() {
      return (
            <section className="w-full bg-[#6C74B8] py-16 relative overflow-hidden">

                  {/* Optional subtle background pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[url('/patterns/cta-pattern.png')] bg-no-repeat bg-left"></div>

                  <div className="relative px-4 md:px-14 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                        {/* LEFT CONTENT */}
                        <div>
                              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
                                    Let’s Build Something Exceptional Together
                              </h2>

                              <p className="text-white/80 text-sm md:text-base max-w-2xl">
                                    Partner with Invertio to turn ideas into impactful digital solutions
                                    that accelerate growth and innovation.
                              </p>
                        </div>

                        {/* RIGHT BUTTON */}
                        <div className="flex-shrink-0">
                              <button className="bg-[#0F172A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1E293B] transition">
                                    Contact Our Experts
                              </button>
                        </div>

                  </div>
            </section>
      );
}