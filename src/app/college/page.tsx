
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
    <div className="font-bengali bg-background my-[30px]">
      <div className="container mx-auto px-4">
        {/* Main Card */}
        <div className="mt-[25px] sm:mt-[70px] w-full border border-border bg-card rounded-2xl p-[30px_30px_20px_20px] sm:p-[25px_15px] shadow-lg text-center relative">
          <div className="w-[100px] h-[100px] absolute top-[-45px] left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-xl z-10 flex items-center justify-center">
            <School className="h-16 w-16 text-primary" />
          </div>
          <br />
          <br />
          <div className="text-2xl font-bold my-[10px] mx-0 text-foreground">
            কলেজ ভর্তি তথ্য
          </div>
          <div className="text-[15px] text-muted-foreground mb-[15px]">
            (College Admission)
          </div>
          <div className="text-[15px] text-muted-foreground mb-5 leading-relaxed">
            দেশের সেরা কলেজগুলোতে ভর্তির জন্য প্রয়োজনীয় তথ্য ও সর্বশেষ আপডেট এখানে পাওয়া যাবে।
          </div>
          <div className="flex justify-around mb-5">
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">১০০+</div>
              <div className="text-[13px] text-muted-foreground">কলেজ</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">বিভিন্ন</div>
              <div className="text-[13px] text-muted-foreground">বিভাগ</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-foreground flex items-center">
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
              <div className="text-[13px] text-muted-foreground">আসন</div>
            </div>
          </div>
          <Link
            href="#Info"
            className="inline-flex items-center gap-2 px-[15px] py-[6px] bg-primary text-primary-foreground border border-primary rounded-lg text-[13px] shadow-lg transition-all ease-in-out duration-300 hover:bg-background hover:text-primary"
          >
            <Info size={14} /> মূল তথ্য
          </Link>
        </div>

        {/* Link List */}
        <div id="Links" className="mt-2.5 w-full border border-border bg-card rounded-2xl p-[17px_15px_0_15px] shadow-lg text-center relative">
            <div className="flex justify-center">
                <div className="inline-block px-[25px] py-[9px] bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base mb-3 font-bold shadow-md">গুরুত্বপূর্ণ কিছু লিংক একত্রে</div>
            </div>
            <Table className="border-dotted border-border/50 border-[1px]">
                <TableBody>
                    <TableRow>
                        <TableCell className="text-center"><Link href="#Circular">সার্কুলার</Link></TableCell>
                        <TableCell className="text-center"><Link href="#QuestionBank">প্রশ্নব্যাংক</Link></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-center"><Link href="http://xiclassadmission.gov.bd/" target="_blank" rel="noreferrer noopener">মূল ওয়েবসাইট</Link></TableCell>
                        <TableCell className="text-center"><Link href="http://xiclassadmission.gov.bd/" target="_blank" rel="noreferrer noopener">এডমিশন ওয়েবসাইট</Link></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

        {/* Countdown Timer */}
        <div className="mt-2.5 w-full border border-border bg-card rounded-2xl p-[17px_15px] shadow-lg relative">
            <CountdownTimer />
        </div>
        
        {/* Circular */}
        <div id="Circular" className="mt-2.5 w-full border border-border bg-card rounded-2xl p-[17px] shadow-lg text-center relative">
            <div className="flex justify-center">
                <div className="inline-block px-[25px] py-[9px] bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base mb-3 font-bold shadow-md">সার্কুলার</div>
            </div>
            <div className="text-center">
                <span><b>সম্পূর্ণ সার্কুলার</b></span><br/>
                <span className="text-muted-foreground">(⚠ <b>নোট:</b> সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারো।)</span>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-5">
                <Button asChild className="bg-primary text-primary-foreground flex-1 min-w-[150px] hover:bg-primary/90">
                    <a href="#" target="_blank"><Download size={16} className="mr-2"/> ডাউনলোড করুন</a>
                </Button>
                <PreviousYearCirculars />
            </div>
        </div>
        
        {/* Info Section */}
        <div id="Info" className="mt-2.5 w-full border border-border bg-card rounded-2xl p-[17px] shadow-lg relative text-left">
            <div className="flex justify-center">
                <div className="inline-block px-[25px] py-[9px] bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base mb-3 font-bold shadow-md">তথ্যভান্ডার</div>
            </div>
            
            <h5 id="Apply" className="bg-primary/10 text-primary rounded-xl p-3 my-[15px] text-center text-lg font-bold flex items-center justify-center"><FilePen className="mr-2"/> আবেদন</h5>
            <span><b>➜ আবেদন শুরুঃ</b> ...<br/>
            <b>➜ আবেদন শেষঃ</b> ...</span>
            <div className="my-2">
              <b><HandCoins className="inline-block mr-2" />আবেদন ফিঃ</b> ...
            </div>

            <hr className="my-2 border-border/50" />

             <div>
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='http://xiclassadmission.gov.bd/' target="_blank" className="text-primary">http://xiclassadmission.gov.bd/ <ArrowUpRightFromSquare size={11} className="inline-block"/></a><br/><br/>
                
                ✔ <b><u>আবেদনের যোগ্যতাঃ</u></b>
                <hr className="my-1 border-border/50" />
                <p>সাধারণত এসএসসি পরীক্ষার ফলাফলের উপর ভিত্তি করে আবেদন করতে হয়। বিস্তারিত সার্কুলারে পাওয়া যাবে।</p>
            </div>
            <hr className="my-2 border-border/50" />
            
            <h5 id="AdmitCard" className="bg-primary/10 text-primary rounded-xl p-3 my-[15px] mt-4 text-center text-lg font-bold flex items-center justify-center"><Contact className="mr-2"/> প্রবেশপত্র</h5>
            <span>সাধারণত কলেজ ভর্তিতে আলাদা প্রবেশপত্র থাকে না। আবেদন প্রক্রিয়া সম্পন্ন হলে একটি আবেদন কপি দেওয়া হয়।</span>
            
            <h5 id="ExamDate" className="bg-primary/10 text-primary rounded-xl p-3 my-[15px] mt-4 text-center text-lg font-bold flex items-center justify-center"><Timer className="mr-2"/> ভর্তির সময়কাল</h5>
             <span>ভর্তির তারিখ ও সময়সূচী সার্কুলারে উল্লেখ থাকে।</span>
            <hr className="my-2 border-border/50"/>
            <div className="border border-border/80 p-3 text-center rounded-md">
            সকল কলেজের <b>ভর্তির তারিখ</b> জানতে ভিজিট করো <b><a href='http://xiclassadmission.gov.bd/' target="_blank" className="text-primary">একাদশ শ্রেণি ভর্তি ওয়েবসাইট <ArrowUpRightFromSquare size={11} className="inline-block"/></a></b>
            </div>

             <h5 id="Result" className="bg-primary/10 text-primary rounded-xl p-3 my-[15px] mt-4 text-center text-lg font-bold flex items-center justify-center"><BarChartBig className="mr-2"/> ভর্তির ফলাফল</h5>
             <span>● <b>ফলাফল প্রকাশ:</b> আবেদন প্রক্রিয়া শেষে নির্ধারিত তারিখে ফলাফল প্রকাশিত হয়।
                <hr className="my-1 border-border/50" />
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='http://xiclassadmission.gov.bd/' target="_blank" className="text-primary">http://xiclassadmission.gov.bd/ <ArrowUpRightFromSquare size={11} className="inline-block"/></a>
            </span>
        </div>

        {/* Floating Menu */}
        <FloatingMenu />

      </div>
    </div>
  );
}

export default CollegePage;
