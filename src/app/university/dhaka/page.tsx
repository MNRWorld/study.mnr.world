
'use client';
import { motion } from 'framer-motion';

import MainInfoCard from '@/components/DhakaMainInfoCard';
import LinkList from '@/components/common/LinkList';
import HistoryAndMap from '@/components/DhakaHistoryAndMap';
import CountdownTimer from '@/components/common/CountdownTimer';
import Circular from '@/components/common/Circular';
import QuestionBank from '@/components/DhakaQuestionBank';
import AdmissionInfo from '@/components/DhakaAdmissionInfo';
import FloatingMenu from '@/components/common/FloatingMenu';
import { admissionDeadlines } from '@/lib/data/deadlines';

function DhakaUniversityPage() {
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

  const duLinks = [
    [
        { href: "#Circular", label: "সার্কুলার" },
        { href: "/question-bank?tab=du", label: "প্রশ্নব্যাংক" }
    ],
    [
        { href: "https://www.du.ac.bd/", label: "মূল ওয়েবসাইট", target: "_blank", rel: "noreferrer noopener" },
        { href: "https://admission.eis.du.ac.bd/bn/408b7c8ad06e4d9954fa2d948a01f508", label: "ভর্তি ওয়েবসাইট", target: "_blank", rel: "noreferrer noopener" }
    ],
    [
        { href: "https://admission.eis.du.ac.bd/bn/408b7c8ad06e4d9954fa2d948a01f508", label: "আবেদন <b>|</b> প্রবেশপত্র <b>|</b> ফলাফল", target: "_blank", colSpan: 2 }
    ],
    [
        { href: "https://collegeadmission.eis.du.ac.bd/en/b45de047fde9788c53fradae3cfe8e88dc02", label: "অধিভুক্ত কলেজ ভর্তি", target: "_blank", colSpan: 2 }
    ]
];


  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <MainInfoCard />

        <LinkList links={duLinks} />

        <HistoryAndMap />

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative"
        >
          <CountdownTimer deadlines={admissionDeadlines} />
        </motion.div>
        
        <Circular 
          title="HSC-24 ব্যাচের সার্কুলার"
          note="(⚠ নোট: HSC-25 এর সার্কুলার এখনও প্রকাশিত হয়নি। আপাতত এটি দেখে আইডিয়া নিতে পারেন।)"
          downloadLink="https://t.me/Study_on_Telegram/13215"
          showPreviousYears={true}
        />

        <QuestionBank />
        
        <AdmissionInfo />

        <FloatingMenu />
      </div>
    </div>
  );
}

export default DhakaUniversityPage;
