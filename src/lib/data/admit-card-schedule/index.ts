import scheduleData from "./list.json";

export interface AdmitCardScheduleItem {
  university: string;
  date: string;
  link: string;
}

export const admitCardSchedule: AdmitCardScheduleItem[] = scheduleData;
