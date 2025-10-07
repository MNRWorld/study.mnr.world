import publicUniversitiesData from "./public-universities.json";
import privateUniversitiesData from "./private-universities.json";

export interface University {
  nameBn: string;
  nameEn: string;
  shortName: string;
  id: string;
  category: string[];
  description: string;
  link: string;
  logo: string;
}

export const publicUniversities: University[] =
  publicUniversitiesData as University[];

export const privateUniversities: University[] =
  privateUniversitiesData as University[];

export const allUniversities: University[] = [
  ...publicUniversities,
  ...privateUniversities,
];

export function getUniversityById(id: string): University | undefined {
  return allUniversities.find((university) => university.id === id);
}
