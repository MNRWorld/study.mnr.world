
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestPaperCardProps {
  title: string;
  logo: string;
  href: string;
  bgColor: string;
}

const TestPaperCard: React.FC<TestPaperCardProps> = ({
  title,
  logo,
  href,
  bgColor,
}) => {
  return (
    <Link href={href}>
      <div
        className={cn(
          "relative w-full h-56 sm:h-64 text-center font-bold rounded-md p-4 flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-l-8",
          bgColor,
          `border-${bgColor.split("-")[1]}-600`,
          "dark:border-opacity-80",
          "border",
          "border-border",
        )}
      >
        <div className="bg-accent dark:bg-[#757575] rounded-full p-2 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 shadow-inner mx-auto">
          <Image
            src={logo}
            alt={`${title} logo`}
            width={50}
            height={50}
            className="object-contain w-10 h-10 sm:w-12 sm:h-12"
          />
        </div>
        <h3 className="text-sm sm:text-base text-card-foreground">{title}</h3>
      </div>
    </Link>
  );
};

export default TestPaperCard;
