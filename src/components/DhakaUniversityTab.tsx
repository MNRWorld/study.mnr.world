"use client";

import React from "react";
import { Accordion } from "@/components/ui/accordion";
import QuestionBankAccordion from "@/components/QuestionBankAccordion";
import {
  duUnitA,
  duUnitB,
  duUnitC,
  duUnitCha,
  duIBA,
} from "@/lib/data/question-banks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DhakaUniversityTab = () => {
  return (
    <Tabs defaultValue="ka-unit" className="w-full">
      <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 h-auto bg-muted/50">
        <TabsTrigger value="ka-unit">"ক" ইউনিট</TabsTrigger>
        <TabsTrigger value="kha-unit">"খ" ইউনিট</TabsTrigger>
        <TabsTrigger value="ga-unit">"গ" ইউনিট</TabsTrigger>
        <TabsTrigger value="cha-unit">"চ" ইউনিট</TabsTrigger>
        <TabsTrigger value="iba-unit">DU IBA (বিশেষ)</TabsTrigger>
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
