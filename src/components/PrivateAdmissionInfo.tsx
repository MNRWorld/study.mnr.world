
'use client';
import { motion } from 'framer-motion';
import {
  Info,
  PenSquare,
  Banknote,
  MapPin,
} from 'lucide-react';
import { privateAdmissionInfo } from '@/lib/data/admission-info';

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

    const { apply, examDate, examCenter, generalInfo, title } = privateAdmissionInfo;

    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            id="Info"
            className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative text-left"
        >
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">{title}</div>
            </div>
            
            <h5 id="Apply" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><PenSquare className="mr-2"/> {apply.title}</h5>
            <span className="text-base"><b>➜ আবেদন শুরু ও শেষঃ</b> {apply.schedule}</span>
            <div className="my-2">
              <b><Banknote className="inline-block mr-2" />আবেদন ফিঃ</b> {apply.fee}
            </div>
            <hr className="my-2 border-border/50" />

             <div className="text-base">
                ✔ <b><u>{apply.qualificationTitle}</u></b>
                <hr className="my-1 border-border/50" />
                <p>{apply.qualificationDetails}</p>
            </div>
            <hr className="my-2 border-border/50" />
            
            <h5 id="ExamDate" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Info className="mr-2"/> {examDate.title}</h5>
             <span className="text-base">{examDate.details}</span>
            <hr className="my-2 border-border/50"/>

            <h5 id="Location" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><MapPin className="mr-2"/> {examCenter.title}</h5>
             <span className="text-base">{examCenter.details}</span>

            <div id="MarkDistributionAndOthers"></div>
            <h5 className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Info className="mr-2"/> {generalInfo.title}</h5>
            <p className="text-base">{generalInfo.details}</p>

        </motion.div>
    );
};

export default PrivateAdmissionInfo;
