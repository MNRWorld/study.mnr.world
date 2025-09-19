import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';

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
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
