function StartJourneySection() {
      return (
            <section className="w-full bg-[#0B1225] py-14 relative overflow-hidden">

                  {/* Optional Decorative Shape */}
                  <div className="absolute left-0 top-0 h-full w-40 bg-white/5 skew-x-[-20deg]" />

                  <div className="relative px-8 md:px-14 lg:px-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                        {/* LEFT CONTENT */}
                        <div className="max-w-3xl">
                              <p className="text-sm text-white/60 mb-4">
                                    Let’s Build Together
                              </p>

                              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 leading-tight">
                                    Start Your Digital Transformation Journey with Invertio
                              </h2>

                              <p className="text-white/70 text-sm md:text-base">
                                    Partner with us to turn your ideas into scalable, high-impact digital solutions.
                                    Our team is ready to collaborate, innovate, and deliver technology that drives measurable business growth.
                              </p>
                        </div>

                        {/* RIGHT BUTTON */}
                        <div className="flex-shrink-0">
                              <button className="bg-[#FF8A3D] hover:bg-[#FF7A24] text-white px-8 py-3 rounded-full text-sm font-medium transition">
                                    Start Your Journey
                              </button>
                        </div>

                  </div>
            </section>
      );
}

export default StartJourneySection;