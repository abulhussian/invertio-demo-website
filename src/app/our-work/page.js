import InsightsSection from "@/components/common/components/InsightsSection";
import TestimonialsSection from "@/components/common/components/TestimonialsSection";
import SectionHeader from "@/components/common/ui/SectionHeader";
import LeftSideSection from "@/components/ourwork/LeftSideSection";
import RightSideSection from "@/components/ourwork/RightSideSection";
import StartJourneySection from "@/components/ourwork/StartJourneySection";

const page = () => {
  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">

        <SectionHeader
          badge="Success Stories"
          heading="Our Work Speaks For Itself"
          subheading="Discover how we help organizations across industries transform operations, accelerate innovation, and achieve measurable business outcomes through technology, strategy, and intelligent digital solutions."
          size="md"
          headingColor="#0F172A"
          subheadingColor="#475569"
        />

        {/* 1 */}
        <LeftSideSection
          title="QATAR MOEHE"
          description="A digital learning and examination management platform enabling seamless collaboration between students, educators, and administrators through modern education technology."
          buttonText="Read More"
          image="/ourwork/qatar.png"
        />

        {/* 2 */}
        <RightSideSection
          title="AI-PILOT"
          description="An AI-powered child height measurement solution delivering highly accurate analytics and automated health insights using computer vision and smart data modeling."
          buttonText="Read More"
          image="/ourwork/aipolit.png"
        />

        {/* 3 - NEW */}
        <LeftSideSection
          title="Baladi Express Mart"
          description="A unified retail ecosystem integrating online, mobile, and in-store experiences with real-time inventory management and intelligent order processing."
          buttonText="Read More"
          image="/ourwork/baladi.png"
        />

        {/* 4 - NEW */}
        <RightSideSection
          title="Single View"
          description="An integrated enterprise platform delivering centralized visibility, streamlined workflows, and enhanced operational decision-making for modern organizations."
          buttonText="Read More"
          image="/ourwork/singleview.png"
        />
        {/* 5 */}
        <LeftSideSection
          title="SMSA Express"
          description="A logistics transformation initiative enabling real-time shipment tracking, automated workflows, and improved delivery performance across global operations."
          buttonText="Read More"
          image="/ourwork/smsa.png"
        />

        {/* 6 */}
        <RightSideSection
          title="KPMG Digital Transformation"
          description="A comprehensive digital advisory and implementation program supporting enterprise modernization through analytics, automation, and scalable technology platforms."
          buttonText="Read More"
          image="/ourwork/kpmg.png"
        />

        {/* 7 */}
        <LeftSideSection
          title="StudyFox AI"
          description="An AI-driven learning assistant designed to personalize education experiences through intelligent recommendations, real-time assessments, and adaptive learning tools."
          buttonText="Read More"
          image="/ourwork/studyfox.png"
        />

        {/* 8 */}
        <RightSideSection
          title="360 Taxi Dispatch System"
          description="A cloud-based taxi dispatch platform providing live vehicle tracking, automated booking management, and optimized fleet operations through smart mobility technology."
          buttonText="Read More"
          image="/ourwork/taxidispatch.png"
        />
      </div>
      <StartJourneySection />
      <InsightsSection />
      <TestimonialsSection />
    </>
  );
};

export default page;