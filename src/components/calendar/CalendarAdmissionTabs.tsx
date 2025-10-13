"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CalendarAdmissionScheduleTable from "./CalendarAdmissionScheduleTable";
import CalendarGeneralAdmissionInfo from "./CalendarGeneralAdmissionInfo";
import {
  CalendarClock,
  Info,
  FilePenLine,
  Ticket,
  BarChart3,
  Star,
} from "lucide-react";
import CalendarApplicationScheduleTable from "./CalendarApplicationScheduleTable";
import CalendarAdmitCardScheduleTable from "./CalendarAdmitCardScheduleTable";
import CalendarResultScheduleTable from "./CalendarResultScheduleTable";
import FavoriteExamsCalendar from "../FavoriteExamsCalendar";

const CalendarAdmissionTabs = () => {
  return (
    <div className="mt-8">
      <Tabs defaultValue="schedule" className="w-full">
        <div className="overflow-x-auto no-scrollbar flex justify-center">
          <TabsList className="flex w-fit sm:w-full bg-transparent gap-2">
            <TabsTrigger value="schedule" className="px-2">
              <CalendarClock className="mr-2 h-4 w-4 hidden sm:inline-block" />{" "}
              সময়কাল
            </TabsTrigger>
            <TabsTrigger value="info" className="px-2">
              <Info className="mr-2 h-4 w-4 hidden sm:inline-block" /> তথ্য
            </TabsTrigger>
            <TabsTrigger value="application" className="px-2">
              <FilePenLine className="mr-2 h-4 w-4 hidden sm:inline-block" />{" "}
              আবেদন
            </TabsTrigger>
            <TabsTrigger value="admit-card" className="px-2">
              <Ticket className="mr-2 h-4 w-4 hidden sm:inline-block" />{" "}
              প্রবেশপত্র
            </TabsTrigger>
            <TabsTrigger value="result" className="px-2">
              <BarChart3 className="mr-2 h-4 w-4 hidden sm:inline-block" />{" "}
              ফলাফল
            </TabsTrigger>
            <TabsTrigger value="favorite" className="px-2">
              <Star className="mr-2 h-4 w-4 hidden sm:inline-block" /> পছন্দের
              ক্যালেন্ডার
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="schedule" className="mt-1">
          <CalendarAdmissionScheduleTable />
        </TabsContent>
        <TabsContent value="info" className="mt-1">
          <CalendarGeneralAdmissionInfo />
        </TabsContent>
        <TabsContent value="application" className="mt-1">
          <CalendarApplicationScheduleTable />
        </TabsContent>
        <TabsContent value="admit-card" className="mt-1">
          <CalendarAdmitCardScheduleTable />
        </TabsContent>
        <TabsContent value="result" className="mt-1">
          <CalendarResultScheduleTable />
        </TabsContent>
        <TabsContent value="favorite" className="mt-1">
          <div className="mt-4 w-full border border-border bg-card rounded-2xl shadow-lg p-4 flex justify-center">
            <FavoriteExamsCalendar />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CalendarAdmissionTabs;
