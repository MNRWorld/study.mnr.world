import { blogPosts } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

export function News() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-secondary/50 py-24">
      <div className="container max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            সর্বশেষ খবর ও ব্লগ
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            শিক্ষা জগতের সর্বশেষ তথ্য, ভর্তি পরীক্ষার প্রস্তুতি এবং কার্যকরী
            পরামর্শ।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col overflow-hidden">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
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
                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary font-semibold flex items-center gap-2"
                >
                  সম্পূর্ণ পড়ুন <ArrowRight className="w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/blog">সকল ব্লগ দেখুন</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
