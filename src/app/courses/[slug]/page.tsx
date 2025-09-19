import { courses } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, Star, StarHalf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div className="flex items-center gap-1 text-yellow-400">
        {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} className="w-5 h-5 fill-current" />)}
        {halfStar && <StarHalf key="half" className="w-5 h-5 fill-current" />}
        {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} className="w-5 h-5" />)}
      </div>
    );
};


export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div>
      <PageHeader title={course.title} description={course.description}/>
      <div className="container max-w-7xl mx-auto px-5 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={course.dataAiHint}
                />
            </div>
            
            {/* Syllabus Section */}
            <div>
                <h2 className="text-3xl font-bold mb-6">কোর্সের সিলেবাস</h2>
                <div className="space-y-4">
                    {course.syllabus?.map((item, index) => (
                        <Card key={index}>
                            <CardContent className='p-6 flex items-center gap-4'>
                                <CheckCircle className='w-6 h-6 text-primary'/>
                                <div>
                                    <h4 className='font-semibold'>সপ্তাহ {item.week}</h4>
                                    <p className='text-muted-foreground'>{item.topic}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Reviews Section */}
            <div>
              <h3 className="text-3xl font-bold mb-8">শিক্ষার্থীদের রিভিউ</h3>

              {/* Existing Reviews */}
              <div className="space-y-6 mb-12">
                 {course.reviews?.map(review => (
                  <Card key={review.id}>
                    <CardContent className="p-6 flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={`https://i.pravatar.cc/150?u=${review.author}`} />
                        <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{review.author}</p>
                        <div className="flex items-center gap-2 mb-1">
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-muted-foreground">{review.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {(!course.reviews || course.reviews.length === 0) && (
                    <p className='text-muted-foreground'>এই কোর্সের জন্য এখনও কোনো রিভিউ নেই।</p>
                )}
              </div>
              
              {/* Review Form */}
              <Card>
                <CardHeader>
                  <CardTitle>আপনার রিভিউ দিন</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                     <div className="space-y-2">
                      <Label htmlFor="review-name">আপনার নাম</Label>
                      <Input id="review-name" placeholder="আপনার নাম"/>
                    </div>
                     <div className="space-y-2">
                        <Label>রেটিং</Label>
                        <div className="flex items-center gap-1 text-gray-400">
                           {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 cursor-pointer hover:text-yellow-400 transition-colors" />)}
                        </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="review-text">রিভিউ</Label>
                      <Textarea id="review-text" placeholder="আপনার মতামত লিখুন..." rows={4}/>
                    </div>
                    <Button>রিভিউ সাবমিট করুন</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
            <Card className="sticky top-24">
                <CardHeader>
                    <CardTitle className='text-3xl'>৳ ২৫০০</CardTitle>
                    <CardDescription>সম্পূর্ণ কোর্সের ফি</CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                    <Button className='w-full' size='lg'>কোর্সে ভর্তি হোন</Button>
                    <div className='space-y-3 pt-4'>
                        <h4 className='font-semibold'>এই কোর্সে যা যা থাকছে</h4>
                        <div className='flex items-center gap-3 text-muted-foreground'>
                            <CheckCircle className='w-5 h-5 text-primary'/>
                            <span>২০টি লাইভ ক্লাস</span>
                        </div>
                        <div className='flex items-center gap-3 text-muted-foreground'>
                            <CheckCircle className='w-5 h-5 text-primary'/>
                            <span>১৫টি প্র্যাকটিস টেস্ট</span>
                        </div>
                        <div className='flex items-center gap-3 text-muted-foreground'>
                            <CheckCircle className='w-5 h-5 text-primary'/>
                            <span>সরাসরি প্রশ্ন করার সুযোগ</span>
                        </div>
                         <div className='flex items-center gap-3 text-muted-foreground'>
                            <CheckCircle className='w-5 h-5 text-primary'/>
                            <span>সার্টিফিকেট</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 pt-4">
                        <Avatar>
                            <AvatarImage src="https://picsum.photos/seed/instructor1/200/200" />
                            <AvatarFallback>{course.instructor.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">কোর্স ইন্সট্রাক্টর</p>
                            <p className="text-sm text-muted-foreground">{course.instructor}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}
