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
import SolutionTemplate from "@/components/solutions/SolutionTemplate";

export default async function Page({ params }) {
  const { slug } = await params;

  const solutions = getAllRoutes("solutions");

  console.log("solutions:", solutions);
  console.log("slug:", slug);

  const solution = solutions.find((s) => s.slug === slug);

  console.log("solution:", solution);

  if (!solution) return notFound();

  return <SolutionTemplate data={solution} />;
}