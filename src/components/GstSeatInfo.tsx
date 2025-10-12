
"use client";

import React, { useState, useEffect, useCallback } from "react";
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
import { Info, Bookmark } from "lucide-react";
import { allData } from "@/lib/data/_generated";
import type { Subject } from "@/lib/supabase/database.types";
import ExternalLink from "./common/ExternalLink";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUser, useSupabase } from "@/lib/supabase/hooks";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface SeatCellProps {
  seat: number | string;
  tooltip?: string;
}

const SeatCell: React.FC<SeatCellProps> = ({ seat, tooltip }) => {
  if (!tooltip) {
    return <span>{seat}</span>;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <span className="flex items-center justify-center gap-1.5 cursor-pointer">
          {seat}
          <Info className="h-3 w-3 text-muted-foreground" />
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2 text-sm">
        <div dangerouslySetInnerHTML={{ __html: tooltip }} />
      </PopoverContent>
    </Popover>
  );
};

interface SubjectTableProps {
  subjects: Subject[];
  showShortColumn?: boolean;
  showReviewColumn?: boolean;
}

const SubjectTable: React.FC<SubjectTableProps> = ({
  subjects,
  showShortColumn = true,
  showReviewColumn = true,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const { user } = useUser();
  const supabase = useSupabase();
  const { toast } = useToast();

  const fetchBookmarks = useCallback(async () => {
    if (user && !user.is_anonymous && supabase) {
      const { data, error } = await supabase
        .from("user_subject_bookmarks")
        .select("subject_id")
        .eq("user_id", user.id);
      if (!error && data) {
        setBookmarks(data.map((b) => b.subject_id));
      }
    } else {
      const localBookmarks = localStorage.getItem("subjectBookmarks");
      if (localBookmarks) {
        setBookmarks(JSON.parse(localBookmarks));
      }
    }
  }, [user, supabase]);

  useEffect(() => {
    fetchBookmarks();
  }, [fetchBookmarks]);

  const toggleBookmark = async (subjectId: string) => {
    const isBookmarked = bookmarks.includes(subjectId);
    let newBookmarks: string[];

    if (user && !user.is_anonymous && supabase) {
      if (isBookmarked) {
        const { error } = await supabase
          .from("user_subject_bookmarks")
          .delete()
          .match({ user_id: user.id, subject_id: subjectId });
        if (error) {
          toast({
            variant: "destructive",
            title: "বুকমার্ক সরাতে সমস্যা হয়েছে",
          });
          return;
        }
        newBookmarks = bookmarks.filter((id) => id !== subjectId);
      } else {
        const { error } = await supabase
          .from("user_subject_bookmarks")
          .insert({ user_id: user.id, subject_id: subjectId });
        if (error) {
          toast({
            variant: "destructive",
            title: "বুকমার্ক করতে সমস্যা হয়েছে",
          });
          return;
        }
        newBookmarks = [...bookmarks, subjectId];
      }
    } else {
      const currentBookmarks = bookmarks;
      if (isBookmarked) {
        newBookmarks = currentBookmarks.filter((id) => id !== subjectId);
      } else {
        newBookmarks = [...currentBookmarks, subjectId];
      }
      localStorage.setItem("subjectBookmarks", JSON.stringify(newBookmarks));
    }
    setBookmarks(newBookmarks);
    toast({
      title: isBookmarked
        ? "বুকমার্ক সরানো হয়েছে"
        : "বিষয়টি বুকমার্ক করা হয়েছে",
    });
  };

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.short.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (subjects.length === 0) {
    return <p className="text-muted-foreground">এই ইউনিটের বিষয়ভিত্তিক আসনের তথ্য শীঘ্রই যোগ করা হবে।</p>;
  }

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
      <Table className="border rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center w-[5%]"></TableHead>
            {showShortColumn && (
              <TableHead className="text-center w-[25%]">Short</TableHead>
            )}
            <TableHead className="text-center w-[40%]">Full Form</TableHead>
            <TableHead className="text-center w-[15%]">Seat</TableHead>
            {showReviewColumn && (
              <TableHead className="text-center w-[15%]">Review</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredSubjects.map((subject, index) => (
            <TableRow key={index} className="text-center">
              <TableCell>
                <Bookmark
                  className={cn(
                    "h-5 w-5 cursor-pointer text-muted-foreground/30 transition-all hover:scale-125",
                    bookmarks.includes(subject.short) &&
                      "text-primary fill-primary",
                  )}
                  onClick={() => toggleBookmark(subject.short)}
                />
              </TableCell>
              {showShortColumn && (
                <TableCell className="font-bold whitespace-pre-wrap break-words">
                  {subject.short}
                </TableCell>
              )}
              <TableCell className="text-center whitespace-pre-wrap break-words">
                {subject.fullName}
              </TableCell>
              <TableCell className="whitespace-pre-wrap break-words">
                <SeatCell seat={subject.seat} tooltip={subject.tooltip} />
              </TableCell>
              {showReviewColumn && (
                <TableCell className="whitespace-pre-wrap break-words">
                  <ExternalLink href={subject.reviewLink} text="[লিংক]" />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

interface GstSubjects {
  unitA: Subject[];
  unitB: Subject[];
  unitC: Subject[];
}

const GstSeatInfo = () => {
  const gstData = allData.universities.find((uni) => uni.id === "gst");

  if (!gstData || !gstData.subjects) {
    return <div>জিএসটি গুচ্ছের বিষয়ভিত্তিক আসনের তথ্য পাওয়া যায়নি।</div>;
  }

  const subjects = gstData.subjects as GstSubjects;

  const safeUnitA = subjects.unitA || [];
  const safeUnitB = subjects.unitB || [];
  const safeUnitC = subjects.unitC || [];

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
            &quot;A&quot; ইউনিট (বিজ্ঞান)
          </TabsTrigger>
          <TabsTrigger value="kha-unit" className="flex-grow">
            &quot;B&quot; ইউনিট (মানবিক)
          </TabsTrigger>
          <TabsTrigger value="ga-unit" className="flex-grow">
            &quot;C&quot; ইউনিট (ব্যবসায়)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="ka-unit" className="mt-4">
          <SubjectTable subjects={safeUnitA} showShortColumn={true} />
        </TabsContent>
        <TabsContent value="kha-unit" className="mt-4">
          <SubjectTable subjects={safeUnitB} showShortColumn={false} />
        </TabsContent>
        <TabsContent value="ga-unit" className="mt-4">
          <SubjectTable subjects={safeUnitC} showShortColumn={false} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GstSeatInfo;
