import { publicUniversities, University } from "@/lib/data/universities";
import PublicPageClient from "@/components/PublicPageClient";

export default function PublicUniversityPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const selectedCategory =
    typeof searchParams?.category === "string"
      ? searchParams.category
      : undefined;

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
