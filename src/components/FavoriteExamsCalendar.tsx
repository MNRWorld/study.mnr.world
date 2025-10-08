
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Calendar } from "@/components/ui/calendar";
import { allData } from "@/lib/data/_generated";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { DayContentProps } from "react-day-picker";
import { format } from "date-fns";
import { bn } from "date-fns/locale";
import { useUser, useSupabase } from "@/lib/supabase/hooks";

const formatDay = (day: Date) => format(day, "d", { locale: bn });
const formatMonthCaption = (month: Date) =>
  format(month, "MMMM yyyy", { locale: bn });
const formatWeekdayName = (weekday: Date) =>
  format(weekday, "eee", { locale: bn });

const FavoriteExamsCalendar = () => {
  const { user } = useUser();
  const supabase = useSupabase();
  const [favoriteDates, setFavoriteDates] = useState<{
    [key: string]: string[];
  }>({});
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [modifiers, setModifiers] = useState({});
  const [month, setMonth] = useState<Date>(new Date());
  const [numberOfMonths, setNumberOfMonths] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNumberOfMonths(2);
      } else {
        setNumberOfMonths(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchFavorites = useCallback(async () => {
    if (!user || !supabase) return;

    const { data, error } = await supabase
      .from("user_favorite_exams")
      .select("exam_id")
      .eq("user_id", user.id);

    if (error) {
      // Error is handled by RLS and toasts, no need for console.error
    } else {
      setFavoriteIds(data.map((fav) => fav.exam_id));
    }
  }, [user, supabase]);

  useEffect(() => {
    if (user) {
      fetchFavorites();
    } else {
      const storedFavorites = localStorage.getItem("admissionFavorites");
      if (storedFavorites) {
        setFavoriteIds(JSON.parse(storedFavorites));
      }
    }
  }, [user, fetchFavorites]);

  useEffect(() => {
    const dates: { [key: string]: string[] } = {};

    const favoriteEvents = allData.CalendarInfo.filter(
      (item) =>
        favoriteIds.includes(item.id) && item.examDetails.ExamCountdownDate,
    ).map((item) => ({
      date: new Date(item.examDetails.ExamCountdownDate!),
      title: item.universityNameAndUnit,
    }));

    favoriteEvents.forEach((event) => {
      if (!isNaN(event.date.getTime())) {
        const dateString = format(event.date, "yyyy-MM-dd");
        if (!dates[dateString]) {
          dates[dateString] = [];
        }
        dates[dateString].push(event.title);
      }
    });

    setFavoriteDates(dates);

    const highlightedDates = Object.keys(dates).map(
      (dateStr) => new Date(dateStr + "T00:00:00"),
    ); // Avoid timezone issues
    setModifiers({
      highlighted: highlightedDates,
    });

    if (favoriteEvents.length > 0 && !isNaN(favoriteEvents[0].date.getTime())) {
      setMonth(favoriteEvents[0].date);
    }
  }, [favoriteIds]);

  const DayWithTooltip = (props: DayContentProps) => {
    const day = props.date;
    if (isNaN(day.getTime())) {
      return <div />;
    }
    const dateString = format(day, "yyyy-MM-dd");
    const titles = favoriteDates[dateString];

    if (
      titles &&
      (modifiers as any).highlighted?.some(
        (d: Date) => d.toDateString() === day.toDateString(),
      )
    ) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="relative flex flex-col h-full w-full items-center justify-center">
                <span>{formatDay(day)}</span>
                {titles.length === 1 ? (
                  <span className="text-[8px] leading-tight truncate w-full px-1 absolute bottom-1">
                    {titles[0]}
                  </span>
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary absolute bottom-1.5"></span>
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <div className="font-bengali text-sm">
                {titles.map((title, i) => (
                  <p key={i}>{title}</p>
                ))}
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }
    return <div>{formatDay(day)}</div>;
  };

  return (
    <div className="flex justify-center">
      <Calendar
        locale={bn}
        mode="single"
        month={month}
        onMonthChange={setMonth}
        numberOfMonths={numberOfMonths}
        modifiers={modifiers}
        modifiersClassNames={{
          highlighted: "bg-primary/20 rounded-md",
        }}
        formatters={{
          formatDay,
          formatMonthCaption,
          formatWeekdayName,
        }}
        components={{
          DayContent: DayWithTooltip,
        }}
        className="p-0"
        classNames={{
          cell: "h-12 w-12 sm:h-14 sm:w-14 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: "h-12 w-12 sm:h-14 sm:w-14 p-0",
        }}
      />
    </div>
  );
};

export default FavoriteExamsCalendar;
