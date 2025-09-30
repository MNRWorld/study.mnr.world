import linksData from "./list.json";
import { duData } from "@/lib/data/universities/du";

interface LinkItem {
  href: string;
  label: string;
  target?: string;
  rel?: string;
  colSpan?: number;
}

export const duLinks: LinkItem[][] = duData.links;
export const collegeLinks: LinkItem[][] = linksData.college;
export const privateLinks: LinkItem[][] = linksData.private;
