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
    <div className="mt-4 w-full border border-border bg-card rounded-2xl shadow-lg relative">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center w-1/3 font-bold bg-muted text-foreground">বিশ্ববিদ্যালয়</TableHead>
            <TableHead className="text-center w-1/3 font-bold bg-muted text-foreground">তারিখ</TableHead>
            <TableHead className="text-center w-1/3 font-bold bg-muted text-foreground">লিংক</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {admitCardSchedule.map((item, index) => (
            <TableRow key={index}>
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
