
'use client';
import { motion } from 'framer-motion';

import MainInfoCard from '@/app/university/dhaka/_components/MainInfoCard';
import LinkList from '@/app/university/dhaka/_components/LinkList';
import HistoryAndMap from '@/app/university/dhaka/_components/HistoryAndMap';
import CountdownTimer from '@/components/common/CountdownTimer';
import Circular from '@/components/common/Circular';
import QuestionBank from '@/app/university/dhaka/_components/QuestionBank';
import AdmissionInfo from '@/app/university/dhaka/_components/AdmissionInfo';
import FloatingMenu from '@/components/common/FloatingMenu';

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

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <MainInfoCard />

        <LinkList />

        <HistoryAndMap />

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative"
        >
          <CountdownTimer />
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
