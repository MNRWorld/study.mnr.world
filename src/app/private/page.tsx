
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
  Building,
  FilePen,
  HandCoins,
  CircleCheck,
  CircleAlert,
  Contact,
  MapPin,
  RectangleEllipsis,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CountdownTimer from '@/app/university/dhaka/_components/CountdownTimer';
import FloatingMenu from '@/app/university/dhaka/_components/FloatingMenu';
import PreviousYearCirculars from '@/app/university/dhaka/_components/PreviousYearCirculars';

function PrivatePage() {
  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Main Card */}
        <div className="mt-20 sm:mt-24 w-full border border-border bg-card rounded-2xl p-6 sm:p-8 shadow-lg text-center relative animate-fadeInUp">
          <div className="w-24 h-24 absolute -top-12 left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-xl z-10 flex items-center justify-center">
            <Building className="h-14 w-14 text-primary" />
          </div>
          <div className="pt-12">
            <div className="text-2xl sm:text-3xl font-bold my-2 text-foreground">
              প্রাইভেট বিশ্ববিদ্যালয় ভর্তি
            </div>
            <div className="text-sm text-muted-foreground mb-4">
              (Private University Admission)
            </div>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
            দেশের শীর্ষস্থানীয় প্রাইভেট বিশ্ববিদ্যালয়গুলোতে ভর্তির সর্বশেষ তথ্য, যোগ্যতা ও পরীক্ষার মানবণ্টন সম্পর্কে জানুন।
            </p>
          </div>
          <div className="flex justify-around items-center mb-6 text-sm sm:text-base max-w-md mx-auto">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground">৮০+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">বিশ্ববিদ্যালয়</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground">বিভিন্ন</div>
              <div className="text-xs sm:text-sm text-muted-foreground">বিষয়</div>
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
                      <b>আসন সংখ্যা বিশ্ববিদ্যালয়ভেদে ভিন্ন</b>
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
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">গুরুত্বপূর্ণ কিছু লিংক একত্রে</div>
            </div>
            <Table className="border-dotted border-border/50 border-[1px]">
                <TableBody>
                    <TableRow>
                        <TableCell className="text-center"><Link href="#Circular" className="block w-full hover:bg-accent p-2 rounded-md">সার্কুলার</Link></TableCell>
                        <TableCell className="text-center"><Link href="/question-bank" className="block w-full hover:bg-accent p-2 rounded-md">প্রশ্নব্যাংক</Link></TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell className="text-center" colSpan={2}><Link href="https://www.ugc.gov.bd/site/view/universities" target="_blank" className="block w-full hover:bg-accent p-2 rounded-md">সকল অনুমোদিত প্রাইভেট বিশ্ববিদ্যালয়ের তালিকা</Link></TableCell>
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
                <span className="text-lg"><b>বিভিন্ন বিশ্ববিদ্যালয়ের সার্কুলার</b></span><br/>
                <span className="text-muted-foreground text-sm">(⚠ <b>নোট:</b> নিজ নিজ বিশ্ববিদ্যালয়ের ওয়েবসাইটে সর্বশেষ সার্কুলার পাওয়া যাবে।)</span>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-5 justify-center">
                <Button asChild className="bg-primary text-primary-foreground flex-1 min-w-[150px] hover:bg-primary/90 transition-transform hover:scale-105">
                    <a href="#" target="_blank"><Download size={16} className="mr-2"/> নমুনা ডাউনলোড</a>
                </Button>
            </div>
        </div>
        
        {/* Info Section */}
        <div id="Info" className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative text-left">
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">তথ্যভান্ডার</div>
            </div>
            
            <h5 id="Apply" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><FilePen className="mr-2"/> আবেদন</h5>
            <span className="text-base"><b>➜ আবেদন শুরু ও শেষঃ</b> প্রতিটি বিশ্ববিদ্যালয়ের নিজস্ব ওয়েবসাইটে ভিন্ন ভিন্ন সময়ে আবেদন গ্রহণ করা হয়।</span>
            <div className="my-2">
              <b><HandCoins className="inline-block mr-2" />আবেদন ফিঃ</b> বিশ্ববিদ্যালয়ভেদে ভিন্ন।
            </div>
            <hr className="my-2 border-border/50" />

             <div className="text-base">
                ✔ <b><u>আবেদনের যোগ্যতাঃ</u></b>
                <hr className="my-1 border-border/50" />
                <p>UGC কর্তৃক নির্ধারিত ন্যূনতম যোগ্যতার প্রয়োজন হয়। তবে অনেক বিশ্ববিদ্যালয় এর চেয়ে বেশি যোগ্যতা চাইতে পারে। বিস্তারিত জানতে নির্দিষ্ট বিশ্ববিদ্যালয়ের ওয়েবসাইট ভিজিট করুন।</p>
            </div>
            <hr className="my-2 border-border/50" />
            
            <h5 id="ExamDate" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Timer className="mr-2"/> পরীক্ষার সময়কাল</h5>
             <span className="text-base">প্রতিটি বিশ্ববিদ্যালয়ের নিজস্ব সময়সূচী অনুযায়ী পরীক্ষা অনুষ্ঠিত হয়।</span>
            <hr className="my-2 border-border/50"/>

            <h5 id="Location" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><MapPin className="mr-2"/> ভর্তি পরীক্ষার কেন্দ্র</h5>
             <span className="text-base">সাধারণত বিশ্ববিদ্যালয়ের নিজস্ব ক্যাম্পাসে পরীক্ষা অনুষ্ঠিত হয়।</span>

            <div id="MarkDistributionAndOthers"></div>
            <h5 className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><RectangleEllipsis className="mr-2"/> মানবণ্টন ও অন্যান্য তথ্য</h5>
            <p className="text-base">মানবণ্টন, সিলেবাস ও পরীক্ষার পদ্ধতি বিশ্ববিদ্যালয়ভেদে সম্পূর্ণ ভিন্ন। সঠিক তথ্যের জন্য পছন্দের বিশ্ববিদ্যালয়ের ওয়েবসাইট ভিজিট করুন।</p>

        </div>

        {/* Floating Menu */}
        <FloatingMenu />

      </div>
    </div>
  );
}

export default PrivatePage;
