import { publicUniversities } from "@/lib/data/universities";
import PublicPageClient from "@/components/PublicPageClient";

export default function PublicPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const selectedCategory =
    typeof searchParams.category === "string" ? searchParams.category : null;

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
      selectedCategory={selectedCategory}
    />
  );
}
