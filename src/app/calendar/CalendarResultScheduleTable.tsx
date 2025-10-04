"use client";

import { resultSchedule } from "@/lib/data/schedules/result";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ExternalLink from "@/components/common/ExternalLink";
import { Clock } from "lucide-react";

const CalendarResultScheduleTable = () => {
  const { hsc24, hsc23 } = resultSchedule;

  return (
    <div className="mt-4 space-y-8">
      {/* HSC-24 Results */}
      <div className="w-full border border-border bg-card rounded-2xl shadow-lg relative overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center w-1/3 font-bold bg-slate-900 text-white">বিশ্ববিদ্যালয়</TableHead>
              <TableHead className="text-center w-1/3 font-bold bg-slate-900 text-white">তারিখ</TableHead>
              <TableHead className="text-center w-1/3 font-bold bg-slate-900 text-white">লিংক</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hsc24.map((item, index) => (
              <TableRow key={index} className="even:bg-muted/50">
                <TableCell
                  className="text-center font-medium whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: item.university }}
                ></TableCell>
                <TableCell
                  className="text-center whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: item.date }}
                ></TableCell>
                <TableCell className="text-center">
                  <ExternalLink href={item.link} text="[লিংক]" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* HSC-23 Results */}
      <div className="w-full border border-border bg-card rounded-2xl shadow-lg relative overflow-x-auto">
        <div className="flex justify-center p-4 sm:p-6">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-foreground text-primary-foreground rounded-full text-lg mb-4 font-bold shadow-md">
            <Clock className="inline-block mr-2" />
            বিগত এডমিশন (HSC-23)
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center w-1/3 font-bold bg-slate-900 text-white">বিশ্ববিদ্যালয়</TableHead>
              <TableHead className="text-center w-1/3 font-bold bg-slate-900 text-white">তারিখ</TableHead>
              <TableHead className="text-center w-1/3 font-bold bg-slate-900 text-white">লিংক</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hsc23.map((item, index) => (
              <TableRow key={index} className="even:bg-muted/50">
                <TableCell
                  className="text-center font-medium whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: item.university }}
                ></TableCell>
                <TableCell
                  className="text-center whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: item.date }}
                ></TableCell>
                <TableCell className="text-center">
                  <ExternalLink href={item.link} text="[লিংক]" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CalendarResultScheduleTable;
