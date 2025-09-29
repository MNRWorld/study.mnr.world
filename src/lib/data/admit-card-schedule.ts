
import scheduleData from "./admit-card-schedule.json";

export interface AdmitCardScheduleItem {
  university: string;
  date: string;
  link: string;
}

export const admitCardSchedule: AdmitCardScheduleItem[] = scheduleData;
