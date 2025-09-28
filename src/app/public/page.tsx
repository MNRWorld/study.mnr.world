"use client";

import React from "react";
import { University as UniversityIcon } from "lucide-react";
import PageHeaderCard from "@/components/common/PageHeaderCard";
import {
  publicUniversities,
  University,
} from "@/lib/data/public-universities";
import UniversityFilters from "@/components/UniversityFilters";
import UniversityList from "@/components/UniversityList";
import { useSearchParams } from "next/navigation";

export default function PublicUniversitiesPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const categories = Array.from(
    new Set(publicUniversities.map((uni) => uni.category)),
  );

  const filteredUniversities = category
    ? publicUniversities.filter((uni) => uni.category === category)
    : publicUniversities;

  const PageIcon = React.createElement(UniversityIcon, {
    className: "h-14 w-14 text-primary",
  });

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={PageIcon}
          title="পাবলিক বিশ্ববিদ্যালয়"
          subtitle="Public University"
          description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়গুলোর তথ্য, ভর্তি বিজ্ঞপ্তি ও প্রশ্নব্যাংক এক জায়গায়।"
          stats={[
            { value: "৫০+", label: "বিশ্ববিদ্যালয়" },
            { value: "গুচ্ছ", label: "ভর্তি পরীক্ষা" },
            { value: "সম্পূর্ণ", label: "তথ্য" },
          ]}
        />

        <UniversityFilters
          categories={categories}
          selectedCategory={category || undefined}
        />
        <UniversityList universities={filteredUniversities} />
      </div>
    </div>
  );
}
