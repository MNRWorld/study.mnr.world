import cardData from './question-bank-cards.json';

export type QuestionBankCard = {
    title: string;
    description: string;
    icon: string;
    href: string;
}

export const questionBankCards: QuestionBankCard[] = cardData;
