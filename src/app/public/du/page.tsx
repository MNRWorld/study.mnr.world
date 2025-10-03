import DhakaAdmissionInfo from "@/components/DhakaAdmissionInfo";
import DhakaHistoryAndMap from "@/components/DhakaHistoryAndMap";
import DhakaMainInfoCard from "@/components/DhakaMainInfoCard";
import DhakaQuestionBank from "@/components/DhakaQuestionBank";
import DhakaSeatInfo from "@/components/DhakaSeatInfo";
import Circular from "@/components/common/Circular";
import FloatingMenu from "@/components/common/FloatingMenu";
import LinkList from "@/components/common/LinkList";
import { duLinks } from "@/lib/data/links";

function DhakaUniversityPage() {
  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <FloatingMenu />
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
