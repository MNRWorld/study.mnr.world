
"use client";

import React from "react";
import SimplePageHeader from "@/components/common/SimplePageHeader";
import QuestionBankCards from "@/components/QuestionBankCards";
import { Input } from "@/components/ui/input";
import { Search, Book } from "lucide-react";
import PublicPageFloatingMenu from "@/components/common/PublicPageFloatingMenu";
import { publicUniversities } from "@/lib/data/universities";
import PublicPageClient from "@/components/PublicPageClient";

export default function QuestionBankPage() {
  return (
    <div className="font-bengali bg-background">
      <PublicPageFloatingMenu />
      <div className="container mx-auto px-4">
        <SimplePageHeader
          title="প্রশ্নব্যাংক ও সমাধান"
          description="বিগত বছরের প্রশ্ন সমাধান করে ভর্তি প্রস্তুতিতে এগিয়ে থাকো। এখানেই পাবে সব বিশ্ববিদ্যালয় ও ইউনিটের প্রশ্নব্যাংক।"
        />

        <div className="mt-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="বিশ্ববিদ্যালয় খুঁজুন..."
              className="w-full pl-10 h-12 text-base bg-card"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2
            id="master-question-bank"
            className="text-2xl font-bold mb-4 text-center pb-2 border-b-2 border-primary/20 flex items-center justify-center gap-2"
          >
            <Book className="h-6 w-6 text-primary/80" />
            মাস্টার প্রশ্নব্যাংক
          </h2>
        </div>

        <QuestionBankCards />

        <div className="mt-12">
            <PublicPageClient universities={publicUniversities} />
        </div>

      </div>
    </div>
  );
}
