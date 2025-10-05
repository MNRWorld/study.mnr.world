import { publicUniversities } from "@/lib/data/universities";
import PublicPageClient from "@/components/PublicPageClient";

export default async function PublicPage() {
  const universities = publicUniversities;
  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-4">
        <PublicPageClient universities={universities} />
      </div>
    </div>
  );
}
