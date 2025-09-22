
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
    <div className="font-bengali bg-background my-[30px]">
      <div className="container mx-auto px-4">
        {/* Main Card */}
        <div className="mt-[25px] sm:mt-[70px] w-full border border-border bg-card rounded-2xl p-[30px_30px_20px_20px] sm:p-[25px_15px] shadow-lg text-center relative">
          <div className="w-[100px] h-[100px] absolute top-[-45px] left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-xl z-10 flex items-center justify-center">
            <Building className="h-16 w-16 text-primary" />
          </div>
          <br />
          <br />
          <div className="text-2xl font-bold my-[10px] mx-0 text-foreground">
            প্রাইভেট বিশ্ববিদ্যালয় ভর্তি
          </div>
          <div className="text-[15px] text-muted-foreground mb-[15px]">
            (Private University Admission)
          </div>
          <div className="text-[15px] text-muted-foreground mb-5 leading-relaxed">
          দেশের শীর্ষস্থানীয় প্রাইভেট বিশ্ববিদ্যালয়গুলোতে ভর্তির সর্বশেষ তথ্য, যোগ্যতা ও পরীক্ষার মানবন্টন সম্পর্কে জানুন।
          </div>
          <div className="flex justify-around mb-5">
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">৮০+</div>
              <div className="text-[13px] text-muted-foreground">বিশ্ববিদ্যালয়</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">বিভিন্ন</div>
              <div className="text-[13px] text-muted-foreground">বিষয়</div>
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
                      <b>আসন সংখ্যা বিশ্ববিদ্যালয়ভেদে ভিন্ন</b>
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
                        <TableCell className="text-center" colSpan={2}><Link href="https://www.ugc.gov.bd/site/view/universities" target="_blank">সকল অনুমোদিত প্রাইভেট বিশ্ববিদ্যালয়ের তালিকা</Link></TableCell>
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
                <span><b>বিভিন্ন বিশ্ববিদ্যালয়ের সার্কুলার</b></span><br/>
                <span className="text-muted-foreground">(⚠ <b>নোট:</b> নিজ নিজ বিশ্ববিদ্যালয়ের ওয়েবসাইটে সর্বশেষ সার্কুলার পাওয়া যাবে।)</span>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-5">
                <Button asChild className="bg-primary text-primary-foreground flex-1 min-w-[150px] hover:bg-primary/90">
                    <a href="#" target="_blank"><Download size={16} className="mr-2"/> নমুনা ডাউনলোড</a>
                </Button>
            </div>
        </div>
        
        {/* Info Section */}
        <div id="Info" className="mt-2.5 w-full border border-border bg-card rounded-2xl p-[17px] shadow-lg relative text-left">
            <div className="flex justify-center">
                <div className="inline-block px-[25px] py-[9px] bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base mb-3 font-bold shadow-md">তথ্যভান্ডার</div>
            </div>
            
            <h5 id="Apply" className="bg-primary/10 text-primary rounded-xl p-3 my-[15px] text-center text-lg font-bold flex items-center justify-center"><FilePen className="mr-2"/> আবেদন</h5>
            <span><b>➜ আবেদন শুরু ও শেষঃ</b> প্রতিটি বিশ্ববিদ্যালয়ের নিজস্ব ওয়েবসাইটে ভিন্ন ভিন্ন সময়ে আবেদন গ্রহণ করা হয়।</span>
            <div className="my-2">
              <b><HandCoins className="inline-block mr-2" />আবেদন ফিঃ</b> বিশ্ববিদ্যালয়ভেদে ভিন্ন।
            </div>
            <hr className="my-2 border-border/50" />

             <div>
                ✔ <b><u>আবেদনের যোগ্যতাঃ</u></b>
                <hr className="my-1 border-border/50" />
                <p>UGC কর্তৃক নির্ধারিত ন্যূনতম যোগ্যতার প্রয়োজন হয়। তবে অনেক বিশ্ববিদ্যালয় এর চেয়ে বেশি যোগ্যতা চাইতে পারে। বিস্তারিত জানতে নির্দিষ্ট বিশ্ববিদ্যালয়ের ওয়েবসাইট ভিজিট করুন।</p>
            </div>
            <hr className="my-2 border-border/50" />
            
            <h5 id="ExamDate" className="bg-primary/10 text-primary rounded-xl p-3 my-[15px] mt-4 text-center text-lg font-bold flex items-center justify-center"><Timer className="mr-2"/> পরীক্ষার সময়কাল</h5>
             <span>প্রতিটি বিশ্ববিদ্যালয়ের নিজস্ব সময়সূচী অনুযায়ী পরীক্ষা অনুষ্ঠিত হয়।</span>
            <hr className="my-2 border-border/50"/>

            <h5 id="Location" className="bg-primary/10 text-primary rounded-xl p-3 my-[15px] mt-4 text-center text-lg font-bold flex items-center justify-center"><MapPin className="mr-2"/> ভর্তি পরীক্ষার কেন্দ্র</h5>
             <span>সাধারণত বিশ্ববিদ্যালয়ের নিজস্ব ক্যাম্পাসে পরীক্ষা অনুষ্ঠিত হয়।</span>

            <div id="MarkDistributionAndOthers"></div>
            <h5 className="bg-primary/10 text-primary rounded-xl p-3 my-[15px] mt-4 text-center text-lg font-bold flex items-center justify-center"><RectangleEllipsis className="mr-2"/> মানবন্টন ও অন্যান্য তথ্য</h5>
            <p>মানবন্টন, সিলেবাস ও পরীক্ষার পদ্ধতি বিশ্ববিদ্যালয়ভেদে সম্পূর্ণ ভিন্ন। সঠিক তথ্যের জন্য পছন্দের বিশ্ববিদ্যালয়ের ওয়েবসাইট ভিজিট করুন।</p>

        </div>

        {/* Floating Menu */}
        <FloatingMenu />

      </div>
    </div>
  );
}

export default PrivatePage;
