"use client";

import PublicPageClient from "@/components/PublicPageClient";
import { publicUniversities } from "@/lib/data/universities";

export default function PublicUniversityPage() {
  return <PublicPageClient universities={publicUniversities} />;
}
