
'use client';

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const FloatingMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkClasses = "block p-2 text-foreground hover:bg-accent rounded-md";

    const menuVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
        exit: {
            x: 50,
            opacity: 0,
            transition: {
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1,
            }
        }
    };

    const itemVariants = {
        hidden: { x: 20, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: 20, opacity: 0 },
    };


    return (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
            <Button onClick={() => setMenuOpen(!menuOpen)} className="bg-primary text-primary-foreground rounded-l-full rounded-r-none px-4 py-3 text-lg hover:bg-primary/90">
                <Menu />
            </Button>
            <AnimatePresence>
            {menuOpen && (
                <motion.div
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-full top-1/2 -translate-y-1/2 w-56 bg-card border border-border rounded-lg shadow-lg p-2.5"
                >
                    <motion.a variants={itemVariants} href="#Links" className={linkClasses}>🔗 গুরুত্বপূর্ণ কিছু লিংক একত্রে</motion.a>
                    <motion.a variants={itemVariants} href="#Circular" className={linkClasses}>📄 সার্কুলার</motion.a>
                    <motion.a variants={itemVariants} href="#QuestionBank" className={linkClasses}>📚 প্রশ্নব্যাংক</motion.a>
                    <motion.a variants={itemVariants} href="#Apply" className={linkClasses}>📝 আবেদন</motion.a>
                    <motion.a variants={itemVariants} href="#AdmitCard" className={linkClasses}>🎟 প্রবেশপত্র</motion.a>
                    <motion.a variants={itemVariants} href="#ExamDate" className={linkClasses}>⏰ পরীক্ষার সময়কাল</motion.a>
                    <motion.a variants={itemVariants} href="#Location" className={linkClasses}>🗺️ ভর্তি পরীক্ষার কেন্দ্র</motion.a>
                    <motion.a variants={itemVariants} href="#MarkDistributionAndOthers" className={linkClasses}>ℹ️ মানবণ্টন ও অন্যান্য তথ্য</motion.a>
                    <motion.a variants={itemVariants} href="#Result" className={linkClasses}>📊 ভর্তি পরীক্ষার ফলাফল</motion.a>
                    <motion.a variants={itemVariants} href="#Subjects" className={linkClasses}>👤 সাবজেক্ট প্রতি সিট সংখ্যা</motion.a>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
}

export default FloatingMenu;
