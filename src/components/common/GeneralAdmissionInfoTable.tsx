
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { generalAdmissionInfo } from "@/lib/data/schedules/general";
import ExternalLink from "./ExternalLink";
import { Badge } from "@/components/ui/badge";

interface GeneralAdmissionInfoTableProps {
  searchTerm: string;
}

const GeneralAdmissionInfoTable = ({
  searchTerm,
}: GeneralAdmissionInfoTableProps) => {
  const filteredInfo = generalAdmissionInfo.filter((info) =>
    info.university.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="w-full border border-border bg-card rounded-2xl shadow-lg overflow-x-auto">
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-card">
          <TableRow>
            <TableHead className="w-[15%] font-bold bg-primary text-primary-foreground text-center rounded-tl-2xl">
              বিশ্ববিদ্যালয়
            </TableHead>
            <TableHead className="w-[15%] font-bold bg-primary text-primary-foreground text-center">
              তারিখ
            </TableHead>
            <TableHead className="w-[25%] font-bold bg-primary text-primary-foreground text-center">
              মানবন্টন
            </TableHead>
            <TableHead className="w-[15%] font-bold bg-primary text-primary-foreground text-center">
              সিলেবাস
            </TableHead>
            <TableHead className="w-[15%] font-bold bg-primary text-primary-foreground text-center">
              সেকেন্ড টাইম
            </TableHead>
            <TableHead className="w-[15%] font-bold bg-primary text-primary-foreground text-center rounded-tr-2xl">
              নেগেটিভ মার্কিং
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInfo.map((info, index) => (
            <TableRow key={index} className="even:bg-muted/50">
              <TableCell className="font-medium align-top whitespace-pre-wrap">
                <div className="font-bold text-center">{info.university}</div>
                <div className="flex gap-2 mt-1 flex-wrap justify-center">
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
                className="align-top whitespace-pre-wrap text-center"
                dangerouslySetInnerHTML={{ __html: info.date }}
              ></TableCell>
              <TableCell
                className="align-top whitespace-pre-wrap cell-content text-center"
                dangerouslySetInnerHTML={{ __html: info.marksDistribution }}
              ></TableCell>
              <TableCell className="align-top whitespace-pre-wrap text-center">
                {info.syllabus}
              </TableCell>
              <TableCell className="align-top whitespace-pre-wrap text-center">
                {info.secondTime}
              </TableCell>
              <TableCell className="align-top whitespace-pre-wrap text-center">
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
