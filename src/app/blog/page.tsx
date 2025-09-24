
'use client';

import { Newspaper, User, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import { blogPosts } from '@/lib/data/blog-posts';
import { PlaceHolderImages } from '@/lib/placeholder-images';

function BlogPage() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            },
        },
    };

    return (
        <div className="font-bengali bg-background py-8">
            <div className="container mx-auto px-4">
                <PageHeaderCard
                    icon={<Newspaper className="h-14 w-14 text-primary" />}
                    title="আমাদের ব্লগ ও নিউজ"
                    subtitle="Blog & News"
                    description="ভর্তি পরীক্ষা, পড়াশোনা আর ক্যারিয়ার নিয়ে গুরুত্বপূর্ণ সব তথ্য ও টিপস পেতে আমাদের ব্লগে চোখ রাখুন।"
                    stats={[]}
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {blogPosts.map((post) => {
                        const image = PlaceHolderImages.find(img => img.id === post.imageId);
                        return (
                            <motion.div
                                key={post.id}
                                variants={itemVariants}
                                className="bg-card border border-border rounded-xl shadow-lg overflow-hidden hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 flex flex-col"
                            >
                                <Link href="#" className="block">
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
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}

export default BlogPage;
