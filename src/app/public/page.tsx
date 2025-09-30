import { publicUniversities } from "@/lib/data/universities/public-universities";
import PublicPageClient from "@/components/PublicPageClient";

export default function PublicUniversityPage({
  searchParams,
}: {
  searchParams?: {
    category?: string;
  };
}) {
  const selectedCategory = searchParams?.category || null;

  const filteredUniversities = selectedCategory
    ? publicUniversities.filter((uni) => uni.category === selectedCategory)
    : publicUniversities;

  const categories = [
    ...new Set(publicUniversities.map((uni) => uni.category)),
  ];

  return (
    <PublicPageClient
      universities={filteredUniversities}
      categories={categories}
      selectedCategory={selectedCategory}
    />
  );
}
