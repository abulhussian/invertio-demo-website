import SectionHeader from "@/components/common/ui/SectionHeader";
import BlogFilterSection from "@/components/newsInsight/BlogFilterSection";
import MainContentCard from "@/components/newsInsight/MainContentCard";

const page = () => {
  return (
    <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
      <SectionHeader
        badge="News & Insight"
        heading="Insights, Updates & Technology Stories"
        subheading={`Stay updated with the latest industry insights, product announcements, technology trends, and innovation stories from Invertio. Explore expert perspectives, digital transformation updates, and practical knowledge designed to help businesses stay ahead in a rapidly evolving digital world.`}
        size="md"
        headingColor="#0F172A"
        subheadingColor="#475569"
      />
      <MainContentCard
        date="March 18, 2026"
        category="Web App Development"
        title="All You Need to Know About Progressive Web Applications"
        description="Progressive Web Apps (PWAs) are transforming how businesses deliver fast, reliable, and engaging digital experiences. Learn how PWAs combine the best of web and mobile applications to improve performance, accessibility, and customer engagement across devices."
        imageSrc="/newsinsight/rightsideimage.png"
        link="/blog/pwa-guide"
      />
      <BlogFilterSection />
    </div>
  )
};

export default page;
