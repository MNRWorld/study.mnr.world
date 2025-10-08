"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { duData } from "@/lib/data/universities/du";
import { type Subject } from "@/lib/data/subjects";
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
  if (!tooltip) {
    return <span>{seat}</span>;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
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
            <TableHead className="text-center w-[25%]">Short</TableHead>
            <TableHead className="text-center w-[45%]">Full Form</TableHead>
            <TableHead className="text-center w-[15%]">Seat</TableHead>
            <TableHead className="text-center w-[15%]">Review</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredSubjects.map((subject, index) => (
            <TableRow key={index} className="text-center">
              <TableCell className="font-bold whitespace-pre-wrap break-words">
                {subject.short}
              </TableCell>
              <TableCell className="text-left whitespace-pre-wrap break-words">
                {subject.fullName}
              </TableCell>
              <TableCell className="whitespace-pre-wrap break-words">
                <SeatCell seat={subject.seat} tooltip={subject.tooltip} />
              </TableCell>
              <TableCell className="whitespace-pre-wrap break-words">
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
  const { subjects } = duData;

  return (
    <div
      id="Subjects"
      className="mt-4 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative"
    >
      <div className="flex justify-center">
        <div className="gradient-background inline-block px-6 py-2 text-primary-foreground rounded-full text-lg mb-4 font-bold shadow-md">
          সাবজেক্ট প্রতি সিট সংখ্যা ও রিভিউ
        </div>
      </div>
      <Tabs defaultValue="ka-unit" className="w-full">
        <TabsList className="flex flex-wrap w-full h-auto bg-transparent gap-2">
          <TabsTrigger value="ka-unit" className="flex-grow">
            "ক" ইউনিট
          </TabsTrigger>
          <TabsTrigger value="kha-unit" className="flex-grow">
            "খ" ইউনিট
          </TabsTrigger>
          <TabsTrigger value="ga-unit" className="flex-grow">
            "গ" ইউনিট
          </TabsTrigger>
          <TabsTrigger value="cha-unit" className="flex-grow">
            “চ” ইউনিট
          </TabsTrigger>
          <TabsTrigger value="iba-unit" className="flex-grow">
            DU IBA (বিশেষ)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="ka-unit" className="mt-4">
          <SubjectTable subjects={subjects.unitA} />
        </TabsContent>
        <TabsContent value="kha-unit" className="mt-4">
          <SubjectTable subjects={subjects.unitB} />
        </TabsContent>
        <TabsContent value="ga-unit" className="mt-4">
          <SubjectTable subjects={subjects.unitC} />
        </TabsContent>
        <TabsContent value="cha-unit" className="mt-4">
          <SubjectTable subjects={subjects.unitCha} />
        </TabsContent>
        <TabsContent value="iba-unit" className="mt-4">
          <SubjectTable subjects={subjects.unitIBA} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DhakaSeatInfo;
