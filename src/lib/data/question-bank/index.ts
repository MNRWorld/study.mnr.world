
import cardData from "./cards.json";

export type QuestionBankCard = {
  title: string;
  author?: string;
  description: string;
  logo: string;
  href: string;
  bgColor: string;
};

export const questionBankCards: QuestionBankCard[] = cardData;
