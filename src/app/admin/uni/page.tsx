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
import { University as UniversityIcon, PlusCircle } from "lucide-react";
import { allUniversities, University } from "@/lib/data/universities";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    const category = newUniType === "public" ? "সাধারণ" : "প্রাইভেট";
    router.push(
      `/admin/uni/universities/${newUniId
        .toLowerCase()
        .trim()}?name=${encodeURIComponent(
        newUniName,
      )}&category=${encodeURIComponent(category)}`,
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl font-bengali">
      <h1 className="text-3xl font-bold mb-6 text-center gradient-text">
        বিশ্ববিদ্যালয় ডেটা এডিটর
      </h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>নতুন বিশ্ববিদ্যালয় তৈরি করুন</CardTitle>
          <CardDescription>
            সিস্টেমে একটি নতুন বিশ্ববিদ্যালয় যোগ করুন। আইডিটি সংক্ষিপ্ত এবং ইউনিক
            হতে হবে (যেমন: 'aust')।
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
          <Input
            placeholder="নতুন বিশ্ববিদ্যালয় আইডি (যেমন: du)"
            value={newUniId}
            onChange={(e) => setNewUniId(e.target.value)}
            className="md:col-span-1"
          />
          <Input
            placeholder="নতুন বিশ্ববিদ্যালয়ের নাম (বাংলা)"
            value={newUniName}
            onChange={(e) => setNewUniName(e.target.value)}
            className="md:col-span-1"
          />
          <Select onValueChange={setNewUniType} defaultValue={newUniType}>
            <SelectTrigger>
              <SelectValue placeholder="ধরন নির্বাচন করুন" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">পাবলিক</SelectItem>
              <SelectItem value="private">প্রাইভেট</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleCreateNew} className="w-full md:col-span-1">
            <PlusCircle className="mr-2" /> তৈরি করুন
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>এডিট করার জন্য একটি বিশ্ববিদ্যালয় নির্বাচন করুন</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div>বিশ্ববিদ্যালয় লোড হচ্ছে...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {universities.map((uni) => (
                <Link
                  key={uni.id}
                  href={`/admin/uni/universities/${uni.id}`}
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
          )}
        </CardContent>
      </Card>
    </div>
  );
}
