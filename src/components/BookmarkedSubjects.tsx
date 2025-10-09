
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useUser, useSupabase } from "@/lib/supabase/hooks";
import { allData } from "@/lib/data/_generated";
import type { Subject } from "@/lib/data/subjects";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import ExternalLink from "./common/ExternalLink";
import { BookmarkX } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookmarkedSubjects = () => {
  const { user } = useUser();
  const supabase = useSupabase();
  const { toast } = useToast();
  const [bookmarkedSubjects, setBookmarkedSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);

  const allSubjects: Subject[] = Object.values(allData.universities.find(u => u.id === 'du')?.subjects || {}).flat();

  const fetchBookmarks = useCallback(async () => {
    setLoading(true);
    let subjectIds: string[] = [];

    if (user && !user.is_anonymous && supabase) {
      const { data, error } = await supabase
        .from("user_subject_bookmarks")
        .select("subject_id")
        .eq("user_id", user.id);

      if (!error) {
        subjectIds = data.map((b) => b.subject_id);
      }
    } else {
      const storedBookmarks = localStorage.getItem("subjectBookmarks");
      if (storedBookmarks) {
        subjectIds = JSON.parse(storedBookmarks);
      }
    }
    
    const subjects = allSubjects.filter(subject => subjectIds.includes(subject.short));
    setBookmarkedSubjects(subjects);
    setLoading(false);

  }, [user, supabase, allSubjects]);

  useEffect(() => {
    fetchBookmarks();
  }, [fetchBookmarks]);

  const removeBookmark = async (subjectId: string) => {
    let newBookmarks: string[];

    if (user && !user.is_anonymous && supabase) {
        const { error } = await supabase
            .from('user_subject_bookmarks')
            .delete()
            .match({ user_id: user.id, subject_id: subjectId });
        
        if (error) {
            toast({ variant: 'destructive', title: 'বুকমার্ক সরাতে সমস্যা হয়েছে' });
            return;
        }
    } else {
        const stored = localStorage.getItem('subjectBookmarks');
        const currentBookmarks = stored ? JSON.parse(stored) : [];
        newBookmarks = currentBookmarks.filter((id: string) => id !== subjectId);
        localStorage.setItem('subjectBookmarks', JSON.stringify(newBookmarks));
    }
    
    toast({ title: 'বুকমার্ক সরানো হয়েছে' });
    fetchBookmarks(); // Re-fetch to update the list
  };

  if (loading) {
    return <p>বুকমার্ক লোড হচ্ছে...</p>;
  }

  if (bookmarkedSubjects.length === 0) {
    return <p>আপনি এখনও কোনো বিষয় বুকমার্ক করেননি।</p>;
  }

  return (
    <div className="w-full">
      <Table>
        <TableBody>
          {bookmarkedSubjects.map((subject) => (
            <TableRow key={subject.short}>
              <TableCell className="font-bold">{subject.short}</TableCell>
              <TableCell>{subject.fullName}</TableCell>
              <TableCell className="text-center">{subject.seat}</TableCell>
              <TableCell className="text-center">
                <ExternalLink href={subject.reviewLink} text="[রিভিউ]" />
              </TableCell>
              <TableCell className="text-center">
                <button onClick={() => removeBookmark(subject.short)} title="বুকমার্ক সরান">
                  <BookmarkX className="h-5 w-5 text-destructive" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookmarkedSubjects;
