import coursesData from "./list.json";
import {
  University,
  HeartPulse,
  Cog,
  Blocks,
  BookMarked,
  Briefcase,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: { [key: string]: LucideIcon } = {
  University,
  HeartPulse,
  Cog,
  Blocks,
  BookMarked,
  Briefcase,
};

export type Course = {
  title: string;
  description: string;
  icon: string;
  Icon: LucideIcon;
  slug: string;
  stats: { value: string; label: string; tooltip?: string }[];
  features: string[];
  forWhom: string[];
};

export const courses: Course[] = coursesData.map((course) => ({
  ...course,
  Icon: icons[course.icon],
  slug: course.title.toLowerCase().replace(/ /g, "-").replace(/[(),]/g, ""),
}));

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
