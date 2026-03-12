import AIStrategySection from "../services/components/NestedRoutes/AIStrategySection";
import AIUseCases from "../services/components/NestedRoutes/AIUseCases";
import ClientLogoGrid from "../services/components/NestedRoutes/ClientLogoGrid";
import ClientTestimonials from "../services/components/NestedRoutes/ClientTestimonials";
import ContactConsultation from "../services/components/NestedRoutes/ContactConsultation";
import DynamicHero from "../services/components/NestedRoutes/DynamicHero";
import EmpowerSection from "../services/components/NestedRoutes/EmpowerSection";
import FooterSection from "../services/components/NestedRoutes/FooterSection";
import IndustriesSection from "../services/components/NestedRoutes/IndustryCard";
import InsightGrid from "../services/components/NestedRoutes/InsightGrid";
import OurProcess from "../services/components/NestedRoutes/OurProcess";
import ResultsFocusedAI from "../services/components/NestedRoutes/ResultsFocusedAI";
import ServiceModels from "../services/components/NestedRoutes/ServiceModels";
import TailoredTechSection from "../services/components/NestedRoutes/TailoredTechSection";
import TechStack from "../services/components/NestedRoutes/TechStack";
import VisionToExecution from "../services/components/NestedRoutes/VisionToExecution";
import GuideTopics from "../solutions/Nested/GuideTopics.jsx"

const SolutionTemplate = ({ data }) => {
      return (
            <>
                  <DynamicHero />
                  <ClientLogoGrid />
                  <ResultsFocusedAI />
                  <AIUseCases />
                  <EmpowerSection />
                  <AIStrategySection />
                  <VisionToExecution />
                  <IndustriesSection />
                  <TechStack />
                  <TailoredTechSection />
                  <OurProcess />
                  <ServiceModels />
                  <InsightGrid />
                  <GuideTopics />
                  <FooterSection />
                  <ClientTestimonials />
                  <ContactConsultation />
            </>
      );
};

export default SolutionTemplate;