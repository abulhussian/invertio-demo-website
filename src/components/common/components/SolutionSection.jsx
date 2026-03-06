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
                <div className="text-center flex flex-col gap-4 mb-12">

                    <p className="text-white font-bold text-lg">
                        Our Solutions
                    </p>

                    <h2 className="text-white font-bold leading-tight
  text-[26px] sm:text-[32px] md:text-[38px] lg:text-[40px]">
                        Smart Technology Solutions Designed to Solve Complex Business Challenges
                    </h2>

                    <p className="text-[#cbd5f5] text-sm sm:text-base md:text-lg w-full mx-auto">
                        We empower organizations with data-driven insights, secure digital environments,
                        and strategic technology guidance.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group"
                        >
                            {/* Image */}
                            <div className="relative h-52 w-full">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col justify-between h-[200px]">

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                <Link
                                    href={item.link}
                                    className="text-sm font-semibold text-gray-900 mt-4 flex items-center gap-2 hover:text-orange-500"
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