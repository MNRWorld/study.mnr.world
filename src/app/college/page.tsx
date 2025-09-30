"use client";

import dynamic from "next/dynamic";
import LinkList from "@/components/common/LinkList";
import Circular from "@/components/common/Circular";
import CollegeAdmissionInfo from "@/components/CollegeAdmissionInfo";
import { collegeLinks } from "@/lib/data/links";
import SimplePageHeader from "@/components/common/SimplePageHeader";

const CountdownTimer = dynamic(
  () => import("@/components/common/CountdownTimer"),
  { ssr: false },
);

function CollegePage() {
  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-4">
        <SimplePageHeader
          title="কলেজ ভর্তি তথ্য"
          description="বাংলাদেশের সকল বিশ্ববিদ্যালয়, কলেজ ও ভর্তি পরীক্ষার তথ্য ও সহায়তার জন্য আপনার বিশ্বস্ত প্ল্যাটফর্ম।"
        />

        <LinkList links={collegeLinks} />

        <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
          <CountdownTimer />
        </div>

        <Circular
          title="সম্পূর্ণ সার্কুলার"
          note="(⚠ নোট: সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারেন।)"
          downloadLink="#"
          showPreviousYears={true}
        />

        <CollegeAdmissionInfo />
      </div>
    </div>
  );
}

export default CollegePage;
