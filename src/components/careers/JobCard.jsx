import Link from "next/link";
import Image from "next/image";

const JobCard = ({ slug, date, title, company, logo, skills, pay, isActive }) => {
      return (
            <div className="bg-white border border-gray-100 rounded-[32px] p-8 flex flex-col justify-between h-[450px] shadow-sm hover:shadow-md transition-all">
                  <div>
                        <p className="text-[13px] text-gray-400 font-medium mb-2">{date}</p>
                        <h3 className="text-[28px] font-bold text-[#0F172A] leading-tight mb-3">{title}</h3>

                        <div className="flex items-center gap-2 mb-6">
                              <div className="relative w-16 h-8">
                                    <Image src={logo} alt={company} fill className="object-contain" />
                              </div>
                        </div>

                        <p className="text-[14px] font-semibold text-[#0F172A] mb-3">Required Skills</p>
                        <div className="flex flex-wrap gap-2">
                              {skills?.slice(0, 4).map((skill, index) => (
                                    <span key={index} className="text-[11px] px-3 py-1.5 border border-gray-200 rounded-lg text-gray-500 bg-white">
                                          {skill}
                                    </span>
                              ))}
                        </div>
                  </div>

                  <div className="mt-auto">
                        <p className="text-[15px] text-gray-700 mb-4">
                              Pay : <span className="font-bold text-[#0F172A]">{pay}</span>
                        </p>

                        <Link href={`/careers/jobs/${slug}`} className="block">
                              <button className={`w-full py-4 rounded-2xl text-[15px] font-bold transition-all ${isActive ? "bg-[#0F172A] text-white" : "bg-[#EEF2FF] text-[#6366F1] hover:bg-[#E0E7FF]"
                                    }`}>
                                    Apply Now
                              </button>
                        </Link>
                  </div>
            </div>
      );
};

export default JobCard;