
"use client";

import dynamic from "next/dynamic";
import { publicUniversities } from "@/lib/data/universities";
import DhakaMainInfoCard from "@/components/DhakaMainInfoCard";
import DhakaAdmissionInfo from "@/components/DhakaAdmissionInfo";
import DhakaQuestionBank from "@/components/DhakaQuestionBank";
import DhakaSeatInfo from "@/components/DhakaSeatInfo";
import DhakaHistoryAndMap from "@/components/DhakaHistoryAndMap";
import Circular from "@/components/common/Circular";
import LinkList from "@/components/common/LinkList";
import { duLinks } from "@/lib/data/links";
import FloatingMenu from "@/components/common/FloatingMenu";

const CountdownTimer = dynamic(
  () => import("@/components/common/CountdownTimer"),
  { ssr: false },
);

export default function UniversityPage() {
  const university = publicUniversities.find((uni) => uni.id === "du");

  if (!university) {
    return <div>University not found</div>;
  }

  return (
    <div className="font-bengali bg-background">
      <FloatingMenu />
      <div className="container mx-auto px-4 max-w-4xl">
        <DhakaMainInfoCard />
        
        <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
          <CountdownTimer />
        </div>

        <LinkList links={duLinks} />
        <Circular
          title="সম্পূর্ণ সার্কুলার"
          note="(⚠ নোট: সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারেন।)"
          downloadLink="https://t.me/Study_on_Telegram/13197"
          showPreviousYears={true}
        />
        <DhakaQuestionBank />
        <DhakaAdmissionInfo />
        <DhakaSeatInfo />
        <DhakaHistoryAndMap />
      </div>
    </div>
  );
}
