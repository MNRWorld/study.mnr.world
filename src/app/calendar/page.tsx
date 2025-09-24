
'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Download,
  Info,
  Link as LinkIcon,
  ArrowUpRightFromSquare,
  Timer,
  BarChart3,
  CalendarDays,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CountdownTimer from '@/app/university/dhaka/_components/CountdownTimer';
import FloatingMenu from '@/app/university/dhaka/_components/FloatingMenu';
import PreviousYearCirculars from '@/app/university/dhaka/_components/PreviousYearCirculars';
import { motion } from 'framer-motion';

function CalendarPage() {

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
        {/* Main Card */}
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-20 sm:mt-24 w-full border border-border bg-card rounded-2xl p-6 sm:p-8 shadow-lg text-center relative"
        >
          <div className="w-24 h-24 absolute -top-12 left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-xl z-10 flex items-center justify-center">
            <CalendarDays className="h-14 w-14 text-primary" />
          </div>
          <div className="pt-12">
            <div className="text-2xl sm:text-3xl font-bold my-2 text-foreground">
              অ্যাডমিশন ক্যালেন্ডার
            </div>
            <div className="text-sm text-muted-foreground mb-4">
              (Admission Calendar)
            </div>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              সব বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার তারিখ, সময় ও সর্বশেষ আপডেট এক জায়গায় পেয়ে যাবেন।
            </p>
          </div>
          <div className="flex justify-around items-center mb-6 text-sm sm:text-base max-w-md mx-auto">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground">৫০+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">বিশ্ববিদ্যালয়</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground">۱۰۰+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">ভর্তি পরীক্ষা</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground flex items-center justify-center">
                লাইভ
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="ml-1 cursor-pointer text-primary">
                        <Info size={16} />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-primary/10 text-primary-foreground border-primary">
                      <b>সময়মতো আপডেট করা হয়</b>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">স্ট্যাটাস</div>
            </div>
          </div>
          <Button asChild className="transition-transform hover:scale-105">
            <Link
                href="#Info"
            >
                <Info size={16} /> মূল তথ্য
            </Link>
          </Button>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative"
        >
            <CountdownTimer />
        </motion.div>

        {/* Info Section */}
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            id="Info"
            className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative text-left"
        >
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">সাধারণ তথ্য</div>
            </div>
            
            <h5 id="ExamDate" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Timer className="mr-2"/> পরীক্ষার সময়কাল</h5>
             <div className="border border-border/80 p-3 text-center rounded-md text-sm sm:text-base">
                সব বিশ্ববিদ্যালয়ের <b>পরীক্ষার তারিখ ও কাউন্টডাউন</b> দেখতে ভিজিট করুন আমাদের <b><a href='https://mnr.world/ac/' target="_blank" className="text-primary hover:underline">অ্যাডমিশন ক্যালেন্ডার <ArrowUpRightFromSquare size={11} className="inline-block"/></a></b>
            </div>

             <h5 id="Result" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><BarChart3 className="mr-2"/> ভর্তি পরীক্ষার ফলাফল</h5>
             <span className="text-sm sm:text-base">● <b>ফলাফল প্রকাশ:</b> সাধারণত ভর্তি পরীক্ষার ১-৪ সপ্তাহের মধ্যেই ফলাফল প্রকাশিত হয়।
                <hr className="my-2 border-border/50" />
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> প্রতিটি বিশ্ববিদ্যালয়ের নিজস্ব ওয়েবসাইটে ফলাফল পাবেন।
            </span>
        </motion.div>

        {/* Floating Menu */}
        <FloatingMenu />

      </div>
    </div>
  );
}

export default CalendarPage;
