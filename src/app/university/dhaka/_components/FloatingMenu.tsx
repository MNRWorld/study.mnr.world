'use client';

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import React, { useState } from 'react';

const FloatingMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkClasses = "block p-2 text-foreground hover:bg-accent rounded-md";

    return (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
            <Button onClick={() => setMenuOpen(!menuOpen)} className="bg-primary text-primary-foreground rounded-l-full rounded-r-none px-4 py-3 text-lg hover:bg-primary/90">
                <Menu />
            </Button>
            {menuOpen && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 w-56 bg-card border border-border rounded-lg shadow-lg p-2.5 animate-fadeIn">
                    <a href="#Links" className={linkClasses}>🔗 গুরুত্বপূর্ণ কিছু লিংক একত্রে</a>
                    <a href="#Circular" className={linkClasses}>📄 সার্কুলার</a>
                    <a href="#QuestionBank" className={linkClasses}>📚 প্রশ্নব্যাংক</a>
                    <a href="#Apply" className={linkClasses}>📝 আবেদন</a>
                    <a href="#AdmitCard" className={linkClasses}>🎟 প্রবেশপত্র</a>
                    <a href="#ExamDate" className={linkClasses}>⏰ পরীক্ষার সময়কাল</a>
                    <a href="#Location" className={linkClasses}>🗺️ ভর্তি পরীক্ষার কেন্দ্র</a>
                    <a href="#MarkDistributionAndOthers" className={linkClasses}>ℹ️ মানবন্টন ও অন্যান্য তথ্য</a>
                    <a href="#Result" className={linkClasses}>📊 ভর্তি পরীক্ষার ফলাফল</a>
                    <a href="#Subjects" className={linkClasses}>👤 সাবজেক্ট প্রতি সিট সংখ্যা</a>
                </div>
            )}
        </div>
    );
}

export default FloatingMenu;
