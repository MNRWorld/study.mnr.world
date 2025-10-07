"use client";

import { applicationSchedule } from "@/lib/data/schedules/application";
import ExternalLink from "@/components/common/ExternalLink";

const CalendarApplicationScheduleTable = () => {
  return (
    <div className="mt-4 w-full space-y-4">
      {/* Header for larger screens */}
      <div className="hidden md:grid grid-cols-5 gap-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-bold text-center sticky top-[66px] sm:top-[72px] z-10">
        <div>ভার্সিটি</div>
        <div>তারিখ</div>
        <div>সময়</div>
        <div>ফি</div>
        <div>লিংক</div>
      </div>

      {/* Card-based list for all screens */}
      {applicationSchedule.map((item, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-lg p-0 shadow-sm md:grid md:grid-cols-5 md:gap-4 md:items-start md:p-4"
        >
          {/* Mobile view with labels */}
          <div className="md:hidden p-4 border-l-4 border-primary rounded-l-lg space-y-3">
            <div className="flex justify-between items-start pb-2 border-b border-border/50">
              <span className="font-semibold text-muted-foreground">
                ভার্সিটি:
              </span>
              <div className="text-right">
                <span className="font-medium">{item.university}</span>
                {item.detailsLink && (
                  <div className="mt-1">
                    <ExternalLink
                      href={item.detailsLink}
                      text={item.detailsLinkText || "[বিস্তারিত]"}
                      className="text-xs"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between items-start pb-2 border-b border-border/50">
              <span className="font-semibold text-muted-foreground">
                তারিখ:
              </span>
              <span
                className="text-right"
                dangerouslySetInnerHTML={{ __html: item.date }}
              ></span>
            </div>
            <div className="flex justify-between items-start pb-2 border-b border-border/50">
              <span className="font-semibold text-muted-foreground">
                সময়:
              </span>
              <span
                className={`text-right font-semibold ${
                  item.status.includes("স্থগিত")
                    ? "text-yellow-500 dark:text-yellow-400"
                    : item.status.includes("শেষ")
                      ? "text-red-500 dark:text-red-400"
                      : "text-green-500 dark:text-green-400"
                }`}
              >
                {item.status}
              </span>
            </div>
            <div className="flex justify-between items-start pb-2 border-b border-border/50">
              <span className="font-semibold text-muted-foreground">ফি:</span>
              <span
                className="text-right"
                dangerouslySetInnerHTML={{ __html: item.fee }}
              ></span>
            </div>
            <div className="flex justify-between items-start">
              <span className="font-semibold text-muted-foreground">লিংক:</span>
              <span className="text-right">
                {item.applyLink ? (
                  <ExternalLink href={item.applyLink} text="[আবেদন করুন]" />
                ) : (
                  "N/A"
                )}
              </span>
            </div>
          </div>

          {/* Desktop view (grid layout) */}
          <div className="hidden md:block text-center font-medium">
            <div className="font-bold">{item.university}</div>
            {item.detailsLink && (
              <div className="mt-1">
                <ExternalLink
                  href={item.detailsLink}
                  text={item.detailsLinkText || "[বিস্তারিত]"}
                  className="text-xs"
                />
              </div>
            )}
          </div>
          <div
            className="hidden md:block text-center whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: item.date }}
          ></div>
          <div
            className={`hidden md:block text-center font-semibold whitespace-pre-wrap ${
              item.status.includes("স্থগিত")
                ? "text-yellow-500 dark:text-yellow-400"
                : item.status.includes("শেষ")
                  ? "text-red-500 dark:text-red-400"
                  : "text-green-500 dark:text-green-400"
            }`}
          >
            {item.status}
          </div>
          <div
            className="hidden md:block text-center whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: item.fee }}
          ></div>
          <div className="hidden md:block text-center">
            {item.applyLink && (
              <ExternalLink href={item.applyLink} text="[আবেদন করুন]" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarApplicationScheduleTable;
