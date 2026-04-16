import React from "react";

const Section = ({ children, bg }) => {
  return (
    <section
      className="p-4 md:p-14 lg:p-20 overflow-hidden"
      style={{ backgroundColor: bg }}
    >
      {children}
    </section>
  );
};

export default Section;
