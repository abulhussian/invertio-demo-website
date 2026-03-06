import Image from "next/image";
import Link from "next/link";

const JobCard = ({ slug, date, title, company, skills, pay, logo }) => {
      return (
            <div className="bg-white border border-gray-100 rounded-md p-8 flex flex-col justify-between min-h-[420px] shadow-sm hover:shadow-md transition-shadow">

                  {/* Top Section */}
                  <div>
                        <p className="text-[13px] text-gray-400 font-medium mb-2">
                              {date}
                        </p>

                        <h3 className="text-[28px] md:text-[32px] font-bold text-[#111827] leading-[1.1] tracking-tight mb-2">
                              {title}
                        </h3>

                        {/* Company */}
                        <div className="flex items-center gap-2 mb-6">
                              <Image
                                    src={logo}
                                    alt={company}
                                    width={60}
                                    height={20}
                                    className="object-contain"
                              />
                        </div>

                        {/* Skills */}
                        <p className="text-[15px] font-semibold text-[#111827] mb-3">
                              Required Skills
                        </p>

                        <div className="flex flex-wrap gap-2">
                              {skills.map((skill, index) => (
                                    <span
                                          key={index}
                                          className="text-[12px] px-4 py-1.5 border border-gray-200 rounded-lg text-gray-600 bg-white"
                                    >
                                          {skill}
                                    </span>
                              ))}
                        </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-6">
                        <p className="text-[16px] text-gray-900 mb-4">
                              Pay : <span className="font-bold">{pay}</span>
                        </p>

                        <Link href={`/careers/jobs/${slug}`}>
                              <button className="w-full py-4 rounded-2xl text-[16px] font-semibold bg-black text-white hover:bg-gray-600 transition-colors">
                                    Apply Now
                              </button>
                        </Link>

                  </div>
            </div>
      );
};

export default JobCard;