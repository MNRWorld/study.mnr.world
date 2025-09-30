import scheduleData from "./result.json";

export interface ResultScheduleItem {
  university: string;
  date: string;
  link: string;
}

interface ResultScheduleData {
  hsc24: ResultScheduleItem[];
  hsc23: ResultScheduleItem[];
}

export const resultSchedule: ResultScheduleData = scheduleData;
