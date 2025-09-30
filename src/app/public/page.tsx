import PublicPageClient from "@/components/PublicPageClient";
import { publicUniversities, type University } from "@/lib/data/universities";

export default function PublicPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const selectedCategory = searchParams?.category || null;

  const categories = Array.from(
    new Set(publicUniversities.map((u) => u.category)),
  );

  const filteredUniversities = selectedCategory
    ? publicUniversities.filter((u) => u.category === selectedCategory)
    : publicUniversities;

  return (
    <PublicPageClient
      universities={filteredUniversities}
      categories={categories}
      selectedCategory={selectedCategory}
    />
  );
}
