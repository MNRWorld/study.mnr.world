// @ts-nocheck
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
  ChevronDown,
  Info,
  Download,
  ChevronRight,
  FilePdf,
  FilePen,
  SackDollar,
  CircleCheck,
  Link as LinkIcon,
  ArrowUpRightFromSquare,
  CircleAlert,
  CircleInfo,
  AddressBook,
  Stopwatch,
  MapPin,
  RectangleList,
  SquarePollVertical,
  Menu,
  Mosque,
  BuildingColumns,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

function DhakaUniversityPage() {
  const [activeTab, setActiveTab] = useState('A');
  const [activeQBTab, setActiveQBTab] = useState('tab1');
  const [activeMarkDistTab, setActiveMarkDistTab] = useState('Amd');
  const [infoBoxVisible, setInfoBoxVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleInfoBox = () => setInfoBoxVisible(!infoBoxVisible);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const deadlines = [
      {
        title: "🎓 Exam Countdown",
        date: new Date("2025-05-20T23:27:00")
      },
      {
        title: "আবেদন শুরু",
        date: new Date("2026-12-31T23:59:59")
      },
      {
        title: "🇧🇩 National Day",
        date: new Date("2025-08-15T12:00:00")
      }
    ];

  const CountdownTimer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState({
      days: '--',
      hours: '--',
      minutes: '--',
      seconds: '--',
    });
    const [isCompleted, setIsCompleted] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (currentIndex >= deadlines.length) {
            return;
        }

        const update = () => {
            const now = new Date();
            const diff = deadlines[currentIndex].date.getTime() - now.getTime();

            if (diff <= 0) {
                setIsCompleted(true);
                if (intervalRef.current) clearInterval(intervalRef.current);
                
                // Automatically move to the next timer after a delay
                setTimeout(() => {
                    setIsCompleted(false);
                    if (currentIndex < deadlines.length - 1) {
                        setCurrentIndex(currentIndex + 1);
                    } else {
                        // Last timer finished, maybe do nothing or loop
                    }
                }, 2000); // 2 second delay before switching
                
                return;
            }

            setIsCompleted(false);
            const totalSeconds = Math.floor(diff / 1000);
            setTimeLeft({
                days: String(Math.floor(totalSeconds / (3600 * 24))).padStart(2, '0'),
                hours: String(Math.floor((totalSeconds % (3600 * 24)) / 3600)).padStart(2, '0'),
                minutes: String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0'),
                seconds: String(totalSeconds % 60).padStart(2, '0'),
            });
        };

        update();
        intervalRef.current = setInterval(update, 1000);

        return () => {
            if(intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [currentIndex]);


    if (currentIndex >= deadlines.length) {
        return <div className="text-center font-bold text-lg">All timers finished.</div>;
    }
    
    const currentDeadline = deadlines[currentIndex];

    const getTimeProgress = (unit: 'days' | 'hours' | 'minutes' | 'seconds') => {
        const value = parseInt(timeLeft[unit], 10);
        if (isNaN(value)) return 0;
        const max = unit === 'days' ? 365 : unit === 'hours' ? 24 : 60;
        return (value / max);
    };

    const TimeCircle = ({ unit, value, max }: { unit: string; value: string, max: number }) => {
        const numValue = parseInt(value, 10);
        const progress = isNaN(numValue) ? 0 : (numValue / max);
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - progress * circumference;

        return (
            <div className="relative w-[110px] h-[110px] sm:w-[65px] sm:h-[65px] shrink-0">
                <svg className="transform -scale-x-100" viewBox="0 0 100 100">
                    <circle className="text-gray-300" strokeWidth="6" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                    <circle className="text-green-500"
                        strokeWidth="6"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                        style={{ transform: 'rotate(90deg)', transformOrigin: 'center' }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-2xl sm:text-lg font-bold">{value}</div>
                    <div className="text-xs sm:text-[10px] text-gray-700">{unit}</div>
                </div>
            </div>
        );
    };


    return (
        <div className="text-center p-5 m-2.5 rounded-2xl bg-blue-50 shadow-[0_4px_8px_rgba(0,0,0,0.05)]">
            <div className="text-lg font-bold mb-3">
                {currentDeadline.title}
                <div className="font-normal text-sm mt-1">
                    {currentDeadline.date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
            </div>
            {isCompleted ? (
                <div className="text-xl text-red-500 font-bold mt-2.5">সময় শেষ</div>
            ) : (
                <div className="flex gap-3 sm:gap-2 justify-center flex-nowrap">
                   <TimeCircle unit="Days" value={timeLeft.days} max={365}/>
                   <TimeCircle unit="Hours" value={timeLeft.hours} max={24}/>
                   <TimeCircle unit="Minutes" value={timeLeft.minutes} max={60}/>
                   <TimeCircle unit="Seconds" value={timeLeft.seconds} max={60}/>
                </div>
            )}
        </div>
    );
};


  return (
    <div className="font-bengali bg-[#F0F5FA] my-[30px]">
      <div className="container mx-auto px-4">
        {/* Main Card */}
        <div className="mt-[25px] sm:mt-[70px] w-full border border-gray-300 bg-white rounded-2xl p-[30px_30px_20px_20px] sm:p-[25px_15px] shadow-[0_4px_8px_#e8e8e8] text-center relative">
          <div className="text-sm text-black absolute top-[-60px] left-[15px] bg-white border border-gray-300 rounded-lg px-[14px] py-[4px]">
            <b>পাবলিক</b>
          </div>
          <div className="w-[100px] h-[100px] absolute top-[-45px] left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] z-10">
            <Image
              src="https://study.mnr.world/wp-content/uploads/2025/05/DU-Logo.png"
              alt="DU Logo"
              width={100}
              height={100}
              className="border-4 border-white w-full h-full object-contain rounded-2xl"
            />
          </div>
          <br />
          <br />
          <div className="text-2xl font-bold my-[10px] mx-0 text-black">
            ঢাকা বিশ্ববিদ্যালয়
          </div>
          <div className="text-[15px] text-gray-600 mb-[15px]">
            (University of Dhaka)
          </div>
          <div className="text-[15px] text-gray-600 mb-5 leading-relaxed">
            ঢাকা বিশ্ববিদ্যালয় ১৯২১ সালে প্রতিষ্ঠিত বাংলাদেশের প্রাচীনতম ও অন্যতম
            প্রধান উচ্চশিক্ষা প্রতিষ্ঠান। এটি শিক্ষা, গবেষণা ও জাতীয় আন্দোলনে
            গুরুত্বপূর্ণ ভূমিকা রেখেছে।
          </div>
          <div className="flex justify-around mb-5">
            <div className="text-center">
              <div className="text-xl font-bold text-black">১৩টি</div>
              <div className="text-[13px] text-gray-600">অনুষদ</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-black">৮৩টি</div>
              <div className="text-[13px] text-gray-600">বিষয়</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-black flex items-center">
                ৬১৩০টি
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="ml-1 cursor-pointer text-blue-800">
                        <Info size={16} />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-blue-100 text-blue-800 border-blue-800">
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
              <div className="text-[13px] text-gray-600">আসন</div>
            </div>
          </div>
          <Link
            href="#Info"
            className="inline-flex items-center gap-2 px-[15px] py-[6px] bg-blue-800 text-white border border-blue-800 rounded-lg text-[13px] shadow-[0_2px_6px_rgba(0,0,0,0.1)] transition-all ease-in-out duration-300 hover:bg-white hover:text-blue-800"
          >
            <Info size={14} /> মূল তথ্য
          </Link>
        </div>

        {/* Link List */}
        <div id="Links" className="mt-2.5 w-full border border-gray-300 bg-white rounded-2xl p-[17px_15px_0_15px] shadow-[0_4px_20px_#e8e8e8] text-center relative">
            <div className="flex justify-center">
                <div className="inline-block px-[25px] py-[9px] bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-full text-base mb-3 font-bold shadow-[0_1px_3px_rgba(0,0,0,0.3)]">গুরুত্বপূর্ণ কিছু লিংক একত্রে</div>
            </div>
            <Table className="border-dotted border-gray-400 border-[1px]">
                <TableBody>
                    <TableRow>
                        <TableCell className="text-center"><Link href="#Circular">সার্কুলার</Link></TableCell>
                        <TableCell className="text-center"><Link href="#QuestionBank">প্রশ্নব্যাংক</Link></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-center"><Link href="https://www.du.ac.bd/" target="_blank" rel="noreferrer noopener">মূল ওয়েবসাইট</Link></TableCell>
                        <TableCell className="text-center"><Link href="https://admission.eis.du.ac.bd/bn/408b7c8ad06e4d9954fa2d948a01f508" target="_blank" rel="noreferrer noopener">এডমিশন ওয়েবসাইট</Link></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-center" colSpan={2}><Link href="https://admission.eis.du.ac.bd/bn/408b7c8ad06e4d9954fa2d948a01f508" target="_blank">আবেদন <b>|</b> প্রবেশপত্র ডাউনলোড <b>|</b> ফলাফল</Link></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-center" colSpan={2}><Link href="https://collegeadmission.eis.du.ac.bd/en/b45de047fde9788c53fradae3cfe8e88dc02" target="_blank">অধিভুক্ত কলেজ (আবেদন, প্রবেশপত্র ডাউনলোড, ফলাফল)</Link></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

        {/* History and Maps */}
        <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1" className="bg-white border border-gray-300 mt-2.5 rounded-2xl overflow-hidden shadow-[0_4px_20px_#e8e8e8]">
                <AccordionTrigger className="bg-white text-black p-5 w-full flex justify-between items-center text-[17px] font-bold cursor-pointer rounded-2xl hover:no-underline">
                <span>সংক্ষিপ্ত পরিচয়</span>
                </AccordionTrigger>
                <AccordionContent className="bg-white p-4 border-t border-gray-200 text-base text-gray-700">
                    <p><b>ঢাকা বিশ্ববিদ্যালয় (ঢাবি)</b> বাংলাদেশের সর্বপ্রথম এবং অন্যতম প্রধান উচ্চশিক্ষা প্রতিষ্ঠান, যা ১৯২১ সালের ১ জুলাই প্রতিষ্ঠিত হয়। এটি ব্রিটিশ ভারতের অক্সব্রিজ মডেল অনুসরণে গঠিত হয়েছিল এবং শুরুতে তিনটি অনুষদ (কলা, বিজ্ঞান ও আইন) এবং ১২টি বিভাগ নিয়ে যাত্রা শুরু করে।</p>
                    <p>১৯০৫ সালে বঙ্গভঙ্গের মাধ্যমে পূর্ব বাংলা ও আসাম নিয়ে একটি নতুন প্রদেশ গঠিত হয়, যার রাজধানী ছিল ঢাকা। এই প্রক্রিয়ায় মুসলিম সমাজের মধ্যে শিক্ষার প্রসার ঘটে। তবে ১৯১১ সালে বঙ্গভঙ্গ রদের ফলে পূর্ব বাংলার মুসলিম সমাজের মধ্যে উচ্চশিক্ষার সুযোগ হ্রাস পায়। এই প্রেক্ষাপটে, ১৯১২ সালের ২১ জানুয়ারি ভারতের ভাইসরয় লর্ড হার্ডিঞ্জ ঢাকায় সফরকালে একটি বিশ্ববিদ্যালয় প্রতিষ্ঠার প্রতিশ্রুতি দেন।</p>
                    <p>এরপর ব্যারিস্টার রবার্ট নাথানের নেতৃত্বে নাথান কমিশন গঠিত হয় এবং ১৯১৩ সালে তার রিপোর্ট অনুমোদন পায়। বর্তমানে ঢাকা বিশ্ববিদ্যালয় ৪৬,০০০-এরও বেশি শিক্ষার্থী এবং ২,০০০-এরও বেশি শিক্ষক নিয়ে বাংলাদেশের বৃহত্তম পাবলিক গবেষণা বিশ্ববিদ্যালয়। এটি দেশের শিক্ষা, সংস্কৃতি এবং মুক্ত চিন্তার বিকাশে গুরুত্বপূর্ণ ভূমিকা পালন করে চলেছে।</p>
                    <hr className="my-2" />
                    <b>তথ্যসূত্র</b><br/>
                    ০১. <a href="https://bn.wikipedia.org/wiki/%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE_%E0%A6%AC%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A6%AF%E0%A6%BC" target="_blank" className="text-blue-600 hover:underline">
                    উইকিপিডিয়া প্রতিবেদন (ঢাকা বিশ্ববিদ্যালয়)</a>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white border border-gray-300 mt-2.5 rounded-2xl overflow-hidden shadow-[0_4px_20px_#e8e8e8]">
                <AccordionTrigger className="bg-white text-black p-5 w-full flex justify-between items-center text-[17px] font-bold cursor-pointer rounded-2xl hover:no-underline">
                <span>বিভিন্ন গুগল ম্যাপ লোকেশন</span>
                </AccordionTrigger>
                <AccordionContent className="bg-white p-4 border-t border-gray-200 text-base text-gray-700">
                     <Accordion type="multiple" className="w-full">
                        <AccordionItem value="sub-1">
                            <AccordionTrigger className="hover:no-underline flex items-center justify-between"><Mosque/> &nbsp;&nbsp; মসজিদ</AccordionTrigger>
                            <AccordionContent>
                               <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="text-center">মুসা খান মসজিদ</TableCell>
                                            <TableCell className="text-center"><Link href="https://maps.app.goo.gl/A5Pt2z5yceEQ641y7?g_st=atm" target="_blank" rel="noreferrer noopener" className="text-blue-600">[লিংক]</Link></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="sub-2">
                             <AccordionTrigger className="hover:no-underline flex items-center justify-between"><BuildingColumns/> &nbsp;&nbsp; প্রশাসনিক ভবন</AccordionTrigger>
                            <AccordionContent>
                               <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="text-center">মুসা খান মসজিদ</TableCell>
                                            <TableCell className="text-center"><Link href="https://maps.app.goo.gl/A5Pt2z5yceEQ641y7?g_st=atm" target="_blank" rel="noreferrer noopener" className="text-blue-600">[লিংক]</Link></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        {/* Countdown Timer */}
        <div className="mt-2.5 w-full border border-gray-300 bg-white rounded-2xl p-[17px_15px] shadow-[0_4px_20px_#e8e8e8] relative">
            <CountdownTimer />
        </div>
        
        {/* Circular */}
        <div id="Circular" className="mt-2.5 w-full border border-gray-300 bg-white rounded-2xl p-[17px] shadow-[0_4px_20px_#e8e8e8] text-center relative">
            <div className="flex justify-center">
                <div className="inline-block px-[25px] py-[9px] bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-full text-base mb-3 font-bold shadow-[0_1px_3px_rgba(0,0,0,0.3)]">সার্কুলার</div>
            </div>
            <div className="text-center">
                <span><b>HSC-24 ব্যাচের সম্পূর্ণ সার্কুলার</b></span><br/>
                <span>(⚠ <b>নোট:</b> HSC-25 এর সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী ব্যাচের সার্কুলার দেখে আইডিয়া নিতে পারো।)</span>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-5">
                <Button asChild className="bg-blue-800 text-white flex-1 min-w-[150px] hover:bg-gray-100 hover:text-blue-800 hover:border-blue-800 border border-transparent">
                    <a href="https://t.me/Study_on_Telegram/13215" target="_blank"><Download size={16} className="mr-2"/> ডাউনলোড করুন</a>
                </Button>
                <Button variant="outline" className="text-blue-800 border-blue-800 flex-1 min-w-[150px] hover:bg-blue-800 hover:text-white" onClick={toggleInfoBox}>
                     পূর্ববর্তী বছরের সার্কুলার <ChevronRight size={16} className="ml-2"/>
                </Button>
            </div>
            {infoBoxVisible && (
                <div className="mt-[15px] p-[15px] border border-gray-300 border-l-4 border-l-blue-800 bg-gray-50 rounded-md animate-fadeIn text-left">
                     ● <a href="https://t.me/Study_on_Telegram/2036" target="_blank" className="text-blue-600"> DU Circular 2021-22 (All Unit)</a><br/>
                     ● <a href="https://t.me/Study_on_Telegram/8022?single" target="_blank" className="text-blue-600"> DU Circular 2022-23 (All Unit)</a><br/>
                     ● <a href="https://t.me/Study_on_Telegram/11073?single" target="_blank" className="text-blue-600"> DU Circular 2023-24 (All Unit)</a>
                </div>
            )}
        </div>


        {/* Question Bank */}
        <div id="QuestionBank" className="mt-2.5 w-full border border-gray-300 bg-white rounded-2xl p-[17px] shadow-[0_4px_20px_#e8e8e8] text-center relative">
             <div className="flex justify-center">
                <div className="inline-block px-[25px] py-[9px] bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-full text-base mb-3 font-bold shadow-[0_1px_3px_rgba(0,0,0,0.3)]">প্রশ্নব্যাংক</div>
            </div>
            <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 h-auto">
                    <TabsTrigger value="tab1">"ক" ইউনিট</TabsTrigger>
                    <TabsTrigger value="tab2">"খ" ইউনিট</TabsTrigger>
                    <TabsTrigger value="tab3">"গ" ইউনিট</TabsTrigger>
                    <TabsTrigger value="tab4">"চ" ইউনিট</TabsTrigger>
                    <TabsTrigger value="tab5">DU IBA (বিশেষ)</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                    <Accordion type="multiple" className="w-full text-left">
                        <AccordionItem value="qb-a-1" className="border border-gray-300 rounded-2xl mt-1.5">
                            <AccordionTrigger className="p-3 text-[15px] font-bold hover:no-underline"><FilePdf className="inline-block mr-2" /> সালভিত্তিক প্রশ্নব্যাংক</AccordionTrigger>
                            <AccordionContent className="p-4 pt-0">
                                ● <a href="https://t.me/PDFHour/10357" target="_blank" className="text-blue-600">আসপেক্ট “ক” ইউনিট প্রশ্নব্যাংক</a><br/>
                                ● <a href="https://t.me/PDFHour/10357" target="_blank" className="text-blue-600">উদ্ভাস “ক” ইউনিট প্রশ্নব্যাংক</a><br/>
                                <b>🔰 সকল সালের প্রশ্ন একত্রে</b><br/>
                                ● <a href="https://t.me/PDFHour/10297" target="_blank" className="text-blue-600">Question of 1995-96</a><br/>
                               ... many more links
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="qb-a-2" className="border border-gray-300 rounded-2xl mt-1.5">
                            <AccordionTrigger className="p-3 text-[15px] font-bold hover:no-underline"><FilePdf className="inline-block mr-2" /> অধ্যায়ভিত্তিক প্রশ্নব্যাংক</AccordionTrigger>
                            <AccordionContent className="p-4 pt-0">
                                ● <a href="https://t.me/PDFHour/10285" target="_blank" className="text-blue-600">রেটিনা ঢাবি “ক” ইউনিট প্রশ্নব্যাংক</a><br/><br/>
                                <b>🔰 সহায়ক বই</b><br/>
                                ● <a href="https://t.me/PDFHour/10214" target="_blank" className="text-blue-600">উদ্ভাস ভার্সিটি “ক” প্রশ্নব্যাংক</a><br/>
                                ● <a href="https://t.me/PDFHour/10478" target="_blank" className="text-blue-600">উদ্ভাস ভার্সিটি “ক” প্রিপারেশন বুক</a>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </TabsContent>
                <TabsContent value="tab2">
                    {/* B Unit content */}
                    Content for "খ" ইউনিট
                </TabsContent>
                <TabsContent value="tab3">
                    {/* C Unit content */}
                     Content for "গ" ইউনিট
                </TabsContent>
                <TabsContent value="tab4">
                    {/* Cha Unit content */}
                     Content for "চ" ইউনিট
                </TabsContent>
                <TabsContent value="tab5">
                    {/* IBA Unit content */}
                     Content for "IBA" ইউনিট
                </TabsContent>
            </Tabs>
        </div>
        
        {/* Info Section */}
        <div id="Info" className="mt-2.5 w-full border border-gray-300 bg-white rounded-2xl p-[17px] shadow-[0_4px_20px_#e8e8e8] relative text-left">
            <div className="flex justify-center">
                <div className="inline-block px-[25px] py-[9px] bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-full text-base mb-3 font-bold shadow-[0_1px_3px_rgba(0,0,0,0.3)]">তথ্যভান্ডার (HSC-24)</div>
            </div>
            
            <h5 id="Apply" className="bg-blue-50 text-blue-800 rounded-xl p-3 my-[15px] text-center text-lg font-bold flex items-center justify-center"><FilePen className="mr-2"/> আবেদন</h5>
            <span><b>➜ আবেদন শুরুঃ</b> ০৪ নভেম্বর, ২০২৪ (দুপুর ১২টা থেকে)<br/>
            <b>➜ আবেদন শেষঃ</b> ২৫ নভেম্বর, ২০২৪ (রাত ১১.৫৯টা পর্যন্ত)</span>
            <div className="my-2">
              <b><SackDollar className="inline-block mr-2" />আবেদন ফিঃ</b><br/>
              <b>&nbsp;&nbsp;&nbsp; ✓ ক, খ, গ, চ ইউনিট:</b> ১০৫০৳<br/>
              <b>&nbsp;&nbsp;&nbsp; ✓ আইবিএ ইউনিট:</b> ১৫০০৳
            </div>

            <div className="flex items-center gap-2">
                <CircleCheck className="text-green-600" size={16}/>
                <a href='https://t.me/Study_on_Telegram/13209' target="_blank" className="text-blue-600">আবেদনের ধাপসমূহ একত্রে</a> | 
                <a href='https://t.me/Study_on_Telegram/13206' className="text-blue-600">আবেদনের সচিত্র প্রসেস</a>
            </div>
            <hr className="my-2" />

             <div>
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='https://admission.eis.du.ac.bd/' target="_blank" className="text-blue-600">https://admission.eis.du.ac.bd/ <ArrowUpRightFromSquare size={11} className="inline-block"/></a><br/><br/>
                
                ✔ <b><u>আবেদনের যোগ্যতাঃ</u></b>
                <hr className="my-1" />
                ➤ <b>SSC ব্যাচ:</b> 2019-2022<br/>
                ➤ <b>HSC ব্যাচ:</b> 2024
                <br/><i className="text-orange-500"><CircleAlert size={16} className="inline-block mr-1"/></i> <b>সেকেন্ড টাইমঃ</b> নেই
            </div>
            <hr className="my-2" />

            <Accordion type="multiple" className="w-full">
                <AccordionItem value="info-1" className="border border-gray-300 rounded-2xl mt-1.5">
                    <AccordionTrigger className="p-3 text-[15px] font-bold hover:no-underline"><CircleAlert className="mr-2"/> ইউনিট ও বিভাগ ভিত্তিক শর্ত</AccordionTrigger>
                    <AccordionContent className="p-4 pt-0">
                    ❐ <b>“ক” ইউনিট:</b><br/>
                    ● <b>বিজ্ঞান বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ নুন্যতম GPA-3.5 এবং SSC ও HSC মিলে মোট নূন্যতম GPA-8.0<br/>
                    <b>● অন্যান্য বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ নুন্যতম GPA-3.0 এবং SSC ও HSC মিলে মোট নূন্যতম GPA-7.5<br/><br/>

                    ❐ <b>“খ” ইউনিট:</b><br/>
                    ● <b>মানবিক ও ব্যবসা বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ নুন্যতম GPA-3.0 এবং SSC ও HSC মিলে মোট নূন্যতম GPA-7.5<br/>
                    <b>● বিজ্ঞান বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ নুন্যতম GPA-3.5 এবং SSC ও HSC মিলে মোট নূন্যতম GPA-8.0<br/><br/>

                    ❐ <b>“গ” ইউনিট:</b><br/>
                    ● <b>মানবিক ও ব্যবসা বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ নুন্যতম GPA-3.0 এবং SSC ও HSC মিলে মোট নূন্যতম GPA-7.5<br/>
                    <b>● বিজ্ঞান বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ নুন্যতম GPA-3.5 এবং SSC ও HSC মিলে মোট নূন্যতম GPA-8.0<br/><br/>

                    ❐ <b>“চ” ইউনিট:</b><br/>
                    ● <b>যেকোনো বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ নুন্যতম GPA-3.0 এবং SSC ও HSC মিলে মোট নূন্যতম GPA-6.5<br/><br/>

                    ❐ <b>IBA ইউনিট:</b><br/>
                    ● <b>যেকোনো বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ নুন্যতম GPA-3.5 এবং SSC ও HSC মিলে মোট নূন্যতম GPA-8.0
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="info-2" className="border border-gray-300 rounded-2xl mt-1.5">
                    <AccordionTrigger className="p-3 text-[15px] font-bold hover:no-underline"><CircleInfo className="mr-2"/> ইমপ্রুভমেন্ট ও পরবর্তী ব্যাচের সাথে পরীক্ষা দেয়া সংক্রান্ত বিস্তারিত</AccordionTrigger>
                    <AccordionContent className="p-4 pt-0">
                    <b>দুটি শর্তে একজন শিক্ষার্থী পরবর্তী ব্যাচের সাথে পরের বছর ঢাকা বিশ্ববিদ্যালয়ে পরীক্ষা দিতে পারবে -<br/><br/>
                    ১।</b> ঢাকা বিশ্ববিদ্যালয় কিংবা অধিভুক্ত কলেজে আবেদন না করা<br/>
                    <b>২।</b>পরবর্তী ব্যাচের সাথে  ইমপ্রুভমেন্ট পরীক্ষা দেয়া (HSC)<br/><br/>

                    <b><u>উদাহরণ:</u></b> কোনো HSC-24 ব্যাচের শিক্ষার্থী যদি ঢাকা বিশ্ববিদ্যালয় বা অধিভুক্ত কোনো কলেজে আবেদন করে না করে এবং ইমপ্রুভমেন্ট পরীক্ষা দেয়, তাহলে সে চাইলে HSC-25 ব্যাচের সাথে ঢাকা বিশ্ববিদ্যালয়ে পরীক্ষা দিতে পারবে।
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            
            <h5 id="AdmitCard" className="bg-blue-50 text-blue-800 rounded-xl p-3 my-[15px] mt-4 text-center text-lg font-bold flex items-center justify-center"><AddressBook className="mr-2"/> প্রবেশপত্র</h5>
            <span><b>➜ শুরু:</b> ২৩ ডিসেম্বর, ২০২৪<br/>
            <b>➜ শেষ:</b> পরীক্ষা শুরুর ১ঘন্টা পূর্ব অব্দি<br/><br/>
            <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='https://admission.eis.du.ac.bd/' target="_blank" className="text-blue-600">https://admission.eis.du.ac.bd/ <ArrowUpRightFromSquare size={11} className="inline-block"/></a>
            <br/>(লগ ইন করে নিয়ে ডাউনলোড করতে হবে।)
            <br/><br/>
            <b><i className="text-orange-500"><CircleAlert size={16} className="inline-block mr-1"/></i> নোটঃ</b> প্রবেশপত্রে শুধু পরীক্ষার অঞ্চল উল্লেখ থাকে। কিন্তু, ঠিক কোন সেন্টারে, কোন বিল্ডিং/রুম এ হবে, সেটা পরে দেয়। সাধারণত যে দিন যে ইউনিটের পরীক্ষা,  পরীক্ষা শুরুর ৭২ হতে ৪৮ ঘন্টা পুর্বে প্রকাশ করে।
            </span>
            
            <h5 id="ExamDate" className="bg-blue-50 text-blue-800 rounded-xl p-3 my-[15px] mt-4 text-center text-lg font-bold flex items-center justify-center"><Stopwatch className="mr-2"/> পরীক্ষার সময়কাল</h5>
             <span>❐ <b>“ক” ইউনিট:</b> ১৫ ফেব্রুয়ারী <br/>
                ❐ <b>“খ” ইউনিট:</b> ২৫ জানুয়ারি <br/>
                ❐ <b>“গ” ইউনিট:</b> ০৮ ফেব্রুয়ারী <br/>
                ❐ <b>“চ” ইউনিট:</b> ০৪ জানুয়ারি <br/>
                ❐ <b>IBA ইউনিট:</b> ০৩ জানুয়ারি
            </span>
            <hr className="my-2"/>
            <div className="border border-gray-800 p-3 text-center">
            সকল বিশ্ববিদ্যালয়ের <b>পরীক্ষার তারিখ ও কাউন্টডাউন</b> দেখতে ভিজিট করো <b><a href='https://mnr.world/ac/' target="_blank" className="text-blue-600">এডমিশন ক্যালেন্ডার <ArrowUpRightFromSquare size={11} className="inline-block"/></a></b>
            </div>

            <h5 id="Location" className="bg-blue-50 text-blue-800 rounded-xl p-3 my-[15px] mt-4 text-center text-lg font-bold flex items-center justify-center"><MapPin className="mr-2"/> ভর্তি পরীক্ষার কেন্দ্র</h5>
             <span>➜ বিভাগীয় শহরে <a href="https://t.me/Study_on_Telegram/13199" className="text-blue-600">[তালিকা]</a><br/>
             <hr className="my-2" />
            <b><i className="text-orange-500"><CircleAlert size={16} className="inline-block mr-1"/></i> নোটঃ</b> চারুকলা বা “চ” ইউনিট এবং IBA এর পরীক্ষা শুধুমাত্র ঢাকায় হবে। বাকি সব ইউনিটের পরীক্ষা বিভাগীয় শহরে হবে।</span>


            <div id="MarkDistributionAndOthers"></div>
            <h5 className="bg-blue-50 text-blue-800 rounded-xl p-3 my-[15px] mt-4 text-center text-lg font-bold flex items-center justify-center"><RectangleList className="mr-2"/> মানবন্টন ও অন্যান্য তথ্য</h5>
            {/* ... Mark distribution tabs and content ... */}

            <div className="border border-gray-300 rounded-xl p-4 mt-2.5">
                ● <b>সিলেবাসঃ </b>সংক্ষিপ্ত<hr className="my-1"/>
                ● <b>সেকেন্ড টাইমঃ </b>নেই<hr className="my-1"/>
                ● <b>নেগিটিভ নাম্বারঃ </b>-০.২৫<hr className="my-1"/>
                ● <b>ক্যালকুলেটরঃ </b>নেই
            </div>

             <h5 id="Result" className="bg-blue-50 text-blue-800 rounded-xl p-3 my-[15px] mt-4 text-center text-lg font-bold flex items-center justify-center"><SquarePollVertical className="mr-2"/> ভর্তি পরীক্ষার ফলাফল</h5>
             <span>● <b>ফলাফল প্রকাশ:</b> ভর্তি পরীক্ষার ৪ সপ্তাহের মধ্যে
                <hr className="my-1" />
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='https://admission.eis.du.ac.bd/' target="_blank" className="text-blue-600">https://admission.eis.du.ac.bd/ <ArrowUpRightFromSquare size={11} className="inline-block"/></a>
            </span>
        </div>

        {/* Floating Menu */}
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
            <Button onClick={() => setMenuOpen(!menuOpen)} className="bg-blue-800 text-white rounded-l-full rounded-r-none px-4 py-3 text-lg hover:bg-blue-900">
                <Menu />
            </Button>
            {menuOpen && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 w-56 bg-white rounded-lg shadow-lg p-2.5 animate-fadeIn">
                    <a href="#Links" className="block p-2 text-gray-800 hover:bg-blue-100">🔗 গুরুত্বপূর্ণ কিছু লিংক একত্রে</a>
                    <a href="#Circular" className="block p-2 text-gray-800 hover:bg-blue-100">📄 সার্কুলার</a>
                    <a href="#QuestionBank" className="block p-2 text-gray-800 hover:bg-blue-100">📚 প্রশ্নব্যাংক</a>
                    <a href="#Apply" className="block p-2 text-gray-800 hover:bg-blue-100">📝 আবেদন</a>
                    <a href="#AdmitCard" className="block p-2 text-gray-800 hover:bg-blue-100">🎟 প্রবেশপত্র</a>
                    <a href="#ExamDate" className="block p-2 text-gray-800 hover:bg-blue-100">⏰ পরীক্ষার সময়কাল</a>
                    <a href="#Location" className="block p-2 text-gray-800 hover:bg-blue-100">🗺️ ভর্তি পরীক্ষার কেন্দ্র</a>
                    <a href="#MarkDistributionAndOthers" className="block p-2 text-gray-800 hover:bg-blue-100">ℹ️ মানবন্টন ও অন্যান্য তথ্য</a>
                    <a href="#Result" className="block p-2 text-gray-800 hover:bg-blue-100">📊 ভর্তি পরীক্ষার ফলাফল</a>
                    <a href="#Subjects" className="block p-2 text-gray-800 hover:bg-blue-100">👤 সাবজেক্ট প্রতি সিট সংখ্যা</a>
                </div>
            )}
        </div>

      </div>
    </div>
  );
}

export default DhakaUniversityPage;
