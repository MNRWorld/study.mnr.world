import deadlinesData from "./list.json";

export interface Deadline {
  id: string;
  title: string;
  date: Date;
}

export const admissionDeadlines: Deadline[] = deadlinesData.map((d) => ({
  ...d,
  date: new Date(d.date),
}));
