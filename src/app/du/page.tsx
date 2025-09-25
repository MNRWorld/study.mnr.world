
'use client';

import dynamic from 'next/dynamic';
import MainInfoCard from '@/components/DhakaMainInfoCard';
import { Suspense } from 'react';
import LinkList from '@/components/common/LinkList';
import { duLinks } from '@/lib/data/links';
import Circular from '@/components/common/Circular';
import AdmissionInfo from '@/components/DhakaAdmissionInfo';

const HistoryAndMap = dynamic(() => import('@/components/DhakaHistoryAndMap'));
const CountdownTimer = dynamic(() => import('@/components/common/CountdownTimer'), { ssr: false });
const QuestionBank = dynamic(() => import('@/components/DhakaQuestionBank'), { ssr: false });


function DhakaUniversityPage() {

  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4 lg:px-[200px]">
        <MainInfoCard />

        <LinkList links={duLinks} />

        <Suspense fallback={<div>Loading history...</div>}>
            <HistoryAndMap />
        </Suspense>
        
        <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
          <Suspense fallback={<div>Loading timer...</div>}>
              <CountdownTimer />
          </Suspense>
        </div>
        
        <Circular 
          title="HSC-24 ব্যাচের সার্কুলার"
          note="(⚠ নোট: HSC-25 এর সার্কুলার এখনও প্রকাশিত হয়নি। আপাতত এটি দেখে আইডিয়া নিতে পারেন।)"
          downloadLink="https://t.me/Study_on_Telegram/13215"
          showPreviousYears={true}
        />

        <Suspense fallback={<div>Loading question bank...</div>}>
            <QuestionBank />
        </Suspense>

        <AdmissionInfo />
      </div>
    </div>
  );
}

export default DhakaUniversityPage;
