import { publicUniversities } from "@/lib/data/universities";
import PublicPageClient from "@/components/PublicPageClient";

export default function PublicPage() {
  return <PublicPageClient universities={publicUniversities} />;
}
