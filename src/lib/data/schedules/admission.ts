import { allData } from "../_generated";

export interface AdmissionScheduleItem {
  subject: string;
  date: string;
  status: string;
}

export const admissionSchedule: AdmissionScheduleItem[] =
  allData.schedulesAdmission;
