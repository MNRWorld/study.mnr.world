"use client";

import PublicPageClient from "@/components/PublicPageClient";
import { allData } from "@/lib/data/_generated";

export default function PublicPage() {
  const publicUniversities = allData.universities.filter(
    (uni) => !uni.category.includes("প্রাইভেট"),
  );

  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-4">
        <PublicPageClient universities={publicUniversities} />
      </div>
    </div>
  );
}
