import { publicUniversities } from "@/lib/data/universities";
import PublicPageClient from "@/components/PublicPageClient";
import { Suspense } from "react";

// Make sure to define the type for searchParams
export default function PublicPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const categories = Array.from(
    new Set(publicUniversities.map((uni) => uni.category)),
  );

  const selectedCategory =
    typeof searchParams?.category === "string" ? searchParams.category : null;

  const filteredUniversities = selectedCategory
    ? publicUniversities.filter((uni) => uni.category === selectedCategory)
    : publicUniversities;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PublicPageClient
        universities={filteredUniversities}
        categories={categories}
        selectedCategory={selectedCategory}
      />
    </Suspense>
  );
}
