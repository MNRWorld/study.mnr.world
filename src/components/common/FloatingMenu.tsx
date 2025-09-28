
'use client';

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';


const FloatingMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkClasses = "block p-2 text-foreground hover:bg-accent rounded-md transition-colors";

    const menuItems = [
        { href: "#Links", label: "🔗 গুরুত্বপূর্ণ কিছু লিংক একত্রে" },
        { href: "#Circular", label: "📄 সার্কুলার" },
        { href: "#QuestionBank", label: "📚 প্রশ্নব্যাংক" },
        { href: "#Apply", label: "📝 আবেদন" },
        { href: "#AdmitCard", label: "🎟 প্রবেশপত্র" },
        { href: "#ExamDate", label: "⏰ পরীক্ষার সময়কাল" },
        { href: "#Location", label: "🗺️ ভর্তি পরীক্ষার কেন্দ্র" },
        { href: "#MarkDistributionAndOthers", label: "ℹ️ মানবণ্টন ও অন্যান্য তথ্য" },
        { href: "#Result", label: "📊 ভর্তি পরীক্ষার ফলাফল" },
        { href: "#Subjects", label: "👤 সাবজেক্ট প্রতি সিট সংখ্যা" },
    ];

    return (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
            <Button onClick={() => setMenuOpen(!menuOpen)} className="bg-primary text-primary-foreground rounded-l-full rounded-r-none px-4 py-3 text-lg hover:bg-primary/90">
                <Menu />
            </Button>
            <div
                className={cn(
                    "absolute right-full top-1/2 -translate-y-1/2 w-56 bg-card border border-border rounded-lg shadow-lg p-2.5 transition-all duration-300 ease-in-out",
                    menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
                )}
            >
                {menuItems.map((item, index) => (
                    <a 
                        key={index}
                        href={item.href} 
                        className={cn(linkClasses, "transition-transform duration-200 ease-in-out")}
                        style={{ transitionDelay: `${index * 30}ms`, transform: menuOpen ? 'translateX(0)' : 'translateX(20px)' }}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default FloatingMenu;
