import { allUniversityData as allData } from "./_generated";

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

// Since _generated contains all universities, we can derive public and private from it.
export const allUniversities: University[] = allData.map((uni: any) => ({
  nameBn: uni.nameBn,
  nameEn: uni.nameEn,
  shortName: uni.shortName,
  id: uni.id,
  category: uni.category,
  description: uni.description,
  link: uni.link,
  logo: uni.logo,
}));

export const publicUniversities: University[] = allUniversities.filter((uni) =>
  uni.category.some(cat => cat !== 'প্রাইভেট')
);

export const privateUniversities: University[] = allUniversities.filter((uni) =>
  uni.category.includes('প্রাইভেট')
);

export function getUniversityById(id: string): University | undefined {
  return allUniversities.find((university) => university.id === id);
}
