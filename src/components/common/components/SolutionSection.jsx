"use client";
import Image from "next/image";
import Section from "../ui/Section";
import Link from "next/link";

const solutions = [
    {
        title: "Data & Analytics",
        desc: "Transform data into meaningful insights using advanced analytics, machine learning, and business intelligence solutions.",
        image: "/Home/data-analytics-home.png",
        link: "/solutions/data-analytics",
    },
    {
        title: "Cybersecurity",
        desc: "Protect systems and digital assets with comprehensive security strategies designed to ensure compliance and minimize risks.",
        image: "/Home/cyber-home.png",
        link: "/solutions/cybersecurity",
    },
    {
        title: "IT Consulting",
        desc: "Align technology with business objectives through strategic planning and architecture-driven decision making.",
        image: "/Home/it-consulting-home.png",
        link: "/solutions/it-consulting",
    },
];

const SolutionsSection = () => {
    return (
        <Section bg="#0B1120">
            <div className="relative">


                {/* Header */}
                <div className=" flex flex-col items-center gap-2 mb-12">

                    <p className="text-white font-bold text-lg">
                        Our Solutions
                    </p>

                    <h2
                        className="text-white font-bold 
  text-[18px] sm:text-[26px] md:text-[32px] lg:text-[36px]
   max-w-[450px] sm:max-w-full text-center "
                    >
                        Smart Technology Solutions
                        Designed to Solve Complex
                        Business Challenges
                    </h2>

                    <p className="text-[#cbd5f5] text-[8px] sm:text-base md:text-lg max-w-[450px] sm:max-w-full text-center ">
                        We empower organizations with data-driven insights, secure digital environments,
                        and strategic technology guidance.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition group"
                        >
                            {/* Image */}
                            <div className="relative h-[210px] w-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="bg-gray-50 p-5 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                <Link
                                    href={item.link}
                                   className="text-sm font-semibold text-gray-900 mt-4 flex items-center justify-end gap-2 hover:text-orange-500"
                                >
                                    Learn More →
                                </Link>

                            </div>
                        </div>
                    ))}

                </div>

                {/* Decorative Background Shape */}
                <Image
                    className="absolute -left-40 top-20  "
                    src="/logo/Logo-ForDarkBox.svg"
                    alt="Logo"
                    width={353}
                    height={464}
                />
            </div>
        </Section>
    );
};

export default SolutionsSection;