import SolutionAIStrategySection from "./Nested/SolutionAIStrategySection";
import SolutionAIUseCases from "./Nested/SolutionAIUseCases";
import SolutionClientLogoGrid from "./Nested/SolutionClientLogoGrid";
import SolutionClientTestimonials from "./Nested/SolutionClientTestimonials";
import SolutionContactConsultation from "./Nested/SolutionContactConsultation";
import SolutionDynamicHero from "./Nested/SolutionDynamicHero";
import SolutionEmpowerSection from "./Nested/SolutionEmpowerSection";
import SolutionFooterSection from "./Nested/SolutionFooterSection";
import SolutionGuideTopics from "./Nested/SolutionGuideTopics";
import SolutionIndustriesSection from "./Nested/SolutionIndustriesSection";
import SolutionInsightGrid from "./Nested/SolutionInsightGrid";
import SolutionOurProcess from "./Nested/SolutionOurProcess";
import SolutionResultsFocusedAI from "./Nested/SolutionResultsFocusedAI";
import SolutionServiceModels from "./Nested/SolutionServiceModels";
import SolutionTailoredTechSection from "./Nested/SolutionTailoredTechSection";
import SolutionVisionToExecution from "./Nested/SolutionVisionToExecution";


const SolutionTemplate = ({ data }) => {
      return (
            <>
                  <SolutionDynamicHero />
                  <SolutionClientLogoGrid />
                  <SolutionResultsFocusedAI />
                  <SolutionAIUseCases />
                  <SolutionEmpowerSection />
                  <SolutionVisionToExecution />
                  <SolutionIndustriesSection />
                  <SolutionTailoredTechSection />
                  <SolutionOurProcess />
                  <SolutionAIStrategySection />
                  <SolutionServiceModels />
                  <SolutionInsightGrid />
                  <SolutionGuideTopics />
                  <SolutionFooterSection />
                  <SolutionClientTestimonials />
                  <SolutionContactConsultation />
            </>
      );
};

export default SolutionTemplate;