
'use client';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';
import {
  Download,
  Info,
  Link as LinkIcon,
  ArrowUpRightFromSquare,
  Timer,
  BarChart3,
  School,
  PenSquare,
  Banknote,
  Ticket,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import CountdownTimer from '@/components/common/CountdownTimer';
import FloatingMenu from '@/components/common/FloatingMenu';
import PreviousYearCirculars from '@/components/common/PreviousYearCirculars';
import { motion } from 'framer-motion';
import PageHeaderCard from '@/components/common/PageHeaderCard';

function CollegePage() {
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
        <PageHeaderCard
            icon={<School className="h-14 w-14 text-primary" />}
            title="কলেজ ভর্তি তথ্য"
            subtitle="College Admission"
            description="দেশের সেরা কলেজগুলোতে ভর্তির জন্য প্রয়োজনীয় সব তথ্য ও সর্বশেষ আপডেট এখানেই পাবেন।"
            stats={[
                { value: "১০০+", label: "কলেজ" },
                { value: "বিভিন্ন", label: "বিভাগ" },
                { value: "হাজারো", label: "আসন", tooltip: "প্রতি বছর আসন সংখ্যা পরিবর্তিত হয়" }
            ]}
            button={{ href: "#Info", label: "মূল তথ্য", icon: <Info size={16} /> }}
        />

        {/* Link List */}
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            id="Links"
            className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative"
        >
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
        
        {/* Circular */}
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            id="Circular"
            className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative"
        >
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
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">তথ্যভান্ডার</div>
            </div>
            
            <h5 id="Apply" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><PenSquare className="mr-2"/> আবেদন</h5>
            <span className="text-base"><b>➜ আবেদন শুরুঃ</b> ...<br/>
            <b>➜ আবেদন শেষঃ</b> ...</span>
            <div className="my-2">
              <b><Banknote className="inline-block mr-2" />আবেদন ফিঃ</b> ...
            </div>

            <hr className="my-2 border-border/50" />

             <div className="text-base">
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='http://xiclassadmission.gov.bd/' target="_blank" className="text-primary hover:underline">xiclassadmission.gov.bd <ArrowUpRightFromSquare size={11} className="inline-block"/></a><br/><br/>
                
                ✔ <b><u>আবেদনের যোগ্যতাঃ</u></b>
                <hr className="my-1 border-border/50" />
                <p>সাধারণত এসএসসি পরীক্ষার ফলাফলের উপর ভিত্তি করে আবেদন করতে হয়। বিস্তারিত সার্কুলারে পাবেন।</p>
            </div>
            <hr className="my-2 border-border/50" />
            
            <h5 id="AdmitCard" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Ticket className="mr-2"/> প্রবেশপত্র</h5>
            <span className="text-base">সাধারণত কলেজ ভর্তিতে আলাদা প্রবেশপত্র থাকে না। আবেদন প্রক্রিয়া সম্পন্ন হলে একটি আবেদন কপি দেওয়া হয়, সেটিই প্রমাণ।</span>
            
            <h5 id="ExamDate" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Timer className="mr-2"/> ভর্তির সময়কাল</h5>
             <span className="text-base">ভর্তির তারিখ ও সময়সূচী সার্কুলারে উল্লেখ করা থাকে।</span>
            <hr className="my-2 border-border/50"/>
            <div className="border border-border/80 p-3 text-center rounded-md">
            সব কলেজের <b>ভর্তির তারিখ</b> জানতে ভিজিট করুন <b><a href='http://xiclassadmission.gov.bd/' target="_blank" className="text-primary hover:underline">একাদশ শ্রেণি ভর্তি ওয়েবসাইট <ArrowUpRightFromSquare size={11} className="inline-block"/></a></b>
            </div>

             <h5 id="Result" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><BarChart3 className="mr-2"/> ভর্তির ফলাফল</h5>
             <span className="text-base">● <b>ফলাফল প্রকাশ:</b> আবেদন প্রক্রিয়া শেষে নির্ধারিত তারিখে ফলাফল প্রকাশিত হয়।
                <hr className="my-1 border-border/50" />
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='http://xiclassadmission.gov.bd/' target="_blank" className="text-primary hover:underline">xiclassadmission.gov.bd <ArrowUpRightFromSquare size={11} className="inline-block"/></a>
            </span>
        </motion.div>

        <FloatingMenu />

      </div>
    </div>
  );
}

export default CollegePage;
