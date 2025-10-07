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
import { format } from "date-fns";
import { bn } from "date-fns/locale";

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
        const dateString = format(event.date, "yyyy-MM-dd");
        if (!dates[dateString]) {
          dates[dateString] = [];
        }
        dates[dateString].push(event.title);
      });

      setFavoriteDates(dates);

      if (favoriteEvents.length > 0) {
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

  const DayWithTooltip = (day: Date, modifiers: any) => {
    const dateString = format(day, "yyyy-MM-dd");
    const titles = favoriteDates[dateString];
    
    if (titles && modifiers.highlighted) {
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
    return format(day, "d");
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
