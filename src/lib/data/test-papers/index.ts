import { allData } from "../_generated";

export type TestPaperCard = {
  title: string;
  logo: string;
  href: string;
  bgColor: string;
};

export const allGroupsTestPapers: TestPaperCard[] =
  allData.testPapersList.allGroups;
export const scienceGroupTestPapers: TestPaperCard[] =
  allData.testPapersList.scienceGroup;
