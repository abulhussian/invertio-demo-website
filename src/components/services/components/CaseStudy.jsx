import Section from "@/components/common/ui/Section";
import SectionHeader from "@/components/common/ui/SectionHeader";

const CaseStudy = ({ data }) => {
  const cards = data?.cards || [];

  return (
    <Section>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT SIDE */}
        <div className="max-w-xl">
          <SectionHeader
            badge={data?.badge}
            heading={data?.heading}
            subheading={data?.subheading}
            size="md"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`
                rounded-2xl border p-6 sm:p-8 transition duration-300
                ${
                  card.variant === "primary"
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                    : "bg-[#F3F4F6] text-[#111827] border-[#E5E7EB]"
                }
              `}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                {card.title}
              </h3>

              <p className="text-sm sm:text-base leading-relaxed opacity-90">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CaseStudy;
