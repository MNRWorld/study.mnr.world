"use client";
import PublicPageClient from "@/components/PublicPageClient";
import { allData } from "@/lib/data";
import type { University } from "@/lib/supabase/database.types";

const CalendarGeneralAdmissionInfo = () => {
  const publicUniversities = allData.universities.filter(
    (uni: University) => !uni.category.includes("প্রাইভেট"),
  );

  return (
    <div id="Info" className="mt-4 w-full">
      <PublicPageClient universities={publicUniversities} />
    </div>
  );
};

export default CalendarGeneralAdmissionInfo;
