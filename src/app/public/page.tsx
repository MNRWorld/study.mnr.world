import { publicUniversities } from "@/lib/data/universities";
import PublicPageClient from "@/components/PublicPageClient";

export default async function PublicUniversityPage() {
  const categories = Array.from(
    new Set(publicUniversities.map((uni) => uni.category)),
  );

  return <PublicPageClient universities={publicUniversities} />;
}
