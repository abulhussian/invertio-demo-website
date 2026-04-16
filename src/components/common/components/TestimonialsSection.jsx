import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

const testimonials = [
  {
    id: 1,
    name: "Elena D.",
    role: "Creative Director",
    company: "GreenEdge Designs",
    image: "/common/testimonials/elena.png",
    content: `As a design-focused organization, we needed a technology partner who truly understood user experience and performance. Invertio delivered a scalable platform while maintaining exceptional attention to detail throughout the process.

Their professionalism and clear communication made the entire collaboration smooth and efficient. We now operate with greater confidence and improved digital capabilities.`,
  },
  {
    id: 2,
    name: "Nadia R.",
    role: "Co-Founder",
    company: "EduTech Innovations",
    image: "/common/testimonials/nadia.png",
    content: `Launching our platform globally required strong technical guidance and reliable execution. Invertio helped us build a robust and scalable solution while ensuring every milestone was delivered on time.

Their proactive approach and technical expertise played a key role in accelerating our product launch.`,
  },
  {
    id: 3,
    name: "Rahul R.",
    role: "Managing Director",
    company: "Apex Manufacturing Pvt. Ltd.",
    image: "/common/testimonials/rahul.png",
    content: `Invertio supported our digital transformation journey by modernizing our systems and improving operational visibility. Their team understood our business challenges and delivered practical, high-impact solutions.

The results have significantly improved efficiency and decision-making across our organization.`,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#F8F9FC]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-16">

        {/* HEADER */}
        <div className="mb-10 md:mb-16">
          <SectionHeader
            badge="Client Testimonials"
            heading="Trusted by Businesses That Value Innovation and Results"
            subheading="Our clients partner with us to build reliable, scalable, and impactful digital solutions."
            align="center"
            size="md"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-xl transition duration-300"
            >

              {/* PROFILE */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-4 sm:my-6 h-px bg-gray-200" />

              {/* CONTENT */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed whitespace-pre-line line-clamp-5">
                {item.content}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
