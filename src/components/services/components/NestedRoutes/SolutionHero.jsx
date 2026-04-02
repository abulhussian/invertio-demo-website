// SolutionHero.jsx
const SolutionHero = ({ data }) => {
      return (
            <section className="bg-[#F8F9FB] pt-20 pb-16 px-6 md:px-12">
                  <div className="max-w-7xl mx-auto">

                        {/* Tagline: Bold and darker than standard gray */}
                        <p className="text-sm font-bold text-[#111827] mb-6 tracking-tight">
                              {data.tag}
                        </p>

                        {/* Main Heading: Very bold, tight letter spacing, and large */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#111827] leading-[1.1] mb-8 tracking-tight">
                              {data.title}
                        </h1>

                        {/* Description: Lighter gray, leading is slightly more generous */}
                        <p className="text-[17px] md:text-lg text-gray-500 max-w-5xl leading-relaxed">
                              {data.description}
                        </p>

                  </div>
            </section>
      );
};

export default SolutionHero;