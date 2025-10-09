import { allData } from "../_generated";

export type QuestionBankCard = (typeof allData.questionBankCards)[number];

export const questionBankCards: QuestionBankCard[] = allData.questionBankCards;
