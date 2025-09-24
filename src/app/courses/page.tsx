
'use client';

import { Button } from '@/components/ui/button';
import {
  ArrowUpRightFromSquare,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { courses } from '@/lib/data/courses';
import PageHeaderCard from '@/components/common/PageHeaderCard';

function CoursesPage() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

  return (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bengali bg-background py-8"
    >
      <div className="container mx-auto px-4">
        <PageHeaderCard
            icon={<GraduationCap className="h-14 w-14 text-primary" />}
            title="আমাদের কোর্সসমূহ"
            subtitle="Our Courses"
            description="তোমার স্বপ্ন পূরণের যাত্রায় আমরা আছি পাশে। দেশের সেরা শিক্ষকদের তত্ত্বাবধানে প্রস্তুতি নাও আরও মজবুত ও কার্যকরভাবে।"
            stats={[
                { value: "১০+", label: "কোর্স" },
                { value: "৫০+", label: "শিক্ষক" },
                { value: "১০,০০০+", label: "শিক্ষার্থী", tooltip: "সফল শিক্ষার্থী" }
            ]}
        />


        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            id="Info"
            className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300"
            >
                <div className="flex items-center gap-4">
                    {course.icon}
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">{course.title}</h3>
                </div>
                <p className="text-muted-foreground mt-3 mb-4 text-sm sm:text-base">{course.description}</p>
                <Button asChild className="w-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-transform hover:scale-105">
                    <Link href={`/courses/${encodeURIComponent(course.title.toLowerCase().replace(/ /g, '-'))}`}>বিস্তারিত দেখুন <ArrowUpRightFromSquare size={14} className="ml-2"/></Link>
                </Button>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 w-full border border-border bg-card rounded-2xl p-6 sm:p-8 shadow-lg text-center relative"
        >
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">আমাদের বইসমূহ</div>
            </div>
             <p className="text-muted-foreground mb-4 text-sm sm:text-base">কোর্সের পাশাপাশি তোমার প্রস্তুতিকে আরও শাণিত করতে সংগ্রহ করতে পারো আমাদের নিজস্ব প্রকাশনার বইগুলো।</p>
            <Button asChild className="transition-transform hover:scale-105">
                <Link href="/question-bank"><BookOpen className="mr-2"/> বইগুলো দেখুন</Link>
            </Button>
        </motion.div>

      </div>
    </motion.div>
  );
}


export default CoursesPage;
