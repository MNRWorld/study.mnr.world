import { notFound } from "next/navigation";
import { publicUniversities, University } from "@/lib/data/universities";

import FloatingMenu from "@/components/common/FloatingMenu";
import LinkList from "@/components/common/LinkList";
import DhakaMainInfoCard from "@/components/DhakaMainInfoCard";
import DhakaAdmissionInfo from "@/components/DhakaAdmissionInfo";
import DhakaSeatInfo from "@/components/DhakaSeatInfo";
import DhakaQuestionBank from "@/components/DhakaQuestionBank";
import DhakaHistoryAndMap from "@/components/DhakaHistoryAndMap";
import Circular from "@/components/common/Circular";
import Image from "next/image";
import PageHeaderCard from "@/components/common/PageHeaderCard";
import { duData } from "@/lib/data/universities/du";

export async function generateStaticParams() {
  return publicUniversities.map((uni) => ({
    universityId: uni.id,
  }));
}

function getUniversityData(id: string) {
  const university = publicUniversities.find((uni) => uni.id === id);
  if (!university) {
    return null;
  }
  if (id === "du") {
    return { university, details: duData };
  }
  // For other universities, we can fetch their data dynamically in the future
  // For now, we return the basic university info
  return { university, details: null };
}

export default function UniversityPage({
  params,
}: {
  params: { universityId: string };
}) {
  const data = getUniversityData(params.universityId);

  if (!data) {
    notFound();
  }

  const { university, details } = data;

  if (university.id === "du" && details) {
    return (
      <div className="font-bengali bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="relative">
            <DhakaMainInfoCard />
            <FloatingMenu />
          </div>
          <LinkList links={details.links} />
          <Circular
            title="সম্পূর্ণ সার্কুলার"
            note="(⚠ নোট: সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারেন।)"
            downloadLink="https://t.me/Study_on_Telegram/13197"
            showPreviousYears={true}
          />
          <DhakaAdmissionInfo />
          <DhakaSeatInfo />
          <DhakaQuestionBank />
          <DhakaHistoryAndMap />
        </div>
      </div>
    );
  }

  // Generic page for other universities
  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="relative">
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
            stats={[]}
          />
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          <p>
            এই বিশ্ববিদ্যালয়ের বিস্তারিত তথ্য খুব শীঘ্রই যোগ করা হবে। আমাদের সাথে
            থাকার জন্য ধন্যবাদ।
          </p>
        </div>
      </div>
    </div>
  );
}
