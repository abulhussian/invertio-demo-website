
'use client'
import { ArrowUpRight } from 'lucide-react';

const SolutionInsightGrid = () => {


      return (
            <section className="w-full bg-white font-sans">
                  <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* Item 1: Digital Transformation Blog */}
                        <div className="group flex flex-col md:flex-row h-[400px] overflow-hidden">
                              <div className="w-full md:w-1/2 overflow-hidden">
                                    <img
                                          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800"
                                          alt="Digital Transformation"
                                          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                    />
                              </div>
                              <div className="w-full md:w-1/2 bg-[#051139] p-10 flex flex-col justify-between text-white">
                                    <div>
                                          <span className="px-3 py-1 border border-white/30 rounded text-xs uppercase tracking-wider">Blog</span>
                                          <h3 className="text-2xl font-bold mt-6 leading-tight">
                                                The Role of Digital Transformation in Product Engineering
                                          </h3>
                                          <p className="text-gray-400 mt-4 text-sm line-clamp-3">
                                                Do you want to redefine your product engineering experience with digital transformation? If yes, it will be...
                                          </p>
                                    </div>
                                    <button className="flex items-center gap-2 text-sm font-medium group/btn">
                                          Learn More <ArrowUpRight size={18} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                    </button>
                              </div>
                        </div>

                        {/* Item 2: Product Scanner Case Study */}
                        <div className="group relative h-[400px] overflow-hidden">
                              <img
                                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800"
                                    alt="Scanner App"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-500" />
                              <div className="relative h-full p-10 flex flex-col justify-between text-white z-10">
                                    <div>
                                          <span className="px-3 py-1 border border-white/30 rounded text-xs uppercase tracking-wider">Case Study</span>
                                          <h3 className="text-2xl font-bold mt-6">Product Scanner App</h3>
                                          <p className="text-gray-300 mt-4 text-sm max-w-md">
                                                It s an eCommerce platform with two fronts. One is where the customers can access the store and buy different products.
                                          </p>
                                          <div className="mt-6 flex gap-8">
                                                <div>
                                                      <p className="text-[10px] uppercase text-gray-400 tracking-widest">Core tech</p>
                                                      <p className="text-sm font-medium">MONGODB, Next JS, NodeJS, ReactJS</p>
                                                </div>
                                          </div>
                                    </div>
                                    <button className="flex items-center gap-2 text-sm font-medium">
                                          Learn More <ArrowUpRight size={18} />
                                    </button>
                              </div>
                        </div>

                        {/* Item 3: Wealth Management Case Study */}
                        <div className="group relative h-[400px] overflow-hidden">
                              <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
                                    alt="Wealth Portal"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-500" />
                              <div className="relative h-full p-10 flex flex-col justify-between text-white z-10">
                                    <div>
                                          <span className="px-3 py-1 border border-white/30 rounded text-xs uppercase tracking-wider">Case Study</span>
                                          <h3 className="text-2xl font-bold mt-6">Wealth Management Portal</h3>
                                          <p className="text-gray-300 mt-4 text-sm max-w-md">
                                                The founders of this project started a vision of making wealth management safe, efficient, and result-oriented.
                                          </p>
                                          <div className="mt-6">
                                                <p className="text-[10px] uppercase text-gray-400 tracking-widest">Core tech</p>
                                                <p className="text-sm font-medium">Angular, Flutter, PHP, Wordpress</p>
                                          </div>
                                    </div>
                                    <button className="flex items-center gap-2 text-sm font-medium">
                                          Learn More <ArrowUpRight size={18} />
                                    </button>
                              </div>
                        </div>

                        {/* Item 4: Digital Transformation Essentials Blog */}
                        <div className="group flex flex-col md:flex-row h-[400px] overflow-hidden">
                              <div className="w-full md:w-1/2 overflow-hidden">
                                    <img
                                          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800"
                                          alt="Digital Essentials"
                                          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                    />
                              </div>
                              <div className="w-full md:w-1/2 bg-[#051139] p-10 flex flex-col justify-between text-white">
                                    <div>
                                          <span className="px-3 py-1 border border-white/30 rounded text-xs uppercase tracking-wider">Blog</span>
                                          <h3 className="text-2xl font-bold mt-6 leading-tight">
                                                Digital Transformation Essentials for Modern Businesses
                                          </h3>
                                          <p className="text-gray-400 mt-4 text-sm line-clamp-3">
                                                As Bill Gates stated, The world is evolving amazingly fast because of digital technology. Adopting digital...
                                          </p>
                                    </div>
                                    <button className="flex items-center gap-2 text-sm font-medium">
                                          Learn More <ArrowUpRight size={18} />
                                    </button>
                              </div>
                        </div>

                  </div>
            </section>
      );
};



export default SolutionInsightGrid