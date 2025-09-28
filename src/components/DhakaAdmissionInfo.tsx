
'use client';
import React from 'react';
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
import { duAdmissionInfo } from '@/lib/data/admission-info';

const DhakaAdmissionInfo = () => {
    const { apply, unitRequirements, improvementPolicy, admitCard, examDate, examCenter, generalInfo, result } = duAdmissionInfo;

    return (
        <div
            id="Info"
            className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative text-left fade-in-up"
        >
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">{duAdmissionInfo.title}</div>
            </div>
            
            <h2 id="Apply" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><PenSquare className="mr-2"/> {apply.title}</h2>
            <div className="text-base">
                <span><b>➜ আবেদন শুরুঃ</b> {apply.startDate}<br/>
                <b>➜ আবেদন শেষঃ</b> {apply.endDate}</span>
                <div className="my-2">
                <b><Banknote className="inline-block mr-2" />আবেদন ফিঃ</b><br/>
                {apply.fees.map((fee, index) => (
                    <div key={index}>&nbsp;&nbsp;&nbsp; ✓ {fee.unit}: {fee.amount}</div>
                ))}
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                <CircleCheck className="text-green-600" size={16}/>
                {apply.helpfulLinks.map((link, index) => (
                    <React.Fragment key={index}>
                    <a href={link.url} target="_blank" className="text-primary hover:underline">{link.label}</a>
                    {index < apply.helpfulLinks.length - 1 && ' | '}
                    </React.Fragment>
                ))}
                </div>
            </div>
            <hr className="my-3 border-border/50" />

            <div className="text-base">
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href={apply.link} target="_blank" className="text-primary hover:underline">{apply.link.replace('https://','')} <ArrowUpRightFromSquare size={11} className="inline-block"/></a><br/><br/>
                
                ✔ <b><u>{apply.qualificationTitle}</u></b>
                <hr className="my-1 border-border/50" />
                ➤ <b>SSC ব্যাচ:</b> {apply.sscBatch}<br/>
                ➤ <b>HSC ব্যাচ:</b> {apply.hscBatch}
                <br/><i className="text-orange-500 flex items-center"><CircleAlert size={16} className="inline-block mr-1"/> <b>সেকেন্ড টাইমঃ</b> {apply.secondTime}</i>
            </div>
            <hr className="my-3 border-border/50" />

            <Accordion type="multiple" className="w-full">
                <AccordionItem value="info-1" className="border-border rounded-2xl hover:bg-accent/50">
                    <AccordionTrigger className="p-3 text-lg font-bold hover:no-underline"><CircleAlert className="mr-2"/> {unitRequirements.title}</AccordionTrigger>
                    <AccordionContent className="p-4 pt-0 text-muted-foreground text-base">
                    {unitRequirements.units.map((unit, index) => (
                        <div key={index} className="mb-2">
                            ❐ <b>"{unit.name}" ইউনিট:</b><br/>
                            {unit.departments.map((dept, i) => (
                                <span key={i}>
                                ● <b>{dept.name}:</b> {dept.requirement}<br/>
                                </span>
                            ))}
                        </div>
                    ))}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="info-2" className="border-border rounded-2xl mt-1.5 hover:bg-accent/50">
                    <AccordionTrigger className="p-3 text-lg font-bold hover:no-underline"><Info className="mr-2"/> {improvementPolicy.title}</AccordionTrigger>
                    <AccordionContent className="p-4 pt-0 text-muted-foreground text-base">
                        <span dangerouslySetInnerHTML={{ __html: improvementPolicy.details }} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            
            <h2 id="AdmitCard" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Ticket className="mr-2"/> {admitCard.title}</h2>
            <div className="text-base">
                <span><b>➜ ডাউনলোড শুরু:</b> {admitCard.startDate}<br/>
                <b>➜ ডাউনলোড শেষ:</b> {admitCard.endDate}<br/><br/>
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href={admitCard.link} target="_blank" className="text-primary hover:underline">{admitCard.link.replace('https://','')} <ArrowUpRightFromSquare size={11} className="inline-block"/></a>
                <br/>(লগইন করে ডাউনলোড করতে হবে।)
                <br/><br/>
                <b><i className="text-orange-500 flex items-center"><CircleAlert size={16} className="inline-block mr-1"/></i> নোটঃ</b> {admitCard.note}
                </span>
            </div>
            
            <h2 id="ExamDate" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Timer className="mr-2"/> {examDate.title}</h2>
            <span className="text-base">
                {examDate.dates.map((date, index) => (
                    <span key={index}>❐ <b>"{date.unit}" ইউনিট:</b> {date.date} <br/></span>
                ))}
            </span>
            <hr className="my-3 border-border/50"/>
            <div className="border border-border/80 p-3 text-center rounded-md">
                <span dangerouslySetInnerHTML={{ __html: examDate.note }} />
            </div>

            <h2 id="Location" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><MapPin className="mr-2"/> {examCenter.title}</h2>
            <span className="text-base">➜ {examCenter.location} <a href={examCenter.locationLink} className="text-primary hover:underline">[তালিকা]</a><br/>
            <hr className="my-2 border-border/50" />
            <b><i className="text-orange-500 flex items-center"><CircleAlert size={16} className="inline-block mr-1"/></i> নোটঃ</b> {examCenter.note}</span>

            <div id="MarkDistributionAndOthers"></div>
            <h2 className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><Info className="mr-2"/> {generalInfo.title}</h2>

            <div className="border border-border/80 rounded-xl p-4 mt-2.5 text-base">
                {generalInfo.points.map((point, index) => (
                    <React.Fragment key={index}>
                        ● <b>{point.label}ঃ </b>{point.value}
                        {index < generalInfo.points.length - 1 && <hr className="my-1 border-border/50"/>}
                    </React.Fragment>
                ))}
            </div>

            <h2 id="Result" className="bg-primary/10 text-primary rounded-xl p-3 my-4 text-center text-lg sm:text-xl font-bold flex items-center justify-center"><BarChart3 className="mr-2"/> {result.title}</h2>
            <span className="text-base">● <b>ফলাফল প্রকাশ:</b> {result.date}
                <hr className="my-1 border-border/50" />
                <b><LinkIcon className="inline-block mr-2" size={16}/>লিংকঃ</b> <a href={result.link} target="_blank" className="text-primary hover:underline">{result.link.replace('https://','')} <ArrowUpRightFromSquare size={11} className="inline-block"/></a>
            </span>
        </div>
    );
};

export default DhakaAdmissionInfo;
