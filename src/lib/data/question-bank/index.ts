import { allData } from "../_generated";

export type QuestionBankCard = {
  title: string;
  author?: string;
  description: string;
  logo: string;
  href: string;
  bgColor: string;
};

export const questionBankCards: QuestionBankCard[] = allData.questionBankCards;
