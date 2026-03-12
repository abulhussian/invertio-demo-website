const IndustryCard = ({ industry }) => {
      return (
            <div className="relative group overflow-hidden rounded-xl aspect-[4/5] cursor-pointer">

                  {/* Background Image */}
                  <img
                        src={industry.image}
                        alt={industry.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="w-8 h-[2px] bg-orange-500 mb-3" />

                        <h3 className="text-white text-xl font-bold">
                              {industry.title}
                        </h3>

                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                              <p className="text-gray-300 text-sm mb-4">
                                    Enhancing {industry.title.toLowerCase()} journeys
                              </p>

                              <span className="text-orange-500 text-sm font-semibold flex items-center gap-2">
                                    Learn more <span>→</span>
                              </span>
                        </div>

                  </div>
            </div>
      );
};

export default function IndustriesSection({ content }) {
      return (
            <section className="py-20 px-8 max-w-7xl mx-auto">

                  {/* Header */}
                  <div className="flex justify-between items-end mb-12">
                        <div className="max-w-2xl">

                              <h2 className="text-4xl font-extrabold text-[#0a1128] mb-4">
                                    {content?.title}
                              </h2>

                              <p className="text-gray-500 leading-relaxed">
                                    {content?.description}
                              </p>

                        </div>

                        {/* Static Buttons */}
                        <div className="flex gap-3 mb-2">
                              <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                                    ←
                              </button>

                              <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
                                    →
                              </button>
                        </div>

                  </div>

                  {/* Industry Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content?.items?.map((item, index) => (
                              <IndustryCard key={index} industry={item} />
                        ))}
                  </div>

            </section>
      );
}