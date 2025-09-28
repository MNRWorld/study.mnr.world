"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface UniversityFiltersProps {
  categories: string[];
  selectedCategory: string | undefined;
}

export default function UniversityFilters({
  categories,
  selectedCategory,
}: UniversityFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilter = (category: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (category === "all") {
      current.delete("category");
    } else {
      current.set("category", category);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-2">
      <Button
        variant={!selectedCategory ? "default" : "outline"}
        onClick={() => handleFilter("all")}
      >
        সকল
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => handleFilter(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
