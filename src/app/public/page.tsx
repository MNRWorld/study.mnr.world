"use client";
import { publicUniversities, type University } from "@/lib/data/universities";
import PublicPageClient from "@/components/PublicPageClient";

export default function PublicUniversityPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const categories = Array.from(
    new Set(publicUniversities.map((uni) => uni.category)),
  );
  const selectedCategory = searchParams.category || null;

  return (
    <PublicPageClient
      universities={publicUniversities}
      categories={categories}
      selectedCategory={selectedCategory}
    />
  );
}
