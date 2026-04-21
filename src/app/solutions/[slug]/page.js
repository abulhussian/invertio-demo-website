// import { notFound } from "next/navigation";
// import ItConsulting from "@/components/solutions/ItConsulting";
// import CyberSecurity from "@/components/solutions/CyberSecurity";
// import DataAnalytics from "@/components/solutions/DataAnalytics";
// export default async function Page({ params }) {
//   const { slug } = await params;
//   if (slug === "it-consulting") {
//     return <ItConsulting />;
//   }

//   if (slug === "cybersecurity") {
//     return <CyberSecurity />;
//   }

//   if (slug === "data-analytics") {
//     return <DataAnalytics />;
//   }

//   notFound();
// }

import { notFound } from "next/navigation";
import { megaMenuData } from "@/data/megaMenuData";
import solutionsData from "@/data/solutions/solution.json";

import ServiceTemplate from "@/components/services/components/NestedRoutes/ServiceTemplate";

import ItConsulting from "@/components/solutions/ItConsulting";
import CyberSecurity from "@/components/solutions/CyberSecurity";
import DataAnalytics from "@/components/solutions/DataAnalytics";

export async function generateStaticParams() {
  const hardcodedSlugs = ["it-consulting", "cybersecurity", "data-analytics"];
  const jsonSlugs = Object.keys(solutionsData);
  const allSlugs = [...new Set([...hardcodedSlugs, ...jsonSlugs])];
  return allSlugs.map((slug) => ({ slug }));
}

export default async function Page({ params }) {
  const { slug } = await params; // ✅ FIX HERE

  // ✅ DEFAULT PAGES
  if (slug === "it-consulting") return <ItConsulting />;
  if (slug === "cybersecurity") return <CyberSecurity />;
  if (slug === "data-analytics") return <DataAnalytics />;

  // ✅ ROUTE VALIDATION
  const allLinks = megaMenuData.solutions.flatMap((item) =>
    item.subTabs.flatMap((tab) =>
      tab.columns.flatMap((col) => col.links)
    )
  );

  const match = allLinks.find(
    (link) => link.href === `/solutions/${slug}`
  );

  if (!match) return notFound();

  // ✅ JSON DATA
  const solution = solutionsData[slug];

  if (!solution) return notFound();

  return <ServiceTemplate data={solution} />;
}