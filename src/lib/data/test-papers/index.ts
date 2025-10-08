
import cardData from "./list.json";

export type TestPaperCard = {
  title: string;
  logo: string;
  href: string;
  bgColor: string;
};

export const allGroupsTestPapers: TestPaperCard[] = cardData.allGroups;
export const scienceGroupTestPapers: TestPaperCard[] = cardData.scienceGroup;
