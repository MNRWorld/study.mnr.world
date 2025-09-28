"use client";

import { Newspaper } from "lucide-react";
import PageHeaderCard from "@/components/common/PageHeaderCard";
import BlogList from "@/components/BlogList";
import React from "react";

function BlogPage() {
  const pageHeaderIcon = React.createElement(Newspaper, {
    className: "h-14 w-14 text-primary",
  });

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={pageHeaderIcon}
          title="আমাদের ব্লগ ও নিউজ"
          subtitle="Blog & News"
          description="ভর্তি পরীক্ষা, পড়াশোনা আর ক্যারিয়ার নিয়ে গুরুত্বপূর্ণ সব তথ্য ও টিপস পেতে আমাদের ব্লগে চোখ রাখুন।"
          stats={[]}
        />
        <BlogList />
      </div>
    </div>
  );
}

export default BlogPage;
