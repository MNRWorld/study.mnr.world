
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@/components/ui/table';
import { Landmark, University } from 'lucide-react';

const HistoryAndMap = () => {
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
                        <p><b>ঢাকা বিশ্ববিদ্যালয় (ঢাবি)</b> বাংলাদেশের প্রথম এবং সবচেয়ে प्रतिष्ठিত বিশ্ববিদ্যালয়, যা ১৯২১ সালের ১ জুলাই প্রতিষ্ঠিত হয়। এটি ব্রিটিশ ভারতের অক্সব্রিজ মডেলের আদলে গঠিত হয়েছিল এবং শুরুতে মাত্র তিনটি অনুষদ (কলা, বিজ্ঞান ও আইন) নিয়ে যাত্রা শুরু করে।</p>
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
    );
}

export default HistoryAndMap;
