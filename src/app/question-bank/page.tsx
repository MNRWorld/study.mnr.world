
'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Info,
  File,
  BookOpen,
  University,
  FlaskConical,
  Rocket,
  Atom,
} from 'lucide-react';
import React from 'react';
import FloatingMenu from '@/components/common/FloatingMenu';
import { motion } from 'framer-motion';
import PageHeaderCard from '@/components/common/PageHeaderCard';


function QuestionBankPage() {

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
            icon={<BookOpen className="h-14 w-14 text-primary" />}
            title="প্রশ্নব্যাংক ও সমাধান"
            subtitle="Question Bank & Solutions"
            description="বিগত বছরের প্রশ্ন সমাধান করে ভর্তি প্রস্তুতিতে এগিয়ে থাকো। এখানেই পাবে সব বিশ্ববিদ্যালয় ও ইউনিটের প্রশ্নব্যাংক।"
            stats={[
                { value: "২০+", label: "বিশ্ববিদ্যালয়" },
                { value: "১৫+", label: "বছর" },
                { value: "PDF", label: "ফরম্যাট", tooltip: "সহজে ডাউনলোডযোগ্য" }
            ]}
        />

        {/* Question Bank */}
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            id="QuestionBank"
            className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative"
        >
             <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">প্রশ্নব্যাংক</div>
            </div>
            <Tabs defaultValue="du" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-muted/50">
                    <TabsTrigger value="du"><University className="mr-2"/> ঢাকা বিশ্ববিদ্যালয়</TabsTrigger>
                    <TabsTrigger value="medical"><FlaskConical className="mr-2"/> মেডিকেল</TabsTrigger>
                    <TabsTrigger value="engineering"><Rocket className="mr-2"/> ইঞ্জিনিয়ারিং</TabsTrigger>
                    <TabsTrigger value="others"><Atom className="mr-2"/> অন্যান্য</TabsTrigger>
                </TabsList>
                <TabsContent value="du">
                    <Accordion type="multiple" className="w-full text-left">
                        <AccordionItem value="qb-a-1" className="border-border rounded-2xl mt-1.5 bg-card hover:bg-accent/50 transition-colors">
                            <AccordionTrigger className="p-3 text-lg font-bold hover:no-underline"><File className="inline-block mr-2" /> "ক" ইউনিট প্রশ্নব্যাংক</AccordionTrigger>
                            <AccordionContent className="p-4 pt-0 text-muted-foreground text-base">
                                ● <a href="https://t.me/PDFHour/10357" target="_blank" className="text-primary hover:underline">আসপেক্ট “ক” ইউনিট প্রশ্নব্যাংক</a><br/>
                                ● <a href="https://t.me/PDFHour/10357" target="_blank" className="text-primary hover:underline">উদ্ভাস “ক” ইউনিট প্রশ্নব্যাংক</a><br/>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="qb-b-1" className="border-border rounded-2xl mt-1.5 bg-card hover:bg-accent/50 transition-colors">
                            <AccordionTrigger className="p-3 text-lg font-bold hover:no-underline"><File className="inline-block mr-2" /> "খ" ইউনিট প্রশ্নব্যাংক</AccordionTrigger>
                             <AccordionContent className="p-4 pt-0 text-muted-foreground text-base">
                                (এখানে "খ" ইউনিটের প্রশ্নব্যাংকের লিঙ্ক যুক্ত করা হবে)
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="qb-c-1" className="border-border rounded-2xl mt-1.5 bg-card hover:bg-accent/50 transition-colors">
                            <AccordionTrigger className="p-3 text-lg font-bold hover:no-underline"><File className="inline-block mr-2" /> "গ" ইউনিট প্রশ্নব্যাংক</AccordionTrigger>
                             <AccordionContent className="p-4 pt-0 text-muted-foreground text-base">
                                (এখানে "গ" ইউনিটের প্রশ্নব্যাংকের লিঙ্ক যুক্ত করা হবে)
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="qb-d-1" className="border-border rounded-2xl mt-1.5 bg-card hover:bg-accent/50 transition-colors">
                            <AccordionTrigger className="p-3 text-lg font-bold hover:no-underline"><File className="inline-block mr-2" /> "ঘ / BBA" ইউনিট প্রশ্নব্যাংক</AccordionTrigger>
                             <AccordionContent className="p-4 pt-0 text-muted-foreground text-base">
                                (এখানে "ঘ" ও BBA ইউনিটের প্রশ্নব্যাংকের লিঙ্ক যুক্ত করা হবে)
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
        </motion.div>
        
        <FloatingMenu />

      </div>
    </div>
  );
}

export default QuestionBankPage;
