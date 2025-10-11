"use client";
import PublicPageClient from "@/components/PublicPageClient";
import { allData } from "@/lib/data/_generated";
import SimplePageHeader from "@/components/common/SimplePageHeader";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import PublicPageFloatingMenu from "@/components/common/PublicPageFloatingMenu";

export default function PublicPage() {
  const publicUniversities = allData.universities.filter(
    (uni) => !uni.category.includes("প্রাইভেট"),
  );

  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-2">
        <PublicPageFloatingMenu />
        <div className="px-4">
          <SimplePageHeader
            title="পাবলিক বিশ্ববিদ্যালয়"
            description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি তথ্য, সার্কুলার এবং প্রশ্নব্যাংক একটি মাত্র প্ল্যাটফর্মে।"
          />
        </div>
        <div className="mt-8 space-y-4 sm:px-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="বিশ্ববিদ্যালয় খুঁজুন..."
              className="w-full pl-10 h-12 text-base bg-card"
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <PublicPageClient universities={publicUniversities} />
      </div>
    </div>
  );
}
