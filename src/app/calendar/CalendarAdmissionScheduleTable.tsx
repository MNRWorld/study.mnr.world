
"use client";

import React, { useState, useEffect, useCallback } from "react";
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
import { useUser, useSupabase } from "@/lib/supabase/hooks";
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
    <TableCell className="text-center align-top font-bengali whitespace-nowrap">
      <span>{toBengaliNumber(String(timeLeft.days).padStart(2, "0"))}</span>
      <span className="mr-1 hidden sm:inline">দিন</span>
      <span className="mr-1 sm:hidden">দি</span>
      <span>{toBengaliNumber(String(timeLeft.hours).padStart(2, "0"))}</span>
      <span className="mr-1 hidden sm:inline">ঘণ্টা</span>
      <span className="mr-1 sm:hidden">ঘ</span>
      <span>{toBengaliNumber(String(timeLeft.minutes).padStart(2, "0"))}</span>
      <span className="mr-1 hidden sm:inline">মিনিট</span>
      <span className="mr-1 sm:hidden">মি</span>
      <span>{toBengaliNumber(String(timeLeft.seconds).padStart(2, "0"))}</span>
      <span className="hidden sm:inline">সেকেন্ড</span>
      <span className="sm:hidden">সে</span>
    </TableCell>
  );
};

const CalendarAdmissionScheduleTable = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const { user } = useUser();
  const supabase = useSupabase();
  const { toast } = useToast();

  const fetchFavorites = useCallback(async () => {
    if (!user || !supabase || user.is_anonymous) return;

    const { data, error } = await supabase
      .from("user_favorite_exams")
      .select("exam_id")
      .eq("user_id", user.id);

    if (error) {
      // RLS policy handles security, so no need to toast error here
    } else {
      setFavorites(data.map((fav) => fav.exam_id));
    }
  }, [user, supabase]);

  useEffect(() => {
    if (user && !user.is_anonymous) {
      fetchFavorites();
    } else {
      const storedFavorites = localStorage.getItem("admissionFavorites");
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    }
  }, [user, fetchFavorites]);

  const toggleFavorite = async (id: string) => {
    // Handle guest or non-logged-in users with localStorage
    if (!user || user.is_anonymous) {
      const newFavorites = favorites.includes(id)
        ? favorites.filter((favId) => favId !== id)
        : [...favorites, id];
      localStorage.setItem("admissionFavorites", JSON.stringify(newFavorites));
      setFavorites(newFavorites);
      return;
    }

    // Handle registered users with Supabase
    if (!supabase) return;

    const isFavorite = favorites.includes(id);

    if (isFavorite) {
      // Remove from favorites
      const { error } = await supabase
        .from("user_favorite_exams")
        .delete()
        .match({ user_id: user.id, exam_id: id });

      if (error) {
        toast({
          variant: "destructive",
          title: "ত্রুটি",
          description: "পছন্দের তালিকা থেকে সরাতে সমস্যা হয়েছে।",
        });
      } else {
        setFavorites((prev) => prev.filter((favId) => favId !== id));
      }
    } else {
      // Add to favorites
      const { error } = await supabase
        .from("user_favorite_exams")
        .insert([{ user_id: user.id, exam_id: id }]);

      if (error) {
        toast({
          variant: "destructive",
          title: "ত্রুটি",
          description: "পছন্দের তালিকায় যোগ করতে সমস্যা হয়েছে।",
        });
      } else {
        setFavorites((prev) => [...prev, id]);
      }
    }
  };

  const admissionSchedule = allData.CalendarInfo.filter(
    (item) => item.id !== "demo",
  ).sort((a, b) => {
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
