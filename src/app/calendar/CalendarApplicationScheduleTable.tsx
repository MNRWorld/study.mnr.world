"use client";

import { applicationSchedule } from "@/lib/data/schedules/application";
import ExternalLink from "@/components/common/ExternalLink";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const CalendarApplicationScheduleTable = () => {
  return (
    <div className="mt-4 w-full border border-border bg-card rounded-2xl shadow-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="sticky top-[66px] sm:top-[66px] z-10 bg-primary text-primary-foreground text-center font-bold rounded-tl-2xl">
              ভার্সিটি
            </TableHead>
            <TableHead className="sticky top-[66px] sm:top-[66px] z-10 bg-primary text-primary-foreground text-center font-bold">
              তারিখ
            </TableHead>
            <TableHead className="sticky top-[66px] sm:top-[66px] z-10 bg-primary text-primary-foreground text-center font-bold">
              সময়
            </TableHead>
            <TableHead className="sticky top-[66px] sm:top-[66px] z-10 bg-primary text-primary-foreground text-center font-bold">
              ফি
            </TableHead>
            <TableHead className="sticky top-[66px] sm:top-[66px] z-10 bg-primary text-primary-foreground text-center font-bold rounded-tr-2xl">
              লিংক
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicationSchedule.map((item, index) => (
            <TableRow key={index} className="even:bg-muted/50">
              <TableCell className="text-center font-medium whitespace-pre-wrap align-top">
                <div className="font-bold">{item.university}</div>
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
                className="text-center whitespace-pre-wrap align-top"
                dangerouslySetInnerHTML={{ __html: item.date }}
              ></TableCell>
              <TableCell
                className={cn(
                  "text-center font-semibold whitespace-pre-wrap align-top",
                  item.status.includes("স্থগিত")
                    ? "text-yellow-500 dark:text-yellow-400"
                    : item.status.includes("শেষ")
                      ? "text-red-500 dark:text-red-400"
                      : "text-green-500 dark:text-green-400",
                )}
              >
                {item.status}
              </TableCell>
              <TableCell
                className="text-center whitespace-pre-wrap align-top"
                dangerouslySetInnerHTML={{ __html: item.fee }}
              ></TableCell>
              <TableCell className="text-center align-top">
                {item.applyLink && (
                  <ExternalLink href={item.applyLink} text="[আবেদন করুন]" />
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
