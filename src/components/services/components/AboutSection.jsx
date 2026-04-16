import Section from "@/components/common/ui/Section";
import Image from "next/image";

const AboutSection = ({ leftCards = [], rightCard, hideImage = false }) => {
  return (
    <Section>
      <div className="mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-1/2">
          {leftCards.map((card, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-[20px] p-6 sm:p-8 lg:p-10 flex flex-col gap-4 ${card.containerClass}`}
            >
              <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold leading-snug">
                {card.title}
              </h2>

              <p className="text-base sm:text-lg font-medium leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        {rightCard && (
          <div
            className={`w-full lg:w-1/2 overflow-hidden rounded-[20px] p-6 sm:p-8 lg:p-12 flex flex-col gap-6 ${rightCard.containerClass}`}
          >
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold leading-snug">
              {rightCard.title}
            </h2>

            <p className="text-base sm:text-lg font-medium leading-relaxed lg:max-w-[600px]">
              {rightCard.description}
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default AboutSection;
