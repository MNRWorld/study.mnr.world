import { publicUniversities } from "@/lib/data/universities";
import PublicPageClient from "@/components/PublicPageClient";
import { University } from "@/lib/data/universities";

// Revalidate every hour
export const revalidate = 3600;

export default async function PublicPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const universities: University[] = publicUniversities;
  const categories = [
    ...new Set(universities.map((uni) => uni.category)),
  ].sort();
  const selectedCategory = searchParams?.category as string | null;

  return (
    <PublicPageClient
      universities={universities}
      categories={categories}
      selectedCategory={selectedCategory}
    />
  );
}