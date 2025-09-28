"use client";
import DhakaUniversityTab from "@/components/DhakaUniversityTab";

const DhakaQuestionBank = () => {
  return (
    <div
      id="QuestionBank"
      className="w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative"
    >
      <div className="flex justify-center">
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">
          প্রশ্নব্যাংক
        </div>
      </div>
      <DhakaUniversityTab />
    </div>
  );
};

export default DhakaQuestionBank;
