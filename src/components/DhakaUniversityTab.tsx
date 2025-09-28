"use client";

import React from "react";
import { Accordion } from "@/components/ui/accordion";
import QuestionBankAccordion from "@/components/QuestionBankAccordion";
import {
  duUnitA_Yearly,
  duUnitA_Chapter,
  duUnitA_Sohayok,
} from "@/lib/data/question-banks";

const DhakaUniversityTab = () => {
  return (
    <Accordion type="multiple" className="w-full text-left">
      <QuestionBankAccordion
        value="du-ka-unit"
        title='"ক" ইউনিট প্রশ্নব্যাংক'
        items={[
          {
            title: "সালভিত্তিক প্রশ্নব্যাংক",
            links: duUnitA_Yearly,
          },
          {
            title: "অধ্যায়ভিত্তিক প্রশ্নব্যাংক",
            links: duUnitA_Chapter,
          },
          {
            title: "সহায়ক বই",
            links: duUnitA_Sohayok,
          },
        ]}
      />
      <QuestionBankAccordion
        value="du-kha-unit"
        title='"খ" ইউনিট প্রশ্নব্যাংক'
        items={[
          {
            links: [],
            placeholder: 'এখানে "খ" ইউনিটের প্রশ্নব্যাংকের লিঙ্ক যুক্ত করা হবে',
          },
        ]}
      />
      <QuestionBankAccordion
        value="du-ga-unit"
        title='"গ" ইউনিট প্রশ্নব্যাংক'
        items={[
          {
            links: [],
            placeholder: 'এখানে "গ" ইউনিটের প্রশ্নব্যাংকের লিঙ্ক যুক্ত করা হবে',
          },
        ]}
      />
      <QuestionBankAccordion
        value="du-gha-unit"
        title='"ঘ / BBA" ইউনিট প্রশ্নব্যাংক'
        items={[
          {
            links: [],
            placeholder:
              'এখানে "ঘ" ও BBA ইউনিটের প্রশ্নব্যাংকের লিঙ্ক যুক্ত করা হবে',
          },
        ]}
      />
    </Accordion>
  );
};

export default DhakaUniversityTab;
