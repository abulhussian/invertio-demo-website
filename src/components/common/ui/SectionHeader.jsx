export default function SectionHeader({
  badge,
  heading,
  subheading,
  para,
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
        "text-[26px] sm:text-[40px] md:text-[52px] lg:text-[64px] leading-snug",
      subheading: "text-[14px] sm:text-[18px] md:text-[20px]",
      badge:
        "text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold",
    },
    md: {
      heading:
        "text-[22px] sm:text-[28px] md:text-[40px] lg:text-[32px] leading-snug",
      subheading: "text-[13px] sm:text-[16px] md:text-[18px]",
      badge: "text-[11px] sm:text-[14px] md:text-[16px] font-bold",
      para: "text-[13px] sm:text-[14px] md:text-[16px]", // ✅ FIXED (no more 8px)
    },
  };
  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`w-full max-w-[1380px] ${alignStyles[align]} flex flex-col gap-2 sm:gap-3 md:gap-4`}>
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
      {para && (
        <p
          className={`${sizeStyles[size].para} font-inter font-medium whitespace-pre-line `}
          style={{ color: subheadingColor }}
        >
          {para}
        </p>
      )}
    </div>
  );
}
