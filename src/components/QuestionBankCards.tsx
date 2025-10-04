"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRightFromSquare, Atom, BookOpen, Cog, HeartPulse } from "lucide-react";
import Link from "next/link";
import { questionBankCards } from "@/lib/data/question-bank-cards";

const icons: { [key: string]: React.ElementType } = {
  BookOpen,
  Atom,
  Cog,
  HeartPulse,
};

const QuestionBankCards = () => {
  return (
    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {questionBankCards.map((card, index) => {
        const Icon = icons[card.icon];
        return (
          <div
            key={index}
            className="bg-card border border-border rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center gap-4">
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-bold text-foreground">
                {card.title}
              </h3>
            </div>
            <p className="text-muted-foreground mt-3 mb-4 text-sm">
              {card.description}
            </p>
            <Button
              asChild
              className="w-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground"
            >
              <Link href={card.href}>
                বিস্তারিত দেখুন{" "}
                <ArrowUpRightFromSquare size={14} className="ml-2" />
              </Link>
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionBankCards;
