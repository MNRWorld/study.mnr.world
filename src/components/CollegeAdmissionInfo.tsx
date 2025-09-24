
'use client';
import { motion } from 'framer-motion';
import {
  Link as LinkIcon,
  ArrowUpRightFromSquare,
  Timer,
  BarChart3,
  PenSquare,
  Banknote,
  Ticket,
} from 'lucide-react';

const CollegeAdmissionInfo = () => {
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
            <span className="text-base"><b>➜ আবেদন শুরুঃ</b> ...<br/>
            <b>➜ আবেদন শেষঃ</b> ...</span>
            <div className="my-2">
              <b><Banknote className="inline-block mr-2" />আবেদন ফিঃ</b> ...
            </div>

            <hr className="my-2 border-border/50" />

             <div className="text-base">
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='http://xiclassadmission.gov.bd/' target="_blank" className="text-primary hover:underline">xiclassadmission.gov.bd <ArrowUpRightFromSquare size={11} className="inline-block"/></a><br/><br/>
                
                ✔ <b><u>আবেদনের যোগ্যতাঃ</u></b>
                <hr className="my-1 border-border/50" />
                <p>সাধারণত এসএসসি পরীক্ষার ফলাফলের উপর ভিত্তি করে আবেদন করতে হয়। বিস্তারিত সার্কুলারে পাবেন।</p>
            </div>
            <hr className="my-2 border-border/50" />
            
            <h5 id="AdmitCard" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Ticket className="mr-2"/> প্রবেশপত্র</h5>
            <span className="text-base">সাধারণত কলেজ ভর্তিতে আলাদা প্রবেশপত্র থাকে না। আবেদন প্রক্রিয়া সম্পন্ন হলে একটি আবেদন কপি দেওয়া হয়, সেটিই প্রমাণ।</span>
            
            <h5 id="ExamDate" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Timer className="mr-2"/> ভর্তির সময়কাল</h5>
             <span className="text-base">ভর্তির তারিখ ও সময়সূচী সার্কুলারে উল্লেখ করা থাকে।</span>
            <hr className="my-2 border-border/50"/>
            <div className="border border-border/80 p-3 text-center rounded-md">
            সব কলেজের <b>ভর্তির তারিখ</b> জানতে ভিজিট করুন <b><a href='http://xiclassadmission.gov.bd/' target="_blank" className="text-primary hover:underline">একাদশ শ্রেণি ভর্তি ওয়েবসাইট <ArrowUpRightFromSquare size={11} className="inline-block"/></a></b>
            </div>

             <h5 id="Result" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><BarChart3 className="mr-2"/> ভর্তির ফলাফল</h5>
             <span className="text-base">● <b>ফলাফল প্রকাশ:</b> আবেদন প্রক্রিয়া শেষে নির্ধারিত তারিখে ফলাফল প্রকাশিত হয়।
                <hr className="my-1 border-border/50" />
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='http://xiclassadmission.gov.bd/' target="_blank" className="text-primary hover:underline">xiclassadmission.gov.bd <ArrowUpRightFromSquare size={11} className="inline-block"/></a>
            </span>
        </motion.div>
    );
};

export default CollegeAdmissionInfo;
