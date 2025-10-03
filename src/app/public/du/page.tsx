"use client";

import LinkList from "@/components/common/LinkList";
import Circular from "@/components/common/Circular";
import DhakaAdmissionInfo from "@/components/DhakaAdmissionInfo";
import { duLinks } from "@/lib/data/links";
import dynamic from "next/dynamic";
import FloatingMenu from "@/components/common/FloatingMenu";
import DhakaMainInfoCard from "@/components/DhakaMainInfoCard";
import DhakaQuestionBank from "@/components/DhakaQuestionBank";
import DhakaSeatInfo from "@/components/DhakaSeatInfo";
import DhakaHistoryAndMap from "@/components/DhakaHistoryAndMap";

const CountdownTimer = dynamic(
  () => import("@/components/common/CountdownTimer"),
  { ssr: false },
);

export default function DuPage() {
  return (
    <div className="font-bengali bg-background">
      <FloatingMenu />
      <div className="container mx-auto px-4">
        <DhakaMainInfoCard />
        <div className="mt-8">
          <LinkList links={duLinks} />
        </div>
        <DhakaHistoryAndMap />
        <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
          <CountdownTimer />
        </div>
        <div className="mt-4">
          <Circular
            title="সম্পূর্ণ সার্কুলার"
            note="(⚠ নোট: সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারেন।)"
            downloadLink="https://t.me/Study_on_Telegram/13204?single"
            showPreviousYears={true}
          />
        </div>
        <DhakaAdmissionInfo />
        <DhakaQuestionBank />
        <DhakaSeatInfo />
      </div>
    </div>
  );
}
