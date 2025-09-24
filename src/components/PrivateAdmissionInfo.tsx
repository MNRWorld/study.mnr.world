
'use client';
import { motion } from 'framer-motion';
import {
  Info,
  PenSquare,
  Banknote,
  MapPin,
} from 'lucide-react';

const PrivateAdmissionInfo = () => {
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
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            id="Info"
            className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative text-left"
        >
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">তথ্যভান্ডার</div>
            </div>
            
            <h5 id="Apply" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><PenSquare className="mr-2"/> আবেদন</h5>
            <span className="text-base"><b>➜ আবেদন শুরু ও শেষঃ</b> প্রতিটি বিশ্ববিদ্যালয়ের নিজস্ব ওয়েবসাইটে ভিন্ন ভিন্ন সময়ে আবেদন নেওয়া হয়।</span>
            <div className="my-2">
              <b><Banknote className="inline-block mr-2" />আবেদন ফিঃ</b> বিশ্ববিদ্যালয়ভেদে ভিন্ন।
            </div>
            <hr className="my-2 border-border/50" />

             <div className="text-base">
                ✔ <b><u>আবেদনের যোগ্যতাঃ</u></b>
                <hr className="my-1 border-border/50" />
                <p>UGC কর্তৃক নির্ধারিত ন্যূনতম যোগ্যতা প্রয়োজন। তবে অনেক বিশ্ববিদ্যালয় এর চেয়ে বেশি যোগ্যতা চাইতে পারে। বিস্তারিত জানতে পছন্দের বিশ্ববিদ্যালয়ের ওয়েবসাইট ভিজিট করুন।</p>
            </div>
            <hr className="my-2 border-border/50" />
            
            <h5 id="ExamDate" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Info className="mr-2"/> পরীক্ষার সময়কাল</h5>
             <span className="text-base">প্রতিটি বিশ্ববিদ্যালয়ের নিজস্ব সময়সূচী অনুযায়ী পরীক্ষা অনুষ্ঠিত হয়।</span>
            <hr className="my-2 border-border/50"/>

            <h5 id="Location" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><MapPin className="mr-2"/> ভর্তি পরীক্ষার কেন্দ্র</h5>
             <span className="text-base">সাধারণত বিশ্ববিদ্যালয়ের নিজস্ব ক্যাম্পাসেই পরীক্ষা অনুষ্ঠিত হয়।</span>

            <div id="MarkDistributionAndOthers"></div>
            <h5 className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Info className="mr-2"/> মানবণ্টন ও অন্যান্য তথ্য</h5>
            <p className="text-base">মানবণ্টন, সিলেবাস ও পরীক্ষার পদ্ধতি বিশ্ববিদ্যালয়ভেদে সম্পূর্ণ ভিন্ন। সঠিক তথ্যের জন্য পছন্দের বিশ্ববিদ্যালয়ের ওয়েবসাইট ভিজিট করুন।</p>

        </motion.div>
    );
};

export default PrivateAdmissionInfo;
