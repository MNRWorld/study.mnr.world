
"use client";

import React from "react";
import { University } from "@/lib/data/universities";
import Link from "next/link";
import Image from "next/image";

interface QuestionBankUniversityCardProps {
  university: University;
}

const QuestionBankUniversityCard = React.memo(function QuestionBankUniversityCard({
  university,
}: QuestionBankUniversityCardProps) {
  const universityLink = `/public/${university.id}#QuestionBank`;
  return (
    <Link href={universityLink}>
        <div className="bg-card border border-border rounded-xl p-4 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 dark:hover:bg-accent h-full flex items-center">
            <div className="flex items-center gap-4 text-left w-full">
                <Image
                src={university.logo}
                alt={`${university.nameEn} logo`}
                width={40}
                height={40}
                className="object-contain"
                />
                <div className="flex flex-col flex-grow">
                <span className="font-bold text-foreground">
                    {university.nameBn} ({university.shortName})
                </span>
                <span className="text-sm text-muted-foreground">
                    {university.nameEn}
                </span>
                </div>
            </div>
        </div>
    </Link>
  );
});

export default QuestionBankUniversityCard;
