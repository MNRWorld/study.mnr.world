
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
  BarChartBig,
  CalendarDays,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CountdownTimer from '@/app/university/dhaka/_components/CountdownTimer';
import FloatingMenu from '@/app/university/dhaka/_components/FloatingMenu';
import PreviousYearCirculars from '@/app/university/dhaka/_components/PreviousYearCirculars';

function CalendarPage() {
  return (
    <div className="font-bengali bg-background my-[30px]">
      <div className="container mx-auto px-4">
        {/* Main Card */}
        <div className="mt-[70px] w-full border border-border bg-card rounded-2xl p-6 sm:p-8 shadow-lg text-center relative">
          <div className="w-[100px] h-[100px] absolute top-[-50px] left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-xl z-10 flex items-center justify-center">
            <CalendarDays className="h-16 w-16 text-primary" />
          </div>
          <div className="pt-12">
            <div className="text-2xl sm:text-3xl font-bold my-2 text-foreground">
              এডমিশন ক্যালেন্ডার
            </div>
            <div className="text-sm text-muted-foreground mb-4">
              (Admission Calendar)
            </div>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              সকল বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার তারিখ, সময় ও সর্বশেষ আপডেট পেতে আমাদের সাথে থাকুন।
            </p>
          </div>
          <div className="flex justify-around mb-6 text-sm sm:text-base">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground">৫০+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">বিশ্ববিদ্যালয়</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground">১০০+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">ভর্তি পরীক্ষা</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground flex items-center">
                লাইভ
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="ml-1 cursor-pointer text-primary">
                        <Info size={16} />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-primary/10 text-primary-foreground border-primary">
                      <b>সময়মত আপডেট করা হয়</b>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">স্ট্যাটাস</div>
            </div>
          </div>
          <Link
            href="#Info"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground border border-primary rounded-lg text-sm shadow-lg transition-all ease-in-out duration-300 hover:bg-background hover:text-primary"
          >
            <Info size={14} /> মূল তথ্য
          </Link>
        </div>

        {/* Countdown Timer */}
        <div className="mt-4 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
            <CountdownTimer />
        </div>

        {/* Info Section */}
        <div id="Info" className="mt-4 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative text-left">
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">সাধারণ তথ্য</div>
            </div>
            
            <h5 id="ExamDate" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Timer className="mr-2"/> পরীক্ষার সময়কাল</h5>
             <div className="border border-border/80 p-3 text-center rounded-md text-sm sm:text-base">
                সকল বিশ্ববিদ্যালয়ের <b>পরীক্ষার তারিখ ও কাউন্টডাউন</b> দেখতে ভিজিট করো <b><a href='https://mnr.world/ac/' target="_blank" className="text-primary">এডমিশন ক্যালেন্ডার <ArrowUpRightFromSquare size={11} className="inline-block"/></a></b>
            </div>

             <h5 id="Result" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><BarChartBig className="mr-2"/> ভর্তি পরীক্ষার ফলাফল</h5>
             <span className="text-sm sm:text-base">● <b>ফলাফল প্রকাশ:</b> সাধারণত ভর্তি পরীক্ষার ১-৪ সপ্তাহের মধ্যে।
                <hr className="my-2 border-border/50" />
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> নিজ নিজ বিশ্ববিদ্যালয়ের ওয়েবসাইটে ফলাফল প্রকাশিত হয়।
            </span>
        </div>

        {/* Floating Menu */}
        <FloatingMenu />

      </div>
    </div>
  );
}

export default CalendarPage;
