import Section from "@/components/common/ui/Section";
import Image from "next/image";

const AboutSection = ({ leftCards = [], rightCard }) => {
  return (
    <Section>
      <div className="mx-auto grid lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-8">
          {leftCards.map((card, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-[20px] p-10 flex flex-col gap-4 ${card.containerClass}`}
            >
              <h2 className="text-[40px] lg:text-[48px] font-bold font-jakarta leading-snug">
                {card.title}
              </h2>

              <p className="text-lg font-medium leading-relaxed">
                {card.description}
              </p>

              {card.image && (
                <Image
                  className={card.imageClass}
                  src={card.image}
                  alt={card.title}
                  width={card.imageWidth || 300}
                  height={card.imageHeight || 300}
                />
              )}
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        {rightCard && (
          <div
            className={`relative overflow-hidden rounded-[20px] p-12 flex flex-col gap-6 ${rightCard.containerClass}`}
          >
            <h2 className="text-[42px] lg:text-[56px] font-bold font-jakarta leading-snug">
              {rightCard.title}
            </h2>

            <p className="text-lg font-medium leading-relaxed max-w-[600px]">
              {rightCard.description}
            </p>

            {rightCard.image && (
              <Image
                className={rightCard.imageClass}
                src={rightCard.image}
                alt={rightCard.title}
                width={rightCard.imageWidth || 400}
                height={rightCard.imageHeight || 400}
              />
            )}
          </div>
        )}
      </div>
    </Section>
  );
};

export default AboutSection;
