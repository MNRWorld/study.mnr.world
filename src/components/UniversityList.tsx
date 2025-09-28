"use client";

import { University } from "@/lib/data/public-universities";
import UniversityCard from "@/components/UniversityCard";

interface UniversityListProps {
  universities: University[];
}

export default function UniversityList({ universities }: UniversityListProps) {
  return (
    <div className="mt-8 space-y-4">
      {universities.map((university, index) => (
        <div
          key={university.shortName}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <UniversityCard university={university} />
        </div>
      ))}
    </div>
  );
}
