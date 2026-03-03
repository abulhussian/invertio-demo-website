export default function SectionHeader({
  badge,
  heading,
  subheading,
  align = "left",
  size = "xl",
  headingColor = "#101828",
  subheadingColor = "#475467",
  badgeColor = "#06030E",
  bg,
}) {
  const sizeStyles = {
    xl: {
      heading:
        "text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] leading-tight",
      subheading: "text-[16px] sm:text-[18px] md:text-[20px]",
      badge:
        "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold",
    },
    md: {
      heading:
        "text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight",
      subheading: "text-[14px] sm:text-[16px] md:text-[18px]",
      badge: "text-[13px] sm:text-[14px] md:text-[20px] font-bold",
    },
  };
  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`w-full ${alignStyles[align]}  flex flex-col gap-[16px]`}>
      {badge && (
        <div
          className={`${sizeStyles[size].badge} font-jakarta`}
          style={{ color: badgeColor }}
        >
          {badge}
        </div>
      )}

      <h2
        className={`${sizeStyles[size].heading} font-jakarta leading-tight font-bold`}
        style={{ color: headingColor }}
      >
        {heading}
      </h2>

      {subheading && (
        <p
          className={`${sizeStyles[size].subheading} font-inter font-medium whitespace-pre-line `}
          style={{ color: subheadingColor }}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
