import React from "react";

const MainContentCard = ({
      date,
      category,
      title,
      description,
      imageSrc,
      buttonText = "Read More",
      link = "#",
      className = "",
}) => {
      return (


            <div className="mt-14">
                  <div
                        className={`w-full  
      flex flex-col lg:flex-row overflow-hidden 
      ${className}`}
                  >
                        {/* LEFT SIDE */}
                        <div className="flex-[1.1] py-10 lg:py-16 flex flex-col justify-center">

                              {/* Date + Category */}
                              <div className="flex items-center gap-3 mb-6">
                                    {date && (
                                          <span className="text-[11px] font-medium text-gray-500 bg-gray-200/60 px-3 py-1 rounded-md">
                                                {date}
                                          </span>
                                    )}

                                    {category && (
                                          <span className="text-[11px] font-medium text-gray-500 bg-gray-200/60 px-3 py-1 rounded-md">
                                                {category}
                                          </span>
                                    )}
                              </div>

                              {/* Title */}
                              {title && (
                                    <h2 className="text-2xl sm:text-3xl lg:text-[40px] 
          font-semibold text-[#0F172A] leading-[1.15] mb-5">
                                          {title}
                                    </h2>
                              )}

                              {/* Description */}
                              {description && (
                                    <p className="text-[#475569] text-sm sm:text-base 
          leading-relaxed mb-8 w-full">
                                          {description}
                                    </p>
                              )}

                              {/* Button */}
                              {link && (
                                    <div className="self-start">
                                          <a
                                                href={link}
                                                className="inline-flex items-center gap-2 
                                                bg-[#2563EB] hover:bg-[#1E4FD8] 
                                                text-white text-sm font-medium 
                                                px-6 py-3 rounded-full
                                                transition-all duration-300"
                                          >
                                                {buttonText}
                                                <span className="text-base">↗</span>
                                          </a>
                                    </div>
                              )}
                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="flex-1 min-h-[300px] lg:min-h-[480px] rounded-md overflow-hidden relative">

                              <img
                                    src={imageSrc}
                                    alt="Blog"
                                    className="w-full h-full object-cover object-center"
                              />

                              {/* Logo */}
                              <div className="absolute bottom-2 right-3">
                                    <img
                                          src="/logo/logo.svg"
                                          alt="Invertio"
                                          className="h-6 w-auto"
                                    />
                              </div>

                        </div>
                  </div>
            </div >
      );
};

export default MainContentCard;


