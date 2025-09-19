import { PageHeader } from '@/components/PageHeader';
import { courses } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Star, StarHalf } from 'lucide-react';

const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div className="flex items-center gap-1 text-yellow-400">
        {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} className="w-4 h-4 fill-current" />)}
        {halfStar && <StarHalf key="half" className="w-4 h-4 fill-current" />}
        {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} className="w-4 h-4" />)}
         <span className='text-xs text-muted-foreground ml-1'>({rating})</span>
      </div>
    );
};

export default function CoursesPage() {
  return (
    <div>
      <PageHeader
        title="আমাদের কোর্সসমূহ"
        description="আপনার লক্ষ্য অর্জনের জন্য সঠিক কোর্সটি বেছে নিন এবং প্রস্তুতি শুরু করুন।"
      />

      <div className="container max-w-7xl mx-auto px-5 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.slug} className="flex flex-col overflow-hidden">
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
                 {course.rating && (
                    <div className="flex items-center gap-2">
                        {renderStars(course.rating)}
                    </div>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{course.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/courses/${course.slug}`}>বিস্তারিত দেখুন</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
