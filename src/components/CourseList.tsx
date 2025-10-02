"use client";
import { courses } from "@/lib/data/courses";
import { Button } from "@/components/ui/button";
import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";
import React from "react";

const CourseList = () => {
  return (
    <div id="Info" className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => {
        const Icon = course.Icon;
        return (
          <div
            key={index}
            className="bg-card border border-border rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center gap-4">
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-bold text-foreground">
                {course.title}
              </h3>
            </div>
            <p className="text-muted-foreground mt-3 mb-4 text-sm">
              {course.description}
            </p>
            <Button
              asChild
              className="w-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground"
            >
              <Link href={`/courses/${course.id}`}>
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
