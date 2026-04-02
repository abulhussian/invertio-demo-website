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

// ✅ Custom pages
import ItConsulting from "@/components/solutions/ItConsulting";
import CyberSecurity from "@/components/solutions/CyberSecurity";
import DataAnalytics from "@/components/solutions/DataAnalytics";

// ✅ Template
import SolutionTemplate from "@/components/solutions/Nested/SolutionTemplate";

// ✅ JSON
import solutionsData from "@/data/solutions/solution.json";

export default async function Page({ params }) {
  const { slug } = await params;

  // 🔥 STEP 1: Custom pages (priority)
  if (slug === "it-consulting") return <ItConsulting />;
  if (slug === "cybersecurity") return <CyberSecurity />;
  if (slug === "data-analytics") return <DataAnalytics />;

  // 🔥 STEP 2: JSON-based pages
  const solution = solutionsData.find(
    (item) => item.slug === slug
  );

  // ❌ Not found
  if (!solution) return notFound();

  // 🔥 STEP 3: Render template
  return <SolutionTemplate data={solution} />;
}