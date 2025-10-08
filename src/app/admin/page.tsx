"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { University as UniversityIcon, PlusCircle, FileJson } from "lucide-react";
import { allUniversities, University } from "@/lib/data/universities";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const generalDataFiles = [
  "contributors/list",
  "courses/list",
  "deadlines/list",
  "links/list",
  "navigation/links",
  "question-bank/cards",
  "schedules/application",
  "schedules/general",
  "schedules/others",
  "test-papers/list",
  "CalendarInfo",
];

export default function AdminPage() {
  const { toast } = useToast();
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);
  const [newUniId, setNewUniId] = useState("");
  const [newUniName, setNewUniName] = useState("");
  const [newUniType, setNewUniType] = useState("public");
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    setUniversities(allUniversities);
    setLoading(false);
  }, []);

  const handleCreateNew = () => {
    if (!newUniId.trim() || !newUniName.trim()) {
      toast({
        variant: "destructive",
        title: "অবৈধ ইনপুট",
        description:
          "নতুন বিশ্ববিদ্যালয়ের জন্য একটি বৈধ আইডি এবং নাম প্রদান করুন।",
      });
      return;
    }
    router.push(
      `/admin/universities/${newUniId
        .toLowerCase()
        .trim()}?name=${encodeURIComponent(
        newUniName,
      )}&category=${encodeURIComponent(newUniType)}`,
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl font-bengali">
      <h1 className="text-3xl font-bold mb-6 text-center gradient-text">
        অ্যাডমিন প্যানেল
      </h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>নতুন বিশ্ববিদ্যালয় তৈরি করুন</CardTitle>
          <CardDescription>
            সিস্টেমে একটি নতুন বিশ্ববিদ্যালয় যোগ করুন। আইডিটি সংক্ষিপ্ত এবং ইউনিক
            হতে হবে (যেমন: 'aust')।
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4 items-end">
          <Input
            placeholder="নতুন বিশ্ববিদ্যালয় আইডি (যেমন: du)"
            value={newUniId}
            onChange={(e) => setNewUniId(e.target.value)}
            className="flex-grow"
          />
          <Input
            placeholder="নতুন বিশ্ববিদ্যালয়ের নাম (বাংলা)"
            value={newUniName}
            onChange={(e) => setNewUniName(e.target.value)}
            className="flex-grow"
          />
          <Select onValueChange={setNewUniType} defaultValue={newUniType}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="ধরন নির্বাচন করুন" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">পাবলিক</SelectItem>
              <SelectItem value="private">প্রাইভেট</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleCreateNew} className="w-full sm:w-auto">
            <PlusCircle className="mr-2" /> তৈরি করুন
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>এডিট করার জন্য একটি ফাইল নির্বাচন করুন</CardTitle>
          <CardDescription>
            এডিট করার জন্য একটি বিশ্ববিদ্যালয় বা ডেটা ফাইল নির্বাচন করুন।
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div>লোড হচ্ছে...</div>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 border-b pb-2">বিশ্ববিদ্যালয়সমূহ</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {universities.map((uni) => (
                  <Link
                    key={uni.id}
                    href={`/admin/universities/${uni.id}`}
                    passHref
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <UniversityIcon className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">
                        {uni.nameBn} ({uni.shortName})
                      </span>
                    </Button>
                  </Link>
                ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 border-b pb-2">সাধারণ ডেটা ফাইল</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {generalDataFiles.map((file) => (
                    <Link
                        key={file}
                        href={`/admin/${file.replace('.json', '')}`}
                        passHref
                    >
                        <Button
                        variant="outline"
                        className="w-full justify-start gap-2"
                        >
                        <FileJson className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{file}.json</span>
                        </Button>
                    </Link>
                    ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}