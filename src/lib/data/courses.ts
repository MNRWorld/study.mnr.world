import React from 'react';
import { University, HeartPulse, Cog, Blocks, BookMarked, Briefcase } from 'lucide-react';

export const courses = [
    {
      title: 'বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি',
      description: 'ঢাকা, রাজশাহী, চট্টগ্রাম, জাহাঙ্গীরনগরসহ সকল পাবলিক বিশ্ববিদ্যালয়ের পূর্ণাঙ্গ প্রস্তুতি।',
      icon: React.createElement(University, { className: "h-8 w-8 text-primary" }),
    },
    {
      title: 'মেডিকেল ও ডেন্টাল ভর্তি',
      description: 'মেডিকেল ও ডেন্টাল কলেজে ভর্তির জন্য বিশেষায়িত কোর্স ও মডেল টেস্ট।',
      icon: React.createElement(HeartPulse, { className: "h-8 w-8 text-primary" }),
    },
    {
      title: 'ইঞ্জিনিয়ারিং প্রস্তুতি (BUET, KUET, RUET, CUET)',
      description: 'বুয়েটসহ সকল ইঞ্জিনিয়ারিং বিশ্ববিদ্যালয়ের জন্য ফিজিক্স, কেমিস্ট্রি, ম্যাথ এর উপর বিশেষ কোর্স।',
      icon: React.createElement(Cog, { className: "h-8 w-8 text-primary" }),
    },
    {
      title: 'গুচ্ছ প্রস্তুতি (GST)',
      description: 'গুচ্ছভুক্ত ২২টি সাধারণ এবং বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের সমন্বিত প্রস্তুতি।',
      icon: React.createElement(Blocks, { className: "h-8 w-8 text-primary" }),
    },
    {
      title: 'HSC বোর্ড পরীক্ষার প্রস্তুতি',
      description: 'বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা শাখার সকল বিষয়ের উপর পূর্ণাঙ্গ প্রস্তুতি কোর্স।',
      icon: React.createElement(BookMarked, { className: "h-8 w-8 text-primary" }),
    },
    {
        title: 'IBA ও BUP প্রস্তুতি',
        description: 'IBA (DU, JU) ও BUP এর ভর্তি পরীক্ষার জন্য বিশেষ ইংরেজি ও গণিত কোর্স।',
        icon: React.createElement(Briefcase, { className: "h-8 w-8 text-primary" }),
    }
];
