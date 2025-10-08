import { getCourseById, courses } from "@/lib/data/courses";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import PageHeaderCard from "@/components/common/PageHeaderCard";
import React from "react";

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = getCourseById(params.id);

  if (!course) {
    notFound();
  }

  const relatedCourses = courses.filter((c) => c.id !== params.id);

  const CourseIcon = course.Icon;

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <Button asChild variant="outline">
            <Link href="/courses">
              <ArrowLeft className="mr-2" /> সব কোর্সে ফিরে যান
            </Link>
          </Button>
        </div>

        <PageHeaderCard
          icon={<CourseIcon className="h-14 w-14 text-primary" />}
          title={course.title}
          subtitle="কোর্সের বিবরণ"
          description={course.description}
          stats={course.stats || []}
        />

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-foreground mb-4">
              এই কোর্সে যা যা থাকছে
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              {course.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-foreground mb-4">
              কোর্সটি কাদের জন্য?
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              {course.forWhom.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary/50 mr-3 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-card border border-border rounded-2xl p-6 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            ভর্তি হতে চান?
          </h3>
          <p className="text-muted-foreground mb-6">
            তোমার স্বপ্ন পূরণের এই যাত্রায় এখনই অংশ নাও।
          </p>
          <Button size="lg" className="text-lg">
            কোর্সে এনরোল করুন
          </Button>
        </div>

        {relatedCourses.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
              সম্পর্কিত অন্যান্য কোর্স
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {relatedCourses.map((relatedCourse) => {
                const RelatedCourseIcon = relatedCourse.Icon;
                return (
                  <div
                    key={relatedCourse.id}
                    className="bg-card border border-border rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <RelatedCourseIcon className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      {relatedCourse.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {relatedCourse.description}
                    </p>
                    <Button asChild variant="secondary" size="sm">
                      <Link href={`/courses/${relatedCourse.id}`}>
                        বিস্তারিত দেখুন
                      </Link>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
