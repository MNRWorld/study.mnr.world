import { publicUniversities } from "@/lib/data/universities";
import PublicPageClient from "@/components/PublicPageClient";

interface PublicUniversityPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function PublicUniversityPage({
  searchParams,
}: PublicUniversityPageProps) {
  const categories = Array.from(
    new Set(publicUniversities.map((uni) => uni.category)),
  );
  const selectedCategory = (searchParams.category as string) || null;

  return (
    <PublicPageClient
      universities={publicUniversities}
      categories={categories}
      selectedCategory={selectedCategory}
    />
  );
}