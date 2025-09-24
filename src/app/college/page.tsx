
'use client';
import { School, Info } from 'lucide-react';
import React from 'react';
import CountdownTimer from '@/components/common/CountdownTimer';
import FloatingMenu from '@/components/common/FloatingMenu';
import { motion } from 'framer-motion';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import LinkList from '@/components/common/LinkList';
import Circular from '@/components/common/Circular';
import CollegeAdmissionInfo from '@/components/CollegeAdmissionInfo';
import { admissionDeadlines } from '@/lib/data/deadlines';

function CollegePage() {
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

    const collegeLinks = [
        [
            { href: "#Circular", label: "সার্কুলার" },
            { href: "/question-bank", label: "প্রশ্নব্যাংক" }
        ],
        [
            { href: "http://xiclassadmission.gov.bd/", label: "মূল ওয়েবসাইট", target: "_blank", rel: "noreferrer noopener" },
            { href: "http://xiclassadmission.gov.bd/", label: "ভর্তি ওয়েবসাইট", target: "_blank", rel: "noreferrer noopener" }
        ]
    ];


  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
            icon={<School className="h-14 w-14 text-primary" />}
            title="কলেজ ভর্তি তথ্য"
            subtitle="College Admission"
            description="দেশের সেরা কলেজগুলোতে ভর্তির জন্য প্রয়োজনীয় সব তথ্য ও সর্বশেষ আপডেট এখানেই পাবেন।"
            stats={[
                { value: "১০০+", label: "কলেজ" },
                { value: "বিভিন্ন", label: "বিভাগ" },
                { value: "হাজারো", label: "আসন", tooltip: "প্রতি বছর আসন সংখ্যা পরিবর্তিত হয়" }
            ]}
            button={{ href: "#Info", label: "মূল তথ্য", icon: <Info size={16} /> }}
        />

        <LinkList links={collegeLinks} />

        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative"
        >
            <CountdownTimer deadlines={admissionDeadlines} />
        </motion.div>
        
        <Circular 
          title="সম্পূর্ণ সার্কুলার"
          note="(⚠ নোট: সর্বশেষ সার্কুলার এখনও প্রকাশিত হয়নি। পূর্ববর্তী বছরের সার্কুলার দেখে আইডিয়া নিতে পারেন।)"
          downloadLink="#"
          showPreviousYears={true}
        />
        
        <CollegeAdmissionInfo />

        <FloatingMenu />

      </div>
    </div>
  );
}

export default CollegePage;
