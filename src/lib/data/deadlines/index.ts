import { allData } from "../_generated";

export interface Deadline {
  id: string;
  title: string;
  date: Date;
}

export const admissionDeadlines: Deadline[] = allData.deadlinesList.map(
  (d: any) => ({
    ...d,
    date: new Date(d.date),
  }),
);
