"use client";

import React from "react";
import dynamic from "next/dynamic";
import SimplePageHeader from "@/components/common/SimplePageHeader";

const QuestionBankTabs = dynamic(
  () => import("@/components/QuestionBankTabs"),
  { ssr: false },
);

export default function QuestionBankPage() {
  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-4">
        <SimplePageHeader
          title="প্রশ্নব্যাংক ও সমাধান"
          description="বিগত বছরের প্রশ্ন সমাধান করে ভর্তি প্রস্তুতিতে এগিয়ে থাকো। এখানেই পাবে সব বিশ্ববিদ্যালয় ও ইউনিটের প্রশ্নব্যাংক।"
        />

        <QuestionBankTabs />
        <QuestionBankTabs />
      </div>
    </div>
  );
}
