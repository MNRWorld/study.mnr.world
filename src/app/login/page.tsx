"use client";

import { Button } from "@/components/ui/button";
import { User, Fingerprint } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth, useUser } from "@/firebase";
import { signInAnonymously } from "firebase/auth";
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
  const auth = useAuth();
  const { user, loading: userLoading } = useUser();
  const [loginLoading, setLoginLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!userLoading && user) {
      router.push("/profile");
    }
  }, [user, userLoading, router]);

  const handleLogin = async () => {
    setLoginLoading(true);
    try {
      await signInAnonymously(auth);
      toast({
        title: "লগইন সফল হয়েছে",
        description: "আপনার প্রোফাইলে স্বাগতম!",
      });
      router.push("/profile");
    } catch (error) {
      console.error("Anonymous login failed:", error);
      toast({
        variant: "destructive",
        title: "লগইন ব্যর্থ হয়েছে",
        description: "একটি অপ্রত্যাশিত সমস্যা হয়েছে। আবার চেষ্টা করুন।",
      });
    } finally {
      setLoginLoading(false);
    }
  };

  const isLoading = userLoading || loginLoading;

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] font-bengali px-4">
      <Card className="w-full max-w-md p-6 sm:p-8 space-y-6 sm:space-y-8 shadow-lg animate-fade-in-up text-center">
        <CardHeader>
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-4 mx-auto w-fit">
            <User className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
            অতিথি হিসেবে লগইন করুন
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            কোনো পাসওয়ার্ড বা ব্যক্তিগত তথ্যের প্রয়োজন নেই। একটি ক্লিকেই আপনার
            অ্যাকাউন্টে প্রবেশ করুন।
          </p>
        </CardHeader>
        <CardContent>
          <Button
            onClick={handleLogin}
            size="lg"
            className="w-full font-semibold text-base transition-transform hover:scale-105"
            disabled={isLoading}
          >
            {isLoading ? "প্রসেসিং..." : "অতিথি হিসেবে লগইন করুন"}
          </Button>
          <div className="text-xs text-muted-foreground mt-6">
            <p>
              আপনার জন্য একটি অস্থায়ী ও সুরক্ষিত সেশন তৈরি করা হবে।
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
