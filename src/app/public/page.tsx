"use client";
import PublicPageClient from "@/components/PublicPageClient";
import { publicUniversities } from "@/lib/data/universities";

export default function PublicPage() {
  return <PublicPageClient universities={publicUniversities} />;
}
