"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DhakaUniversityTab from "@/components/DhakaUniversityTab";
import { University, FlaskConical, Rocket, Atom } from "lucide-react";

const QuestionBankTabs = () => {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "du";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  return (
    <div
      id="QuestionBank"
      className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative"
    >
      <div className="flex justify-center">
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-foreground text-primary-foreground rounded-full text-lg mb-4 font-bold shadow-md">
          প্রশ্নব্যাংক
        </div>
      </div>
      <Tabs
        defaultValue={initialTab}
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-transparent gap-2">
          <TabsTrigger value="du">
            <University className="mr-2" /> ঢাকা বিশ্ববিদ্যালয়
          </TabsTrigger>
          <TabsTrigger value="medical">
            <FlaskConical className="mr-2" /> মেডিকেল
          </TabsTrigger>
          <TabsTrigger value="engineering">
            <Rocket className="mr-2" /> ইঞ্জিনিয়ারিং
          </TabsTrigger>
          <TabsTrigger value="others">
            <Atom className="mr-2" /> অন্যান্য
          </TabsTrigger>
        </TabsList>
        <TabsContent value="du">
          {activeTab === "du" && <DhakaUniversityTab />}
        </TabsContent>
        <TabsContent value="medical">
          {activeTab === "medical" && (
            <p className="text-muted-foreground p-4">
              মেডিকেল ভর্তি পরীক্ষার বিগত বছরের প্রশ্ন ও সমাধান এখানে যুক্ত করা
              হবে।
            </p>
          )}
        </TabsContent>
        <TabsContent value="engineering">
          {activeTab === "engineering" && (
            <p className="text-muted-foreground p-4">
              বুয়েট, কুয়েট, রুয়েট, চুয়েট সহ সকল ইঞ্জিনিয়ারিং বিশ্ববিদ্যালয়ের
              প্রশ্ন ও সমাধান এখানে যুক্ত করা হবে।
            </p>
          )}
        </TabsContent>
        <TabsContent value="others">
          {activeTab === "others" && (
            <p className="text-muted-foreground p-4">
              অন্যান্য সকল বিশ্ববিদ্যালয়ের প্রশ্ন ও সমাধান এখানে পাওয়া যাবে।
            </p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default QuestionBankTabs;
