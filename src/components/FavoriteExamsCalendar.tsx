"use client";

import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import calendarInfo from "@/lib/data/CalendarInfo.json";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { format, isValid } from "date-fns";
import { bn } from "date-fns/locale";
import type { DayContentProps } from "react-day-picker";

const FavoriteExamsCalendar = () => {
  const [favoriteDates, setFavoriteDates] = useState<{ [key: string]: string[] }>({});
  const [modifiers, setModifiers] = useState({});
  const [month, setMonth] = useState<Date>(new Date());

  useEffect(() => {
    const storedFavorites = localStorage.getItem("admissionFavorites");
    if (storedFavorites) {
      const favoriteIds: string[] = JSON.parse(storedFavorites);
      const dates: { [key: string]: string[] } = {};
      
      const favoriteEvents = calendarInfo
        .filter(item => favoriteIds.includes(item.id) && item.examDetails.ExamCountdownDate)
        .map(item => ({
          date: new Date(item.examDetails.ExamCountdownDate!),
          title: item.universityNameAndUnit,
        }));

      favoriteEvents.forEach(event => {
        if (isValid(event.date)) {
          const dateString = format(event.date, "yyyy-MM-dd");
          if (!dates[dateString]) {
            dates[dateString] = [];
          }
          dates[dateString].push(event.title);
        }
      });

      setFavoriteDates(dates);

      if (favoriteEvents.length > 0 && isValid(favoriteEvents[0].date)) {
        setMonth(favoriteEvents[0].date);
      }
    }
  }, []);

  useEffect(() => {
    const highlightedDates = Object.keys(favoriteDates).map(dateStr => new Date(dateStr));
    setModifiers({
      highlighted: highlightedDates,
    });
  }, [favoriteDates]);

  const DayWithTooltip = (props: DayContentProps) => {
    const day = props.date;
    if (!isValid(day)) {
      return <div />;
    }
    const dateString = format(day, "yyyy-MM-dd");
    const titles = favoriteDates[dateString];
    
    if (titles && modifiers.highlighted?.some((d: Date) => d.toDateString() === day.toDateString())) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="relative flex h-full w-full items-center justify-center">
                {format(day, "d")}
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
    return <div>{format(day, "d")}</div>;
  };

  return (
    <div className="mt-4 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative flex justify-center">
      <Calendar
        locale={bn}
        mode="single"
        month={month}
        onMonthChange={setMonth}
        modifiers={modifiers}
        modifiersClassNames={{
          highlighted: "bg-primary/20 rounded-md",
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
