import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Star } from "lucide-react";

const DynamicHero = ({ data, type = "Services" }) => {
      return (
            <section className="relative bg-[#051139] text-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6 md:px-12 lg:px-24">

                  {/* Background Decorative Elements */}
                  <div className="absolute top-20 right-1/4 opacity-20 hidden lg:block">
                        <Image
                              src="/decor/spiral-arrow.svg"
                              alt=""
                              width={100}
                              height={100}
                              className="rotate-12"
                        />
                  </div>

                  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT SIDE */}
                        <div className="flex flex-col z-10">

                              {/* Breadcrumb */}
                              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                                    <Link href="/" className="hover:text-white transition">
                                          Home
                                    </Link>

                                    <ChevronRight size={14} />

                                    <span className="capitalize">{type}</span>

                                    <ChevronRight size={14} />

                                    <span className="text-[#F7A600] font-medium">
                                          {data?.label}
                                    </span>
                              </nav>

                              {/* Title */}
                              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                    {data?.label} <span className="text-[#F7A600]">.</span>
                              </h1>

                              {/* Subtitle */}
                              <h2 className="text-xl md:text-2xl italic font-medium text-gray-300 mb-6">
                                    {data?.subtitle}
                              </h2>

                              {/* Description */}
                              <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
                                    {data?.description}
                              </p>

                              {/* CTA */}
                              <div className="flex flex-wrap gap-4">
                                    <button className="group flex items-center gap-3 border-2 border-white rounded-full px-8 py-4 text-lg font-bold hover:bg-white hover:text-[#051139] transition-all duration-300">
                                          {data?.cta?.text}

                                          <div className="bg-white text-[#051139] rounded-full p-1 group-hover:bg-[#051139] group-hover:text-white transition-colors">
                                                <ArrowRight size={20} />
                                          </div>
                                    </button>
                              </div>
                        </div>

                        {/* RIGHT SIDE TESTIMONIAL */}
                        <div className="relative z-10 flex justify-center lg:justify-end">
                              <div className="relative bg-white rounded-3xl p-8 md:p-10 text-[#051139] max-w-md shadow-2xl">

                                    {/* Avatar */}
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg bg-gray-200">
                                          <Image
                                                src={data?.testimonial?.avatar}
                                                alt={data?.testimonial?.author}
                                                fill
                                                className="object-cover"
                                          />
                                    </div>

                                    {/* Testimonial */}
                                    <div className="mt-10 text-center">
                                          <p className="text-gray-600 italic text-lg leading-relaxed mb-6">
                                                `${"{data?.testimonial?.quote}"}`
                                          </p>

                                          <h4 className="font-bold text-xl">
                                                – {data?.testimonial?.author}
                                          </h4>
                                    </div>

                                    {/* Ratings */}
                                    <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row gap-6 justify-between items-center">

                                          {data?.ratings?.map((item, i) => (
                                                <div key={i} className="flex flex-col items-center">
                                                      <div className="flex gap-1 text-[#F7A600] mb-1">
                                                            {[...Array(5)].map((_, j) => (
                                                                  <Star key={j} size={14} fill="#F7A600" />
                                                            ))}
                                                      </div>

                                                      <p className="text-xs font-bold text-gray-400">
                                                            Rated {item.rating} stars on
                                                            <span className="text-[#051139]"> {item.platform}</span>
                                                      </p>
                                                </div>
                                          ))}

                                    </div>

                              </div>
                        </div>
                  </div>

                  {/* Partner Logos */}
                  <div className="max-w-7xl mx-auto mt-20 flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

                        {data?.partners?.map((partner, i) => (
                              <Image
                                    key={i}
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={140}
                                    height={40}
                              />
                        ))}

                  </div>
            </section>
      );
};

export default DynamicHero;