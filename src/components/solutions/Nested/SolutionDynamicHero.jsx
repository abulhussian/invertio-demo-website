"use client"

const SolutionDynamicHero = () => {

      return (
            <section className="bg-[#0b1f5b] text-white py-24 px-6 lg:px-16 overflow-hidden">
                  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <div>
                              <nav className="text-sm text-gray-300 mb-6 flex items-center gap-1">
                                    <span>Home</span> <span className="text-gray-500">›</span>
                                    <span>AI</span> <span className="text-gray-500">›</span>
                                    <span className="text-white font-medium">AI Consulting</span>
                              </nav>

                              <h1 className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-6 leading-tight">
                                    AI Consulting Services
                              </h1>

                              <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-10">
                                    Integrate AI-driven solutions across your organization with our complete consulting services.
                                    We connect technical challenges with strategic goals through an outcome-driven approach
                                    that supports you throughout the journey.
                              </p>

                              <button className="group flex items-center gap-4 border border-white rounded-full pl-8 pr-2 py-2 text-lg font-medium hover:bg-white hover:text-[#0b1f5b] transition-all duration-300">
                                    Get Free Consultation
                                    <span className="flex items-center justify-center w-12 h-12 bg-white text-[#0b1f5b] rounded-full transition-transform group-hover:translate-x-1">
                                          →
                                    </span>
                              </button>
                        </div>

                        {/* Right Content - Testimonial Card */}
                        <div className="relative">
                              <div className="bg-gray-100 text-gray-800 rounded-2xl p-8 relative shadow-2xl max-w-md ml-auto">
                                    {/* User Avatar */}
                                    <div className="absolute -top-10 right-10 w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                                          <img
                                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
                                                alt="Nancy - Client"
                                                className="w-full h-full object-cover"
                                          />
                                    </div>

                                    <div className="text-[15px] leading-relaxed mt-6 italic text-gray-700">
                                          ValueCoders didnt just suggest solutions, they showed us exactly how to use
                                          them to solve our biggest business problems. The guidance was invaluable.
                                    </div>

                                    <p className="mt-4 font-bold text-gray-900">— Nancy</p>

                                    {/* Ratings Footer */}
                                    <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                                          <div className="text-center">
                                                <div className="text-orange-500 text-lg">★★★★★</div>
                                                <p className="text-[10px] uppercase tracking-wider text-gray-500 mt-1 font-bold">Rated 4.8/5 on G2</p>
                                          </div>

                                          <div className="w-px h-10 bg-gray-300"></div>

                                          <div className="text-center">
                                                <div className="text-orange-500 text-lg">★★★★★</div>
                                                <p className="text-[10px] uppercase tracking-wider text-gray-500 mt-1 font-bold">Rated 4.9/5 on Clutch</p>
                                          </div>
                                    </div>
                              </div>

                              {/* Partner Logos */}
                              <div className="flex gap-6 mt-10 justify-end items-center flex-wrap opacity-80">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-6 brightness-0 invert" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="h-8 brightness-0 invert" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" className="h-6 brightness-0 invert" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Clutch_logo.svg" alt="Clutch" className="h-5 brightness-0 invert" />
                              </div>
                        </div>

                  </div>
            </section>
      );
}

export default SolutionDynamicHero