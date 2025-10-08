"use client";

import { Button } from "@/components/ui/button";
import { University } from "lucide-react";
import Link from "next/link";

export default function AdminLandingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl font-bengali flex items-center justify-center min-h-[calc(100vh-10rem)]">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6 gradient-text">
          অ্যাডমিন প্যানেল
        </h1>
        <p className="text-muted-foreground mb-8">
          ডেভেলপমেন্টের জন্য ডেটা ম্যানেজমেন্ট টুল।
        </p>
        <Button asChild size="lg">
          <Link href="/admin/uni">
            <University className="mr-2" />
            বিশ্ববিদ্যালয় ডেটা এডিটর
          </Link>
        </Button>
      </div>
    </div>
  );
}
