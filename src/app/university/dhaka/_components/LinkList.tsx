
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';

const LinkList = () => {
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
    );
}

export default LinkList;
