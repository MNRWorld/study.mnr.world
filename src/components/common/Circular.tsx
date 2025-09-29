"use client";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import PreviousYearCirculars from "@/components/common/PreviousYearCirculars";
import Link from "next/link";

interface CircularProps {
  title: string;
  note?: string;
  downloadLink: string;
  showPreviousYears?: boolean;
}

const Circular = ({
  title,
  note,
  downloadLink,
  showPreviousYears = false,
}: CircularProps) => {
  return (
    <div
      id="Circular"
      className="mt-4 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative"
    >
      <div className="flex justify-center">
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-foreground text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">
          সার্কুলার
        </div>
      </div>
      <div className="text-center">
        <span className="text-base sm:text-lg">
          <b>{title}</b>
        </span>
        <br />
        {note && (
          <span className="text-muted-foreground text-xs sm:text-sm">
            {note}
          </span>
        )}
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 mt-5 justify-center">
        <Button
          asChild
          className="bg-primary text-primary-foreground flex-1 min-w-[150px] hover:bg-background hover:text-primary border hover:border-primary"
        >
          <Link href={downloadLink} target="_blank" rel="noopener noreferrer">
            <Download size={16} className="mr-2" /> ডাউনলোড করুন
          </Link>
        </Button>
        {showPreviousYears && <PreviousYearCirculars />}
      </div>
    </div>
  );
};

export default Circular;
