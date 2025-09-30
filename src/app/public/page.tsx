import {
  publicUniversities,
  type University,
} from "@/lib/data/universities";
import PublicPageClient from "@/components/PublicPageClient";

export default function PublicUniversityPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const selectedCategory = searchParams?.category;

  const categories = Array.from(
    new Set(publicUniversities.map((uni) => uni.category)),
  );

  const filteredUniversities = selectedCategory
    ? publicUniversities.filter((uni) => uni.category === selectedCategory)
    : publicUniversities;

  return (
    <PublicPageClient
      universities={filteredUniversities}
      categories={categories}
      selectedCategory={selectedCategory || null}
    />
  );
}
