import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <PageHeader title={post.title} description={`${post.date} - ${post.author}`}/>
      <div className="container max-w-4xl mx-auto px-5 pb-24">
        <div className="relative w-full h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            data-ai-hint={post.dataAiHint}
          />
        </div>
        <article className="prose dark:prose-invert max-w-none">
          <p>{post.description}</p>
          <p>
            লরেম ইপসাম ডলোর সিট আমেট, কনসেক্টেটার এডিপিসিং এলিট। কুরাবিতুর ভেরিয়াস রাইসাস কোমোডো। পেনডুলুমের ফিউজিয়েট, কুরাবিতুর ভেরিয়াস রাইসাস কোমোডো। পেনডুলুমের ফিউজিয়েট, কুরাবিতুর ভেরিয়াস রাইসাস কোমোডো। পেনডুলুমের ফিউজিয়েট।
          </p>
           <p>
            লরেম ইপসাম ডলোর সিট আমেট, কনসেক্টেটার এডিপিসিং এলিট। কুরাবিতুর ভেরিয়াস রাইসাস কোমোডো। পেনডুলুমের ফিউজিয়েট, কুরাবিতুর ভেরিয়াস রাইসাস কোমোডো। পেনডুলুমের ফিউজিয়েট, কুরাবিতুর ভেরিয়াস রাইসাস কোমোডো। পেনডুলুমের ফিউজিয়েট।
          </p>
        </article>

        {/* Comments Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8">পাঠকের মন্তব্য</h3>

          {/* Existing Comments */}
          <div className="space-y-6 mb-12">
            {post.comments?.map(comment => (
              <Card key={comment.id}>
                <CardContent className="p-6 flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${comment.author}`} />
                    <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold">{comment.author}</p>
                      <p className="text-xs text-muted-foreground">{comment.date}</p>
                    </div>
                    <p className="text-muted-foreground">{comment.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
             {(!post.comments || post.comments.length === 0) && (
              <p className='text-muted-foreground'>এখনও কোনো মন্তব্য নেই। আপনার মন্তব্যটিই হতে পারে প্রথম।</p>
            )}
          </div>
          
          {/* Comment Form */}
           <Card>
            <CardHeader>
              <CardTitle>আপনার মন্তব্য দিন</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="comment-name">নাম</Label>
                      <Input id="comment-name" placeholder="আপনার নাম"/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="comment-email">ইমেইল</Label>
                      <Input id="comment-email" type="email" placeholder="আপনার ইমেইল"/>
                    </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment-text">মন্তব্য</Label>
                  <Textarea id="comment-text" placeholder="আপনার মন্তব্য লিখুন..." rows={4}/>
                </div>
                <Button>মন্তব্য পোস্ট করুন</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
