"use client";

import dynamic from "next/dynamic";
import MainInfoCard from "@/components/DhakaMainInfoCard";
import { Suspense } from "react";
import LinkList from "@/components/common/LinkList";
import { duLinks } from "@/lib/data/links";
import Circular from "@/components/common/Circular";
import AdmissionInfo from "@/components/DhakaAdmissionInfo";
import FloatingMenu from "@/components/common/FloatingMenu";

const HistoryAndMap = dynamic(() => import("@/components/DhakaHistoryAndMap"));
const CountdownTimer = dynamic(
  () => import("@/components/common/CountdownTimer"),
  { ssr: false },
);
const QuestionBank = dynamic(() => import("@/components/DhakaQuestionBank"), {
  ssr: false,
});
const DhakaSeatInfo = dynamic(() => import("@/components/DhakaSeatInfo"), {
  ssr: false,
});

function DhakaUniversityPage() {
  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mx-2 sm:mx-4">
          <MainInfoCard />
        </div>
        <FloatingMenu />
      </div>

      <div className="mt-4">
        <LinkList links={duLinks} />
      </div>

      <div className="container mx-auto px-4">
        <div className="mt-4 mx-2 sm:mx-4">
          <Suspense fallback={<div>Loading history...</div>}>
            <HistoryAndMap />
          </Suspense>
        </div>

        <div className="mt-4 mx-2 sm:mx-4">
          <div className="w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
            <Suspense fallback={<div>Loading timer...</div>}>
              <CountdownTimer />
            </Suspense>
          </div>
        </div>

        <div className="mt-4 mx-2 sm:mx-4">
          <Circular
            title="HSC-24 ব্যাচের সার্কুলার"
            note="(⚠ নোট: HSC-25 এর সার্কুলার এখনও প্রকাশিত হয়নি। আপাতত এটি দেখে আইডিয়া নিতে পারেন।)"
            downloadLink="https://t.me/Study_on_Telegram/13215"
            showPreviousYears={true}
          />
        </div>

        <div className="mt-4 mx-2 sm:mx-4">
          <Suspense fallback={<div>Loading question bank...</div>}>
            <QuestionBank />
          </Suspense>
        </div>

        <div className="mt-4 mx-2 sm:mx-4">
          <AdmissionInfo />
        </div>

        <div className="mt-4 mx-2 sm:mx-4">
          <Suspense fallback={<div>Loading seat info...</div>}>
            <DhakaSeatInfo />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default DhakaUniversityPage;
