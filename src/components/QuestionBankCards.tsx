"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { questionBankCards } from "@/lib/data/question-bank-cards";
import { cn } from "@/lib/utils";
import { BookUp } from "lucide-react";

const QuestionBankCards = () => {
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8 [perspective:1000px]">
      {questionBankCards.map((card, index) => (
        <Link href={card.href} key={index} className="group">
          <div
            className={cn(
              "relative w-full h-56 sm:h-64 text-center font-bold transition-transform duration-700 [transform-style:preserve-3d]",
              "group-hover:[transform:rotateY(-30deg)]",
            )}
          >
            {/* Page behind the cover */}
            <div className="absolute w-full h-full rounded-lg bg-card border border-border p-4 flex flex-col justify-center items-center">
              <BookUp className="w-12 h-12 text-primary" />
              <p className="mt-2 text-sm text-foreground">এখনই পড়ুন</p>
            </div>
            {/* Book Cover */}
            <div
              className={cn(
                "absolute w-full h-full rounded-lg p-4 flex flex-col justify-center items-center transition-transform duration-700 origin-left [transform-style:preserve-3d] [backface-visibility:hidden]",
                "group-hover:[transform:rotateY(-140deg)]",
                card.bgColor,
              )}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3">
                <Image
                  src={card.logo}
                  alt={`${card.title} logo`}
                  width={50}
                  height={50}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-sm sm:text-base text-black/80">
                {card.title}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default QuestionBankCards;
