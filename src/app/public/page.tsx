"use client";
import { University, Filter } from "lucide-react";
import PageHeaderCard from "@/components/common/PageHeaderCard";
import { publicUniversities } from "@/lib/data/public-universities";
import UniversityCard from "@/components/UniversityCard";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

function PublicUniversityPage() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category") || "all";

  const categories = [
    "all",
    "সাধারণ",
    "বিজ্ঞান ও প্রযুক্তি",
    "প্রকৌশল",
    "কৃষি",
    "মেডিকেল",
  ];

  const filteredUniversities = publicUniversities.filter(
    (uni) => categoryFilter === "all" || uni.category === categoryFilter,
  );

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={<University className="h-14 w-14 text-primary" />}
          title="পাবলিক বিশ্ববিদ্যালয়"
          subtitle="Public University"
          description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়ের ভর্তি তথ্য, সার্কুলার এবং প্রশ্নব্যাংক একটি প্ল্যাটফর্মে।"
          stats={[
            { value: "৫০+", label: "বিশ্ববিদ্যালয়" },
            { value: "বিভিন্ন", label: "গ্রুপ" },
            { value: "সকল", label: "তথ্য", tooltip: "এক জায়গায়" },
          ]}
        />

        <div className="mt-8 flex justify-center items-center gap-2 flex-wrap">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter size={16} /> Filter by Category
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value={categoryFilter}>
                {categories.map((cat) => (
                  <Link
                    href={cat === "all" ? "/public" : `/public?category=${cat}`}
                    key={cat}
                  >
                    <DropdownMenuRadioItem value={cat}>
                      {cat === "all" ? "All Universities" : cat}
                    </DropdownMenuRadioItem>
                  </Link>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {categories.slice(1).map((cat) => (
            <Button
              asChild
              key={cat}
              variant={categoryFilter === cat ? "default" : "ghost"}
              size="sm"
            >
              <Link href={`/public?category=${cat}`}>{cat}</Link>
            </Button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((uni, index) => (
            <div
              key={uni.shortName}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <UniversityCard university={uni} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PublicUniversityPage;
