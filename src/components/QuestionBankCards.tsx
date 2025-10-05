"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { questionBankCards } from "@/lib/data/question-bank-cards";
import { cn } from "@/lib/utils";

const QuestionBankCards = () => {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
      {questionBankCards.map((card, index) => (
        <Link href={card.href} key={index}>
          <div
            className={cn(
              "relative w-full h-56 sm:h-64 text-center font-bold rounded-md p-4 flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-l-8",
              "shadow-md",
              card.bgColor,
              `border-${card.bgColor.split("-")[1]}-600`,
              "dark:border-opacity-80",
              "border border-border",
            )}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 shadow-inner">
              <Image
                src={card.logo}
                alt={`${card.title} logo`}
                width={50}
                height={50}
                className="object-contain w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <h3 className="text-sm sm:text-base text-black/80">
              {card.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default QuestionBankCards;
