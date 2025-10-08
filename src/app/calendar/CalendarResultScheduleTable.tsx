"use client";

import { allData } from "@/lib/data/_generated";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ExternalLink from "@/components/common/ExternalLink";

const CalendarResultScheduleTable = () => {
  const resultSchedule = allData.CalendarInfo.filter(
    (item) => item.id !== "demo" && item.resultDetails.date,
  );

  return (
    <div className="mt-4 w-full border border-border bg-card rounded-2xl shadow-lg">
      {resultSchedule.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="sticky top-[66px] sm:top-[66px] z-10 text-center w-1/3 font-bold bg-primary text-primary-foreground rounded-tl-2xl">
                বিশ্ববিদ্যালয়
              </TableHead>
              <TableHead className="sticky top-[66px] sm:top-[66px] z-10 text-center w-1/3 font-bold bg-primary text-primary-foreground">
                তারিখ
              </TableHead>
              <TableHead className="sticky top-[66px] sm:top-[66px] z-10 text-center w-1/3 font-bold bg-primary text-primary-foreground rounded-tr-2xl">
                লিংক
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resultSchedule.map((item, index) => (
              <TableRow key={index} className="even:bg-muted/50">
                <TableCell
                  className="text-center font-medium align-top truncate"
                  dangerouslySetInnerHTML={{
                    __html: item.universityNameAndUnit,
                  }}
                ></TableCell>
                <TableCell
                  className="text-center align-top truncate"
                  dangerouslySetInnerHTML={{
                    __html: item.resultDetails.date || "",
                  }}
                ></TableCell>
                <TableCell className="text-center align-top">
                  {item.resultDetails.link && (
                    <ExternalLink
                      href={item.resultDetails.link}
                      text="[লিংক]"
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center p-8 text-muted-foreground">
          কোনো তথ্য পাওয়া যায়নি
        </div>
      )}
    </div>
  );
};

export default CalendarResultScheduleTable;
