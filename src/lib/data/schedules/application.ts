import scheduleData from "./application.json";

export interface ApplicationScheduleItem {
  university: string;
  detailsLink: string | null;
  detailsLinkText?: string;
  date: string;
  status: string;
  fee: string;
  applyLink: string | null;
}

export const applicationSchedule: ApplicationScheduleItem[] = scheduleData;
