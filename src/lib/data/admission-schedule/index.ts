import scheduleData from "./list.json";

export interface AdmissionScheduleItem {
  subject: string;
  date: string;
  status: string;
}

export const admissionSchedule: AdmissionScheduleItem[] = scheduleData;
