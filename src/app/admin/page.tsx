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
import {
  FolderKanban,
  LogIn,
  University as UniversityIcon,
  PlusCircle,
} from "lucide-react";
import { allUniversities, University } from "@/lib/data/universities";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LOCAL_PASSWORD = "1234";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);
  const [newUniId, setNewUniId] = useState("");
  const [newUniName, setNewUniName] = useState("");
  const [newUniType, setNewUniType] = useState("public");
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("isAdminAuthenticated") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      setUniversities(allUniversities);
      setLoading(false);
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (password === LOCAL_PASSWORD) {
      sessionStorage.setItem("isAdminAuthenticated", "true");
      setIsAuthenticated(true);
      toast({
        title: "প্রমাণীকরণ সফল",
        description: "অ্যাডমিন প্যানেলে স্বাগতম।",
      });
    } else {
      toast({
        variant: "destructive",
        title: "প্রমাণীকরণ ব্যর্থ",
        description: "ভুল পাসওয়ার্ড।",
      });
    }
  };

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
      `/admin/universities/${newUniId
        .toLowerCase()
        .trim()}?name=${encodeURIComponent(
        newUniName,
      )}&category=${encodeURIComponent(category)}`,
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] font-bengali px-4">
        <Card className="w-full max-w-md p-4 sm:p-6 space-y-6 shadow-lg text-center">
          <CardHeader>
            <div className="inline-block p-3 sm:p-4 bg-primary/10 rounded-full mb-4 mx-auto w-fit">
              <FolderKanban className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
              অ্যাডমিন প্যানেল
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              বিশ্ববিদ্যালয়ের ডেটা পরিচালনা করতে অনুগ্রহ করে পাসওয়ার্ড লিখুন।
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="পাসওয়ার্ড লিখুন"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="text-center"
            />
            <Button onClick={handleLogin} size="lg" className="w-full">
              <LogIn className="mr-2" /> লগইন
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
                  href={`/admin/universities/${uni.id}`}
                  passHref
                >
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <UniversityIcon className="h-4 w-4" />
                    {uni.nameBn} ({uni.shortName})
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
