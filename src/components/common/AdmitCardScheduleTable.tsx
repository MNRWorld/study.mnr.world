
"use client";

import { admitCardSchedule } from "@/lib/data/admit-card-schedule";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ExternalLink from "./ExternalLink";
import { Ticket } from "lucide-react";

const AdmitCardScheduleTable = () => {
  return (
    <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
      <div className="flex justify-center">
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">
          <Ticket className="inline-block mr-2" />
          প্রবেশপত্র ডাউনলোডের সময়সূচী
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">বিশ্ববিদ্যালয়</TableHead>
            <TableHead className="text-center">তারিখ</TableHead>
            <TableHead className="text-center">লিংক</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {admitCardSchedule.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="text-center font-medium">
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

export default AdmitCardScheduleTable;
