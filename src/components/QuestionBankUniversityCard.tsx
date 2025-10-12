
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

const clusterInfo: { [key: string]: string } = {
  gst: "ইউনিট: ক, খ, গ",
  agri: "শুধু বিজ্ঞান বিভাগ",
  medical: "শুধু বিজ্ঞান বিভাগ",
  dental: "শুধু বিজ্ঞান বিভাগ",
  nursing: "নার্সিং ও মিডওয়াইফারি",
  nu: "সকল বিভাগ",
  dcu: "সকল বিভাগ",
  bau: "শুধু বিজ্ঞান বিভাগ",
  cvasu: "শুধু বিজ্ঞান বিভাগ",
  gau: "শুধু বিজ্ঞান বিভাগ",
  hau: "শুধু বিজ্ঞান বিভাগ",
  kau: "শুধু বিজ্ঞান বিভাগ",
  kuriau: "শুধু বিজ্ঞান বিভাগ",
  sau: "শুধু বিজ্ঞান বিভাগ",
  sbau: "শুধু বিজ্ঞান বিভাগ",
  buet: "শুধু বিজ্ঞান বিভাগ",
  kuet: "শুধু বিজ্ঞান বিভাগ",
  mist: "শুধু বিজ্ঞান বিভাগ",
  aaub: "শুধু বিজ্ঞান বিভাগ",
  ruet: "শুধু বিজ্ঞান বিভাগ",
  cuet: "শুধু বিজ্ঞান বিভাগ",
  afmc: "শুধু বিজ্ঞান বিভাগ",
  nitor: "শুধু বিজ্ঞান বিভাগ",
  butex: "শুধু বিজ্ঞান বিভাগ",
  "butex-affiliated": "শুধু বিজ্ঞান বিভাগ",
  "sust-affiliated": "শুধু বিজ্ঞান বিভাগ",
  "du-affiliated": "সকল বিভাগ",
  iut: "শুধু বিজ্ঞান বিভাগের মুসলিমদের",
};

const QuestionBankUniversityCard = React.memo(
  function QuestionBankUniversityCard({
    university,
  }: QuestionBankUniversityCardProps) {
    const universityLink = `/${university.id}#QuestionBank`;
    const specialClusterIds = [
      "gst",
      "agri",
      "medical",
      "dental",
      "nursing",
      "nu",
      "dcu",
      "bau",
      "cvasu",
      "gau",
      "hau",
      "kau",
      "kuriau",
      "sau",
      "sbau",
      "buet",
      "kuet",
      "mist",
      "aaub",
      "ruet",
      "cuet",
      "afmc",
      "nitor",
      "butex",
      "butex-affiliated",
      "sust-affiliated",
      "du-affiliated",
      "iut",
    ];

    // Special case for cluster cards
    if (specialClusterIds.includes(university.id)) {
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
                {clusterInfo[university.id]}
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
