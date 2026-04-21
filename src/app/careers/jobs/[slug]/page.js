import JobDetailsClient from "./JobDetailsClient";
import defaultJobs from "@/data/jobs.json";

export async function generateStaticParams() {
      return defaultJobs.map((job) => ({
            slug: job.slug,
      }));
}

export default function Page() {
      return <JobDetailsClient />;
}
