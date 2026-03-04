import { notFound } from "next/navigation";
import ItConsulting from "@/components/solutions/ItConsulting";
import CyberSecurity from "@/components/solutions/CyberSecurity";
import DataAnalytics from "@/components/solutions/DataAnalytics";
export default async function Page({ params }) {
  const { slug } = await params;
  if (slug === "It-consulting") {
    return <ItConsulting />;
  }

  if (slug === "cybersecurity") {
    return <CyberSecurity />;
  }

  if (slug === "data-analytics") {
    return <DataAnalytics />;
  }

  notFound();
}

