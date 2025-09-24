
'use client';
import { motion } from 'framer-motion';

import MainInfoCard from './_components/MainInfoCard';
import LinkList from './_components/LinkList';
import HistoryAndMap from './_components/HistoryAndMap';
import CountdownTimer from './_components/CountdownTimer';
import Circular from './_components/Circular';
import QuestionBank from './_components/QuestionBank';
import AdmissionInfo from './_components/AdmissionInfo';
import FloatingMenu from './_components/FloatingMenu';

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
        
        <Circular />

        <QuestionBank />
        
        <AdmissionInfo />

        <FloatingMenu />
      </div>
    </div>
  );
}

export default DhakaUniversityPage;
