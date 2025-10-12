
"use client";
import { Accordion } from "@/components/ui/accordion";
import QuestionBankAccordion from "@/components/QuestionBankAccordion";
import { allData } from "@/lib/data/_generated";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen } from "lucide-react";

interface QuestionBankItem {
  title?: string;
  links: Array<{
    text: string;
    url: string;
  }>;
}

interface QuestionBankCategory {
  title: string;
  items: QuestionBankItem[];
}

interface GSTQuestionBanks {
  duUnitA: QuestionBankCategory[];
  duUnitB: QuestionBankCategory[];
  duUnitC: QuestionBankCategory[];
}

const GstQuestionBank = () => {
  const gstData = allData.universities.find((uni) => uni.id === "gst");

  if (!gstData || !gstData.questionBanks) {
    return <div>জিএসটি গুচ্ছের প্রশ্নব্যাংক পাওয়া যায়নি।</div>;
  }

  const questionBanks = gstData.questionBanks as GSTQuestionBanks;

  const safeGstUnitA = questionBanks.duUnitA || [];
  const safeGstUnitB = questionBanks.duUnitB || [];
  const safeGstUnitC = questionBanks.duUnitC || [];

  return (
    <div
      id="QuestionBank"
      className="mt-4 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative animate-fade-in-up"
    >
      <div className="flex justify-center">
        <div className="gradient-background inline-block px-6 py-2 text-primary-foreground rounded-full text-lg mb-4 font-bold shadow-md">
          প্রশ্নব্যাংক
        </div>
      </div>
      <Tabs defaultValue="ka-unit" className="w-full">
        <TabsList className="flex flex-wrap w-full h-auto bg-transparent gap-2">
          <TabsTrigger value="ka-unit" className="flex-grow">
            &quot;A&quot; ইউনিট (বিজ্ঞান)
          </TabsTrigger>
          <TabsTrigger value="kha-unit" className="flex-grow">
            &quot;B&quot; ইউনিট (মানবিক)
          </TabsTrigger>
          <TabsTrigger value="ga-unit" className="flex-grow">
            &quot;C&quot; ইউনিট (ব্যবসায়)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="ka-unit">
          <Accordion type="multiple" className="w-full text-left space-y-2">
            {safeGstUnitA.map((item: QuestionBankCategory, index: number) => (
              <QuestionBankAccordion
                key={index}
                value={`item-${index}`}
                title={item.title}
                items={item.items}
              />
            ))}
          </Accordion>
        </TabsContent>
        <TabsContent value="kha-unit">
          <Accordion type="multiple" className="w-full text-left space-y-2">
            {safeGstUnitB.map((item: QuestionBankCategory, index: number) => (
              <QuestionBankAccordion
                key={index}
                value={`item-${index}`}
                title={item.title}
                items={item.items}
              />
            ))}
          </Accordion>
        </TabsContent>
        <TabsContent value="ga-unit">
          <Accordion type="multiple" className="w-full text-left space-y-2">
            {safeGstUnitC.map((item: QuestionBankCategory, index: number) => (
              <QuestionBankAccordion
                key={index}
                value={`item-${index}`}
                title={item.title}
                items={item.items}
              />
            ))}
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GstQuestionBank;
