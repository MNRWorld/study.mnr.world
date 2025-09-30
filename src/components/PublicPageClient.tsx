"use client";
import { useState } from "react";
import { Landmark, Search } from "lucide-react";
import PageHeaderCard from "@/components/common/PageHeaderCard";
import UniversityFilters from "@/components/UniversityFilters";
import UniversityList from "@/components/UniversityList";
import { University } from "@/lib/data/universities";
import { Input } from "@/components/ui/input";

interface PublicPageClientProps {
  universities: University[];
  categories: string[];
  selectedCategory: string | null;
}

export default function PublicPageClient({
  universities,
  categories,
  selectedCategory,
}: PublicPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUniversities = universities
    .filter((uni) =>
      selectedCategory ? uni.category === selectedCategory : true,
    )
    .filter((uni) => {
      if (searchTerm === "") return true;
      const lowercasedTerm = searchTerm.toLowerCase();
      return (
        uni.nameBn.toLowerCase().includes(lowercasedTerm) ||
        uni.nameEn.toLowerCase().includes(lowercasedTerm) ||
        uni.shortName.toLowerCase().includes(lowercasedTerm)
      );
    });

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
        <div className="mt-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="বিশ্ববিদ্যালয় খুঁজুন..."
              className="w-full pl-10 h-12 text-base bg-card"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <UniversityFilters
            categories={categories}
            selectedCategory={selectedCategory || undefined}
          />
        </div>
        <UniversityList universities={filteredUniversities} />
      </div>
    </div>
  );
}
