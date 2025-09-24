
'use client';
import {
  Timer,
  BarChart3,
  CalendarDays,
  Info,
  Link as LinkIcon
} from 'lucide-react';
import React from 'react';
import CountdownTimer from '@/components/common/CountdownTimer';
import FloatingMenu from '@/components/common/FloatingMenu';
import { motion } from 'framer-motion';
import PageHeaderCard from '@/components/common/PageHeaderCard';
import { admissionDeadlines } from '@/lib/data/deadlines';
import GeneralAdmissionInfo from '@/components/common/GeneralAdmissionInfo';

function CalendarPage() {

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
        <PageHeaderCard
            icon={<CalendarDays className="h-14 w-14 text-primary" />}
            title="অ্যাডমিশন ক্যালেন্ডার"
            subtitle="Admission Calendar"
            description="সব বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার তারিখ, সময় ও সর্বশেষ আপডেট এক জায়গায় পেয়ে যাবেন।"
            stats={[
                { value: "৫০+", label: "বিশ্ববিদ্যালয়" },
                { value: "۱০০+", label: "ভর্তি পরীক্ষা" },
                { value: "লাইভ", label: "স্ট্যাটাস" }
            ]}
            button={{ href: "#Info", label: "মূল তথ্য", icon: <Info size={16} /> }}
        />

        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative"
        >
            <CountdownTimer deadlines={admissionDeadlines} />
        </motion.div>

        <GeneralAdmissionInfo />

        <FloatingMenu />

      </div>
    </div>
  );
}

export default CalendarPage;
