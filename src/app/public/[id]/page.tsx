
"use client";
import { publicUniversities } from "@/lib/data/universities";
import { notFound } from "next/navigation";
import { duData } from "@/lib/data/universities/du";
import FloatingMenu from "@/components/common/FloatingMenu";
import LinkList from "@/components/common/LinkList";
import Circular from "@/components/common/Circular";
import DhakaMainInfoCard from "@/components/DhakaMainInfoCard";
import DhakaAdmissionInfo from "@/components/DhakaAdmissionInfo";
import DhakaQuestionBank from "@/components/DhakaQuestionBank";
import DhakaSeatInfo from "@/components/DhakaSeatInfo";
import DhakaHistoryAndMap from "@/components/DhakaHistoryAndMap";
import dynamic from "next/dynamic";
import SimplePageHeader from "@/components/common/SimplePageHeader";

const CountdownTimer = dynamic(
  () => import("@/components/common/CountdownTimer"),
  { ssr: false },
);

export default function UniversityPage({ params }: { params: { id: string } }) {
  const university = publicUniversities.find((uni) => uni.id === params.id);

  if (!university) {
    notFound();
  }

  // Currently, we only have full data for DU.
  // We can expand this for other universities later.
  if (params.id !== "du") {
    return (
      <div className="container mx-auto px-4 py-8">
        <SimplePageHeader
          title={university.nameBn}
          description={`"${university.nameEn}" এর বিস্তারিত তথ্য শীঘ্রই যোগ করা হবে।`}
        />
      </div>
    );
  }

  return (
    <div className="font-bengali bg-background">
      <FloatingMenu />
      <div className="container mx-auto px-4">
        <DhakaMainInfoCard />
        <LinkList links={duData.links} />

        <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
          <CountdownTimer />
        </div>

        <Circular
          title="সম্পূর্ণ সার্কুলার"
          note="(⚠ নোট: সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারেন।)"
          downloadLink="https://t.me/Study_on_Telegram/13204"
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
