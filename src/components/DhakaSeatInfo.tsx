
"use client";

import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Users, Info } from "lucide-react";
import { duSubjects, type Subject } from "@/lib/data/subjects";
import ExternalLink from "./common/ExternalLink";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface SeatCellProps {
  seat: number | string;
  tooltip?: string;
}

const SeatCell: React.FC<SeatCellProps> = ({ seat, tooltip }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!tooltip) {
    return <span>{seat}</span>;
  }

  return (
    <TooltipProvider>
      <Tooltip open={isOpen} onOpenChange={setIsOpen}>
        <TooltipTrigger
          asChild
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          <span className="flex items-center justify-center gap-1.5 cursor-help">
            {seat}
            <Info className="h-3 w-3 text-muted-foreground" />
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <div dangerouslySetInnerHTML={{ __html: tooltip }} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

interface SubjectTableProps {
  subjects: Subject[];
}

const SubjectTable: React.FC<SubjectTableProps> = ({ subjects }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.short.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <div className="relative mb-4">
        <Input
          type="text"
          placeholder="🔎 বিষয় খুঁজুন..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-8"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">সংক্ষিপ্ত</TableHead>
            <TableHead className="text-center">বিষয়ের নাম</TableHead>
            <TableHead className="text-center">আসন</TableHead>
            <TableHead className="text-center">রিভিউ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredSubjects.map((subject, index) => (
            <TableRow key={index} className="text-center">
              <TableCell className="font-bold">{subject.short}</TableCell>
              <TableCell className="text-left">{subject.fullName}</TableCell>
              <TableCell>
                <SeatCell seat={subject.seat} tooltip={subject.tooltip} />
              </TableCell>
              <TableCell>
                <ExternalLink href={subject.reviewLink} text="[লিংক]" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const DhakaSeatInfo = () => {
  return (
    <div
      id="Subjects"
      className="mt-4 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative"
    >
      <div className="flex justify-center">
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">
          <Users className="inline-block mr-2" />
          সাবজেক্ট প্রতি সিট সংখ্যা ও রিভিউ
        </div>
      </div>
      <Tabs defaultValue="ka-unit" className="w-full">
        <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 h-auto bg-muted/50">
          <TabsTrigger value="ka-unit">"ক" ইউনিট</TabsTrigger>
          <TabsTrigger value="kha-unit">"খ" ইউনিট</TabsTrigger>
          <TabsTrigger value="ga-unit">"গ" ইউনিট</TabsTrigger>
          <TabsTrigger value="cha-unit">“চ” ইউনিট</TabsTrigger>
          <TabsTrigger value="iba-unit">DU IBA (বিশেষ)</TabsTrigger>
        </TabsList>
        <TabsContent value="ka-unit" className="mt-4">
          <SubjectTable subjects={duSubjects.unitA} />
        </TabsContent>
        <TabsContent value="kha-unit" className="mt-4">
          <SubjectTable subjects={duSubjects.unitB} />
        </TabsContent>
        <TabsContent value="ga-unit" className="mt-4">
          <SubjectTable subjects={duSubjects.unitC} />
        </TabsContent>
        <TabsContent value="cha-unit" className="mt-4">
          <SubjectTable subjects={duSubjects.unitCha} />
        </TabsContent>
        <TabsContent value="iba-unit" className="mt-4">
          <SubjectTable subjects={duSubjects.unitIBA} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DhakaSeatInfo;
