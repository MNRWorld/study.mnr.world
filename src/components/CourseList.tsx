"use client";
import { courses } from "@/lib/data/courses";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRightFromSquare,
  University,
  HeartPulse,
  Cog,
  Blocks,
  BookMarked,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const icons: { [key: string]: React.ElementType } = {
  University,
  HeartPulse,
  Cog,
  Blocks,
  BookMarked,
  Briefcase,
};

const CourseList = () => {
  return (
    <div id="Info" className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => {
        const Icon = icons[course.icon] || University;
        return (
          <div
            key={index}
            className="bg-card border border-border rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center gap-4">
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                {course.title}
              </h3>
            </div>
            <p className="text-muted-foreground mt-3 mb-4 text-sm sm:text-base">
              {course.description}
            </p>
            <Button
              asChild
              className="w-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground"
            >
              <Link
                href={`/courses/${encodeURIComponent(course.title.toLowerCase().replace(/ /g, "-"))}`}
              >
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

export default CourseList;
