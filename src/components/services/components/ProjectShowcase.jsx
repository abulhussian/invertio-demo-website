import Image from "next/image";

const ProjectShowcase = ({ image, alt }) => {
      return (
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                  <Image
                        src={image}
                        alt={alt || "Project showcase"}
                        width={1600}
                        height={600}
                        className="w-full  object-contain"
                        priority
                  />
            </div>
      );
};

export default ProjectShowcase;