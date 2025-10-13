"use client";

import React, { useState, useMemo } from "react";
import { allData } from "@/lib/data/_generated";
import ExternalLink from "@/components/common/ExternalLink";
import { useCountdown } from "@/hooks/useCountdown";
import SharedScheduleTable from "@/components/common/SharedScheduleTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CountdownDisplay = ({ targetDate }: { targetDate: string | null }) => {
  const timeLeft = useCountdown(targetDate);

  if (!targetDate) {
    return <span className="text-xs text-muted-foreground">-</span>;
  }

  if (timeLeft.completed) {
    return (
      <span className="text-xs font-bold text-red-500 dark:text-red-400">
        সময় শেষ
      </span>
    );
  }

  return (
    <div className="font-mono text-xs text-foreground">
      <span>{String(timeLeft.days).padStart(2, "0")}</span>
      <span className="font-bengali">d </span>
      <span>{String(timeLeft.hours).padStart(2, "0")}</span>
      <span className="font-bengali">h </span>
      <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
      <span className="font-bengali">m </span>
      <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
      <span className="font-bengali">s</span>
    </div>
  );
};

const CalendarApplicationScheduleTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const sortedSchedule = useMemo(() => {
    const filteredData = allData.schedulesApplication.filter((item) =>
      item.university.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return [...filteredData].sort((a, b) => {
      const dateA = a.applyCountdownDate
        ? new Date(a.applyCountdownDate).getTime()
        : 0;
      const dateB = b.applyCountdownDate
        ? new Date(b.applyCountdownDate).getTime()
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
  }, [searchTerm]);

  const columns = [
    {
      header: "ভার্সিটি",
      className: "w-1/3",
      accessor: (item: any) => (
        <div>
          <p className="font-bold">{item.university}</p>
          {item.detailsLink && (
            <p className="text-xs mt-1">
              <ExternalLink
                href={item.detailsLink}
                text={item.detailsLinkText || "[বিস্তারিত]"}
              />
            </p>
          )}
        </div>
      ),
    },
    {
      header: "সময়কাল ও কাউন্টডাউন",
      className: "w-1/3",
      accessor: (item: any) => (
        <div>
          <div dangerouslySetInnerHTML={{ __html: item.date }} />
          <CountdownDisplay targetDate={item.applyCountdownDate} />
        </div>
      ),
    },
    {
      header: "ফি ও আবেদন",
      className: "w-1/3",
      accessor: (item: any) => (
        <div>
          <div dangerouslySetInnerHTML={{ __html: item.fee }} />
          {item.applyLink && (
            <Button asChild size="sm" className="mt-2 text-xs h-7">
              <ExternalLink href={item.applyLink} text="আবেদন করুন" />
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="relative my-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="বিশ্ববিদ্যালয় খুঁজুন..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 h-12 text-base bg-card border"
        />
      </div>
      <SharedScheduleTable data={sortedSchedule} columns={columns} />
    </>
  );
};

export default CalendarApplicationScheduleTable;
