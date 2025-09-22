
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
  File,
  BookOpen,
  University,
  FlaskConical,
  Calculator,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import FloatingMenu from '@/app/university/dhaka/_components/FloatingMenu';


function QuestionBankPage() {
  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Main Card */}
        <div className="mt-20 sm:mt-24 w-full border border-border bg-card rounded-2xl p-6 sm:p-8 shadow-lg text-center relative animate-fadeInUp">
          <div className="w-24 h-24 absolute -top-12 left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-xl z-10 flex items-center justify-center">
            <BookOpen className="h-14 w-14 text-primary" />
          </div>
          <div className="pt-12">
            <div className="text-2xl sm:text-3xl font-bold my-2 text-foreground">
              প্রশ্নব্যাংক ও সমাধান
            </div>
            <div className="text-sm text-muted-foreground mb-4">
              (Question Bank & Solutions)
            </div>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
            বিগত বছরের প্রশ্ন সমাধান করে ভর্তি প্রস্তুতিতে এগিয়ে থাকো। এখানে পাবে সকল বিশ্ববিদ্যালয় ও ইউনিটের প্রশ্নব্যাংক।
            </p>
          </div>
          <div className="flex justify-around items-center mb-6 text-sm sm:text-base max-w-md mx-auto">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground">২০+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">বিশ্ববিদ্যালয়</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground">১৫+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">বছর</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-foreground flex items-center justify-center">
                PDF
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="ml-1 cursor-pointer text-primary">
                        <Info size={16} />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-primary/10 text-primary-foreground border-primary">
                      <b>সহজে ডাউনলোডযোগ্য</b>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">פורמט</div>
            </div>
          </div>
        </div>

        {/* Question Bank */}
        <div id="QuestionBank" className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative animate-fadeInUp">
             <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">প্রশ্নব্যাংক</div>
            </div>
            <Tabs defaultValue="du" className="w-full">
                <TabsList className="flex flex-wrap justify-center h-auto bg-muted/50">
                    <TabsTrigger value="du"><University className="mr-2"/> ঢাকা বিশ্ববিদ্যালয়</TabsTrigger>
                    <TabsTrigger value="medical"><FlaskConical className="mr-2"/> মেডিকেল</TabsTrigger>
                    <TabsTrigger value="engineering"><Calculator className="mr-2"/> ইঞ্জিনিয়ারিং</TabsTrigger>
                    <TabsTrigger value="others">অন্যান্য</TabsTrigger>
                </TabsList>
                <TabsContent value="du">
                    <Accordion type="multiple" className="w-full text-left">
                        <AccordionItem value="qb-a-1" className="border-border rounded-2xl mt-1.5 bg-card hover:bg-accent/50 transition-colors">
                            <AccordionTrigger className="p-3 text-base font-bold hover:no-underline"><File className="inline-block mr-2" /> "ক" ইউনিট প্রশ্নব্যাংক</AccordionTrigger>
                            <AccordionContent className="p-4 pt-0 text-muted-foreground text-sm sm:text-base">
                                ● <a href="https://t.me/PDFHour/10357" target="_blank" className="text-primary hover:underline">আসপেক্ট “ক” ইউনিট প্রশ্নব্যাংক</a><br/>
                                ● <a href="https://t.me/PDFHour/10357" target="_blank" className="text-primary hover:underline">উদ্ভাস “ক” ইউনিট প্রশ্নব্যাংক</a><br/>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="qb-b-1" className="border-border rounded-2xl mt-1.5 bg-card hover:bg-accent/50 transition-colors">
                            <AccordionTrigger className="p-3 text-base font-bold hover:no-underline"><File className="inline-block mr-2" /> "খ" ইউনিট প্রশ্নব্যাংক</AccordionTrigger>
                             <AccordionContent className="p-4 pt-0 text-muted-foreground text-sm sm:text-base">
                                (এখানে "খ" ইউনিটের প্রশ্নব্যাংকের লিংক যুক্ত করা হবে)
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="qb-c-1" className="border-border rounded-2xl mt-1.5 bg-card hover:bg-accent/50 transition-colors">
                            <AccordionTrigger className="p-3 text-base font-bold hover:no-underline"><File className="inline-block mr-2" /> "গ" ইউনিট প্রশ্নব্যাংক</AccordionTrigger>
                             <AccordionContent className="p-4 pt-0 text-muted-foreground text-sm sm:text-base">
                                (এখানে "গ" ইউনিটের প্রশ্নব্যাংকের লিংক যুক্ত করা হবে)
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="qb-d-1" className="border-border rounded-2xl mt-1.5 bg-card hover:bg-accent/50 transition-colors">
                            <AccordionTrigger className="p-3 text-base font-bold hover:no-underline"><File className="inline-block mr-2" /> "ঘ / BBA" ইউনিট প্রশ্নব্যাংক</AccordionTrigger>
                             <AccordionContent className="p-4 pt-0 text-muted-foreground text-sm sm:text-base">
                                (এখানে "ঘ" ও BBA ইউনিটের প্রশ্নব্যাংকের লিংক যুক্ত করা হবে)
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </TabsContent>
                <TabsContent value="medical">
                    <p className="text-muted-foreground p-4">মেডিকেল ভর্তি পরীক্ষার বিগত বছরের প্রশ্ন ও সমাধান এখানে যুক্ত করা হবে।</p>
                </TabsContent>
                <TabsContent value="engineering">
                    <p className="text-muted-foreground p-4">বুয়েট, কুয়েট, রুয়েট, চুয়েট সহ সকল ইঞ্জিনিয়ারিং বিশ্ববিদ্যালয়ের প্রশ্ন ও সমাধান এখানে যুক্ত করা হবে।</p>
                </TabsContent>
                 <TabsContent value="others">
                    <p className="text-muted-foreground p-4">অন্যান্য সকল বিশ্ববিদ্যালয়ের প্রশ্ন ও সমাধান এখানে পাওয়া যাবে।</p>
                </TabsContent>
            </Tabs>
        </div>
        
        {/* Floating Menu is not super relevant here but can link to top */}
        <FloatingMenu />

      </div>
    </div>
  );
}

export default QuestionBankPage;
