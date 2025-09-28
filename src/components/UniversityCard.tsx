"use client";
import React, { useState } from "react";
import { University } from "@/lib/data/public-universities";
import { Button } from "@/components/ui/button";
import { ChevronDown, BookOpen, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface UniversityCardProps {
  university: University;
}

const UniversityCard = React.memo(function UniversityCard({
  university,
}: UniversityCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "bg-card border border-border rounded-xl shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg overflow-hidden",
        isOpen && "shadow-xl border-primary/50",
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 w-full list-none flex justify-between items-center cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 text-left">
          <Image
            src={university.logo}
            alt={`${university.nameEn} logo`}
            width={40}
            height={40}
            className="object-contain"
          />
          <div className="flex flex-col">
            <span className="font-bold text-foreground">
              {university.nameBn} ({university.shortName})
            </span>
            <span className="text-sm text-muted-foreground">
              {university.nameEn}
            </span>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "text-muted-foreground transition-transform duration-300 ease-in-out",
            isOpen && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 border-t border-border/50">
            <p className="text-muted-foreground my-3 text-sm">
              {university.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={`${university.link}#Circular`}>
                  <FileText /> সার্কুলার
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href={`${university.link}#QuestionBank`}>
                  <BookOpen /> প্রশ্নব্যাংক
                </Link>
              </Button>
              <Button asChild variant="default" size="sm">
                <Link href={university.link}>
                  বিস্তারিত <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default UniversityCard;
