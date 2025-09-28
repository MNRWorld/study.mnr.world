import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { blogPosts } from "@/lib/data/blog-posts";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const BlogList = () => {
  return (
    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => {
        const image = PlaceHolderImages.find((img) => img.id === post.imageId);
        return (
          <div
            key={post.id}
            className="bg-card border border-border rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Link href={`/blog/${post.id}`} className="block">
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={post.title}
                  width={600}
                  height={400}
                  data-ai-hint={image.imageHint}
                  className="w-full h-48 object-cover"
                />
              )}
            </Link>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 flex-grow">
                <Link
                  href={`/blog/${post.id}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm text-muted-foreground mt-auto pt-4 border-t border-border/50">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
