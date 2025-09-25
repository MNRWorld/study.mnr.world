
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
import { duHistoryAndMapData } from '@/lib/data/admission-info';


const DhakaHistoryAndMap = () => {
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

    const { history, mapLocations } = duHistoryAndMapData;

    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
        >
            <Accordion type="multiple" className="w-full mt-8 space-y-4">
                <AccordionItem value="item-1" className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                    <AccordionTrigger className="p-4 sm:p-5 w-full flex justify-between items-center text-lg font-bold cursor-pointer hover:no-underline">
                        <span>{history.title}</span>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 sm:p-5 border-t border-border/50 text-base text-muted-foreground">
                        {history.paragraphs.map((p, i) => <p key={i} className="mb-4 last:mb-0">{p}</p>)}
                        <hr className="my-3 border-border/50" />
                        <b>{history.source.label}</b><br/>
                        {history.source.links.map((link, i) => (
                            <div key={i}>
                                {String(i+1).padStart(2, '0')}. <a href={link.url} target="_blank" className="text-primary hover:underline">{link.text}</a>
                            </div>
                        ))}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                    <AccordionTrigger className="p-4 sm:p-5 w-full flex justify-between items-center text-lg font-bold cursor-pointer hover:no-underline">
                        <span>{mapLocations.title}</span>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 sm:p-5 border-t border-border/50 text-base text-muted-foreground">
                        <Accordion type="multiple" className="w-full">
                            {mapLocations.categories.map((category, i) => (
                                <AccordionItem key={i} value={`sub-${i}`}>
                                    <AccordionTrigger className="hover:no-underline flex items-center justify-between">
                                        {category.name === 'মসজিদ' ? <Landmark className="mr-2"/> : <University className="mr-2"/>}
                                        {category.name}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                    <Table>
                                        <TableBody>
                                        {category.locations.map((loc, j) => (
                                            <TableRow key={j}>
                                                <TableCell className="text-center">{loc.name}</TableCell>
                                                <TableCell className="text-center"><Link href={loc.url} target="_blank" rel="noreferrer noopener" className="text-primary hover:underline">[লিঙ্ক]</Link></TableCell>
                                            </TableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </motion.div>
    );
}

export default DhakaHistoryAndMap;
