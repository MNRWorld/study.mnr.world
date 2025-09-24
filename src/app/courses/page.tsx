
'use client';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Info,
  GraduationCap,
  ArrowUpRightFromSquare,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import FloatingMenu from '@/components/common/FloatingMenu';
import { motion } from 'framer-motion';
import { courses } from '@/lib/data/courses';

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
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-20 sm:mt-24 w-full border border-border bg-card rounded-2xl p-6 sm:p-8 shadow-lg text-center relative"
        >
          <div className="w-24 h-24 absolute -top-12 left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-xl z-10 flex items-center justify-center">
            <GraduationCap className="h-16 w-16 text-primary" />
          </div>
          <div className="pt-12">
            <div className="text-2xl sm:text-3xl font-bold my-2 text-foreground">
              আমাদের কোর্সসমূহ
            </div>
            <div className="text-sm text-muted-foreground mb-4">
              (Our Courses)
            </div>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              তোমার স্বপ্ন পূরণের যাত্রায় আমরা আছি পাশে। দেশের সেরা শিক্ষকদের তত্ত্বাবধানে প্রস্তুতি নাও আরও মজবুত ও কার্যকরভাবে।
            </p>
          </div>
          <div className="flex justify-around items-center mb-6 text-sm sm:text-base max-w-md mx-auto">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground">১০+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">কোর্স</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground"> ৫০+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">শিক্ষক</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground flex items-center justify-center">
                ১০,০০০+
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="ml-1 cursor-pointer text-primary">
                        <Info size={16} />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-primary/10 text-primary-foreground border-primary">
                      <b>সফল শিক্ষার্থী</b>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">শিক্ষার্থী</div>
            </div>
          </div>
        </motion.div>

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
                    <Link href="#">বিস্তারিত দেখুন <ArrowUpRightFromSquare size={14} className="ml-2"/></Link>
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


        <FloatingMenu />

      </div>
    </div>
  );
}


export default CoursesPage;
