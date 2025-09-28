import duSubjectsData from "./du-subjects.json";

export interface Subject {
  short: string;
  fullName: string;
  seat: number | string;
  reviewLink: string;
  tooltip?: string;
}

interface DuSubjects {
  unitA: Subject[];
  unitB: Subject[];
  unitC: Subject[];
  unitCha: Subject[];
  unitIBA: Subject[];
}

export const duSubjects: DuSubjects = duSubjectsData;
