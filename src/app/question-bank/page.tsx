
'use client';

import React from 'react';
import { BookOpen } from 'lucide-react';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import QuestionBankTabs from '@/components/QuestionBankTabs';
import { motion } from 'framer-motion';

export default function QuestionBankPage() {
  return (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bengali bg-background py-8"
    >
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={<BookOpen className="h-14 w-14 text-primary" />}
          title="প্রশ্নব্যাংক ও সমাধান"
          subtitle="Question Bank & Solutions"
          description="বিগত বছরের প্রশ্ন সমাধান করে ভর্তি প্রস্তুতিতে এগিয়ে থাকো। এখানেই পাবে সব বিশ্ববিদ্যালয় ও ইউনিটের প্রশ্নব্যাংক।"
          stats={[
            { value: '۲۰+', label: 'বিশ্ববিদ্যালয়' },
            { value: '۱۵+', label: 'বছর' },
            { value: 'PDF', label: 'ফরম্যাট', tooltip: 'সহজে ডাউনলোডযোগ্য' },
          ]}
        />
        
        <QuestionBankTabs />

      </div>
    </motion.div>
  );
}
