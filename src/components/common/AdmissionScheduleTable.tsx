"use client";

import { admissionSchedule } from "@/lib/data/schedules/admission";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CalendarDays } from "lucide-react";

const AdmissionScheduleTable = () => {
  return (
    <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative overflow-x-auto">
      <div className="flex justify-center">
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-foreground text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">
          <CalendarDays className="inline-block mr-2" />
          ভর্তি পরীক্ষার সময়কাল
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center w-1/3">বিষয়</TableHead>
            <TableHead className="text-center w-1/3">তারিখ</TableHead>
            <TableHead className="text-center w-1/3">সময় বাকি</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {admissionSchedule.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="text-center font-medium whitespace-pre-wrap">
                {item.subject}
              </TableCell>
              <TableCell className="text-center whitespace-pre-wrap">{item.date}</TableCell>
              <TableCell
                className={`text-center font-semibold whitespace-pre-wrap ${
                  item.status.includes("স্থগিত")
                    ? "text-yellow-500 dark:text-yellow-400"
                    : item.status.includes("হয়ে গেছে")
                      ? "text-red-500 dark:text-red-400"
                      : "text-green-500 dark:text-green-400"
                }`}
              >
                {item.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdmissionScheduleTable;
