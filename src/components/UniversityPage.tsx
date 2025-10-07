"use client";

import React from "react";
import dynamic from "next/dynamic";
import { University } from "@/lib/data/universities";
import FloatingMenu from "@/components/common/FloatingMenu";
import LinkList from "@/components/common/LinkList";
import Circular from "@/components/common/Circular";
import PageHeaderCard from "./common/PageHeaderCard";
import Image from "next/image";
import QuestionBankTabs from "./QuestionBankTabs";
import DhakaSeatInfo from "./DhakaSeatInfo";
import DhakaHistoryAndMap from "./DhakaHistoryAndMap";
import DhakaAdmissionInfo from "./DhakaAdmissionInfo";

const CountdownTimer = dynamic(
  () => import("@/components/common/CountdownTimer"),
  { ssr: false },
);

interface UniversityPageProps {
  university: University;
  universityData: any;
}

const UniversityPage = ({ university, universityData }: UniversityPageProps) => {
  const isDhakaUniversity = university.id === "du";

  return (
    <div className="font-bengali bg-background">
      <FloatingMenu />

      <div className="container mx-auto px-4">
        {isDhakaUniversity && (
          <div className="text-xs sm:text-sm text-foreground absolute top-[86px] sm:top-[91px] sm:left-[30px] left-6 bg-card border border-border rounded-[8px] px-3 py-1 z-20">
            <b>পাবলিক</b>
          </div>
        )}

        <PageHeaderCard
          icon={
            <Image
              src={university.logo}
              alt={`${university.nameEn} Logo`}
              width={100}
              height={100}
              className="p-1 w-full h-full object-contain rounded-2xl"
            />
          }
          title={university.nameBn}
          subtitle={university.nameEn}
          description={university.description}
          stats={
            isDhakaUniversity
              ? [
                  { value: "১৩টি", label: "অনুষদ" },
                  { value: "৮৩টি", label: "বিষয়" },
                  {
                    value: "৬১৩০টি",
                    label: "আসন",
                    tooltip: `
              'ক' ইউনিট: ১৮৯৬<br/>
              'খ' ইউনিট: ২৯৩৪<br/>
              'গ' ইউনিট: ১০৫০<br/>
              'চ' ইউনিট: ১৩০<br/>
              IBA ইউনিট: ১২০
            `,
                  },
                ]
              : []
          }
          button={{ href: "#Info", label: "মূল তথ্য" }}
        />

        {universityData.links && universityData.links.length > 0 && (
          <LinkList links={universityData.links} />
        )}

        <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
          <CountdownTimer />
        </div>

        <Circular
          title="সম্পূর্ণ সার্কুলার"
          note="(⚠ নোট: সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারেন।)"
          downloadLink="#"
          showPreviousYears={isDhakaUniversity}
        />
        {isDhakaUniversity ? (
          <>
            <DhakaAdmissionInfo />
            <QuestionBankTabs />
            <DhakaSeatInfo />
            <DhakaHistoryAndMap />
          </>
        ) : (
          <div className="mt-8 text-center text-muted-foreground">
            এই বিশ্ববিদ্যালয়ের বিস্তারিত তথ্য শীঘ্রই যোগ করা হবে।
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversityPage;
