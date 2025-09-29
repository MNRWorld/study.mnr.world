
"use client";

import { applicationSchedule } from "@/lib/data/application-schedule";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import ExternalLink from "./ExternalLink";
import { FilePenLine } from "lucide-react";

const ApplicationScheduleTable = () => {
  return (
    <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative overflow-x-auto">
      <div className="flex justify-center">
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-foreground text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">
          <FilePenLine className="inline-block mr-2" />
          আবেদন সংক্রান্ত তথ্য
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">ভার্সিটি</TableHead>
            <TableHead className="text-center">তারিখ</TableHead>
            <TableHead className="text-center">সময় বাকি</TableHead>
            <TableHead className="text-center">ফি</TableHead>
            <TableHead className="text-center">লিংক</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicationSchedule.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="text-center font-medium whitespace-pre-wrap">
                {item.university}
                {item.detailsLink && (
                  <div className="mt-1">
                    <Badge variant="outline" asChild>
                      <ExternalLink
                        href={item.detailsLink}
                        text={item.detailsLinkText || "[বিস্তারিত]"}
                      />
                    </Badge>
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
                    ? "text-yellow-500"
                    : item.status.includes("শেষ")
                      ? "text-red-500"
                      : "text-green-500"
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

export default ApplicationScheduleTable;
