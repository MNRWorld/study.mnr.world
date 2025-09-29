
"use client";

import { School, Info } from "lucide-react";
import dynamic from "next/dynamic";
import PageHeaderCard from "@/components/common/PageHeaderCard";
import LinkList from "@/components/common/LinkList";
import Circular from "@/components/common/Circular";
import CollegeAdmissionInfo from "@/components/CollegeAdmissionInfo";
import { collegeLinks } from "@/lib/data/links";

const CountdownTimer = dynamic(
  () => import("@/components/common/CountdownTimer"),
  { ssr: false },
);

function CollegePage() {
  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={<School className="h-14 w-14 text-primary" />}
          title="কলেজ ভর্তি তথ্য"
          subtitle="College Admission"
          description="দেশের সেরা কলেজগুলোতে ভর্তির জন্য প্রয়োজনীয় সব তথ্য ও সর্বশেষ আপডেট এখানেই পাবেন।"
          stats={[
            { value: "১০০+", label: "কলেজ" },
            { value: "বিভিন্ন", label: "বিভাগ" },
            {
              value: "হাজারো",
              label: "আসন",
              tooltip: "প্রতি বছর আসন সংখ্যা পরিবর্তিত হয়",
            },
          ]}
          button={{
            href: "#Info",
            label: "মূল তথ্য",
            icon: <Info size={16} />,
          }}
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
