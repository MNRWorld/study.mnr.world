import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data/blog";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id.toString() === params.id);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === post.imageId);

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {image && (
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-lg">
            <Image
              src={image.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{post.author}</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {post.title}
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90">
            <p>{post.excerpt}</p>
            <p>
              এটি একটি ডেমো ব্লগ পোস্ট। সম্পূর্ণ ব্লগ পোস্টের বিষয়বস্তু এখানে
              যুক্ত করা হবে।
            </p>
            <p>
              ভর্তি পরীক্ষা, পড়াশোনা এবং ক্যারিয়ার গঠনের প্রতিটি ধাপে সঠিক
              দিকনির্দেশনা পেতে আমাদের সাথে থাকুন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
