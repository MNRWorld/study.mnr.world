"use client";

import { University } from "lucide-react";
import PageHeaderCard from "@/components/common/PageHeaderCard";
import UniversityFilters from "@/components/UniversityFilters";
import UniversityList from "@/components/UniversityList";
import {
  publicUniversities,
  University as UniversityType,
} from "@/lib/data/public-universities";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

const categories = [
  ...new Set(publicUniversities.map((uni) => uni.category)),
];

export default function PublicUniversityPage() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const filteredUniversities = useMemo(() => {
    return selectedCategory
      ? publicUniversities.filter((uni) => uni.category === selectedCategory)
      : publicUniversities;
  }, [selectedCategory]);

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={<University className="h-14 w-14 text-primary" />}
          title="পাবলিক বিশ্ববিদ্যালয়"
          subtitle="Public Universities"
          description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়, তাদের ভর্তি তথ্য, প্রশ্নব্যাংক ও সর্বশেষ আপডেট এখানে পাবেন।"
          stats={[
            { value: "৫০+", label: "বিশ্ববিদ্যালয়" },
            { value: "বিভিন্ন", label: "ক্যাটাগরি" },
            { value: "লক্ষাধিক", label: "আসন" },
          ]}
        />

        <UniversityFilters
          categories={categories}
          selectedCategory={selectedCategory ?? undefined}
        />

        {filteredUniversities.length > 0 ? (
          <UniversityList universities={filteredUniversities} />
        ) : (
          <div className="text-center mt-8 text-muted-foreground">
            কোনো বিশ্ববিদ্যালয় খুঁজে পাওয়া যায়নি।
          </div>
        )}
      </div>
    </div>
  );
}