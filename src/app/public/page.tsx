"use client";

import PageHeaderCard from "@/components/common/PageHeaderCard";
import { University } from "lucide-react";
import UniversityClientPage from "@/components/UniversityClientPage";
import { Suspense } from "react";
import React from "react";

export default function PublicUniversityPage() {
  const pageHeaderIcon = React.createElement(University, {
    className: "h-14 w-14 text-primary",
  });
  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={pageHeaderIcon}
          title="পাবলিক বিশ্ববিদ্যালয়"
          subtitle="Public University"
          description="দেশের সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি তথ্য, আসন সংখ্যা ও অন্যান্য প্রয়োজনীয় তথ্য এখানে পাবেন।"
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
        <Suspense fallback={<div>Loading universities...</div>}>
          <UniversityClientPage />
        </Suspense>
      </div>
    </div>
  );
}
