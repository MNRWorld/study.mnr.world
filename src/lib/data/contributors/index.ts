import { allData } from "../_generated";

export type Contributor = (typeof allData.contributorsList)[number];

export const contributors: Contributor[] = allData.contributorsList;
