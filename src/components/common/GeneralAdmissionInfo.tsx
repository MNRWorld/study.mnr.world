
'use client';
import {
  ArrowUpRightFromSquare,
  Timer,
  BarChart3,
  Info,
  Link as LinkIcon
} from 'lucide-react';

const GeneralAdmissionInfo = () => {

    return (
        <div
            id="Info"
            className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative text-left"
        >
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">সাধারণ তথ্য</div>
            </div>
            
            <h2 id="ExamDate" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Timer className="mr-2"/> পরীক্ষার সময়কাল</h2>
             <div className="border border-border/80 p-3 text-center rounded-md text-sm sm:text-base">
                সব বিশ্ববিদ্যালয়ের <b>পরীক্ষার তারিখ ও কাউন্টডাউন</b> দেখতে ভিজিট করুন আমাদের <b><a href='https://mnr.world/ac/' target="_blank" className="text-primary hover:underline">অ্যাডমিশন ক্যালেন্ডার <ArrowUpRightFromSquare size={11} className="inline-block"/></a></b>
            </div>

             <h2 id="Result" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><BarChart3 className="mr-2"/> ভর্তি পরীক্ষার ফলাফল</h2>
             <span className="text-sm sm:text-base">● <b>ফলাফল প্রকাশ:</b> সাধারণত ভর্তি পরীক্ষার ১-৪ সপ্তাহের মধ্যেই ফলাফল প্রকাশিত হয়।
                <hr className="my-2 border-border/50" />
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> প্রতিটি বিশ্ববিদ্যালয়ের নিজস্ব ওয়েবসাইটে ফলাফল পাবেন।
            </span>
        </div>
    );
}

export default GeneralAdmissionInfo;
