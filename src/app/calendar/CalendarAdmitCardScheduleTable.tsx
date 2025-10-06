"use client";

import { admitCardSchedule } from "@/lib/data/schedules/admit-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ExternalLink from "@/components/common/ExternalLink";
import { Ticket } from "lucide-react";

const CalendarAdmitCardScheduleTable = () => {
  return (
    <div className="mt-4 w-full border border-border bg-card rounded-2xl shadow-lg overflow-x-auto">
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-card">
          <TableRow>
            <TableHead className="text-center w-1/3 font-bold bg-primary text-primary-foreground rounded-tl-2xl">বিশ্ববিদ্যালয়</TableHead>
            <TableHead className="text-center w-1/3 font-bold bg-primary text-primary-foreground">তারিখ</TableHead>
            <TableHead className="text-center w-1/3 font-bold bg-primary text-primary-foreground rounded-tr-2xl">লিংক</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {admitCardSchedule.map((item, index) => (
            <TableRow key={index} className="even:bg-muted/50">
              <TableCell className="text-center font-medium whitespace-pre-wrap">
                {item.university}
              </TableCell>
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
  );
};

export default CalendarAdmitCardScheduleTable;
