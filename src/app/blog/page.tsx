import { PageHeader } from '@/components/PageHeader';
import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div>
      <PageHeader
        title="আমাদের ব্লগ"
        description="শিক্ষা, প্রস্তুতি এবং সাফল্যের সর্বশেষ খবর ও কৌশল জানুন।"
      />

      <div className="container max-w-7xl mx-auto px-5 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col overflow-hidden">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative w-full h-48">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={post.dataAiHint}
                  />
                </div>
              </Link>
              <CardHeader>
                <CardTitle>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription>
                  {post.date} - {post.author}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className='text-muted-foreground'>{post.description}</p>
              </CardContent>
              <CardFooter>
                 <Link href={`/blog/${post.slug}`} className="text-primary font-semibold flex items-center gap-2">
                  সম্পূর্ণ পড়ুন <ArrowRight className="w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
