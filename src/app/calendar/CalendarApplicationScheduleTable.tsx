"use client";

import React from "react";
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
import { useCountdown } from "@/hooks/useCountdown";

const CountdownCell = ({ targetDate }: { targetDate: string | null }) => {
  const timeLeft = useCountdown(targetDate);

  if (!targetDate) {
    return <TableCell className="text-center align-top">-</TableCell>;
  }

  if (timeLeft.completed) {
    return (
      <TableCell className="text-center align-top text-red-500 dark:text-red-400 whitespace-nowrap">
        সময় শেষ
      </TableCell>
    );
  }

  return (
    <TableCell className="text-center align-top font-mono whitespace-nowrap">
      <span>{String(timeLeft.days).padStart(2, "0")}</span>
      <span className="mr-1 font-bengali">d</span>
      <span>{String(timeLeft.hours).padStart(2, "0")}</span>
      <span className="mr-1 font-bengali">h</span>
      <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
      <span className="mr-1 font-bengali">m</span>
      <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
      <span className="font-bengali">s</span>
    </TableCell>
  );
};

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
            <TableHead className="sticky top-[66px] sm:top-[66px] z-10 bg-primary text-primary-foreground text-center font-bold rounded-tr-2xl">
              ফি ও লিংক
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicationSchedule.map((item, index) => (
            <React.Fragment key={index}>
              <TableRow
                className={cn(
                  "even:bg-muted/30",
                  "dark:even:bg-muted/30",
                  "border-b-0",
                )}
              >
                <TableCell
                  rowSpan={2}
                  className="text-center font-bold whitespace-pre-wrap align-middle border-b border-border/50"
                >
                  <div>{item.university}</div>
                  {item.detailsLink && (
                    <div className="mt-1">
                      <ExternalLink
                        href={item.detailsLink}
                        text={item.detailsLinkText || "[বিস্তারিত]"}
                        className="text-xs font-normal"
                      />
                    </div>
                  )}
                </TableCell>
                <TableCell
                  className="text-center whitespace-pre-wrap align-top pt-3"
                  dangerouslySetInnerHTML={{ __html: item.date }}
                ></TableCell>
                <TableCell
                  className="text-center whitespace-pre-wrap align-top pt-3"
                  dangerouslySetInnerHTML={{ __html: item.fee }}
                ></TableCell>
              </TableRow>
              <TableRow
                className={cn(
                  "even:bg-muted/30",
                  "dark:even:bg-muted/30",
                  "border-b border-border/50",
                )}
              >
                <CountdownCell targetDate={item.applyCountdownDate} />
                <TableCell className="text-center align-top pb-3">
                  {item.applyLink ? (
                    <ExternalLink href={item.applyLink} text="[আবেদন করুন]" />
                  ) : (
                    "-"
                  )}
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CalendarApplicationScheduleTable;
