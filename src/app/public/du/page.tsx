"use client";
import dynamic from "next/dynamic";
import { publicUniversities } from "@/lib/data/universities";
import { notFound } from "next/navigation";
import DhakaMainInfoCard from "@/components/DhakaMainInfoCard";
import LinkList from "@/components/common/LinkList";
import { duLinks } from "@/lib/data/links";
import Circular from "@/components/common/Circular";
import PreviousYearCirculars from "@/components/common/PreviousYearCirculars";
import DhakaQuestionBank from "@/components/DhakaQuestionBank";
import DhakaAdmissionInfo from "@/components/DhakaAdmissionInfo";
import DhakaSeatInfo from "@/components/DhakaSeatInfo";
import DhakaHistoryAndMap from "@/components/DhakaHistoryAndMap";
import FloatingMenu from "@/components/common/FloatingMenu";

const CountdownTimer = dynamic(
  () => import("@/components/common/CountdownTimer"),
  { ssr: false },
);

export default function DuPage() {
  const university = publicUniversities.find((uni) => uni.id === "du");

  if (!university) {
    notFound();
  }

  return (
    <div className="font-bengali bg-background">
      <FloatingMenu />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <DhakaMainInfoCard />
          <div className="mt-8">
            <LinkList links={duLinks} />
          </div>
          <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
            <CountdownTimer />
          </div>
          <Circular
            title="সম্পূর্ণ সার্কুলার"
            note="(⚠ নোট: সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারেন।)"
            downloadLink="https://t.me/Study_on_Telegram/13204"
            showPreviousYears={true}
          />
          <DhakaAdmissionInfo />
          <DhakaQuestionBank />
          <DhakaSeatInfo />
          <DhakaHistoryAndMap />
        </div>
      </div>
    </div>
  );
}
