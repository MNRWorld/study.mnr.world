import { publicUniversities } from "@/lib/data/universities";
import { notFound } from "next/navigation";
import { duData } from "@/lib/data/universities/du";
import LinkList from "@/components/common/LinkList";
import Circular from "@/components/common/Circular";
import DhakaAdmissionInfo from "@/components/DhakaAdmissionInfo";
import DhakaSeatInfo from "@/components/DhakaSeatInfo";
import DhakaQuestionBank from "@/components/DhakaQuestionBank";
import DhakaHistoryAndMap from "@/components/DhakaHistoryAndMap";
import DhakaMainInfoCard from "@/components/DhakaMainInfoCard";
import FloatingMenu from "@/components/common/FloatingMenu";
import SimplePageHeader from "@/components/common/SimplePageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Construction } from "lucide-react";
import React from "react";

// Define the structure for the university data map
interface UniversityData {
  links: any[][];
  // Add other properties if they exist in other university data files
}

interface UniversityDataMap {
  [key: string]: UniversityData;
}

// Map university IDs to their data imports
const universityDataMap: UniversityDataMap = {
  du: duData,
};

export async function generateStaticParams() {
  return publicUniversities.map((uni) => ({
    id: uni.id,
  }));
}

export default function UniversityPage({ params }: { params: { id: string } }) {
  const universityInfo = publicUniversities.find((uni) => uni.id === params.id);

  if (!universityInfo) {
    notFound();
  }

  // Specific handling for Dhaka University
  if (params.id === "du") {
    return (
      <div className="font-bengali bg-background">
        <FloatingMenu />
        <div className="container mx-auto px-4">
          <DhakaMainInfoCard />
          <div id="Links" className="mt-4">
            <LinkList links={duData.links} />
          </div>
          <div id="Circular" className="mt-4">
            <Circular
              title="সম্পূর্ণ সার্কুলার"
              note="(⚠ নোট: সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারেন।)"
              downloadLink="https://t.me/Study_on_Telegram/11073?single"
              showPreviousYears={true}
            />
          </div>
          <DhakaAdmissionInfo />
          <DhakaSeatInfo />
          <DhakaQuestionBank />
          <DhakaHistoryAndMap />
        </div>
      </div>
    );
  }

  // Fallback for other universities
  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-4">
        <SimplePageHeader
          title={universityInfo.nameBn}
          description={`"${universityInfo.nameEn}" এর ভর্তি তথ্য, সার্কুলার এবং অন্যান্য রিসোর্স শীঘ্রই যোগ করা হবে।`}
        />
        <div className="flex justify-center mt-8">
          <Card className="max-w-lg text-center p-8 animate-fade-in-up">
            <CardContent>
              <Construction className="h-16 w-16 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">
                এই পাতাটি নির্মাণাধীন
              </h3>
              <p className="text-muted-foreground mb-6">
                আমরা যত দ্রুত সম্ভব এই বিশ্ববিদ্যালয়ের সকল তথ্য যোগ করার জন্য কাজ
                করছি। সাময়িক অসুবিধার জন্য আমরা দুঃখিত।
              </p>
              <Button asChild>
                <Link href="/public/du">ঢাকা বিশ্ববিদ্যালয়ের পাতা দেখুন</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
