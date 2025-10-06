"use client";

import { applicationSchedule } from "@/lib/data/schedules/application";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ExternalLink from "@/components/common/ExternalLink";
import { FilePenLine } from "lucide-react";

const CalendarApplicationScheduleTable = () => {
  return (
    <div className="mt-4 w-full border border-border bg-card rounded-2xl shadow-lg">
      <Table>
        <TableHeader className="sticky top-[70px] z-10">
          <TableRow>
            <TableHead className="text-center w-1/5 font-bold bg-primary text-primary-foreground rounded-tl-2xl">ভার্সিটি</TableHead>
            <TableHead className="text-center w-1/5 font-bold bg-primary text-primary-foreground">তারিখ</TableHead>
            <TableHead className="text-center w-1/5 font-bold bg-primary text-primary-foreground">সময় বাকি</TableHead>
            <TableHead className="text-center w-1/5 font-bold bg-primary text-primary-foreground">ফি</TableHead>
            <TableHead className="text-center w-1/5 font-bold bg-primary text-primary-foreground rounded-tr-2xl">লিংক</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicationSchedule.map((item, index) => (
            <TableRow key={index} className="even:bg-muted/50">
              <TableCell className="text-center font-medium whitespace-pre-wrap">
                {item.university}
                {item.detailsLink && (
                  <div className="mt-1">
                    <ExternalLink
                      href={item.detailsLink}
                      text={item.detailsLinkText || "[বিস্তারিত]"}
                      className="text-xs"
                    />
                  </div>
                )}
              </TableCell>
              <TableCell
                className="text-center whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: item.date }}
              ></TableCell>
              <TableCell
                className={`text-center font-semibold whitespace-pre-wrap ${
                  item.status.includes("স্থগিত")
                    ? "text-yellow-500 dark:text-yellow-400"
                    : item.status.includes("শেষ")
                      ? "text-red-500 dark:text-red-400"
                      : "text-green-500 dark:text-green-400"
                }`}
              >
                {item.status}
              </TableCell>
              <TableCell
                className="text-center whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: item.fee }}
              ></TableCell>
              <TableCell className="text-center">
                {item.applyLink && (
                  <ExternalLink href={item.applyLink} text="[লিংক]" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CalendarApplicationScheduleTable;
