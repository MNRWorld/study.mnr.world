"use client";

import React from "react";
import dynamic from "next/dynamic";
import type { University } from "@/lib/supabase/database.types";
import FloatingMenu from "@/components/common/FloatingMenu";
import LinkList from "@/components/common/LinkList";
import Circular from "@/components/common/Circular";
import PageHeaderCard from "./common/PageHeaderCard";
import Image from "next/image";

const CountdownTimer = dynamic(
  () => import("@/components/common/CountdownTimer"),
  { ssr: false },
);

const LoadingComponent = () => (
  <div className="text-center p-8">লোড হচ্ছে...</div>
);

const DhakaQuestionBank = dynamic(() => import("./DhakaQuestionBank"), {
  loading: LoadingComponent,
});
const DhakaAdmissionInfo = dynamic(() => import("./DhakaAdmissionInfo"), {
  loading: LoadingComponent,
});
const DhakaSeatInfo = dynamic(() => import("./DhakaSeatInfo"), {
  loading: LoadingComponent,
});
const DhakaHistoryAndMap = dynamic(() => import("./DhakaHistoryAndMap"), {
  loading: LoadingComponent,
});

// Component Map for university-specific components
const universityComponents: {
  [key: string]: {
    QuestionBank: React.ComponentType;
    AdmissionInfo: React.ComponentType;
    SeatInfo: React.ComponentType;
    HistoryAndMap: React.ComponentType;
  };
} = {
  du: {
    QuestionBank: DhakaQuestionBank,
    AdmissionInfo: DhakaAdmissionInfo,
    SeatInfo: DhakaSeatInfo,
    HistoryAndMap: DhakaHistoryAndMap,
  },
  ru: {
    QuestionBank: DhakaQuestionBank,
    AdmissionInfo: DhakaAdmissionInfo,
    SeatInfo: DhakaSeatInfo,
    HistoryAndMap: DhakaHistoryAndMap,
  },
};

interface UniversityPageProps {
  university: University;
  universityData: any;
}

const UniversityPage = ({
  university,
  universityData,
}: UniversityPageProps) => {
  const SpecificComponents = universityComponents[university.id];

  return (
    <div className="bg-background">
      <FloatingMenu />

      <div className="container mx-auto px-2 lg:px-44">
        {university.category && university.category.length > 0 && (
          <div className="text-xs sm:text-sm text-foreground absolute top-[86px] sm:top-[91px] sm:left-[30px] left-6 bg-card border border-border rounded-[8px] px-3 py-1 z-20 lg:left-[190px]">
            <b>{university.category.join(", ")}</b>
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
            university.id === "du"
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

        {SpecificComponents && <SpecificComponents.HistoryAndMap />}

        <div className="mt-4 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
          <CountdownTimer universityId={university.id} />
        </div>

        <Circular
          title="সম্পূর্ণ সার্কুলার"
          note="(⚠ নোট: সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারেন।)"
          downloadLink="#"
          showPreviousYears={!!SpecificComponents}
        />

        {SpecificComponents ? (
          <>
            <SpecificComponents.QuestionBank />
            <SpecificComponents.AdmissionInfo />
            <SpecificComponents.SeatInfo />
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
