
"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Info,
  FilePenLine,
  Banknote,
  CircleCheck,
  Link as LinkIcon,
  CircleAlert,
  Dock,
  Timer,
  MapPinned,
  BarChart3,
  Users,
  CalendarClock,
  PackageCheck,
  Play,
} from "lucide-react";
import { duAdmissionInfo } from "@/lib/data/admission-info";
import ExternalLink from "./common/ExternalLink";

const DhakaAdmissionInfo = () => {
  const {
    apply,
    unitRequirements,
    improvementPolicy,
    admitCard,
    examDate,
    examCenter,
    generalInfo,
    result,
  } = duAdmissionInfo;

  return (
    <div
      id="Info"
      className="mt-4 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative text-left animate-fade-in-up"
    >
      <div className="flex justify-center">
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">
          {duAdmissionInfo.title}
        </div>
      </div>

      <h2
        id="Apply"
        className="bg-primary/10 text-primary rounded-xl p-3 mt-4 mb-4 text-center text-base sm:text-lg font-bold flex items-center justify-center"
      >
        <FilePenLine size={16} className="mr-2" /> {apply.title}
      </h2>
      <div className="text-base">
        <div className="mt-2">
          <b>
            <CalendarClock className="inline-block mr-2" />
            আবেদনের সময়কাল:
          </b>
          <br />
          <div className="flex items-center mt-2">
            <Play className="mr-2 h-4 w-4 text-primary" />
            <b>আবেদন শুরু:</b>
            <span className="ml-1">{apply.startDate}</span>
          </div>
          <div className="flex items-center">
            <Play className="mr-2 h-4 w-4 text-primary" />
            <b>আবেদন শেষ:</b>
            <span className="ml-1">{apply.endDate}</span>
          </div>
        </div>

        <div className="mt-2">
          <b>
            <Banknote className="inline-block mr-2" />
            আবেদন ফিঃ
          </b>
          <br />
          {apply.fees.map((fee, index) => (
            <div key={index}>
              &nbsp;&nbsp;&nbsp; ✓ {fee.unit}: {fee.amount}
            </div>
          ))}
        </div>
        <br />
        <div className="flex items-center gap-2 flex-wrap">
          <CircleCheck className="text-green-600" size={18} />
          {apply.helpfulLinks.map((link, index) => (
            <React.Fragment key={index}>
              <ExternalLink href={link.url} text={link.label} />
              {index < apply.helpfulLinks.length - 1 && " | "}
            </React.Fragment>
          ))}
        </div>
      </div>
      <hr className="my-2 border-border/50" />

      <div className="text-base">
        <b>
          <LinkIcon className="inline-block mr-2" size={18} />
          লিংকঃ
        </b>{" "}
        <ExternalLink
          href={apply.link}
          text={apply.link.replace("https://", "")}
        />
        <br />
        <br />
        <b>
          <PackageCheck className="inline-block mr-2" size={24} />
          {apply.qualificationTitle}
        </b>
        <br />
        <b>&nbsp;&nbsp;&nbsp; ⁃ SSC ব্যাচ:</b> {apply.sscBatch}
        <br />
        <b>&nbsp;&nbsp;&nbsp; ⁃ HSC ব্যাচ:</b> {apply.hscBatch}
        <br />
        <div className="text-red-500 flex items-center">
          <CircleAlert size={18} className="inline-block mr-1" />{" "}
          <b>সেকেন্ড টাইম:</b>&nbsp;{apply.secondTime}
        </div>
      </div>
      <hr className="my-3 border-border/50" />

      <Accordion type="multiple" className="w-full space-y-4">
        <AccordionItem
          value="info-1"
          className="border border-border rounded-lg bg-card hover:bg-accent/50 transition-all duration-300"
        >
          <AccordionTrigger className="p-3 text-base font-bold hover:no-underline">
            <div className="flex items-center">
              <CircleAlert className="inline-block mr-2" />
              <span>{unitRequirements.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-4 sm:p-5 border-t border-border/50 text-base text-foreground">
            {unitRequirements.units.map((unit, index) => (
              <div key={index} className="mb-2">
                ❐ <b>"{unit.name}" ইউনিট:</b>
                <br />
                {unit.departments.map((dept, i) => (
                  <span key={i}>
                    ● <b>{dept.name}:</b> {dept.requirement}
                    <br />
                  </span>
                ))}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="info-2"
          className="bg-card border border-border rounded-lg overflow-hidden mt-4"
        >
          <AccordionTrigger className="p-4 sm:p-5 w-full flex justify-between items-center text-lg font-bold cursor-pointer hover:no-underline">
            <div className="flex items-center">
              <Info className="inline-block mr-2" />
              <span>{improvementPolicy.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-4 sm:p-5 border-t border-border/50 text-base text-foreground">
            <hr className="my-3 border-border/50" />
            <span
              dangerouslySetInnerHTML={{ __html: improvementPolicy.details }}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h2
        id="AdmitCard"
        className="bg-primary/10 text-primary rounded-xl p-3 mt-8 mb-4 text-center text-base sm:text-lg font-bold flex items-center justify-center"
      >
        <Dock className="mr-2" size={16} /> {admitCard.title}
      </h2>
      <div className="text-base">
        <div className="mt-2">
          <b>
            <CalendarClock className="inline-block mr-2" />
            ডাউনলোডের সময়কাল:
          </b>
          <br />
          <b>&nbsp;&nbsp;&nbsp; • শুরু:</b> {admitCard.startDate}
          <br />
          <b>&nbsp;&nbsp;&nbsp; • শেষ:</b> {admitCard.endDate}
          <br />
          <br />
          <b>
            <LinkIcon className="inline-block mr-2" size={18} />
            লিংকঃ
          </b>{" "}
          <ExternalLink
            href={admitCard.link}
            text={admitCard.link.replace("https://", "")}
          />
          <br />
          (লগইন করে ডাউনলোড করতে হবে।)
          <br />
          <br />
          <b>
            <div className="text-orange-500 flex items-center">
              <CircleAlert size={18} className="inline-block mr-1" />
              নোটঃ
            </div>
          </b>
          {admitCard.note}
        </div>
      </div>

      <h2
        id="ExamDate"
        className="bg-primary/10 text-primary rounded-xl p-3 mt-8 mb-4 text-center text-base sm:text-lg font-bold flex items-center justify-center"
      >
        <Timer className="mr-2" size={16} /> {examDate.title}
      </h2>
      <span className="text-base">
        {examDate.dates.map((date, index) => (
          <span key={index}>
            ❐ <b>"{date.unit}" ইউনিট:</b> {date.date} <br />
          </span>
        ))}
      </span>
      <hr className="my-3 border-border/50" />
      <div className="border border-border/80 p-3 text-center rounded-md">
        সব বিশ্ববিদ্যালয়ের <b>পরীক্ষার তারিখ ও কাউন্টডাউন</b> জানতে ভিজিট করুন
        আমাদের{" "}
        <b>
          <ExternalLink href={examDate.note.link} text={examDate.note.text} />
        </b>
      </div>

      <h2
        id="Location"
        className="bg-primary/10 text-primary rounded-xl p-3 mt-8 mb-4 text-center text-base sm:text-lg font-bold flex items-center justify-center"
      >
        <MapPinned className="mr-2" size={16} /> {examCenter.title}
      </h2>
      <span className="text-base">
        ➜ {examCenter.location}{" "}
        <ExternalLink href={examCenter.locationLink} text="[তালিকা]" /> <br />
        <hr className="my-2 border-border/50" />
        <b>
          <div className="text-orange-500 flex items-center">
            <CircleAlert size={18} className="inline-block mr-1" />
            নোটঃ
          </div>
        </b>
        {examCenter.note}
      </span>

      <div id="MarkDistributionAndOthers"></div>
      <h2 className="bg-primary/10 text-primary rounded-xl p-3 mt-8 mb-4 text-center text-base sm:text-lg font-bold flex items-center justify-center">
        <Info className="mr-2" size={16} /> {generalInfo.title}
      </h2>

      <div className="border border-border/80 rounded-xl p-4 mt-2.5 text-base">
        {generalInfo.points.map((point, index) => (
          <React.Fragment key={index}>
            ● <b>{point.label}ঃ </b>
            {point.value}
            {index < generalInfo.points.length - 1 && (
              <hr className="my-1 border-border/50" />
            )}
          </React.Fragment>
        ))}
      </div>

      <h2
        id="Result"
        className="bg-primary/10 text-primary rounded-xl p-3 mt-8 mb-4 text-center text-base sm:text-lg font-bold flex items-center justify-center"
      >
        <BarChart3 className="mr-2" size={16} /> {result.title}
      </h2>
      <span className="text-base">
        ● <b>ফলাফল প্রকাশ:</b> {result.date}
        <hr className="my-1 border-border/50" />
        <b>
          <LinkIcon className="inline-block mr-2" size={18} />
          লিংকঃ
        </b>{" "}
        <ExternalLink
          href={result.link}
          text={result.link.replace("https://", "")}
        />
      </span>
    </div>
  );
};

export default DhakaAdmissionInfo;

    