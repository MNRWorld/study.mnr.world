import { allData } from "../_generated";
import type { University } from "@/lib/supabase/database.types";

export const allUniversities: University[] = allData.universities;

export const publicUniversities: University[] = allUniversities.filter(
  (uni) => !uni.category.includes("প্রাইভেট"),
);

export const privateUniversities: University[] = allUniversities.filter((uni) =>
  uni.category.includes("প্রাইভেট"),
);

export function getUniversityById(id: string): University | undefined {
  return allUniversities.find((university) => university.id === id);
}
