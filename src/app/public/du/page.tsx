import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DhakaMainInfoCard from "@/components/DhakaMainInfoCard";
import LinkList from "@/components/common/LinkList";
import { duLinks } from "@/lib/data/links";
import Circular from "@/components/common/Circular";
import DhakaQuestionBank from "@/components/DhakaQuestionBank";
import DhakaAdmissionInfo from "@/components/DhakaAdmissionInfo";
import DhakaSeatInfo from "@/components/DhakaSeatInfo";
import DhakaHistoryAndMap from "@/components/DhakaHistoryAndMap";
import FloatingMenu from "@/components/common/FloatingMenu";

function DhakaUniversityPage() {
  return (
    <div className="font-bengali bg-background">
      <FloatingMenu />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="my-6">
          <Button asChild variant="outline">
            <Link href="/public">
              <ArrowLeft className="mr-2" /> সব পাবলিক বিশ্ববিদ্যালয়
            </Link>
          </Button>
        </div>
        <DhakaMainInfoCard />
        <div className="mt-4">
          <LinkList links={duLinks} />
        </div>
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
export default DhakaUniversityPage;
