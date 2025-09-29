
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdmissionScheduleTable from "@/components/common/AdmissionScheduleTable";
import GeneralAdmissionInfo from "@/components/common/GeneralAdmissionInfo";
import {
  CalendarClock,
  Info,
  FilePenLine,
  Ticket,
  BarChart3,
} from "lucide-react";
import ApplicationScheduleTable from "./ApplicationScheduleTable";

const AdmissionTabs = () => {
  return (
    <div className="mt-8">
      <Tabs defaultValue="schedule" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 h-auto bg-muted/50">
          <TabsTrigger value="schedule">
            <CalendarClock className="mr-2 h-4 w-4" /> সময়কাল
          </TabsTrigger>
          <TabsTrigger value="info">
            <Info className="mr-2 h-4 w-4" /> তথ্য
          </TabsTrigger>
          <TabsTrigger value="application">
            <FilePenLine className="mr-2 h-4 w-4" /> আবেদন
          </TabsTrigger>
          <TabsTrigger value="admit-card">
            <Ticket className="mr-2 h-4 w-4" /> প্রবেশপত্র
          </TabsTrigger>
          <TabsTrigger value="result">
            <BarChart3 className="mr-2 h-4 w-4" /> ফলাফল
          </TabsTrigger>
        </TabsList>
        <TabsContent value="schedule">
          <AdmissionScheduleTable />
        </TabsContent>
        <TabsContent value="info">
          <GeneralAdmissionInfo />
        </TabsContent>
        <TabsContent value="application">
          <ApplicationScheduleTable />
        </TabsContent>
        <TabsContent value="admit-card">
          <div className="mt-4 w-full border border-border bg-card rounded-2xl p-6 shadow-lg text-center">
            <p className="text-muted-foreground">
              প্রবেশপত্র সংক্রান্ত তথ্য এখানে যুক্ত করা হবে।
            </p>
          </div>
        </TabsContent>
        <TabsContent value="result">
          <div className="mt-4 w-full border border-border bg-card rounded-2xl p-6 shadow-lg text-center">
            <p className="text-muted-foreground">
              ফলাফল সংক্রান্ত তথ্য এখানে যুক্ত করা হবে।
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdmissionTabs;
