"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FileJson, ArrowLeft } from "lucide-react";
import Link from "next/link";

const dataFiles = [
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

export default function GeneralDataPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl font-bengali">
      <div className="mb-6">
        <Button asChild variant="outline">
          <Link href="/admin">
            <ArrowLeft className="mr-2" /> অ্যাডমিন প্যানেলে ফিরে যান
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>সাধারণ ডেটা ফাইল এডিটর</CardTitle>
          <CardDescription>
            এডিট করার জন্য একটি ডেটা ফাইল নির্বাচন করুন। এই ফাইলগুলো
            অ্যাপ্লিকেশনের বিভিন্ন অংশের কনটেন্ট নিয়ন্ত্রণ করে।
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataFiles.map((file) => (
              <Link
                key={file}
                href={`/admin/uni/${file.replace('.json', '')}`}
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
        </CardContent>
      </Card>
    </div>
  );
}
