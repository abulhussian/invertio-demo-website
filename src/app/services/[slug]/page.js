import { notFound } from "next/navigation";
import CloudService from "@/components/services/CloudService";
import DigitalTransformation from "@/components/services/DigitalTransformation";
import SoftwareDevelopment from "@/components/services/SoftwareDevelopment";
export default async function Page({ params }) {
  const { slug } = await params;
  if (slug === "cloud-services") {
    return <CloudService />;
  }

  if (slug === "digital-transformation") {
    return <DigitalTransformation />;
  }

  if (slug === "software-development") {
    return <SoftwareDevelopment />;
  }

<<<<<<< HEAD
  notFound();
}
=======
  const match = allLinks.find(
    (link) => link.href === `/services/${slug}`
  );

  if (!match) return notFound();

  // ✅ JSON DATA
  const service = servicesData[slug];

  if (!service) return notFound();

  return <ServiceTemplate data={service} />;
}
>>>>>>> f910d375 (added the total slug population.js)
