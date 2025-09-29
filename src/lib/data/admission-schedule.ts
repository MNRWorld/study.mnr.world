import scheduleData from "./admission-schedule.json";

export interface AdmissionScheduleItem {
  subject: string;
  date: string;
  status: string;
}

export const admissionSchedule: AdmissionScheduleItem[] = scheduleData;
