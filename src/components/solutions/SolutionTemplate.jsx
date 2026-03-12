import SolutionDynamicHero from "./Nested/SolutionDynamicHero";
import SolutionClientLogoGrid from "./Nested/SolutionClientLogoGrid";
import HiringModels from "./Nested/HiringModels";
import ServiceFAQ from "./Nested/ServiceFAQ";
import SolutionTestimonials from "./Nested/SolutionTestimonials";
import Contact from "./Nested/Contact";
import IndustriesSection from "./Nested/IndustriesSection"
import OurProcess from "./Nested/OurProcess";
import StakeholderCTA from "./Nested/StakeholderCTA";
import CASection from "./Nested/CASection";
import DiscoveryServices from "./Nested/DiscoveryServices";
import DiscoveryExpertise from "./Nested/DiscoveryExpertise";

const SolutionTemplate = ({ data }) => {

      if (!data) return null;

      return (
            <>
                  <SolutionDynamicHero data={data.hero} />
                  <SolutionClientLogoGrid data={data.clientLogos} />
                  <DiscoveryServices data={data.discoveryServices} />
                  <StakeholderCTA data={data.stakeholderCTA} />
                  <DiscoveryExpertise data={data.discoveryExpertise} />
                  <CASection data={data.ctaSection} />
                  <IndustriesSection data={data.industriesSection} />
                  <OurProcess data={data.ourProcess} />
                  <HiringModels data={data.hiringModels} />
                  <ServiceFAQ data={data.faqs} />
                  <SolutionTestimonials data={data.testimonials} />
                  <Contact data={data.contactSection} />
            </>
      );

};

export default SolutionTemplate;