
'use client';
import { motion } from 'framer-motion';

import MainInfoCard from '@/components/DhakaMainInfoCard';
import LinkList from '@/components/common/LinkList';
import HistoryAndMap from '@/components/DhakaHistoryAndMap';
import CountdownTimer from '@/components/common/CountdownTimer';
import Circular from '@/components/common/Circular';
import QuestionBank from '@/components/DhakaQuestionBank';
import AdmissionInfo from '@/components/DhakaAdmissionInfo';
import { admissionDeadlines } from '@/lib/data/deadlines';
import { duLinks } from '@/lib/data/links';

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
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bengali bg-background py-8"
    >
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

      </div>
    </motion.div>
  );
}

export default DhakaUniversityPage;
