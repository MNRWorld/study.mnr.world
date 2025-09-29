"use client";
import { Landmark } from "lucide-react";
import PageHeaderCard from "@/components/common/PageHeaderCard";
import UniversityFilters from "@/components/UniversityFilters";
import UniversityList from "@/components/UniversityList";
import { useSearchParams } from "next/navigation";
import { University } from "@/lib/data/universities";

interface PublicPageClientProps {
  universities: University[];
  categories: string[];
}

export default function PublicPageClient({
  universities,
  categories,
}: PublicPageClientProps) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const filteredUniversities = selectedCategory
    ? universities.filter((uni) => uni.category === selectedCategory)
    : universities;

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={<Landmark className="h-14 w-14 text-primary" />}
          title="পাবলিক বিশ্ববিদ্যালয়"
          subtitle="Public University"
          description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি তথ্য, সার্কুলার এবং প্রশ্নব্যাংক একটি মাত্র প্ল্যাটফর্মে।"
          stats={[
            { value: "৫০+", label: "বিশ্ববিদ্যালয়" },
            { value: "বিভিন্ন", label: "ক্যাটাগরি" },
            {
              value: "লক্ষাধিক",
              label: "আসন",
              tooltip: "প্রতি বছর আসন সংখ্যা পরিবর্তিত হয়",
            },
          ]}
        />
        <UniversityFilters
          categories={categories}
          selectedCategory={selectedCategory || undefined}
        />
        <UniversityList universities={filteredUniversities} />
      </div>
    </div>
  );
}