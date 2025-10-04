"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { questionBankCards } from "@/lib/data/question-bank-cards";
import { cn } from "@/lib/utils";

const QuestionBankCards = () => {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      {questionBankCards.map((card, index) => (
        <Link href={card.href} key={index}>
          <div
            className={cn(
              "p-4 rounded-2xl shadow-lg text-center font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl aspect-square flex flex-col justify-center items-center",
              card.bgColor,
            )}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-2.5 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4">
              <Image
                src={card.logo}
                alt={`${card.title} logo`}
                width={50}
                height={50}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg text-black">
              {card.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default QuestionBankCards;
