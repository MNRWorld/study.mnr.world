
'use client';
import { motion } from 'framer-motion';
import { File } from 'lucide-react';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


const QuestionBank = () => {
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
                        <AccordionItem value="qb-a-1" className="border-border rounded-2xl mt-1.5 bg-card hover:bg-accent/50 transition-colors">
                        <AccordionTrigger className="p-3 text-lg font-bold hover:no-underline"><File className="inline-block mr-2" /> সালভিত্তিক প্রশ্নব্যাংক</AccordionTrigger>
                        <AccordionContent className="p-4 pt-0 text-muted-foreground text-base">
                            ● <Link href="https://t.me/PDFHour/10357" target="_blank" className="text-primary hover:underline">আসপেক্ট "ক" ইউনিট প্রশ্নব্যাংক</Link><br/>
                            ● <Link href="https://t.me/PDFHour/10357" target="_blank" className="text-primary hover:underline">উদ্ভাস "ক" ইউনিট প্রশ্নব্যাংক</Link><br/>
                        </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="qb-a-2" className="border-border rounded-2xl mt-1.5 bg-card hover:bg-accent/50 transition-colors">
                        <AccordionTrigger className="p-3 text-lg font-bold hover:no-underline"><File className="inline-block mr-2" /> অধ্যায়ভিত্তিক প্রশ্নব্যাংক</AccordionTrigger>
                        <AccordionContent className="p-4 pt-0 text-muted-foreground text-base">
                            ● <Link href="https://t.me/PDFHour/10285" target="_blank" className="text-primary hover:underline">রেটিনা ঢাবি "ক" ইউনিট প্রশ্নব্যাংক</Link><br/><br/>
                            <b> 🔰 সহায়ক বই</b><br/>
                            ● <Link href="https://t.me/PDFHour/10214" target="_blank" className="text-primary hover:underline">উদ্ভাস ভার্সিটি "ক" প্রশ্নব্যাংক</Link><br/>
                            ● <Link href="https://t.me/PDFHour/10478" target="_blank" className="text-primary hover:underline">উদ্ভাস ভার্সিটি "ক" প্রিপারেশন বুক</Link>
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
    );
}

export default QuestionBank;
