"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import CourseList from "@/components/CourseList";
import SimplePageHeader from "@/components/common/SimplePageHeader";
import { BookOpen } from "lucide-react";

function CoursesPage() {
  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-4">
        <SimplePageHeader
          title="আমাদের কোর্সসমূহ"
          description="তোমার স্বপ্ন পূরণের যাত্রায় আমরা আছি পাশে। দেশের সেরা শিক্ষকদের তত্ত্বাবধানে প্রস্তুতি নাও আরও মজবুত ও কার্যকরভাবে।"
        />

        <CourseList />

        <div className="mt-8 w-full border border-border bg-card rounded-2xl p-6 sm:p-8 shadow-lg text-center relative">
          <div className="flex justify-center">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-foreground text-primary-foreground rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">
              আমাদের বইসমূহ
            </div>
          </div>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            কোর্সের পাশাপাশি তোমার প্রস্তুতিকে আরও শাণিত করতে সংগ্রহ করতে পারো
            আমাদের নিজস্ব প্রকাশনার বইগুলো।
          </p>
          <Button asChild className="transition-transform hover:scale-105">
            <Link href="/question-bank">
              <BookOpen className="mr-2" /> বইগুলো দেখুন
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
