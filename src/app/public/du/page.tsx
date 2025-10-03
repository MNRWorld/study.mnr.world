"use client";
import React from "react";
import { ArrowLeft, BookOpen, FileText } from "lucide-react";
import LinkList from "@/components/common/LinkList";
import DhakaMainInfoCard from "@/components/DhakaMainInfoCard";
import DhakaAdmissionInfo from "@/components/DhakaAdmissionInfo";
import DhakaSeatInfo from "@/components/DhakaSeatInfo";
import DhakaQuestionBank from "@/components/DhakaQuestionBank";
import Circular from "@/components/common/Circular";
import FloatingMenu from "@/components/common/FloatingMenu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DhakaHistoryAndMap from "@/components/DhakaHistoryAndMap";
import { duLinks } from "@/lib/data/links";

export default function UniversityPage() {
  return (
    <div className="font-bengali bg-background py-8">
      <FloatingMenu />
      <div className="container mx-auto px-4 max-w-4xl">
        <DhakaMainInfoCard />
        <LinkList links={duLinks} />
        <DhakaHistoryAndMap />
        <Circular
          title="সম্পূর্ণ সার্কুলার"
          note="(⚠ নোট: সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারেন।)"
          downloadLink="https://t.me/Study_on_Telegram/13204"
          showPreviousYears={true}
        />
        <DhakaQuestionBank />
        <DhakaAdmissionInfo />
        <DhakaSeatInfo />
      </div>
    </div>
  );
}
