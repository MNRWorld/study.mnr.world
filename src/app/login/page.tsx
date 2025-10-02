"use client";

import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Fingerprint } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const { login, loading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push("/profile");
    }
  }, [user, loading, router]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] font-bengali px-4">
      <Card className="w-full max-w-md p-6 sm:p-8 space-y-6 sm:space-y-8 shadow-lg animate-fade-in-up text-center">
        <CardHeader>
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-4 mx-auto w-fit">
            <Fingerprint className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
            ডিভাইস দিয়ে লগইন করুন
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            কোনো পাসওয়ার্ডের প্রয়োজন নেই। একটি ক্লিকেই আপনার অ্যাকাউন্টে প্রবেশ
            করুন।
          </p>
        </CardHeader>
        <CardContent>
          <Button
            onClick={login}
            size="lg"
            className="w-full font-semibold text-base transition-transform hover:scale-105"
            disabled={loading}
          >
            {loading ? "প্রসেসিং..." : "ডিভাইস দিয়ে লগইন করুন"}
          </Button>
          <div className="text-xs text-muted-foreground mt-6">
            <p>
              আপনার ডিভাইসের তথ্যের ভিত্তিতে একটি সুরক্ষিত সেশন তৈরি করা হবে।
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
