
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
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
import FloatingMenu from '@/app/university/dhaka/_components/FloatingMenu';

import { University, HeartPulse, Cog, Network, BookCopy, Briefcase } from 'lucide-react';

function CoursesPage() {
  const courses = [
    {
      title: 'বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি',
      description: 'ঢাকা, রাজশাহী, চট্টগ্রাম, জাহাঙ্গীরনগরসহ সকল পাবলিক বিশ্ববিদ্যালয়ের পূর্ণাঙ্গ প্রস্তুতি।',
      icon: <University className="h-8 w-8 text-primary" />,
    },
    {
      title: 'মেডিকেল ও ডেন্টাল ভর্তি',
      description: 'মেডিকেল ও ডেন্টাল কলেজে ভর্তির জন্য বিশেষায়িত কোর্স ও মডেল টেস্ট।',
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
    },
    {
      title: 'ইঞ্জিনিয়ারিং প্রস্তুতি (BUET, KUET, RUET, CUET)',
      description: 'বুয়েটসহ সকল ইঞ্জিনিয়ারিং বিশ্ববিদ্যালয়ের জন্য ফিজিক্স, কেমিস্ট্রি, ম্যাথ এর উপর বিশেষ কোর্স।',
      icon: <Cog className="h-8 w-8 text-primary" />,
    },
    {
      title: 'গুচ্ছ প্রস্তুতি (GST)',
      description: 'গুচ্ছভুক্ত ২২টি সাধারণ এবং বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের সমন্বিত প্রস্তুতি।',
      icon: <Network className="h-8 w-8 text-primary" />,
    },
    {
      title: 'HSC বোর্ড পরীক্ষার প্রস্তুতি',
      description: 'বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা শাখার সকল বিষয়ের উপর পূর্ণাঙ্গ প্রস্তুতি কোর্স।',
      icon: <BookCopy className="h-8 w-8 text-primary" />,
    },
    {
        title: 'IBA ও BUP প্রস্তুতি',
        description: 'IBA (DU, JU) ও BUP এর ভর্তি পরীক্ষার জন্য বিশেষ ইংরেজি ও গণিত কোর্স।',
        icon: <Briefcase className="h-8 w-8 text-primary" />,
    }
  ];

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Main Card */}
        <div className="mt-20 sm:mt-24 w-full border border-border bg-card rounded-2xl p-6 sm:p-8 shadow-lg text-center relative animate-fadeInUp">
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
              আপনার স্বপ্ন পূরণের যাত্রায় আমরা আছি আপনার পাশে। সেরা শিক্ষকদের তত্ত্বাবধানে আপনার প্রস্তুতিকে করুন আরও মজবুত।
            </p>
          </div>
          <div className="flex justify-around items-center mb-6 text-sm sm:text-base max-w-md mx-auto">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground">১০+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">কোর্স</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground">৫০+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">শিক্ষক</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground flex items-center justify-center">
                ১০০০০+
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
        </div>

        {/* Courses Grid */}
        <div id="Info" className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 animate-fadeInUp">
                <div className="flex items-center gap-4">
                    {course.icon}
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">{course.title}</h3>
                </div>
                <p className="text-muted-foreground mt-3 mb-4 text-sm sm:text-base">{course.description}</p>
                <Button asChild className="w-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-transform hover:scale-105">
                    <Link href="#">বিস্তারিত দেখুন <ArrowUpRightFromSquare size={14} className="ml-2"/></Link>
                </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-8 w-full border border-border bg-card rounded-2xl p-6 sm:p-8 shadow-lg text-center relative animate-fadeInUp">
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">আমাদের বইসমূহ</div>
            </div>
             <p className="text-muted-foreground mb-4 text-sm sm:text-base">আমাদের কোর্সগুলোর পাশাপাশি প্রস্তুতিকে আরও শাণিত করতে সংগ্রহ করতে পারো আমাদের নিজস্ব প্রকাশনার বইগুলো।</p>
            <Button asChild className="transition-transform hover:scale-105">
                <Link href="/question-bank"><BookOpen className="mr-2"/> বই দেখতে ক্লিক করুন</Link>
            </Button>
        </div>


        <FloatingMenu />

      </div>
    </div>
  );
}


export default CoursesPage;
