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
import ExternalLink from "./ExternalLink";
import { BarChart3, Clock } from "lucide-react";

const ResultScheduleTable = () => {
  const { hsc24, hsc23 } = resultSchedule;

  return (
    <div className="mt-8 space-y-8">
      {/* HSC-24 Results */}
      <div className="w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative overflow-x-auto">
        <div className="flex justify-center">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-foreground text-primary-foreground rounded-full text-lg mb-4 font-bold shadow-md">
            <BarChart3 className="inline-block mr-2" />
            এডমিশন সময়ে প্রকাশিত ফলাফল (HSC-24)
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center w-1/3">বিশ্ববিদ্যালয়</TableHead>
              <TableHead className="text-center w-1/3">তারিখ</TableHead>
              <TableHead className="text-center w-1/3">লিংক</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hsc24.map((item, index) => (
              <TableRow key={index}>
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
      <div className="w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative overflow-x-auto">
        <div className="flex justify-center">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-foreground text-primary-foreground rounded-full text-lg mb-4 font-bold shadow-md">
            <Clock className="inline-block mr-2" />
            বিগত এডমিশন (HSC-23)
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center w-1/3">বিশ্ববিদ্যালয়</TableHead>
              <TableHead className="text-center w-1/3">তারিখ</TableHead>
              <TableHead className="text-center w-1/3">লিংক</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hsc23.map((item, index) => (
              <TableRow key={index}>
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

export default ResultScheduleTable;
