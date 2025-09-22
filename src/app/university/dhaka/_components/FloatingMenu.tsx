'use client';

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import React, { useState } from 'react';

const FloatingMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
            <Button onClick={() => setMenuOpen(!menuOpen)} className="bg-blue-800 text-white rounded-l-full rounded-r-none px-4 py-3 text-lg hover:bg-blue-900">
                <Menu />
            </Button>
            {menuOpen && (
                <div className="absolute right-full top-1/2 -translate-y-1/2 w-56 bg-white rounded-lg shadow-lg p-2.5 animate-fadeIn">
                    <a href="#Links" className="block p-2 text-gray-800 hover:bg-blue-100">🔗 গুরুত্বপূর্ণ কিছু লিংক একত্রে</a>
                    <a href="#Circular" className="block p-2 text-gray-800 hover:bg-blue-100">📄 সার্কুলার</a>
                    <a href="#QuestionBank" className="block p-2 text-gray-800 hover:bg-blue-100">📚 প্রশ্নব্যাংক</a>
                    <a href="#Apply" className="block p-2 text-gray-800 hover:bg-blue-100">📝 আবেদন</a>
                    <a href="#AdmitCard" className="block p-2 text-gray-800 hover:bg-blue-100">🎟 প্রবেশপত্র</a>
                    <a href="#ExamDate" className="block p-2 text-gray-800 hover:bg-blue-100">⏰ পরীক্ষার সময়কাল</a>
                    <a href="#Location" className="block p-2 text-gray-800 hover:bg-blue-100">🗺️ ভর্তি পরীক্ষার কেন্দ্র</a>
                    <a href="#MarkDistributionAndOthers" className="block p-2 text-gray-800 hover:bg-blue-100">ℹ️ মানবন্টন ও অন্যান্য তথ্য</a>
                    <a href="#Result" className="block p-2 text-gray-800 hover:bg-blue-100">📊 ভর্তি পরীক্ষার ফলাফল</a>
                    <a href="#Subjects" className="block p-2 text-gray-800 hover:bg-blue-100">👤 সাবজেক্ট প্রতি সিট সংখ্যা</a>
                </div>
            )}
        </div>
    );
}

export default FloatingMenu;
