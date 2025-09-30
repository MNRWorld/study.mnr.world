import scheduleData from "./admission.json";

export interface AdmissionScheduleItem {
  subject: string;
  date: string;
  status: string;
}

export const admissionSchedule: AdmissionScheduleItem[] = scheduleData;
