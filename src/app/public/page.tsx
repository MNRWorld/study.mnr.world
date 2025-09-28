import { Newspaper, School, University } from "lucide-react";
import PageHeaderCard from "@/components/common/PageHeaderCard";
import {
  publicUniversities,
  University as UniversityType,
} from "@/lib/data/public-universities";
import UniversityList from "@/components/UniversityList";
import UniversityFilters from "@/components/UniversityFilters";

export default function PublicUniversityPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const categories = [
    ...new Set(publicUniversities.map((uni) => uni.category)),
  ];

  const selectedCategory = searchParams.category as string | undefined;

  const filteredUniversities = selectedCategory
    ? publicUniversities.filter((uni) => uni.category === selectedCategory)
    : publicUniversities;

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={<School className="h-14 w-14 text-primary" />}
          title="পাবলিক বিশ্ববিদ্যালয়"
          subtitle="Public University"
          description="বাংলাদেশের সকল পাবলিক বিশ্ববিদ্যালয়, তাদের ভর্তি তথ্য, প্রশ্নব্যাংক ও প্রয়োজনীয় সকল লিঙ্ক এখানে পাবেন।"
          stats={[
            { value: "৫০+", label: "বিশ্ববিদ্যালয়" },
            { value: "বিভিন্ন", label: "ক্যাটাগরি" },
            { value: "হাজারো", label: "আসন" },
          ]}
        />

        <UniversityFilters
          categories={categories}
          selectedCategory={selectedCategory}
        />

        <UniversityList universities={filteredUniversities} />
      </div>
    </div>
  );
}
