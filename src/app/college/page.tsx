
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
  School,
  FilePen,
  HandCoins,
  CircleCheck,
  CircleAlert,
  Contact,
  MapPin,
  RectangleEllipsis,
  Landmark,
  University,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CountdownTimer from '@/app/university/dhaka/_components/CountdownTimer';
import FloatingMenu from '@/app/university/dhaka/_components/FloatingMenu';
import PreviousYearCirculars from '@/app/university/dhaka/_components/PreviousYearCirculars';

function CollegePage() {
  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Main Card */}
        <div className="mt-20 sm:mt-24 w-full border border-border bg-card rounded-2xl p-6 sm:p-8 shadow-lg text-center relative animate-fadeInUp">
          <div className="w-24 h-24 absolute -top-12 left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-xl z-10 flex items-center justify-center">
            <School className="h-14 w-14 text-primary" />
          </div>
          <div className="pt-12">
            <div className="text-2xl sm:text-3xl font-bold my-2 text-foreground">
              কলেজ ভর্তি তথ্য
            </div>
            <div className="text-sm text-muted-foreground mb-4">
              (College Admission)
            </div>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              দেশের সেরা কলেজগুলোতে ভর্তির জন্য প্রয়োজনীয় সব তথ্য ও সর্বশেষ আপডেট এখানেই পাবেন।
            </p>
          </div>
          <div className="flex justify-around items-center mb-6 text-sm sm:text-base max-w-md mx-auto">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground">১০০+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">কলেজ</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground">বিভিন্ন</div>
              <div className="text-xs sm:text-sm text-muted-foreground">বিভাগ</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground flex items-center justify-center">
                হাজারো
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="ml-1 cursor-pointer text-primary">
                        <Info size={16} />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-primary/10 text-primary-foreground border-primary">
                      <b>প্রতি বছর আসন সংখ্যা পরিবর্তিত হয়</b>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">আসন</div>
            </div>
          </div>
          <Button asChild className="transition-transform hover:scale-105">
            <Link
                href="#Info"
            >
                <Info size={16} /> মূল তথ্য
            </Link>
          </Button>
        </div>

        {/* Link List */}
        <div id="Links" className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative">
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">গুরুত্বপূর্ণ লিঙ্ক</div>
            </div>
            <Table className="border-dotted border-border/50 border-[1px]">
                <TableBody>
                    <TableRow>
                        <TableCell className="text-center"><Link href="#Circular" className="block w-full hover:bg-accent p-2 rounded-md">সার্কুলার</Link></TableCell>
                        <TableCell className="text-center"><Link href="/question-bank" className="block w-full hover:bg-accent p-2 rounded-md">প্রশ্নব্যাংক</Link></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-center"><Link href="http://xiclassadmission.gov.bd/" target="_blank" rel="noreferrer noopener" className="block w-full hover:bg-accent p-2 rounded-md">মূল ওয়েবসাইট</Link></TableCell>
                        <TableCell className="text-center"><Link href="http://xiclassadmission.gov.bd/" target="_blank" rel="noreferrer noopener" className="block w-full hover:bg-accent p-2 rounded-md">ভর্তি ওয়েবসাইট</Link></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

        {/* Countdown Timer */}
        <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
            <CountdownTimer />
        </div>
        
        {/* Circular */}
        <div id="Circular" className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative">
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">সার্কুলার</div>
            </div>
            <div className="text-center">
                <span className="text-lg"><b>সম্পূর্ণ সার্কুলার</b></span><br/>
                <span className="text-muted-foreground text-sm">(⚠ <b>নোট:</b> সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারেন।)</span>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-5 justify-center">
                <Button asChild className="bg-primary text-primary-foreground flex-1 min-w-[150px] hover:bg-primary/90 transition-transform hover:scale-105">
                    <a href="#" target="_blank"><Download size={16} className="mr-2"/> ডাউনলোড করুন</a>
                </Button>
                <PreviousYearCirculars />
            </div>
        </div>
        
        {/* Info Section */}
        <div id="Info" className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative text-left">
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">তথ্যভান্ডার</div>
            </div>
            
            <h5 id="Apply" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><FilePen className="mr-2"/> আবেদন</h5>
            <span className="text-base"><b>➜ আবেদন শুরুঃ</b> ...<br/>
            <b>➜ আবেদন শেষঃ</b> ...</span>
            <div className="my-2">
              <b><HandCoins className="inline-block mr-2" />আবেদন ফিঃ</b> ...
            </div>

            <hr className="my-2 border-border/50" />

             <div className="text-base">
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='http://xiclassadmission.gov.bd/' target="_blank" className="text-primary hover:underline">xiclassadmission.gov.bd <ArrowUpRightFromSquare size={11} className="inline-block"/></a><br/><br/>
                
                ✔ <b><u>আবেদনের যোগ্যতাঃ</u></b>
                <hr className="my-1 border-border/50" />
                <p>সাধারণত এসএসসি পরীক্ষার ফলাফলের উপর ভিত্তি করে আবেদন করতে হয়। বিস্তারিত সার্কুলারে পাবেন।</p>
            </div>
            <hr className="my-2 border-border/50" />
            
            <h5 id="AdmitCard" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Contact className="mr-2"/> প্রবেশপত্র</h5>
            <span className="text-base">সাধারণত কলেজ ভর্তিতে আলাদা প্রবেশপত্র থাকে না। আবেদন প্রক্রিয়া সম্পন্ন হলে একটি আবেদন কপি দেওয়া হয়, সেটিই প্রমাণ।</span>
            
            <h5 id="ExamDate" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Timer className="mr-2"/> ভর্তির সময়কাল</h5>
             <span className="text-base">ভর্তির তারিখ ও সময়সূচী সার্কুলারে উল্লেখ করা থাকে।</span>
            <hr className="my-2 border-border/50"/>
            <div className="border border-border/80 p-3 text-center rounded-md">
            সব কলেজের <b>ভর্তির তারিখ</b> জানতে ভিজিট করুন <b><a href='http://xiclassadmission.gov.bd/' target="_blank" className="text-primary hover:underline">একাদশ শ্রেণি ভর্তি ওয়েবসাইট <ArrowUpRightFromSquare size={11} className="inline-block"/></a></b>
            </div>

             <h5 id="Result" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><BarChartBig className="mr-2"/> ভর্তির ফলাফল</h5>
             <span className="text-base">● <b>ফলাফল প্রকাশ:</b> আবেদন প্রক্রিয়া শেষে নির্ধারিত তারিখে ফলাফল প্রকাশিত হয়।
                <hr className="my-1 border-border/50" />
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='http://xiclassadmission.gov.bd/' target="_blank" className="text-primary hover:underline">xiclassadmission.gov.bd <ArrowUpRightFromSquare size={11} className="inline-block"/></a>
            </span>
        </div>

        {/* Floating Menu */}
        <FloatingMenu />

      </div>
    </div>
  );
}

export default CollegePage;
