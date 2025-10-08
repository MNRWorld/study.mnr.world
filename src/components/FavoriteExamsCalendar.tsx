
"use client";

import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { allData } from "@/lib/data/_generated";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import dayjs from "dayjs";
import "dayjs/locale/bn";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import type { DayContentProps } from "react-day-picker";
import { format } from "date-fns";
import { bn } from "date-fns/locale";

dayjs.extend(LocalizedFormat);
dayjs.locale("bn");

const formatDay = (day: Date) => dayjs(day).format("D");
const formatMonthCaption = (month: Date) => dayjs(month).format("MMMM YYYY");
const formatWeekdayName = (weekday: Date) => dayjs(weekday).format("dd");

const FavoriteExamsCalendar = () => {
  const [favoriteDates, setFavoriteDates] = useState<{
    [key: string]: string[];
  }>({});
  const [modifiers, setModifiers] = useState({});
  const [month, setMonth] = useState<Date>(new Date());
  const [numberOfMonths, setNumberOfMonths] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNumberOfMonths(3);
      } else if (window.innerWidth >= 768) {
        setNumberOfMonths(2);
      } else {
        setNumberOfMonths(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("admissionFavorites");
    if (storedFavorites) {
      const favoriteIds: string[] = JSON.parse(storedFavorites);
      const dates: { [key: string]: string[] } = {};

      const favoriteEvents = allData.CalendarInfo.filter(
        (item) =>
          favoriteIds.includes(item.id) && item.examDetails.ExamCountdownDate,
      ).map((item) => ({
        date: dayjs(item.examDetails.ExamCountdownDate!),
        title: item.universityNameAndUnit,
      }));

      favoriteEvents.forEach((event) => {
        if (event.date.isValid()) {
          const dateString = event.date.format("YYYY-MM-DD");
          if (!dates[dateString]) {
            dates[dateString] = [];
          }
          dates[dateString].push(event.title);
        }
      });

      setFavoriteDates(dates);

      if (favoriteEvents.length > 0 && favoriteEvents[0].date.isValid()) {
        setMonth(favoriteEvents[0].date.toDate());
      }
    }
  }, []);

  useEffect(() => {
    const highlightedDates = Object.keys(favoriteDates).map((dateStr) =>
      dayjs(dateStr).toDate(),
    );
    setModifiers({
      highlighted: highlightedDates,
    });
  }, [favoriteDates]);

  const DayWithTooltip = (props: DayContentProps) => {
    const day = props.date;
    if (!dayjs(day).isValid()) {
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
              <div className="relative flex h-full w-full items-center justify-center">
                {dayjs(day).format("D")}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <div className="font-bengali">
                {titles.map((title, i) => (
                  <p key={i}>{title}</p>
                ))}
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }
    return <div>{dayjs(day).format("D")}</div>;
  };

  return (
    <div className="mt-4 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative flex justify-center">
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
      />
    </div>
  );
};

export default FavoriteExamsCalendar;

