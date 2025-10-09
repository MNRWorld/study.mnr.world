import { allData } from "../_generated";

type LinkItem = (typeof allData.linksList.college)[0][0];

export const duLinks: LinkItem[][] =
  allData.universities.find((u) => u.id === "du")?.links || [];
export const collegeLinks: LinkItem[][] = allData.linksList.college;
export const privateLinks: LinkItem[][] = allData.linksList.private;
