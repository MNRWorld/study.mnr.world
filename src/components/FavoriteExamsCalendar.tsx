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
import { useUser, useSupabase } from "@/lib/supabase/hooks";
import dayjs from "dayjs";
import "dayjs/locale/bn";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);
dayjs.locale("bn");

const formatDay = (day: Date) => dayjs(day).format("D");
const formatMonthCaption = (month: Date) => dayjs(month).format("MMMM YYYY");
const formatWeekdayName = (weekday: Date) => dayjs(weekday).format("ddd");

const FavoriteExamsCalendar = () => {
  const { user } = useUser();
  const supabase = useSupabase();
  const [favoriteDates, setFavoriteDates] = useState<{
    [key: string]: string[];
  }>({});
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [modifiers, setModifiers] = useState({});
  const [month, setMonth] = useState<Date>(new Date());

  const fetchFavorites = useCallback(async () => {
    if (user && !user.is_anonymous) {
      if (!supabase) return;
      const { data, error } = await supabase
        .from("user_favorite_exams")
        .select("exam_id")
        .eq("user_id", user.id);

      if (error) {
        // RLS policy handles security, so no need to toast error here
      } else {
        setFavoriteIds(data.map((fav) => fav.exam_id));
      }
    } else {
      // Handle guest or non-logged-in users
      const storedFavorites = localStorage.getItem("admissionFavorites");
      if (storedFavorites) {
        setFavoriteIds(JSON.parse(storedFavorites));
      }
    }
  }, [user, supabase]);

  useEffect(() => {
    fetchFavorites();
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
        const dateString = dayjs(event.date).format("YYYY-MM-DD");
        if (!dates[dateString]) {
          dates[dateString] = [];
        }
        dates[dateString].push(event.title);
      }
    });

    setFavoriteDates(dates);

    const highlightedDates = Object.keys(dates).map(
      (dateStr) => new Date(dateStr + "T00:00:00"),
    );
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
    const dateString = dayjs(day).format("YYYY-MM-DD");
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
    <Calendar
      locale={dayjs.locale("bn") as any}
      mode="single"
      month={month}
      onMonthChange={setMonth}
      numberOfMonths={1}
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
      className="p-0 flex justify-center"
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        cell: "h-10 w-10 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: "h-10 w-10 p-0",
        head_cell:
          "text-muted-foreground rounded-md w-10 font-normal text-[0.8rem]",
      }}
    />
  );
};

export default FavoriteExamsCalendar;
