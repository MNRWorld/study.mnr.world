import { allData } from "../_generated";

export interface Deadline {
  id: string;
  title: string;
  date: Date;
  universityId?: string;
}

export const admissionDeadlines: Deadline[] = allData.deadlinesList.map(
  (d: any) => ({
    ...d,
    date: new Date(d.date),
  }),
);

export function getDeadlinesByUniversity(
  universityId: string,
): Deadline[] | undefined {
  const deadlines = admissionDeadlines.filter(
    (d) => d.universityId === universityId,
  );
  return deadlines.length > 0 ? deadlines : undefined;
}
