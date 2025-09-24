
'use client';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Info,
  PenSquare,
  Banknote,
  CircleCheck,
  Link as LinkIcon,
  ArrowUpRightFromSquare,
  CircleAlert,
  Ticket,
  Timer,
  MapPin,
  BarChart3,
} from 'lucide-react';

const AdmissionInfo = () => {
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
            id="Info"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative text-left"
        >
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">ভর্তি তথ্য (HSC-24)</div>
            </div>
            
            <h5 id="Apply" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><PenSquare className="mr-2"/> আবেদন</h5>
            <div className="text-base">
                <span><b>➜ আবেদন শুরুঃ</b> ০৪ নভেম্বর, ২০২৪ (দুপুর ১২টা থেকে)<br/>
                <b>➜ আবেদন শেষঃ</b> ২৫ নভেম্বর, ২০২৪ (রাত ১১.৫৯টা পর্যন্ত)</span>
                <div className="my-2">
                <b><Banknote className="inline-block mr-2" />আবেদন ফিঃ</b><br/>
                <b>&nbsp;&nbsp;&nbsp; ✓ ক, খ, গ, চ ইউনিট:</b> ১০৫০৳<br/>
                <b>&nbsp;&nbsp;&nbsp; ✓ আইবিএ ইউনিট:</b> ১৫০০৳
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                <CircleCheck className="text-green-600" size={16}/>
                <a href='https://t.me/Study_on_Telegram/13209' target="_blank" className="text-primary hover:underline">আবেদনের ধাপসমূহ</a> | 
                <a href='https://t.me/Study_on_Telegram/13206' className="text-primary hover:underline">সচিত্র আবেদন প্রক্রিয়া</a>
                </div>
            </div>
            <hr className="my-3 border-border/50" />

            <div className="text-base">
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='https://admission.eis.du.ac.bd/' target="_blank" className="text-primary hover:underline">admission.eis.du.ac.bd <ArrowUpRightFromSquare size={11} className="inline-block"/></a><br/><br/>
                
                ✔ <b><u>আবেদনের যোগ্যতাঃ</u></b>
                <hr className="my-1 border-border/50" />
                ➤ <b>SSC ব্যাচ:</b> 2019-2022<br/>
                ➤ <b>HSC ব্যাচ:</b> 2024
                <br/><i className="text-orange-500 flex items-center"><CircleAlert size={16} className="inline-block mr-1"/> <b>সেকেন্ড টাইমঃ</b> নেই</i>
            </div>
            <hr className="my-3 border-border/50" />

            <Accordion type="multiple" className="w-full">
                <AccordionItem value="info-1" className="border-border rounded-2xl hover:bg-accent/50">
                <AccordionTrigger className="p-3 text-lg font-bold hover:no-underline"><CircleAlert className="mr-2"/> ইউনিট ও বিভাগ ভিত্তিক শর্ত</AccordionTrigger>
                <AccordionContent className="p-4 pt-0 text-muted-foreground text-base">
                    ❐ <b>"ক" ইউনিট:</b><br/>
                    ● <b>বিজ্ঞান বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ ন্যূনতম GPA-3.5 এবং SSC ও HSC মিলে মোট ন্যূনতম GPA-8.0<br/>
                    <b>● অন্যান্য বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ ন্যূনতম GPA-3.0 এবং SSC ও HSC মিলে মোট ন্যূনতম GPA-7.5<br/><br/>

                    ❐ <b>"খ" ইউনিট:</b><br/>
                    ● <b>মানবিক ও ব্যবসা বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ ন্যূনতম GPA-3.0 এবং SSC ও HSC মিলে মোট ন্যূনতম GPA-7.5<br/>
                    <b>● বিজ্ঞান বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ ন্যূনতম GPA-3.5 এবং SSC ও HSC মিলে মোট ন্যূনতম GPA-8.0<br/><br/>

                    ❐ <b>"গ" ইউনিট:</b><br/>
                    ● <b>মানবিক ও ব্যবসা বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ ন্যূনতম GPA-3.0 এবং SSC ও HSC মিলে মোট ন্যূনতম GPA-7.5<br/>
                    <b>● বিজ্ঞান বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ ন্যূনতম GPA-3.5 এবং SSC ও HSC মিলে মোট ন্যূনতম GPA-8.0<br/><br/>

                    ❐ <b>"চ" ইউনিট:</b><br/>
                    ● <b>যেকোনো বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ ন্যূনতম GPA-3.0 এবং SSC ও HSC মিলে মোট ন্যূনতম GPA-6.5<br/><br/>

                    ❐ <b>IBA ইউনিট:</b><br/>
                    ● <b>যেকোনো বিভাগ:</b> SSC ও HSC তে চতুর্থ বিষয় সহ ন্যূনতম GPA-3.5 এবং SSC ও HSC মিলে মোট ন্যূনতম GPA-8.0
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="info-2" className="border-border rounded-2xl mt-1.5 hover:bg-accent/50">
                <AccordionTrigger className="p-3 text-lg font-bold hover:no-underline"><Info className="mr-2"/> ইমপ্রুভমেন্ট ও পরবর্তী ব্যাচের পরীক্ষা</AccordionTrigger>
                <AccordionContent className="p-4 pt-0 text-muted-foreground text-base">
                    <b>দুটি শর্ত পূরণ করে একজন শিক্ষার্থী পরবর্তী ব্যাচের সাথে ঢাকা বিশ্ববিদ্যালয়ে পরীক্ষা দিতে পারে:<br/><br/>
                    ১।</b> ঢাকা বিশ্ববিদ্যালয় বা এর অধিভুক্ত কোনো কলেজে আবেদন না করা।<br/>
                    <b>২।</b> পরবর্তী ব্যাচের সাথে HSC ইমপ্রুভমেন্ট পরীক্ষা দেওয়া।<br/><br/>

                    <b><u>উদাহরণ:</u></b> একজন HSC-24 ব্যাচের শিক্ষার্থী যদি ঢাবিতে আবেদন না করে এবং HSC-25 ব্যাচের সাথে ইমপ্রুভমেন্ট দেয়, তবে সে HSC-25 ব্যাচের সাথে পরীক্ষা দিতে পারবে।
                </AccordionContent>
                </AccordionItem>
            </Accordion>
            
            <h5 id="AdmitCard" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Ticket className="mr-2"/> প্রবেশপত্র</h5>
            <div className="text-base">
                <span><b>➜ ডাউনলোড শুরু:</b> ২৩ ডিসেম্বর, ২০২৪<br/>
                <b>➜ ডাউনলোড শেষ:</b> পরীক্ষা শুরুর ১ ঘণ্টা পূর্ব পর্যন্ত<br/><br/>
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='https://admission.eis.du.ac.bd/' target="_blank" className="text-primary hover:underline">admission.eis.du.ac.bd <ArrowUpRightFromSquare size={11} className="inline-block"/></a>
                <br/>(লগইন করে ডাউনলোড করতে হবে।)
                <br/><br/>
                <b><i className="text-orange-500 flex items-center"><CircleAlert size={16} className="inline-block mr-1"/></i> নোটঃ</b> প্রবেশপত্রে শুধু পরীক্ষার অঞ্চল উল্লেখ থাকে। পরীক্ষার কেন্দ্র, বিল্ডিং ও রুম নম্বর সাধারণত পরীক্ষার ৪৮-৭২ ঘণ্টা আগে ওয়েবসাইটে প্রকাশ করা হয়。
                </span>
            </div>
            
            <h5 id="ExamDate" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Timer className="mr-2"/> পরীক্ষার সময়কাল</h5>
            <span className="text-base">❐ <b>"ক" ইউনিট:</b> ১৫ ফেব্রুয়ারী <br/>
                ❐ <b>"খ" ইউনিট:</b> ২৫ জানুয়ারী <br/>
                ❐ <b>"গ" ইউনিট:</b> ০৮ ফেব্রুয়ারী <br/>
                ❐ <b>"চ" ইউনিট:</b> ০৪ জানুয়ারী <br/>
                ❐ <b>IBA ইউনিট:</b> ০৩ জানুয়ারী
            </span>
            <hr className="my-3 border-border/50"/>
            <div className="border border-border/80 p-3 text-center rounded-md">
                সব বিশ্ববিদ্যালয়ের <b>পরীক্ষার তারিখ ও কাউন্টডাউন</b> জানতে ভিজিট করুন আমাদের <b><a href='https://mnr.world/ac/' target="_blank" className="text-primary hover:underline">অ্যাডমিশন ক্যালেন্ডার <ArrowUpRightFromSquare size={11} className="inline-block"/></a></b>
            </div>

            <h5 id="Location" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><MapPin className="mr-2"/> ভর্তি পরীক্ষার কেন্দ্র</h5>
            <span className="text-base">➜ বিভাগীয় শহরে <a href="https://t.me/Study_on_Telegram/13199" className="text-primary hover:underline">[তালিকা]</a><br/>
            <hr className="my-2 border-border/50" />
            <b><i className="text-orange-500 flex items-center"><CircleAlert size={16} className="inline-block mr-1"/></i> নোটঃ</b> "চ" ইউনিট (চারুকলা) এবং IBA-এর পরীক্ষা শুধু ঢাকায় অনুষ্ঠিত হবে। বাকি সব ইউনিটের পরীক্ষা বিভাগীয় শহরে হবে।</span>

            <div id="MarkDistributionAndOthers"></div>
            <h5 className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Info className="mr-2"/> মানবণ্টন ও অন্যান্য তথ্য</h5>

            <div className="border border-border/80 rounded-xl p-4 mt-2.5 text-base">
                ● <b>সিলেবাসঃ </b>সংক্ষিপ্ত<hr className="my-1 border-border/50"/>
                ● <b>সেকেন্ড টাইমঃ </b>নেই<hr className="my-1 border-border/50"/>
                ● <b>নেগেটিভ মার্কিংঃ </b>প্রতি ভুলের জন্য ০.২৫ নম্বর কাটা যাবে<hr className="my-1 border-border/50"/>
                ● <b>ক্যালকুলেটরঃ </b>ব্যবহার করা যাবে না
            </div>

            <h5 id="Result" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><BarChart3 className="mr-2"/> ভর্তি পরীক্ষার ফলাফল</h5>
            <span className="text-base">● <b>ফলাফল প্রকাশ:</b> ভর্তি পরীক্ষার ৪ সপ্তাহের মধ্যে
                <hr className="my-1 border-border/50" />
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href='https://admission.eis.du.ac.bd/' target="_blank" className="text-primary hover:underline">admission.eis.du.ac.bd <ArrowUpRightFromSquare size={11} className="inline-block"/></a>
            </span>
        </motion.div>
    );
};

export default AdmissionInfo;
