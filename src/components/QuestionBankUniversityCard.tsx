"use client";

import React from "react";
import type { University } from "@/lib/supabase/database.types";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface QuestionBankUniversityCardProps {
  university: University;
}

const QuestionBankUniversityCard = React.memo(
  function QuestionBankUniversityCard({
    university,
  }: QuestionBankUniversityCardProps) {
    const universityLink = `/${university.id}#QuestionBank`;

    // Special case for GST card
    if (university.id === "gst") {
      return (
        <Link href={universityLink}>
          <div
            className={cn(
              "relative w-full h-56 sm:h-64 text-center font-bold rounded-md p-4 flex flex-col justify-between items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border",
              "bg-card hover:border-primary/50",
            )}
          >
            <div>
              <div className="bg-accent dark:bg-muted rounded-full p-2 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 shadow-inner mx-auto">
                <Image
                  src={university.logo}
                  alt={`${university.nameEn} logo`}
                  width={50}
                  height={50}
                  className="object-contain w-10 h-10 sm:w-12 sm:h-12"
                />
              </div>
              <h3 className="text-sm sm:text-base text-card-foreground">
                {university.nameBn}
              </h3>
              <p className="text-xs text-muted-foreground font-normal">
                ({university.shortName})
              </p>
            </div>
            <div className="w-full">
              <hr className="my-2 border-border/50" />
              <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1.5 font-normal">
                <Sparkles size={12} />
                ইউনিট: ক, খ, গ
              </p>
            </div>
          </div>
        </Link>
      );
    }

    // Default card for other universities
    return (
      <Link href={universityLink}>
        <div
          className={cn(
            "relative w-full h-56 sm:h-64 text-center font-bold rounded-md p-4 flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border",
            "bg-card hover:border-primary/50",
          )}
        >
          <div className="bg-accent dark:bg-muted rounded-full p-2 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 shadow-inner mx-auto">
            <Image
              src={university.logo}
              alt={`${university.nameEn} logo`}
              width={50}
              height={50}
              className="object-contain w-10 h-10 sm:w-12 sm:h-12"
            />
          </div>
          <h3 className="text-sm sm:text-base text-card-foreground">
            {university.nameBn}
          </h3>
          <p className="text-xs text-muted-foreground font-normal">
            ({university.shortName})
          </p>
        </div>
      </Link>
    );
  },
);

export default QuestionBankUniversityCard;
