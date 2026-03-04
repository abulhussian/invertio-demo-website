import Section from "@/components/common/ui/Section";
import Image from "next/image";

const ProjectShowcase = ({ image, alt }) => {
      return (
            <Section>
                  <div className="w-full flex justify-center">
                        <div className="w-full   overflow-hidden shadow-lg">
                              <Image
                                    src={image}
                                    alt={alt || "Project showcase"}
                                    width={1400}
                                    height={700}
                                    className="w-full h-auto object-cover"
                                    priority
                              />
                        </div>
                  </div>
            </Section>
      );
};

export default ProjectShowcase;