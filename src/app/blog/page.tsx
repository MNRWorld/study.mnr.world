
import { Rss, User, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: 'ভর্তি পরীক্ষার প্রস্তুতি: প্রথম দিনের সেরা টিপস',
            excerpt: 'ভর্তি পরীক্ষার বিশাল সিলেবাস দেখে ঘাবড়ে না গিয়ে প্রথম দিন থেকেই কিভাবে প্রস্তুতি শুরু করবে, জেনে নাও কিছু কার্যকরী কৌশল।',
            author: 'মোঃ আব্দুল্লাহ',
            date: 'জুলাই ২৫, ২০২৪',
            imageUrl: 'https://picsum.photos/seed/blog-1/600/400',
            imageHint: 'study tips',
            category: 'প্রস্তুতি',
        },
        {
            id: 2,
            title: 'ঢাকা বিশ্ববিদ্যালয়ের "ক" ইউনিটের মানবন্টন ও কৌশল',
            excerpt: 'ঢাবির "ক" ইউনিটে ভালো করার জন্য প্রতিটি বিষয়ের মানবন্টন জানা এবং সে অনুযায়ী কৌশল নির্ধারণ করা অত্যন্ত জরুরি।',
            author: 'সাদিয়া আফরিন',
            date: 'জুলাই ২২, ২০২৪',
            imageUrl: 'https://picsum.photos/seed/blog-2/600/400',
            imageHint: 'university guide',
            category: 'বিশ্ববিদ্যালয়',
        },
        {
            id: 3,
            title: 'HSC পরীক্ষার পর কিভাবে সময়কে কাজে লাগাবে?',
            excerpt: 'HSC পরীক্ষার পর অবসর সময় নষ্ট না করে এডমিশনের জন্য নিজেকে এগিয়ে রাখার সেরা উপায়গুলো জেনে নাও।',
            author: 'রাকিব হাসান',
            date: 'জুলাই ২০, ২০২৪',
            imageUrl: 'https://picsum.photos/seed/blog-3/600/400',
            imageHint: 'time management',
            category: 'ক্যারিয়ার',
        },
         {
            id: 4,
            title: 'মেডিকেল ভর্তি: জীববিজ্ঞান প্রস্তুতি কেমন হওয়া উচিত?',
            excerpt: 'মেডিকেল ভর্তি পরীক্ষায় জীববিজ্ঞানে সর্বোচ্চ নম্বর পেতে কোন কোন অধ্যায়ের উপর জোর দেওয়া উচিত এবং কিভাবে পড়া উচিত, তা নিয়ে আলোচনা।',
            author: 'ফারজানা ইসলাম',
            date: 'জুলাই ১৮, ২০২৪',
            imageUrl: 'https://picsum.photos/seed/blog-4/600/400',
            imageHint: 'medical biology',
            category: 'মেডিকেল',
        },
        {
            id: 5,
            title: 'ইঞ্জিনিয়ারিং গুচ্ছ: গণিত প্রস্তুতির সেরা কৌশল',
            excerpt: 'ইঞ্জিনিয়ারিং গুচ্ছ ভর্তি পরীক্ষায় গণিতে ভালো করার জন্য গুরুত্বপূর্ণ টপিক এবং অনুশীলনের কৌশল নিয়ে বিস্তারিত আলোচনা।',
            author: 'মেহেদী হাসান',
            date: 'জুলাই ১৫, ২০২৪',
            imageUrl: 'https://picsum.photos/seed/blog-5/600/400',
            imageHint: 'engineering math',
            category: 'ইঞ্জিনিয়ারিং',
        },
        {
            id: 6,
            title: 'কেন পড়বেন প্রশ্নব্যাংক? জেনে নিন ৫টি কারণ',
            excerpt: 'ভর্তি প্রস্তুতির জন্য প্রশ্নব্যাংক সমাধান করা কেন এত গুরুত্বপূর্ণ? জেনে নিন এর পেছনের ৫টি শক্তিশালী কারণ।',
            author: 'টিম স্টাডি প্ল্যাটফর্ম',
            date: 'জুলাই ১২, ২০২৪',
            imageUrl: 'https://picsum.photos/seed/blog-6/600/400',
            imageHint: 'question bank',
            category: 'প্রশ্নব্যাংক',
        },
    ];

    return (
        <div className="font-bengali bg-background py-8">
            <div className="container mx-auto px-4">
                {/* Main Card */}
                <div className="mt-20 sm:mt-24 w-full border border-border bg-card rounded-2xl p-6 sm:p-8 shadow-lg text-center relative animate-fadeInUp">
                    <div className="w-24 h-24 absolute -top-12 left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-xl z-10 flex items-center justify-center">
                        <Rss className="h-14 w-14 text-primary" />
                    </div>
                    <div className="pt-12">
                        <div className="text-2xl sm:text-3xl font-bold my-2 text-foreground">
                            আমাদের ব্লগ ও নিউজ
                        </div>
                        <div className="text-sm text-muted-foreground mb-4">
                            (Blog & News)
                        </div>
                        <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
                           ভর্তি পরীক্ষা, পড়াশোনা ও ক্যারিয়ার নিয়ে গুরুত্বপূর্ণ সব তথ্য ও টিপস পেতে আমাদের ব্লগে চোখ রাখুন।
                        </p>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-card border border-border rounded-xl shadow-lg overflow-hidden hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col animate-fadeInUp">
                            <Link href="#" className="block">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    width={600}
                                    height={400}
                                    data-ai-hint={post.imageHint}
                                    className="w-full h-48 object-cover"
                                />
                            </Link>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                                     <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">{post.category}</span>
                                     <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 flex-grow">
                                    <Link href="#" className="hover:text-primary transition-colors duration-200">
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                                <div className="flex items-center text-sm text-muted-foreground mt-auto pt-4 border-t border-border/50">
                                    <User size={16} className="mr-2" />
                                    <span>{post.author}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogPage;
