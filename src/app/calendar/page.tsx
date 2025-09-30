"use client";

import dynamic from "next/dynamic";
import AdmissionTabs from "@/components/common/AdmissionTabs";
import SimplePageHeader from "@/components/common/SimplePageHeader";

const CountdownTimer = dynamic(
  () => import("@/components/common/CountdownTimer"),
  { ssr: false },
);

function CalendarPage() {
  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-2 lg:px-[170px]">
        <SimplePageHeader
          title="অ্যাডমিশন ক্যালেন্ডার"
          description="বাংলাদেশের সকল বিশ্ববিদ্যালয়, কলেজ ও ভর্তি পরীক্ষার তথ্য ও সহায়তার জন্য আপনার বিশ্বস্ত প্ল্যাটফর্ম।"
        />

        <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
          <CountdownTimer />
        </div>

        <AdmissionTabs />
      </div>
    </div>
  );
}

export default CalendarPage;
