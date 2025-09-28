import publicUniversitiesData from "./public-universities.json";

export interface University {
  nameBn: string;
  nameEn: string;
  shortName: string;
  category: string;
  description: string;
  link: string;
  logo: string;
}

export const publicUniversities: University[] = publicUniversitiesData;
