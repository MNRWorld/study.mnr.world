import PublicPageClient from "@/components/PublicPageClient";
import { publicUniversities } from "@/lib/data/universities";
import { Suspense } from "react";

export default function PublicPage() {
  const categories = [
    ...new Set(publicUniversities.map((uni) => uni.category)),
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PublicPageClient
        universities={publicUniversities}
        categories={categories}
      />
    </Suspense>
  );
}