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
import { getAllRoutes } from "@/lib/getAllRoutes";
import solutionsData from "@/data/solutions/solution.json";
import SolutionTemplate from "@/components/solutions/SolutionTemplate";

export default async function Page({ params }) {

  const { slug } = await params;

  // menu routes
  const routes = getAllRoutes("solutions");

  console.log("routes:", routes);
  console.log("slug:", slug);

  const route = routes.find((r) => r.slug === slug);

  // page content
  const solution = solutionsData[slug];

  console.log("solution data:", solution);

  if (!route || !solution) return notFound();

  return <SolutionTemplate data={solution} />;
}