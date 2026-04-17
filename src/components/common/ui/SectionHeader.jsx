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
}) {
  const sizeStyles = {
    xl: {
      heading:
        "text-[24px] sm:text-[32px] md:text-[44px] lg:text-[56px] leading-tight",
      subheading: "text-[14px] sm:text-[16px] md:text-[18px]",
      badge:
        "text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-bold",
      para: "text-[14px] sm:text-[15px] md:text-[16px]",
    },
    md: {
      heading:
        "text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] leading-tight",
      subheading: "text-[13px] sm:text-[15px] md:text-[16px]",
      badge: "text-[10px] sm:text-[12px] md:text-[14px] font-bold",
      para: "text-[13px] sm:text-[14px] md:text-[15px]",
    },
  };

  const alignStyles = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div
      className={`w-full px-3 sm:px-0 
        ${align === "center"
          ? "max-w-[92%] sm:max-w-[800px] mx-auto"
          : "max-w-full sm:max-w-[900px]"
        } 
        ${alignStyles[align]} 
        flex flex-col gap-2 sm:gap-3 md:gap-4`}
    >
      {/* Badge */}
      {badge && (
        <div
          className={`${sizeStyles[size].badge} font-jakarta`}
          style={{ color: badgeColor }}
        >
          {badge}
        </div>
      )}

      {/* Heading */}
      <h2
        className={`${sizeStyles[size].heading} font-jakarta font-bold`}
        style={{ color: headingColor }}
      >
        {heading}
      </h2>

      {/* Subheading */}
      {subheading && (
        <p
          className={`${sizeStyles[size].subheading} font-inter font-medium whitespace-pre-line max-w-full sm:max-w-[650px]`}
          style={{ color: subheadingColor }}
        >
          {subheading}
        </p>
      )}

      {/* Para */}
      {para && (
        <p
          className={`${sizeStyles[size].para} font-inter font-medium whitespace-pre-line max-w-full sm:max-w-[650px]`}
          style={{ color: subheadingColor }}
        >
          {para}
        </p>
      )}
    </div>
  );
}