"use client";

import dynamic from "next/dynamic";
import LinkList from "@/components/common/LinkList";
import Circular from "@/components/common/Circular";
import PrivateAdmissionInfo from "@/components/PrivateAdmissionInfo";
import { privateLinks } from "@/lib/data/links";
import SimplePageHeader from "@/components/common/SimplePageHeader";

const CountdownTimer = dynamic(
  () => import("@/components/common/CountdownTimer"),
  { ssr: false },
);

function PrivatePage() {
  return (
    <div className="font-bengali bg-background">
      <div className="container mx-auto px-4">
        <SimplePageHeader
          title="প্রাইভেট বিশ্ববিদ্যালয় ভর্তি"
          description="দেশের শীর্ষস্থানীয় প্রাইভেট বিশ্ববিদ্যালয়গুলোতে ভর্তির সর্বশেষ তথ্য, যোগ্যতা ও পরীক্ষার মানবণ্টন সম্পর্কে জানুন।"
        />

        <LinkList links={privateLinks} />

        <div className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative">
          <CountdownTimer />
        </div>

        <Circular
          title="বিভিন্ন বিশ্ববিদ্যালয়ের সার্কুলার"
          note="(⚠ নোট: নিজ নিজ বিশ্ববিদ্যালয়ের ওয়েবসাইটে সর্বশেষ সার্কুলার পাবেন।)"
          downloadLink="#"
        />

        <PrivateAdmissionInfo />
      </div>
    </div>
  );
}

export default PrivatePage;
