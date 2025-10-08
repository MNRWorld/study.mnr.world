import { allData } from "../_generated";

export interface Deadline {
  id: string;
  title: string;
  date: Date;
  universityId?: string;
}

export const admissionDeadlines: Deadline[] = allData.CalendarInfo.filter(
  (item) => item.examDetails.ExamCountdownDate,
).map((item) => ({
  id: item.id,
  title: `🎓 ${item.universityNameAndUnit} পরীক্ষার কাউন্টডাউন`,
  date: new Date(item.examDetails.ExamCountdownDate!),
  universityId: item.id.split("-")[0],
}));

export function getDeadlinesByUniversity(
  universityId: string,
): Deadline[] | undefined {
  const deadlines = admissionDeadlines.filter(
    (d) => d.universityId === universityId,
  );
  return deadlines.length > 0 ? deadlines : undefined;
}
