"use client";

import { CalendarDays, Info } from "lucide-react";
import dynamic from "next/dynamic";
import PageHeaderCard from "@/components/common/PageHeaderCard";
import AdmissionTabs from "@/components/common/AdmissionTabs";

const CountdownTimer = dynamic(
  () => import("@/components/common/CountdownTimer"),
  { ssr: false },
);

function CalendarPage() {
  return (
    <div className="font-bengali bg-background py-8">
      <div className="container mx-auto px-2 lg:px-[170px]">
        <PageHeaderCard
          icon={<CalendarDays className="h-14 w-14 text-primary" />}
          title="অ্যাডমিশন ক্যালেন্ডার"
          subtitle="Admission Calendar"
          description="সব বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার তারিখ, সময় ও সর্বশেষ আপডেট এক জায়গায় পেয়ে যাবেন।"
          stats={[
            { value: "৫০+", label: "বিশ্ববিদ্যালয়" },
            { value: "১০০+", label: "ভর্তি পরীক্ষা" },
            { value: "লাইভ", label: "স্ট্যাটাস" },
          ]}
          button={{
            href: "#Info",
            label: "মূল তথ্য",
            icon: <Info size={16} />,
          }}
        />

        <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
          <CountdownTimer />
        </div>

        <AdmissionTabs />
      </div>
    </div>
  );
}

export default CalendarPage;
