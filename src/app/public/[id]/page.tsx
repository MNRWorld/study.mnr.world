"use client";

import React from "react";
import { notFound } from "next/navigation";
import { publicUniversities, University } from "@/lib/data/universities";
import FloatingMenu from "@/components/common/FloatingMenu";
import LinkList from "@/components/common/LinkList";
import Circular from "@/components/common/Circular";
import PageHeaderCard from "@/components/common/PageHeaderCard";
import Image from "next/image";
import QuestionBankTabs from "@/components/QuestionBankTabs";

import { duData } from "@/lib/data/universities/du";
import DhakaAdmissionInfo from "@/components/DhakaAdmissionInfo";
import DhakaSeatInfo from "@/components/DhakaSeatInfo";
import DhakaHistoryAndMap from "@/components/DhakaHistoryAndMap";
import DhakaQuestionBank from "@/components/DhakaQuestionBank";

// A simple map to get the specific data for a university
const universityDataMap: { [key: string]: any } = {
  du: duData,
};

function UniversityPageClient({ university }: { university: University }) {
  const universitySpecificData = universityDataMap[university.id];

  return (
    <div className="font-bengali bg-background">
      <FloatingMenu />
      <div className="container mx-auto px-4 lg:px-[170px]">
        <div className="text-xs sm:text-sm text-foreground absolute top-[86px] sm:top-[91px] sm:left-[30px] left-6 bg-card border border-border rounded-[8px] px-3 py-1 z-20">
          <b>{university.category}</b>
        </div>
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
          stats={universitySpecificData?.admissionInfo?.stats || []}
          button={{ href: "#Info", label: "মূল তথ্য" }}
        />

        {universitySpecificData && (
          <>
            <LinkList links={universitySpecificData.links} />
            <Circular
              title="সম্পূর্ণ সার্কুলার"
              note="(⚠ নোট: সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারেন।)"
              downloadLink="#"
              showPreviousYears={true}
            />
            {university.id === "du" ? (
              <>
                <DhakaAdmissionInfo />
                <DhakaSeatInfo />
                <DhakaQuestionBank />
                <DhakaHistoryAndMap />
              </>
            ) : (
              <QuestionBankTabs />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function UniversityPage({ params }: { params: { id: string } }) {
  // Not a promise, but good practice to handle it this way for future versions
  const university = publicUniversities.find((uni) => uni.id === params.id);

  if (!university) {
    notFound();
  }

  return <UniversityPageClient university={university} />;
}
