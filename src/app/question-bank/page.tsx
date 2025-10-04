"use client";

import React from "react";
import SimplePageHeader from "@/components/common/SimplePageHeader";
import QuestionBankCards from "@/components/QuestionBankCards";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import PublicPageFloatingMenu from "@/components/common/PublicPageFloatingMenu";

export default function QuestionBankPage() {
  return (
    <div className="font-bengali bg-background">
      <PublicPageFloatingMenu />
      <div className="container mx-auto px-4">
        <SimplePageHeader
          title="প্রশ্নব্যাংক ও সমাধান"
          description="বিগত বছরের প্রশ্ন সমাধান করে ভর্তি প্রস্তুতিতে এগিয়ে থাকো। এখানেই পাবে সব বিশ্ববিদ্যালয় ও ইউনিটের প্রশ্নব্যাংক।"
        />

        <div className="mt-8 space-y-4 max-w-lg mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="প্রশ্নব্যাংক খুঁজুন..."
              className="w-full pl-10 h-12 text-base bg-card"
            />
          </div>
        </div>

        <QuestionBankCards />
      </div>
    </div>
  );
}
