"use client";

import React, { useState, useEffect } from "react";
import { allData } from "@/lib/data/_generated";
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
import { Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const toBengaliNumber = (num: number | string) => {
  const bengaliNumbers: { [key: string]: string } = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };
  return String(num).replace(/[0-9]/g, (match) => bengaliNumbers[match]);
};

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
    <TableCell className="text-center align-top font-bengali whitespace-nowrap text-xs sm:text-sm">
      <span className="tabular-nums">
        {toBengaliNumber(String(timeLeft.days).padStart(2, "0"))}
      </span>
      <span className="mr-1 hidden sm:inline">দিন</span>
      <span className="mr-1 sm:hidden">দি</span>
      <span className="tabular-nums">
        {toBengaliNumber(String(timeLeft.hours).padStart(2, "0"))}
      </span>
      <span className="mr-1 hidden sm:inline">ঘণ্টা</span>
      <span className="mr-1 sm:hidden">ঘ</span>
      <span className="tabular-nums">
        {toBengaliNumber(String(timeLeft.minutes).padStart(2, "0"))}
      </span>
      <span className="mr-1 hidden sm:inline">মিনিট</span>
      <span className="mr-1 sm:hidden">মি</span>
      <span className="tabular-nums">
        {toBengaliNumber(String(timeLeft.seconds).padStart(2, "0"))}
      </span>
      <span className="hidden sm:inline">সেকেন্ড</span>
      <span className="sm:hidden">সে</span>
    </TableCell>
  );
};

const CalendarAdmissionScheduleTable = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const storedFavorites = localStorage.getItem("admissionFavorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
    setLoading(false);
  }, []);

  const toggleFavorite = (id: string) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];
    localStorage.setItem("admissionFavorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const admissionSchedule = allData.CalendarInfo.filter((item) => {
    const { date, ExamCountdownDate } = item.examDetails;
    return date !== null || ExamCountdownDate !== null;
  }).sort((a, b) => {
    const isAFav = favorites.includes(a.id);
    const isBFav = favorites.includes(b.id);

    if (isAFav && !isBFav) return -1;
    if (!isAFav && isBFav) return 1;

    const dateA = a.examDetails.ExamCountdownDate
      ? new Date(a.examDetails.ExamCountdownDate).getTime()
      : 0;
    const dateB = b.examDetails.ExamCountdownDate
      ? new Date(b.examDetails.ExamCountdownDate).getTime()
      : 0;

    const now = new Date().getTime();
    const completedA = dateA > 0 && dateA < now;
    const completedB = dateB > 0 && dateB < now;

    if (completedA && !completedB) return 1;
    if (!completedA && completedB) return -1;
    if (completedA && completedB) return dateA - dateB;

    if (dateA === 0) return 1;
    if (dateB === 0) return -1;

    return dateA - dateB;
  });

  if (loading) {
    return (
      <div className="mt-4 text-center">
        আপনার পছন্দের পরীক্ষার তথ্য লোড হচ্ছে...
      </div>
    );
  }

  return (
    <div className="mt-4 w-full border border-border bg-card rounded-2xl shadow-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="sticky top-[66px] sm:top-[66px] z-10 bg-primary text-primary-foreground text-center font-bold rounded-tl-2xl"></TableHead>
            <TableHead className="sticky top-[66px] sm:top-[66px] z-10 bg-primary text-primary-foreground text-center font-bold truncate">
              ভার্সিটি
            </TableHead>
            <TableHead className="sticky top-[66px] sm:top-[66px] z-10 bg-primary text-primary-foreground text-center font-bold truncate">
              তারিখ
            </TableHead>
            <TableHead className="sticky top-[66px] sm:top-[66px] z-10 bg-primary text-primary-foreground text-center font-bold rounded-tr-2xl">
              সময় বাকি
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {admissionSchedule.map((item) => (
            <TableRow
              key={item.id}
              className={cn(
                "even:bg-muted/50",
                favorites.includes(item.id) &&
                  "bg-primary/10 dark:bg-primary/20",
              )}
            >
              <TableCell className="align-top text-center">
                <Heart
                  className={cn(
                    "h-5 w-5 cursor-pointer text-muted-foreground/50 transition-all hover:scale-125",
                    favorites.includes(item.id) && "text-primary fill-primary",
                  )}
                  onClick={() => toggleFavorite(item.id)}
                />
              </TableCell>
              <TableCell className="text-center font-bold whitespace-nowrap align-top truncate">
                {item.universityNameAndUnit}
              </TableCell>
              <TableCell className="text-center whitespace-nowrap align-top truncate">
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
