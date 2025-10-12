import aboutContent from "./about/content.json";
import contactContent from "./contact/content.json";
import contributorsList from "./contributors/list.json";
import coursesList from "./courses/list.json";
import deadlinesList from "./deadlines/list.json";
import linksList from "./links/list.json";
import navigationLinks from "./navigation/links.json";
import questionBankCards from "./question-bank/cards.json";
import schedulesApplication from "./schedules/application.json";
import schedulesGeneral from "./schedules/general.json";
import schedulesOthers from "./schedules/others.json";
import testPapersList from "./test-papers/list.json";
import CalendarInfo from "./CalendarInfo.json";

// University data imports
import publicUniversities from "./universities/public-universities.json";
import privateUniversities from "./universities/private-universities.json";

import duInfo from "./universities/du/info.json";
import ruInfo from "./universities/ru/info.json";
import austInfo from "./universities/aust/info.json";
import butexInfo from "./universities/butex/info.json";

type University = (typeof publicUniversities)[0];

const universityDetails: Record<string, any> = {
  du: duInfo,
  ru: ruInfo,
  aust: austInfo,
  butex: butexInfo,
};

const allUniversities = [...publicUniversities, ...privateUniversities].map(
  (uni: University) => {
    const details = universityDetails[uni.id];
    if (details) {
      return { ...uni, ...details };
    }
    return {
      ...uni,
      admissionInfo: {},
      historyAndMap: {},
      links: [],
      questionBanks: {},
      subjects: {},
    };
  },
);

export const allData = {
  aboutContent,
  contactContent,
  contributorsList,
  coursesList,
  deadlinesList,
  linksList,
  navigationLinks,
  questionBankCards,
  schedulesApplication,
  schedulesGeneral,
  schedulesOthers,
  testPapersList,
  universities: allUniversities,
  CalendarInfo,
};
