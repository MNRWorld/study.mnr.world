"use client";

import { admissionSchedule } from "@/lib/data/schedules/admission";

const CalendarAdmissionScheduleTable = () => {
  return (
    <div className="mt-4 w-full space-y-3">
      {/* Header for larger screens */}
      <div className="hidden md:grid grid-cols-3 gap-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-bold text-center">
        <div>বিষয়</div>
        <div>তারিখ</div>
        <div>সময় باقي</div>
      </div>

      {/* Card-based list for all screens */}
      {admissionSchedule.map((item, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-4 shadow-sm md:grid md:grid-cols-3 md:gap-4 md:items-center">
          
          {/* Mobile view with labels */}
          <div className="md:hidden space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold text-muted-foreground">বিষয়:</span>
              <span className="text-right font-medium">{item.subject}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-muted-foreground">তারিখ:</span>
              <span className="text-right">{item.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-muted-foreground">সময় باقي:</span>
              <span className={`text-right font-semibold ${
                  item.status.includes("স্থগিত")
                    ? "text-yellow-500 dark:text-yellow-400"
                    : item.status.includes("হয়ে গেছে")
                      ? "text-red-500 dark:text-red-400"
                      : "text-green-500 dark:text-green-400"
                }`}>
                {item.status}
              </span>
            </div>
          </div>
          
          {/* Desktop view (grid layout) */}
          <div className="hidden md:block text-center font-medium">{item.subject}</div>
          <div className="hidden md:block text-center">{item.date}</div>
          <div className={`hidden md:block text-center font-semibold ${
              item.status.includes("স্থগিত")
                ? "text-yellow-500 dark:text-yellow-400"
                : item.status.includes("হয়ে গেছে")
                  ? "text-red-500 dark:text-red-400"
                  : "text-green-500 dark:text-green-400"
            }`}>
            {item.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarAdmissionScheduleTable;
