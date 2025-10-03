"use client";

import dynamic from "next/dynamic";
import SimplePageHeader from "@/components/common/SimplePageHeader";

const AdmissionTabs = dynamic(
  () => import("@/app/calendar/CalendarAdmissionTabs"),
  {
    ssr: false,
  },
);

function CalendarPage() {
  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-2 lg:px-[170px]">
        <SimplePageHeader
          title="অ্যাডমিশন ক্যালেন্ডার"
          description="বাংলাদেশের সকল বিশ্ববিদ্যালয়, কলেজ ও ভর্তি পরীক্ষার তথ্য ও সহায়তার জন্য আপনার বিশ্বস্ত প্ল্যাটফর্ম।"
        />

        <AdmissionTabs />
      </div>
    </div>
  );
}

export default CalendarPage;
