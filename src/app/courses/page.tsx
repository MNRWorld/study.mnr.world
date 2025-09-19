import { PageHeader } from '@/components/PageHeader';
import { courses } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CoursesPage() {
  return (
    <div>
      <PageHeader
        title="আমাদের কোর্সসমূহ"
        description="আপনার লক্ষ্য অর্জনের জন্য সঠিক কোর্সটি বেছে নিন এবং প্রস্তুতি শুরু করুন।"
      />

      <div className="container max-w-7xl mx-auto px-5 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={course.dataAiHint}
                />
              </div>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{course.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#">বিস্তারিত দেখুন</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
