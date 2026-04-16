const SolutionHero = ({ data }) => {
      if (!data) return null;

      return (
            <section className="bg-[#F8F9FB] pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-14 md:pb-16 px-4 sm:px-6 md:px-12">
                  <div className="max-w-7xl mx-auto">

                        {/* Tagline */}
                        <p className="text-xs sm:text-sm font-semibold sm:font-bold text-[#111827] mb-4 sm:mb-6 tracking-tight">
                              {data.tag}
                        </p>

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#111827] leading-tight sm:leading-[1.15] md:leading-[1.1] mb-6 sm:mb-8 tracking-tight max-w-5xl">
                              {data.title}
                        </h1>

                        {/* Description */}
                        <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-3xl md:max-w-4xl lg:max-w-5xl leading-relaxed">
                              {data.description}
                        </p>

                  </div>
            </section>
      );
};

export default SolutionHero;