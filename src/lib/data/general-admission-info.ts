import infoData from "./general-admission-info.json";

export interface GeneralAdmissionInfo {
  university: string;
  circularLink?: string;
  questionBankLink?: string;
  date: string;
  marksDistribution: string;
  syllabus: string;
  secondTime: string;
  negativeMarking: string;
}

export const generalAdmissionInfo: GeneralAdmissionInfo[] = infoData;
