import { publicUniversities, type University } from "@/lib/data/universities";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  BookOpen,
  ArrowRight,
  Info,
  History,
  Map,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import PageHeaderCard from "@/components/common/PageHeaderCard";
import LinkList from "@/components/common/LinkList";
import Circular from "@/components/common/Circular";
import FloatingMenu from "@/components/common/FloatingMenu";

import { duData } from "@/lib/data/universities/du";
import DhakaAdmissionInfo from "@/components/DhakaAdmissionInfo";
import DhakaQuestionBank from "@/components/DhakaQuestionBank";
import DhakaSeatInfo from "@/components/DhakaSeatInfo";
import DhakaHistoryAndMap from "@/components/DhakaHistoryAndMap";

// This is a server-side function, so it's fine here.
export async function generateStaticParams() {
  return publicUniversities.map((uni) => ({
    id: uni.id,
  }));
}

const universityDataMap: { [key: string]: any } = {
  du: duData,
  // Other universities will be added here
};

const UniversityPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const university = publicUniversities.find((uni) => uni.id === id);
  const universitySpecificData = universityDataMap[id];

  if (!university) {
    notFound();
  }

  // A simple placeholder component for when data is not available
  const PlaceholderComponent = ({ title, id }: { title: string; id: string }) => (
    <div
      id={id}
      className="mt-8 w-full border border-border bg-card rounded-2xl p-6 shadow-lg text-center"
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-muted-foreground">
        এই বিশ্ববিদ্যালয়ের জন্য "{title}" সেকশনের তথ্য শীঘ্রই যুক্ত করা হবে।
      </p>
    </div>
  );

  const renderContent = () => {
    switch (id) {
      case "du":
        return (
          <>
            <DhakaAdmissionInfo />
            <DhakaQuestionBank />
            <DhakaSeatInfo />
            <DhakaHistoryAndMap />
          </>
        );
      default:
        return (
          <>
            <PlaceholderComponent title="ভর্তি তথ্য" id="Info" />
            <PlaceholderComponent title="প্রশ্নব্যাংক" id="QuestionBank" />
            <PlaceholderComponent title="আসন সংখ্যা" id="Subjects" />
          </>
        );
    }
  };

  return (
    <div className="font-bengali bg-background">
      <FloatingMenu />
      <div className="container mx-auto px-4 max-w-4xl py-8">
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
          stats={
            universitySpecificData?.admissionInfo.stats || [
              { value: "N/A", label: "অনুষদ" },
              { value: "N/A", label: "বিষয়" },
              { value: "N/A", label: "আসন" },
            ]
          }
          button={{ href: "#Info", label: "মূল তথ্য" }}
        />

        <LinkList links={universitySpecificData?.links || []} />

        <Circular
          title="সম্পূর্ণ সার্কুলার"
          note="(⚠ নোট: সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারেন।)"
          downloadLink="#"
          showPreviousYears={id === "du"}
        />

        {renderContent()}
      </div>
    </div>
  );
};

export default UniversityPage;
