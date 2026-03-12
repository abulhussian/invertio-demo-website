"use client"

const IndustriesSection = () => {
      return (
            <section className="bg-white py-16 px-4 font-sans">
                  <div className="max-w-7xl mx-auto">
                        {/* Header Section */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                              <div className="max-w-2xl">
                                    <h2 className="text-4xl font-bold text-[#001B44] mb-4">
                                          Industries We Cater To
                                    </h2>
                                    <p className="text-gray-500 text-lg">
                                          Partnering with businesses in diverse sectors to unlock new avenues for growth and innovation.
                                    </p>
                              </div>

                              {/* Navigation Arrows */}
                              <div className="flex gap-3">
                                    <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition text-gray-400">
                                          <span className="text-xl">←</span>
                                    </button>
                                    <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition text-gray-400">
                                          <span className="text-xl">→</span>
                                    </button>
                              </div>
                        </div>

                        {/* Industry Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                              <div className="relative group overflow-hidden rounded-[20px] h-[450px]">
                                    <img
                                          src="/public/Home/qatar-cards.png"
                                          alt="Healthcare"
                                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                                          <h3 className="text-white text-xl font-bold mb-2">Healthcare</h3>
                                          <div className="w-8 h-1 bg-yellow-500 mb-4"></div>
                                          <p className="text-gray-200 text-sm mb-4">Building smart healthcare solutions</p>
                                          <a className="text-yellow-500 font-semibold flex items-center gap-2">
                                                Learn more →
                                          </a>
                                    </div>
                              </div>

                              <div className="relative group overflow-hidden rounded-[20px] h-[450px]">
                                    <img
                                          src="https://picsum.photos/id/1060/800/600"
                                          alt="Retail"
                                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                                          <h3 className="text-white text-xl font-bold mb-2">Retail & eCommerce</h3>
                                          <div className="w-8 h-1 bg-yellow-500 mb-4"></div>
                                          <p className="text-gray-200 text-sm">Revolutionizing shopping experiences</p>
                                    </div>
                              </div>

                              <div className="relative group overflow-hidden rounded-[20px] h-[450px]">
                                    <img
                                          src="https://picsum.photos/id/1074/800/600"
                                          alt="Media"
                                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                                          <h3 className="text-white text-xl font-bold mb-2">Media & Entertainment</h3>
                                          <div className="w-8 h-1 bg-yellow-500 mb-4"></div>
                                          <p className="text-gray-200 text-sm">Next-gen digital entertainment</p>
                                    </div>
                              </div>

                        </div>
                  </div>
            </section>
      );
};

export default IndustriesSection;