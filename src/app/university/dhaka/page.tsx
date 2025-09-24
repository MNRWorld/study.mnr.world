
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
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Download,
  Info,
  ChevronRight,
  File,
  PenSquare,
  Banknote,
  CircleCheck,
  Link as LinkIcon,
  ArrowUpRightFromSquare,
  CircleAlert,
  Ticket,
  Timer,
  MapPin,
  BarChart3,
  Landmark,
  University,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FloatingMenu from './_components/FloatingMenu';
import CountdownTimer from './_components/CountdownTimer';
import PreviousYearCirculars from './_components/PreviousYearCirculars';
import { motion } from 'framer-motion';

function DhakaUniversityPage() {

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
          <div className="text-sm text-foreground absolute top-[-20px] sm:top-[-20px] left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-1">
            <b>পাবলিক</b>
          </div>
          <div className="w-24 h-24 absolute -top-12 left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-xl z-10 flex items-center justify-center">
            <Image
              src="https://study.mnr.world/wp-content/uploads/2025/05/DU-Logo.png"
              alt="DU Logo"
              width={100}
              height={100}
              className="p-1 w-full h-full object-contain rounded-2xl"
            />
          </div>
          <div className="pt-12">
            <div className="text-2xl sm:text-3xl font-bold my-2 text-foreground">
              ঢাকা বিশ্ববিদ্যালয়
            </div>
            <div className="text-sm text-muted-foreground mb-4">
              (University of Dhaka)
            </div>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              প্রাচ্যের অক্সফোর্ড খ্যাত ঢাকা বিশ্ববিদ্যালয়, বাংলাদেশের স্বপ্নদ্রষ্টাদের সূতিকাগার। এর করিডোরে হেঁটেছে ইতিহাস, জন্মেছে অজস্র জ্ঞানতাপস।
            </p>
          </div>
          <div className="flex justify-around items-center mb-6 text-sm sm:text-base max-w-md mx-auto">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground">১৩টি</div>
              <div className="text-xs sm:text-sm text-muted-foreground">অনুষদ</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground">৮৩টি</div>
              <div className="text-xs sm:text-sm text-muted-foreground">বিষয়</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground flex items-center justify-center">
                ৬,১৩০+
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="ml-1 cursor-pointer text-primary">
                        <Info size={16} />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-primary/10 text-primary-foreground border-primary">
                      <b>'ক' ইউনিট:</b> ১৮৯৬
                      <br />
                      <b>'খ' ইউনিট:</b> ২৯৩৪
                      <br />
                      <b>'গ' ইউনিট:</b> ১০৫০
                      <br />
                      <b>'চ' ইউনিট:</b> ১৩০
                      <br />
                      <b>IBA ইউনিট:</b> ১২০
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
        </motion.div>

        {/* Link List */}
        <motion.div
          id="Links"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative"
        >
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">গুরুত্বপূর্ণ লিঙ্ক</div>
            </div>
            <Table className="border-dotted border-border/50 border-[1px]">
                <TableBody>
                    <TableRow>
                        <TableCell className="text-center"><Link href="#Circular" className="block w-full hover:bg-accent p-2 rounded-md">সার্কুলার</Link></TableCell>
                        <TableCell className="text-center"><Link href="#QuestionBank" className="block w-full hover:bg-accent p-2 rounded-md">প্রশ্নব্যাংক</Link></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-center"><Link href="https://www.du.ac.bd/" target="_blank" rel="noreferrer noopener" className="block w-full hover:bg-accent p-2 rounded-md">মূল ওয়েবসাইট</Link></TableCell>
                        <TableCell className="text-center"><Link href="https://admission.eis.du.ac.bd/bn/408b7c8ad06e4d9954fa2d948a01f508" target="_blank" rel="noreferrer noopener" className="block w-full hover:bg-accent p-2 rounded-md">ভর্তি ওয়েবসাইট</Link></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-center" colSpan={2}><Link href="https://admission.eis.du.ac.bd/bn/408b7c8ad06e4d9954fa2d948a01f508" target="_blank" className="block w-full hover:bg-accent p-2 rounded-md">আবেদন <b>|</b> প্রবেশপত্র <b>|</b> ফলাফল</Link></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-center" colSpan={2}><Link href="https://collegeadmission.eis.du.ac.bd/en/b45de047fde9788c53fradae3cfe8e88dc02" target="_blank" className="block w-full hover:bg-accent p-2 rounded-md">অধিভুক্ত কলেজ ভর্তি</Link></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </motion.div>

        {/* History and Maps */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
        <Accordion type="multiple" className="w-full mt-8 space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                <AccordionTrigger className="p-4 sm:p-5 w-full flex justify-between items-center text-lg font-bold cursor-pointer hover:no-underline">
                <span>এক নজরে ঢাকা বিশ্ববিদ্যালয়</span>
                </AccordionTrigger>
                <AccordionContent className="p-4 sm:p-5 border-t border-border/50 text-base text-muted-foreground">
                    <p><b>ঢাকা বিশ্ববিদ্যালয় (ঢাবি)</b> বাংলাদেশের প্রথম এবং সবচেয়ে प्रतिष्ठित বিশ্ববিদ্যালয়, যা ১৯২১ সালের ১ জুলাই প্রতিষ্ঠিত হয়। এটি ব্রিটিশ ভারতের অক্সব্রিজ মডেলের আদলে গঠিত হয়েছিল এবং শুরুতে মাত্র তিনটি অনুষদ (কলা, বিজ্ঞান ও আইন) নিয়ে যাত্রা শুরু করে।</p>
                    <p className="mt-2">১৯০৫ সালের বঙ্গভঙ্গের পর পূর্ব বাংলা ও আসামের মুসলিম সমাজে উচ্চশিক্ষার যে আকাঙ্ক্ষা তৈরি হয়েছিল, তার ফলশ্রুতিতেই এই বিশ্ববিদ্যালয় প্রতিষ্ঠা পায়। স্যার সলিমুল্লাহ, নবাব নওয়াব আলী চৌধুরী এবং এ. কে. ফজলুল হকের মতো নেতাদের অক্লান্ত পরিশ্রমে, ১৯১২ সালে ভাইসরয় লর্ড হার্ডিঞ্জ বিশ্ববিদ্যালয় প্রতিষ্ঠার প্রতিশ্রুতি দেন।</p>
                    <p className="mt-2">আজ, ঢাকা বিশ্ববিদ্যালয় ৪৬,০০০-এর বেশি শিক্ষার্থী এবং ২,০০০-এর বেশি শিক্ষক নিয়ে বাংলাদেশের বৃহত্তম পাবলিক গবেষণা বিশ্ববিদ্যালয়। এটি দেশের শিক্ষা, সংস্কৃতি এবং মুক্তচিন্তার বিকাশে নেতৃত্ব দিয়ে চলেছে।</p>
                    <hr className="my-3 border-border/50" />
                    <b>তথ্যসূত্র</b><br/>
                    ০১. <a href="https://bn.wikipedia.org/wiki/%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE_%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A6%AF%E0%A6%BC" target="_blank" className="text-primary hover:underline">
                    উইকিপিডিয়া (ঢাকা বিশ্ববিদ্যালয়)</a>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                <AccordionTrigger className="p-4 sm:p-5 w-full flex justify-between items-center text-lg font-bold cursor-pointer hover:no-underline">
                <span>ক্যাম্পাসের গুগল ম্যাপ লোকেশন</span>
                </AccordionTrigger>
                <AccordionContent className="p-4 sm:p-5 border-t border-border/50 text-base text-muted-foreground">
                     <Accordion type="multiple" className="w-full">
                        <AccordionItem value="sub-1">
                            <AccordionTrigger className="hover:no-underline flex items-center justify-between"><Landmark className="mr-2"/>মসজিদ</AccordionTrigger>
                            <AccordionContent>
                               <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="text-center">মুসা খান মসজিদ</TableCell>
                                            <TableCell className="text-center"><Link href="https://maps.app.goo.gl/A5Pt2z5yceEQ641y7?g_st=atm" target="_blank" rel="noreferrer noopener" className="text-primary hover:underline">[লিঙ্ক]</Link></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="sub-2">
                             <AccordionTrigger className="hover:no-underline flex items-center justify-between"><University className="mr-2"/>প্রশাসনিক ভবন</AccordionTrigger>
                            <AccordionContent>
                               <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="text-center">রেজিস্ট্রার বিল্ডিং</TableCell>
                                            <TableCell className="text-center"><Link href="https://maps.app.goo.gl/your-link-here" target="_blank" rel="noreferrer noopener" className="text-primary hover:underline">[লিঙ্ক]</Link></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
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
          id="Circular"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative"
        >
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">সার্কুলার</div>
            </div>
            <div className="text-center">
                <span className="text-lg"><b>HSC-24 ব্যাচের সার্কুলার</b></span><br/>
                <span className="text-muted-foreground text-sm">(⚠ <b>নোট:</b> HSC-25 এর সার্কুলার এখনও প্রকাশিত হয়নি। আপাতত এটি দেখে আইডিয়া নিতে পারেন।)</span>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-5 justify-center">
                <Button asChild className="bg-primary text-primary-foreground flex-1 min-w-[150px] hover:bg-primary/90 transition-transform hover:scale-105">
                    <a href="https://t.me/Study_on_Telegram/13215" target="_blank"><Download size={16} className="mr-2"/> ডাউনলোড করুন</a>
                </Button>
                <PreviousYearCirculars />
            </div>
        </motion.div>


        {/* Question Bank */}
        <motion.div
          id="QuestionBank"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative"
        >
             <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">প্রশ্নব্যাংক</div>
            </div>
            <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto bg-muted/50">
                    <TabsTrigger value="tab1">"ক" ইউনিট</TabsTrigger>
                    <TabsTrigger value="tab2">"খ" ইউনিট</TabsTrigger>
                    <TabsTrigger value="tab3">"গ" ইউনিট</TabsTrigger>
                    <TabsTrigger value="tab4">"চ" ইউনিট</TabsTrigger>
                    <TabsTrigger value="tab5">DU IBA (বিশেষ)</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                    <Accordion type="multiple" className="w-full text-left">
                        <AccordionItem value="qb-a-1" className="border-border rounded-2xl mt-1.5 hover:bg-accent/50">
                            <AccordionTrigger className="p-3 text-lg font-bold hover:no-underline"><File className="inline-block mr-2" /> সালভিত্তিক প্রশ্নব্যাংক</AccordionTrigger>
                            <AccordionContent className="p-4 pt-0 text-muted-foreground text-base">
                                ● <a href="https://t.me/PDFHour/10357" target="_blank" className="text-primary hover:underline">আসপেক্ট “ক” ইউনিট প্রশ্নব্যাংক</a><br/>
                                ● <a href="https://t.me/PDFHour/10357" target="_blank" className="text-primary hover:underline">উদ্ভাস “ক” ইউনিট প্রশ্নব্যাংক</a><br/>
                                <b> 🔰 সকল সালের প্রশ্ন একত্রে</b><br/>
                                ● <a href="https://t.me/PDFHour/10297" target="_blank" className="text-primary hover:underline">Question of 1995-96</a><br/>
                               ... many more links
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="qb-a-2" className="border-border rounded-2xl mt-1.5 hover:bg-accent/50">
                            <AccordionTrigger className="p-3 text-lg font-bold hover:no-underline"><File className="inline-block mr-2" /> অধ্যায়ভিত্তিক প্রশ্নব্যাংক</AccordionTrigger>
                            <AccordionContent className="p-4 pt-0 text-muted-foreground text-base">
                                ● <a href="https://t.me/PDFHour/10285" target="_blank" className="text-primary hover:underline">রেটিনা ঢাবি “ক” ইউনিট প্রশ্নব্যাংক</a><br/><br/>
                                <b> 🔰 সহায়ক বই</b><br/>
                                ● <a href="https://t.me/PDFHour/10214" target="_blank" className="text-primary hover:underline">উদ্ভাস ভার্সিটি “ক” প্রশ্নব্যাংক</a><br/>
                                ● <a href="https://t.me/PDFHour/10478" target="_blank" className="text-primary hover:underline">উদ্ভাস ভার্সিটি “ক” প্রিপারেশন বুক</a>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </TabsContent>
                <TabsContent value="tab2">
                    <p className="text-muted-foreground p-4">"খ" ইউনিট প্রশ্নব্যাংক এখানে যুক্ত করা হবে।</p>
                </TabsContent>
                <TabsContent value="tab3">
                     <p className="text-muted-foreground p-4">"গ" ইউনিট প্রশ্নব্যাংক এখানে যুক্ত করা হবে।</p>
                </TabsContent>
                <TabsContent value="tab4">
                     <p className="text-muted-foreground p-4">"চ" ইউনিট প্রশ্নব্যাংক এখানে যুক্ত করা হবে।</p>
                </TabsContent>
                <TabsContent value="tab5">
                     <p className="text-muted-foreground p-4">IBA ইউনিট প্রশ্নব্যাংক এখানে যুক্ত করা হবে।</p>
                </TabsContent>
            </Tabs>
        </motion.div>
        
        {/* Info Section */}
        <motion.div
          id="Info"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative text-left"
        >
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">ভর্তি তথ্য (HSC-24)</div>
            </div>
            
            <h5 id="Apply" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><PenSquare className="mr-2"/> আবেদন</h5>
            <div className="text-base">
                <span><b>➜ আবেদন শুরুঃ</b> ০৪ নভেম্বর, ২০২৪ (দুপুর ১২টা থেকে)<br/>
                <b>➜ আবেদন শেষঃ</b> ২৫ নভেম্বর, ২০২৪ (রাত ১১.৫৯টা পর্যন্ত)</span>
                <div className="my-2">
                  <b><Banknote className="inline-block mr-2" />আবেদন ফিঃ</b><br/>
                  <b>&nbsp;&nbsp;&nbsp; ✓ ক, খ, গ, চ ইউনিট:</b> ১০৫০৳<br/>
                  <b>&nbsp;&nbsp;&nbsp; ✓ আইবিএ ইউনিট:</b> ১৫০০৳
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                    <CircleCheck className="text-green-600" size={16}/>
                    <a href='https://t.me/Study_on_Telegram/13209' target="_blank" className="text-primary hover:underline">আবেদনের ধাপসমূহ</a> | 
                    <a href='https://t.me/Study_on_Telegram/13206' className="text-primary hover:underline">সচিত্র আবেদন প্রক্রিয়া</a>
                </div>
            </div>
            <hr className="my-3 border-border/50" />

             <div className="text-base">
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='https://admission.eis.du.ac.bd/' target="_blank" className="text-primary hover:underline">admission.eis.du.ac.bd <ArrowUpRightFromSquare size={11} className="inline-block"/></a><br/><br/>
                
                ✔ <b><u>আবেদনের যোগ্যতাঃ</u></b>
                <hr className="my-1 border-border/50" />
                ➤ <b>SSC ব্যাচ:</b> 2019-2022<br/>
                ➤ <b>HSC ব্যাচ:</b> 2024
                <br/><i className="text-orange-500 flex items-center"><CircleAlert size={16} className="inline-block mr-1"/> <b>সেকেন্ড টাইমঃ</b> নেই</i>
            </div>
            <hr className="my-3 border-border/50" />

            <Accordion type="multiple" className="w-full">
                <AccordionItem value="info-1" className="border-border rounded-2xl hover:bg-accent/50">
                    <AccordionTrigger className="p-3 text-lg font-bold hover:no-underline"><CircleAlert className="mr-2"/> ইউনিট ও বিভাগ ভিত্তিক শর্ত</AccordionTrigger>
                    <AccordionContent className="p-4 pt-0 text-muted-foreground text-base">
                    ❐ <b>“ক” ইউনিট:</b><br/>
                    ● <b>বিজ্ঞান বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ ন্যূনতম GPA-3.5 এবং SSC ও HSC মিলে মোট ন্যূনতম GPA-8.0<br/>
                    <b>● অন্যান্য বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ ন্যূনতম GPA-3.0 এবং SSC ও HSC মিলে মোট ন্যূনতম GPA-7.5<br/><br/>

                    ❐ <b>“খ” ইউনিট:</b><br/>
                    ● <b>মানবিক ও ব্যবসা বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ ন্যূনতম GPA-3.0 এবং SSC ও HSC মিলে মোট ন্যূনতম GPA-7.5<br/>
                    <b>● বিজ্ঞান বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ ন্যূনতম GPA-3.5 এবং SSC ও HSC মিলে মোট ন্যূনতম GPA-8.0<br/><br/>

                    ❐ <b>“গ” ইউনিট:</b><br/>
                    ● <b>মানবিক ও ব্যবসা বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ ন্যূনতম GPA-3.0 এবং SSC ও HSC মিলে মোট ন্যূনতম GPA-7.5<br/>
                    <b>● বিজ্ঞান বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ ন্যূনতম GPA-3.5 এবং SSC ও HSC মিলে মোট ন্যূনতম GPA-8.0<br/><br/>

                    ❐ <b>“চ” ইউনিট:</b><br/>
                    ● <b>যেকোনো বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ ন্যূনতম GPA-3.0 এবং SSC ও HSC মিলে মোট ন্যূনতম GPA-6.5<br/><br/>

                    ❐ <b>IBA ইউনিট:</b><br/>
                    ● <b>যেকোনো বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ ন্যূনতম GPA-3.5 এবং SSC ও HSC মিলে মোট ন্যূনতম GPA-8.0
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="info-2" className="border-border rounded-2xl mt-1.5 hover:bg-accent/50">
                    <AccordionTrigger className="p-3 text-lg font-bold hover:no-underline"><Info className="mr-2"/> ইমপ্রুভমেন্ট ও পরবর্তী ব্যাচের পরীক্ষা</AccordionTrigger>                    <AccordionContent className="p-4 pt-0 text-muted-foreground text-base">
                    <b>দুটি শর্ত পূরণ করে একজন শিক্ষার্থী পরবর্তী ব্যাচের সাথে ঢাকা বিশ্ববিদ্যালয়ে পরীক্ষা দিতে পারে:<br/><br/>
                    ১।</b> ঢাকা বিশ্ববিদ্যালয় বা এর অধিভুক্ত কোনো কলেজে আবেদন না করা।<br/>
                    <b>২।</b> পরবর্তী ব্যাচের সাথে HSC ইমপ্রুভমেন্ট পরীক্ষা দেওয়া।<br/><br/>

                    <b><u>উদাহরণ:</u></b> একজন HSC-24 ব্যাচের শিক্ষার্থী যদি ঢাবিতে আবেদন না করে এবং HSC-25 ব্যাচের সাথে ইমপ্রুভমেন্ট দেয়, তবে সে HSC-25 ব্যাচের সাথে পরীক্ষা দিতে পারবে।
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            
            <h5 id="AdmitCard" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Ticket className="mr-2"/> প্রবেশপত্র</h5>
            <div className="text-base">
                <span><b>➜ ডাউনলোড শুরু:</b> ২৩ ডিসেম্বর, ২০২৪<br/>
                <b>➜ ডাউনলোড শেষ:</b> পরীক্ষা শুরুর ১ ঘণ্টা পূর্ব পর্যন্ত<br/><br/>
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='https://admission.eis.du.ac.bd/' target="_blank" className="text-primary hover:underline">admission.eis.du.ac.bd <ArrowUpRightFromSquare size={11} className="inline-block"/></a>
                <br/>(লগইন করে ডাউনলোড করতে হবে।)
                <br/><br/>
                <b><i className="text-orange-500 flex items-center"><CircleAlert size={16} className="inline-block mr-1"/></i> নোটঃ</b> প্রবেশপত্রে শুধু পরীক্ষার অঞ্চল উল্লেখ থাকে। পরীক্ষার কেন্দ্র, বিল্ডিং ও রুম নম্বর সাধারণত পরীক্ষার ৪৮-৭২ ঘণ্টা আগে ওয়েবসাইটে প্রকাশ করা হয়।
                </span>
            </div>
            
            <h5 id="ExamDate" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Timer className="mr-2"/> পরীক্ষার সময়কাল</h5>
             <span className="text-base">❐ <b>“ক” ইউনিট:</b> ১৫ ফেব্রুয়ারী <br/>
                ❐ <b>“খ” ইউনিট:</b> ২৫ জানুয়ারী <br/>
                ❐ <b>“গ” ইউনিট:</b> ০৮ ফেব্রুয়ারী <br/>
                ❐ <b>“চ” ইউনিট:</b> ০৪ জানুয়ারী <br/>
                ❐ <b>IBA ইউনিট:</b> ০৩ জানুয়ারী
            </span>
            <hr className="my-3 border-border/50"/>
            <div className="border border-border/80 p-3 text-center rounded-md">
            সব বিশ্ববিদ্যালয়ের <b>পরীক্ষার তারিখ ও কাউন্টডাউন</b> জানতে ভিজিট করুন আমাদের <b><a href='https://mnr.world/ac/' target="_blank" className="text-primary hover:underline">অ্যাডমিশন ক্যালেন্ডার <ArrowUpRightFromSquare size={11} className="inline-block"/></a></b>
            </div>

            <h5 id="Location" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><MapPin className="mr-2"/> ভর্তি পরীক্ষার কেন্দ্র</h5>
             <span className="text-base">➜ বিভাগীয় শহরে <a href="https://t.me/Study_on_Telegram/13199" className="text-primary hover:underline">[তালিকা]</a><br/>
             <hr className="my-2 border-border/50" />
            <b><i className="text-orange-500 flex items-center"><CircleAlert size={16} className="inline-block mr-1"/></i> নোটঃ</b> "চ" ইউনিট (চারুকলা) এবং IBA-এর পরীক্ষা শুধু ঢাকায় অনুষ্ঠিত হবে। বাকি সব ইউনিটের পরীক্ষা বিভাগীয় শহরে হবে।</span>


            <div id="MarkDistributionAndOthers"></div>
            <h5 className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Info className="mr-2"/> মানবণ্টন ও অন্যান্য তথ্য</h5>

            <div className="border border-border/80 rounded-xl p-4 mt-2.5 text-base">
                ● <b>সিলেবাসঃ </b>সংক্ষিপ্ত<hr className="my-1 border-border/50"/>
                ● <b>সেকেন্ড টাইমঃ </b>নেই<hr className="my-1 border-border/50"/>
                ● <b>নেগেটিভ মার্কিংঃ </b>প্রতি ভুলের জন্য ০.২৫ নম্বর কাটা যাবে<hr className="my-1 border-border/50"/>
                ● <b>ক্যালকুলেটরঃ </b>ব্যবহার করা যাবে না
            </div>

             <h5 id="Result" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><BarChart3 className="mr-2"/> ভর্তি পরীক্ষার ফলাফল</h5>
             <span className="text-base">● <b>ফলাফল প্রকাশ:</b> ভর্তি পরীক্ষার ৪ সপ্তাহের মধ্যে
                <hr className="my-1 border-border/50" />
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='https://admission.eis.du.ac.bd/' target="_blank" className="text-primary hover:underline">admission.eis.du.ac.bd <ArrowUpRightFromSquare size={11} className="inline-block"/></a>
            </span>
        </div>

        {/* Floating Menu */}
        <FloatingMenu />

      </div>
    </div>
  );
}

export default DhakaUniversityPage;
