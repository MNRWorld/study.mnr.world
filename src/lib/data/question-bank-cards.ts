import cardData from "./question-bank-cards.json";

export type QuestionBankCard = {
  title: string;
  description: string;
  logo: string;
  href: string;
  bgColor: string;
};

export const questionBankCards: QuestionBankCard[] = cardData;
