"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CalendarAdmissionScheduleTable from "@/app/calendar/CalendarAdmissionScheduleTable";
import GeneralAdmissionInfo from "@/components/common/GeneralAdmissionInfo";
import {
  CalendarClock,
  Info,
  FilePenLine,
  Ticket,
  BarChart3,
} from "lucide-react";
import ApplicationScheduleTable from "@/components/common/ApplicationScheduleTable";
import AdmitCardScheduleTable from "@/components/common/AdmitCardScheduleTable";
import ResultScheduleTable from "@/components/common/ResultScheduleTable";

const CalendarAdmissionTabs = () => {
  return (
    <div className="mt-8">
      <Tabs defaultValue="schedule" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto bg-transparent gap-2">
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
          <CalendarAdmissionScheduleTable />
        </TabsContent>
        <TabsContent value="info">
          <GeneralAdmissionInfo />
        </TabsContent>
        <TabsContent value="application">
          <ApplicationScheduleTable />
        </TabsContent>
        <TabsContent value="admit-card">
          <AdmitCardScheduleTable />
        </TabsContent>
        <TabsContent value="result">
          <ResultScheduleTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CalendarAdmissionTabs;
