"use client";

import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  ShieldCheck,
  LogOut,
  UserCircle,
  Save,
  Trash2,
} from "lucide-react";

export default function ProfilePage() {
  const { user, loading, logout, updateName, deleteAccount } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [name, setName] = useState(user?.name || "");

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
    if (user) {
      setName(user.name);
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="text-center font-bengali">
          <p className="text-lg">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const handleNameUpdate = async () => {
    if (!name.trim()) {
      toast({
        title: "অবৈধ নাম",
        description: "অনুগ্রহ করে একটি সঠিক নাম লিখুন।",
        variant: "destructive",
      });
      return;
    }
    try {
      await updateName(name);
      toast({
        title: "সফল",
        description: "আপনার নাম সফলভাবে পরিবর্তন করা হয়েছে।",
      });
    } catch (error: any) {
      toast({
        title: "ত্রুটি",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDeleteAccount = async () => {
    // A confirmation dialog would be ideal here in a real app
    if (
      window.confirm(
        "আপনি কি নিশ্চিতভাবে আপনার অ্যাকাউন্ট মুছে ফেলতে চান? এই কাজটি আর ফেরানো যাবে না।",
      )
    ) {
      try {
        await deleteAccount();
        toast({
          title: "অ্যাকাউন্ট মুছে ফেলা হয়েছে",
          description: "আপনার অ্যাকাউন্ট সফলভাবে মুছে ফেলা হয়েছে।",
        });
        router.push("/");
      } catch (error: any) {
        toast({
          title: "ত্রুটি",
          description: error.message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] font-bengali px-4 py-8">
      <Card className="w-full max-w-md p-4 sm:p-6 text-center shadow-lg animate-fade-in-up">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="relative">
              <UserCircle className="h-20 w-20 text-primary" />
              <ShieldCheck className="absolute bottom-1 right-1 h-6 w-6 text-green-500 bg-card rounded-full p-0.5" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">
            স্বাগতম, {user.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground pt-1">
            আপনার প্রোফাইল এবং অ্যাকাউন্ট পরিচালনা করুন।
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-left space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">নাম পরিবর্তন করুন</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="আপনার নতুন নাম দিন"
              />
            </div>
            <Button onClick={handleNameUpdate} className="w-full">
              <Save className="mr-2" />
              পরিবর্তন সেভ করুন
            </Button>
          </div>
          <div className="text-left bg-accent/50 dark:bg-accent/20 p-4 rounded-lg border border-border/50">
            <h3 className="font-semibold mb-2 border-b border-border/50 pb-2">
              ডিভাইস তথ্য
            </h3>
            <p className="text-sm">
              <span className="font-medium text-muted-foreground">
                ডিভাইস আইডি:
              </span>{" "}
              <span className="font-mono text-primary text-xs break-all">
                {user.deviceId}
              </span>
            </p>
            <p className="text-sm">
              <span className="font-medium text-muted-foreground">লগইন সময়:</span>{" "}
              {new Date(user.loginTime).toLocaleString("bn-BD")}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full"
          >
            <LogOut className="mr-2" />
            লগ আউট
          </Button>
          <Button
            onClick={handleDeleteAccount}
            variant="destructive"
            className="w-full"
          >
            <Trash2 className="mr-2" />
            অ্যাকাউন্ট মুছুন
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
