
import React, { Suspense } from 'react';
import { BookOpen } from 'lucide-react';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import FloatingMenu from '@/components/common/FloatingMenu';
import QuestionBankTabs from '@/components/QuestionBankTabs';

// This is now a Server Component
export default function QuestionBankPage() {
  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-4">
        <PageHeaderCard
          icon={<BookOpen className="h-14 w-14 text-primary" />}
          title="প্রশ্নব্যাংক ও সমাধান"
          subtitle="Question Bank & Solutions"
          description="বিগত বছরের প্রশ্ন সমাধান করে ভর্তি প্রস্তুতিতে এগিয়ে থাকো। এখানেই পাবে সব বিশ্ববিদ্যালয় ও ইউনিটের প্রশ্নব্যাংক।"
          stats={[
            { value: '২০+', label: 'বিশ্ববিদ্যালয়' },
            { value: '১৫+', label: 'বছর' },
            { value: 'PDF', label: 'ফরম্যাট', tooltip: 'সহজে ডাউনলোডযোগ্য' },
          ]}
        />
        
        {/* Wrap the client component that uses searchParams in Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <QuestionBankTabs />
        </Suspense>

        <FloatingMenu />
      </div>
    </div>
  );
}
