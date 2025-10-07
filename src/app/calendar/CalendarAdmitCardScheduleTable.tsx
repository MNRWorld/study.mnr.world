"use client";

import calendarInfo from "@/lib/data/CalendarInfo.json";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ExternalLink from "@/components/common/ExternalLink";

const CalendarAdmitCardScheduleTable = () => {
  const admitCardSchedule = calendarInfo.filter(
    (item) => item.id !== "demo" && item.admitCardDetails.StartAndEndDate,
  );

  return (
    <div className="mt-4 w-full border border-border bg-card rounded-2xl shadow-lg">
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
          {admitCardSchedule.map((item, index) => (
            <TableRow key={index} className="even:bg-muted/50">
              <TableCell className="text-center font-medium whitespace-pre-wrap align-top">
                {item.universityNameAndUnit}
              </TableCell>
              <TableCell
                className="text-center whitespace-pre-wrap align-top"
                dangerouslySetInnerHTML={{
                  __html: item.admitCardDetails.StartAndEndDate || "",
                }}
              ></TableCell>
              <TableCell className="text-center align-top">
                {item.admitCardDetails.link && (
                  <ExternalLink
                    href={item.admitCardDetails.link}
                    text="[লিংক]"
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CalendarAdmitCardScheduleTable;
