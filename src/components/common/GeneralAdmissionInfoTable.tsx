"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { generalAdmissionInfo } from "@/lib/data/general-admission-info";
import ExternalLink from "./ExternalLink";
import { Badge } from "@/components/ui/badge";

const GeneralAdmissionInfoTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full text-xs sm:text-sm">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">বিশ্ববিদ্যালয়</TableHead>
            <TableHead className="w-[150px]">তারিখ</TableHead>
            <TableHead className="w-[200px]">মানবন্টন</TableHead>
            <TableHead>সিলেবাস</TableHead>
            <TableHead>সেকেন্ড টাইম</TableHead>
            <TableHead>নেগেটিভ মার্কিং</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {generalAdmissionInfo.map((info, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium align-top">
                <div className="font-bold">{info.university}</div>
                <div className="flex gap-2 mt-1">
                  {info.circularLink && (
                    <Badge variant="outline" asChild>
                      <ExternalLink href={info.circularLink}>
                        সার্কুলার
                      </ExternalLink>
                    </Badge>
                  )}
                  {info.questionBankLink && (
                    <Badge variant="outline" asChild>
                      <ExternalLink href={info.questionBankLink}>
                        প্রশ্নব্যাংক
                      </ExternalLink>
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell
                className="align-top whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: info.date }}
              ></TableCell>
              <TableCell
                className="align-top whitespace-pre-wrap cell-content"
                dangerouslySetInnerHTML={{ __html: info.marksDistribution }}
              ></TableCell>
              <TableCell className="align-top">{info.syllabus}</TableCell>
              <TableCell className="align-top">{info.secondTime}</TableCell>
              <TableCell className="align-top">
                {info.negativeMarking}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default GeneralAdmissionInfoTable;
