export default function CTASection() {
      return (
            <section className="w-full bg-[#6C74B8] py-14 md:py-16 relative overflow-hidden">

                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[url('/patterns/cta-pattern.png')] bg-no-repeat bg-left"></div>

                  <div className="relative px-6 md:px-14 lg:px-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">

                        {/* LEFT CONTENT */}
                        <div>
                              <h2 className="text-2xl md:text-4xl font-semibold text-white mb-3 leading-tight">
                                    Let’s Build Something Exceptional Together
                              </h2>

                              <p className="text-white/80 text-sm md:text-base max-w-xl">
                                    Partner with Invertio to turn ideas into impactful digital solutions
                                    that accelerate growth and innovation.
                              </p>
                        </div>

                        {/* BUTTON */}
                        <div className="w-full md:w-auto">
                              <a
                                    href="tel:+919876543210"
                                    className="block md:inline-block text-center w-full md:w-auto bg-[#0F172A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1E293B] transition"
                              >
                                    Contact Our Experts
                              </a>
                        </div>

                  </div>
            </section>
      );
}