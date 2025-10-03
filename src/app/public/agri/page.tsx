import SimplePageHeader from "@/components/common/SimplePageHeader";
import { publicUniversities } from "@/lib/data/universities";
import { notFound } from "next/navigation";
import LinkList from "@/components/common/LinkList";
import Circular from "@/components/common/Circular";
import { acasData } from "@/lib/data/universities/acas";
import FloatingMenu from "@/components/common/FloatingMenu";
import DhakaQuestionBank from "@/components/DhakaQuestionBank";

export default function AgriPage() {
  const university = publicUniversities.find((uni) => uni.id === "agri");

  if (!university) {
    notFound();
  }

  return (
    <div className="font-bengali bg-background">
      <FloatingMenu />
      <div className="container mx-auto px-4">
        <SimplePageHeader
          title="কৃষি গুচ্ছ ভর্তি তথ্য"
          description="কৃষি গুচ্ছ সম্পর্কিত সকল তথ্য এখানে পাওয়া যাবে।"
        />
        <div className="mt-4">
          <LinkList links={acasData.links} />
        </div>
        <Circular
          title="সম্পূর্ণ সার্কুলার"
          note="(⚠ নোট: সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারেন।)"
          downloadLink="https://www.bd-pratidin.com/assets/news_images/2024/02/14/big_2024_02_14_15_02_36_860161.jpg"
          showPreviousYears={true}
        />
        <DhakaQuestionBank />
      </div>
    </div>
  );
}
