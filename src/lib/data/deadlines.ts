import deadlinesData from "./deadlines.json";

export interface Deadline {
  title: string;
  date: Date;
}

export const admissionDeadlines: Deadline[] = deadlinesData.map((d) => ({
  ...d,
  date: new Date(d.date),
}));
