
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
import { useCountdown, formatCountdown, getStatusColor } from "@/hooks/useCountdown";

const CountdownCell = ({ targetDate }: { targetDate: string | null }) => {
  const timeLeft = useCountdown(targetDate);
  const countdownText = formatCountdown(timeLeft);
  const colorClass = getStatusColor(timeLeft);

  return (
    <TableCell
      className={`text-center whitespace-pre-wrap align-top ${colorClass}`}
    >
      {countdownText}
    </TableCell>
  );
};

const CalendarAdmissionScheduleTable = () => {
  const admissionSchedule = calendarInfo.filter((item) => item.id !== "demo");

  return (
    <div className="mt-4 w-full border border-border bg-card rounded-2xl shadow-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="sticky top-[66px] sm:top-[66px] z-10 bg-primary text-primary-foreground text-center w-1/3 font-bold rounded-tl-2xl">
              ভার্সিটি
            </TableHead>
            <TableHead className="sticky top-[66px] sm:top-[66px] z-10 bg-primary text-primary-foreground text-center w-1/3 font-bold">
              তারিখ
            </TableHead>
            <TableHead className="sticky top-[66px] sm:top-[66px] z-10 bg-primary text-primary-foreground text-center w-1/3 font-bold rounded-tr-2xl">
              সময় বাকি
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {admissionSchedule.map((item) => (
            <TableRow key={item.id} className="even:bg-muted/50">
              <TableCell className="text-center font-bold whitespace-pre-wrap align-top">
                {item.universityNameAndUnit}
              </TableCell>
              <TableCell className="text-center whitespace-pre-wrap align-top">
                {item.examDetails.date}
              </TableCell>
              <CountdownCell targetDate={item.examDetails.ExamCountdownDate} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CalendarAdmissionScheduleTable;
