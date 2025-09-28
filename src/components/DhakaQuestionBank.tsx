"use client";
import DhakaUniversityTab from "@/components/DhakaUniversityTab";
import { BookOpen } from "lucide-react";

const DhakaQuestionBank = () => {
  return (
    <div
      id="QuestionBank"
      className="mt-4 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative"
    >
      <div className="flex justify-center">
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">
          <BookOpen className="inline-block mr-2" />
          প্রশ্নব্যাংক
        </div>
      </div>
      <DhakaUniversityTab />
    </div>
  );
};

export default DhakaQuestionBank;
