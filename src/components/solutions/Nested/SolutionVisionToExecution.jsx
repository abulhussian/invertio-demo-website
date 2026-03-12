"use client"

const SolutionVisionToExecution = () => {
      return (
            <section className="py-16 px-6 lg:px-16">
                  <div className="max-w-7xl mx-auto bg-[#0b1f5b] rounded-[32px] overflow-hidden relative min-h-[400px] flex items-center p-8 lg:p-16">

                        {/* Background Decorative Waves (Abstract) */}
                        <div className="absolute left-0 bottom-0 opacity-10">
                              <svg width="200" height="200" viewBox="0 0 200 200">
                                    <path d="M0 100 Q 25 75 50 100 T 100 100 T 150 100 T 200 100" fill="none" stroke="white" strokeWidth="2" />
                                    <path d="M0 120 Q 25 95 50 120 T 100 120 T 150 120 T 200 120" fill="none" stroke="white" strokeWidth="2" />
                              </svg>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center w-full z-10">
                              {/* Left Content */}
                              <div>
                                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                          Struggling to Move From <br /> AI Vision to Execution?
                                    </h2>
                                    <p className="text-gray-300 text-lg mb-10 max-w-md">
                                          Translate AI strategy into actionable plans for pilots, scaling, and deployment.
                                    </p>

                                    <button className="group flex items-center gap-4 border border-white rounded-full pl-8 pr-2 py-2 text-lg font-medium text-white hover:bg-white hover:text-[#0b1f5b] transition-all duration-300">
                                          Book a Free Consultation
                                          <span className="flex items-center justify-center w-10 h-10 bg-white text-[#0b1f5b] rounded-full">
                                                →
                                          </span>
                                    </button>
                              </div>

                              {/* Right Content - Team Avatars Floating */}
                              <div className="relative hidden lg:block h-[300px]">
                                    {/* Jay Tiwari Card */}
                                    <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex items-center gap-4 w-60 shadow-2xl">
                                          <img
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
                                                className="w-12 h-12 rounded-xl object-cover"
                                                alt="Jay Tiwari"
                                          />
                                          <div>
                                                <p className="text-white font-bold text-sm">Jay Tiwari</p>
                                                <p className="text-gray-400 text-[10px] uppercase tracking-wider">Sales Executive</p>
                                          </div>
                                    </div>

                                    {/* Anirudh Card */}
                                    <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex items-center gap-4 w-60 shadow-2xl">
                                          <img
                                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                                                className="w-12 h-12 rounded-xl object-cover"
                                                alt="Anirudh"
                                          />
                                          <div>
                                                <p className="text-white font-bold text-sm">Anirudh</p>
                                                <p className="text-gray-400 text-[10px] uppercase tracking-wider">Sales Executive</p>
                                          </div>
                                    </div>

                                    {/* Floating Small Avatars */}
                                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=60" className="absolute top-0 left-20 w-10 h-10 rounded-full border-2 border-white/30" alt="team" />
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=60" className="absolute bottom-4 right-32 w-8 h-8 rounded-full border-2 border-white/30" alt="team" />
                              </div>
                        </div>
                  </div>
            </section>
      )
};

export default SolutionVisionToExecution