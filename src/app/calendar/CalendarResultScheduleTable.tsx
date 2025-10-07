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
      <div className="w-full border border-border bg-card rounded-2xl shadow-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="sticky top-[66px] sm:top-[72px] z-10 text-center w-1/3 font-bold bg-primary text-primary-foreground rounded-tl-2xl">
                বিশ্ববিদ্যালয়
              </TableHead>
              <TableHead className="sticky top-[66px] sm:top-[72px] z-10 text-center w-1/3 font-bold bg-primary text-primary-foreground">
                তারিখ
              </TableHead>
              <TableHead className="sticky top-[66px] sm:top-[72px] z-10 text-center w-1/3 font-bold bg-primary text-primary-foreground rounded-tr-2xl">
                লিংক
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hsc24.map((item, index) => (
              <TableRow key={index} className="even:bg-muted/50">
                <TableCell
                  className="text-center font-medium whitespace-pre-wrap align-top"
                  dangerouslySetInnerHTML={{ __html: item.university }}
                ></TableCell>
                <TableCell
                  className="text-center whitespace-pre-wrap align-top"
                  dangerouslySetInnerHTML={{ __html: item.date }}
                ></TableCell>
                <TableCell className="text-center align-top">
                  <ExternalLink href={item.link} text="[লিংক]" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="w-full border border-border bg-card rounded-2xl shadow-lg">
        <div className="flex justify-center p-4 sm:p-6">
          <div className="gradient-background inline-block px-6 py-2 text-primary-foreground rounded-full text-lg mb-4 font-bold shadow-md">
            <Clock className="inline-block mr-2" />
            বিগত এডমিশন (HSC-23)
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="sticky top-[66px] sm:top-[72px] z-10 text-center w-1/3 font-bold bg-primary text-primary-foreground rounded-tl-2xl">
                বিশ্ববিদ্যালয়
              </TableHead>
              <TableHead className="sticky top-[66px] sm:top-[72px] z-10 text-center w-1/3 font-bold bg-primary text-primary-foreground">
                তারিখ
              </TableHead>
              <TableHead className="sticky top-[66px] sm:top-[72px] z-10 text-center w-1/3 font-bold bg-primary text-primary-foreground rounded-tr-2xl">
                লিংক
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hsc23.map((item, index) => (
              <TableRow key={index} className="even:bg-muted/50">
                <TableCell
                  className="text-center font-medium whitespace-pre-wrap align-top"
                  dangerouslySetInnerHTML={{ __html: item.university }}
                ></TableCell>
                <TableCell
                  className="text-center whitespace-pre-wrap align-top"
                  dangerouslySetInnerHTML={{ __html: item.date }}
                ></TableCell>
                <TableCell className="text-center align-top">
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
