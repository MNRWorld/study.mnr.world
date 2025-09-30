import { publicUniversities } from "@/lib/data/universities";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Existing DU components
import MainInfoCard from "@/components/DhakaMainInfoCard";
import LinkList from "@/components/common/LinkList";
import { duData } from "@/lib/data/universities/du";
import Circular from "@/components/common/Circular";
import AdmissionInfo from "@/components/DhakaAdmissionInfo";
import FloatingMenu from "@/components/common/FloatingMenu";

// Generic components for other universities
import PageHeaderCard from "@/components/common/PageHeaderCard";
import Image from "next/image";

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

export async function generateStaticParams() {
  return publicUniversities.map((uni) => ({
    universityId: uni.id,
  }));
}

export default function UniversityPage({
  params,
}: {
  params: { universityId: string };
}) {
  const university = publicUniversities.find(
    (uni) => uni.id === params.universityId,
  );

  if (!university) {
    notFound();
  }

  // Special case for DU as it has full components
  if (params.universityId === "du") {
    return (
      <div className="font-bengali bg-background py-8">
        <div className="container mx-auto px-2 lg:px-[170px]">
          <MainInfoCard />
          <FloatingMenu />

          <div className="mt-4">
            <LinkList links={duData.links} />
          </div>

          <div className="mt-4">
            <Suspense fallback={<div>Loading history...</div>}>
              <HistoryAndMap />
            </Suspense>
          </div>

          <div className="mt-4">
            <div className="w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
              <Suspense fallback={<div>Loading timer...</div>}>
                <CountdownTimer />
              </Suspense>
            </div>
          </div>

          <div className="mt-4">
            <Circular
              title="HSC-24 ব্যাচের সার্কুলার"
              note="(⚠ নোট: HSC-25 এর সার্কুলার এখনও প্রকাশিত হয়নি। আপাতত এটি দেখে আইডিয়া নিতে পারেন।)"
              downloadLink="https://t.me/Study_on_Telegram/13215"
              showPreviousYears={true}
            />
          </div>

          <div className="mt-4">
            <Suspense fallback={<div>Loading question bank...</div>}>
              <QuestionBank />
            </Suspense>
          </div>

          <div className="mt-4">
            <AdmissionInfo />
          </div>

          <div className="mt-4">
            <Suspense fallback={<div>Loading seat info...</div>}>
              <DhakaSeatInfo />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }

  // Generic page for other universities
  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-xs sm:text-sm text-foreground absolute top-[86px] sm:top-[91px] sm:left-[30px] left-6 bg-card border border-border rounded-[8px] px-3 py-1 z-20">
          <b>{university.category}</b>
        </div>
        <PageHeaderCard
          icon={
            <Image
              src={university.logo}
              alt={`${university.nameEn} logo`}
              width={100}
              height={100}
              className="p-1 w-full h-full object-contain rounded-2xl"
            />
          }
          title={university.nameBn}
          subtitle={university.nameEn}
          description={university.description}
          stats={[]} // No stats for generic universities yet
        />
        <div className="mt-8 text-center text-muted-foreground">
          <p>
            এই বিশ্ববিদ্যালয়ের বিস্তারিত তথ্য খুব শীঘ্রই যোগ করা হবে। আমাদের সাথেই
            থাকুন।
          p>
        </div>
      </div>
    </div>
  );
}
