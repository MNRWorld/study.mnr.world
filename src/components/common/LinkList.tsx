
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';

interface LinkItem {
    href: string;
    label: string;
    target?: string;
    rel?: string;
    colSpan?: number;
}

interface LinkListProps {
    links: LinkItem[][];
}

const LinkList = ({ links }: LinkListProps) => {
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
                    {links.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((link, linkIndex) => (
                                <TableCell key={linkIndex} className="text-center" colSpan={link.colSpan}>
                                    <Link 
                                        href={link.href} 
                                        target={link.target} 
                                        rel={link.rel}
                                        className="block w-full hover:bg-accent rounded-md py-2 px-2"
                                    >
                                        <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                    </Link>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </motion.div>
    );
}

export default LinkList;
