"use client";

import { useSearchParams } from "next/navigation";
import { University, publicUniversities } from "@/lib/data/public-universities";
import PageHeaderCard from "@/components/common/PageHeaderCard";
import UniversityList from "@/components/UniversityList";
import UniversityFilters from "@/components/UniversityFilters";
import { University as UniversityIcon } from "lucide-react";
import React from "react";
import { Suspense } from "react";

function PublicUniversityPageContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const categories = [
    ...new Set(publicUniversities.map((uni) => uni.category)),
  ];

  const filteredUniversities = category
    ? publicUniversities.filter((uni) => uni.category === category)
    : publicUniversities;

  const pageHeaderIcon = React.createElement(UniversityIcon, {
    className: "h-14 w-14 text-primary",
  });

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={pageHeaderIcon}
          title="পাবলিক বিশ্ববিদ্যালয়"
          subtitle="Public Universities"
          description="দেশের সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি তথ্য, আসন সংখ্যা ও অন্যান্য প্রয়োজনীয় তথ্য এখানে একসাথে পাওয়া যাবে।"
          stats={[
            { value: "৫০+", label: "বিশ্ববিদ্যালয়" },
            { value: "বিভিন্ন", label: "ক্যাটাগরি" },
            { value: "লক্ষাধিক", label: "আসন" },
          ]}
        />

        <UniversityFilters categories={categories} selectedCategory={category} />
        <UniversityList universities={filteredUniversities} />
      </div>
    </div>
  );
}

export default function PublicPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PublicUniversityPageContent />
    </Suspense>
  );
}
