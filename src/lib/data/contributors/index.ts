import { allData } from "../_generated";

export interface Contributor {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const contributors: Contributor[] = allData.contributorsList;
