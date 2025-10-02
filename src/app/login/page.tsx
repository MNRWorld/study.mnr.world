"use client";

import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Fingerprint } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { login, loading, user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push("/profile");
    }
  }, [user, loading, router]);

  const handleLogin = async () => {
    try {
      await login();
    } catch (error: any) {
      console.error(error);
      toast({
        title: "লগইন ব্যর্থ হয়েছে",
        description: error.message || "একটি অপ্রত্যাশিত সমস্যা হয়েছে।",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] font-bengali px-4">
      <div className="w-full max-w-md p-6 sm:p-8 space-y-6 sm:space-y-8 bg-card border border-border rounded-2xl shadow-lg animate-fade-in-up text-center">
        <div>
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
            <Fingerprint className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">
            ডিভাইস দিয়ে লগইন করুন
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            কোনো পাসওয়ার্ডের প্রয়োজন নেই। একটি ক্লিকেই আপনার অ্যাকাউন্টে প্রবেশ
            করুন।
          </p>
        </div>
        <Button
          onClick={handleLogin}
          size="lg"
          className="w-full text-white font-semibold text-base transition-transform hover:scale-105"
          disabled={loading}
        >
          {loading ? "প্রসেসিং..." : "ডিভাইস দিয়ে লগইন করুন"}
        </Button>
        <div className="text-xs text-muted-foreground">
          <p>
            আপনার ডিভাইসের তথ্যের ভিত্তিতে একটি সুরক্ষিত সেশন তৈরি করা হবে।
          </p>
        </div>
      </div>
    </div>
  );
}
