import { allData } from "../_generated";
import {
  University,
  HeartPulse,
  Cog,
  Blocks,
  BookMarked,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

const icons: { [key: string]: LucideIcon } = {
  University,
  HeartPulse,
  Cog,
  Blocks,
  BookMarked,
  Briefcase,
};

export type Course = {
  id: string;
  title: string;
  description: string;
  icon: string;
  Icon: LucideIcon;
  slug: string;
  stats: { value: string; label: string; tooltip?: string }[];
  features: string[];
  forWhom: string[];
};

export const courses: Course[] = allData.coursesList.map((course) => ({
  ...course,
  Icon: icons[course.icon],
}));

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id);
}
