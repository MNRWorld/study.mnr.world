import { allData } from "../_generated";

interface LinkItem {
  href: string;
  label: string;
  target?: string;
  rel?: string;
  colSpan?: number;
}

export const duLinks: LinkItem[][] =
  allData.universities.find((u) => u.id === "du")?.links || [];
export const collegeLinks: LinkItem[][] = allData.linksList.college;
export const privateLinks: LinkItem[][] = allData.linksList.private;
