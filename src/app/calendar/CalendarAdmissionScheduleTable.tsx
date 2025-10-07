
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
import { useCountdown } from "@/hooks/useCountdown";
import { cn } from "@/lib/utils";

const CountdownCell = ({ targetDate }: { targetDate: string | null }) => {
  const timeLeft = useCountdown(targetDate);

  if (timeLeft.completed) {
    return (
      <TableCell className="text-center align-top text-red-500 dark:text-red-400 whitespace-nowrap">
        পরীক্ষা হয়ে গেছে
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

const CalendarAdmissionScheduleTable = () => {
  const admissionSchedule = calendarInfo
    .filter((item) => item.id !== "demo")
    .sort((a, b) => {
      const dateA = a.examDetails.ExamCountdownDate
        ? new Date(a.examDetails.ExamCountdownDate).getTime()
        : 0;
      const dateB = b.examDetails.ExamCountdownDate
        ? new Date(b.examDetails.ExamCountdownDate).getTime()
        : 0;

      // Handle completed exams, push them to the bottom
      const now = new Date().getTime();
      const completedA = dateA > 0 && dateA < now;
      const completedB = dateB > 0 && dateB < now;

      if (completedA && !completedB) return 1;
      if (!completedA && completedB) return -1;
      if (completedA && completedB) return dateA - dateB; // Sort past exams by date

      // Handle future exams
      if (dateA === 0) return 1; // Put items without date at the end
      if (dateB === 0) return -1;

      return dateA - dateB;
    });

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
              <TableCell className="text-center font-bold whitespace-nowrap align-top">
                {item.universityNameAndUnit}
              </TableCell>
              <TableCell className="text-center whitespace-nowrap align-top">
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
