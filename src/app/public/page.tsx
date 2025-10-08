"use client";

import { publicUniversities } from "@/lib/data/universities";
import dynamic from "next/dynamic";

const PublicPageClient = dynamic(
  () => import("@/components/PublicPageClient"),
  { ssr: false },
);

export default function PublicPage() {
  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-4">
        <PublicPageClient universities={publicUniversities} />
      </div>
    </div>
  );
}
