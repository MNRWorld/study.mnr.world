import { allData } from "../../_generated";

const duInfo = allData.universities.find((uni) => uni.id === "du");

if (!duInfo) {
  throw new Error("Dhaka University data not found in _generated.ts");
}

export const duData = {
  admissionInfo: duInfo.admissionInfo,
  links: duInfo.links,
  questionBanks: duInfo.questionBanks,
  subjects: duInfo.subjects,
  historyAndMap: duInfo.historyAndMap,
};
