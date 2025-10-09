"use client";

import React from "react";
import { Accordion } from "@/components/ui/accordion";
import QuestionBankAccordion from "@/components/QuestionBankAccordion";
import { allData } from "@/lib/data/_generated";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DhakaUniversityTab = () => {
  const duData = allData.universities.find((uni) => uni.id === "du");

  if (!duData || !duData.questionBanks) {
    return <div>ঢাকা বিশ্ববিদ্যালয়ের প্রশ্নব্যাংক পাওয়া যায়নি।</div>;
  }
  const { duUnitA, duUnitB, duUnitC, duUnitCha, duIBA } = duData.questionBanks;

  return (
    <Tabs defaultValue="ka-unit" className="w-full">
      <TabsList className="flex flex-wrap w-full h-auto bg-transparent gap-2">
        <TabsTrigger value="ka-unit" className="flex-grow">
          "ক" ইউনিট
        </TabsTrigger>
        <TabsTrigger value="kha-unit" className="flex-grow">
          "খ" ইউনিট
        </TabsTrigger>
        <TabsTrigger value="ga-unit" className="flex-grow">
          "গ" ইউনিট
        </TabsTrigger>
        <TabsTrigger value="cha-unit" className="flex-grow">
          "চ" ইউনিট
        </TabsTrigger>
        <TabsTrigger value="iba-unit" className="flex-grow">
          DU IBA (বিশেষ)
        </TabsTrigger>
      </TabsList>
      <TabsContent value="ka-unit">
        <Accordion type="multiple" className="w-full text-left space-y-2">
          {duUnitA.map((item, index) => (
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
          {duUnitB.map((item, index) => (
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
          {duUnitC.map((item, index) => (
            <QuestionBankAccordion
              key={index}
              value={`item-${index}`}
              title={item.title}
              items={item.items}
            />
          ))}
        </Accordion>
      </TabsContent>
      <TabsContent value="cha-unit">
        <Accordion type="multiple" className="w-full text-left space-y-2">
          {duUnitCha.map((item, index) => (
            <QuestionBankAccordion
              key={index}
              value={`item-${index}`}
              title={item.title}
              items={item.items}
            />
          ))}
        </Accordion>
      </TabsContent>
      <TabsContent value="iba-unit">
        <Accordion type="multiple" className="w-full text-left space-y-2">
          {duIBA.map((item, index) => (
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
  );
};

export default DhakaUniversityTab;
