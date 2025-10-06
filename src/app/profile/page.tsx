"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
  AlertTriangle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useUser } from "@/firebase";
import { getAuth, deleteUser, updateProfile } from "firebase/auth";

const suggestions = [
  {
    title: "ঢাকা বিশ্ববিদ্যালয় প্রশ্নব্যাংক",
    href: "/question-bank?tab=du",
  },
  {
    title: "গুচ্ছ প্রস্তুতি কোর্স",
    href: "/courses/gst-admission",
  },
  {
    title: "অ্যাডমিশন ক্যালেন্ডার দেখুন",
    href: "/calendar",
  },
];

export default function ProfilePage() {
  const { user, loading } = useUser();
  const router = useRouter();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const auth = getAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
    if (user) {
      setName(user.displayName || "ব্যবহারকারী");
    }
  }, [user, loading, router]);

  const logout = async () => {
    await auth.signOut();
    router.push("/");
  };

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="text-center font-bengali">
          <p className="text-lg">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  const handleNameUpdate = async () => {
    if (!auth.currentUser) return;
    if (!name.trim()) {
      toast({
        variant: "destructive",
        title: "নাম লেখা হয়নি",
        description: "অনুগ্রহ করে একটি সঠিক নাম লিখুন।",
      });
      return;
    }
    try {
      await updateProfile(auth.currentUser, { displayName: name });
      // This will trigger the onAuthStateChanged listener and update the state everywhere
      toast({
        title: "নাম পরিবর্তিত হয়েছে",
        description: `আপনার নতুন নাম "${name}" সফলভাবে সেভ হয়েছে।`,
      });
    } catch (error) {
      console.error("Error updating name:", error);
      toast({
        variant: "destructive",
        title: "নাম পরিবর্তন ব্যর্থ হয়েছে",
        description: "একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।",
      });
    }
  };

  const handleDeleteAccount = async () => {
    if (!auth.currentUser) return;
    if (
      !window.confirm(
        "আপনি কি নিশ্চিতভাবে আপনার অ্যাকাউন্ট মুছে ফেলতে চান? এই কাজটি আর ফেরানো যাবে না।",
      )
    ) {
      return;
    }

    try {
      await deleteUser(auth.currentUser);
      toast({
        title: "অ্যাকাউন্ট মুছে ফেলা হয়েছে",
        description: "আপনার অ্যাকাউন্ট এবং ডেটা স্থায়ীভাবে মুছে ফেলা হয়েছে।",
      });
      router.push("/");
    } catch (error) {
      console.error("Error deleting account:", error);
      toast({
        variant: "destructive",
        title: "একটি সমস্যা হয়েছে",
        description: "অ্যাকাউন্ট মুছে ফেলার সময় একটি সমস্যা হয়েছে।",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl font-bengali">
      <Card className="w-full p-4 sm:p-6 text-center shadow-lg animate-fade-in-up mb-8">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="relative h-24 w-24">
              {user.photoURL ? (
                <Image
                  src={user.photoURL}
                  alt={user.displayName || "Profile picture"}
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              ) : (
                <UserCircle className="h-24 w-24 text-primary" />
              )}
              <ShieldCheck className="absolute bottom-1 right-1 h-8 w-8 text-green-500 bg-card rounded-full p-1" />
            </div>
          </div>
          <CardTitle className="text-2xl sm:text-3xl font-bold">
            স্বাগতম, {user.displayName || "ব্যবহারকারী"}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base pt-1">
            আপনার প্রোফাইল এবং অ্যাকাউন্ট পরিচালনা করুন।
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="mb-8 shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="text-primary h-6 w-6" />
            <CardTitle>আপনার জন্য প্রস্তাবিত</CardTitle>
          </div>
          <CardDescription>
            আপনার আগ্রহের উপর ভিত্তি করে কিছু গুরুত্বপূর্ণ লিংক।
          </CardDescription>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {suggestions.map((suggestion) => (
            <Button
              key={suggestion.href}
              asChild
              variant="outline"
              className="justify-between"
            >
              <Link href={suggestion.href}>
                {suggestion.title}
                <ArrowRight />
              </Link>
            </Button>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>প্রোফাইল তথ্য</CardTitle>
            <CardDescription>আপনার ব্যক্তিগত তথ্য পরিবর্তন করুন</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">নাম</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="আপনার নতুন নাম দিন"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleNameUpdate} className="w-full">
              <Save className="mr-2" />
              পরিবর্তন সেভ করুন
            </Button>
          </CardFooter>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>ডিভাইস ও সেশন</CardTitle>
              <CardDescription>আপনার বর্তমান লগইন সেশনের তথ্য</CardDescription>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>
                <span className="font-medium text-muted-foreground">
                  প্রোভাইডার:
                </span>{" "}
                <span className="font-mono text-primary text-xs break-all">
                  {user.isAnonymous ? "অতিথি" : user.providerData[0]?.providerId.replace('.com', '') || 'অজানা'}
                </span>
              </p>
              <p>
                <span className="font-medium text-muted-foreground">
                  ডিভাইস আইডি:
                </span>{" "}
                <span className="font-mono text-primary text-xs break-all">
                  {user.uid}
                </span>
              </p>
              <p>
                <span className="font-medium text-muted-foreground">
                  লগইন সময়:
                </span>{" "}
                {new Date(
                  parseInt(user.metadata.createdAt || "0"),
                ).toLocaleString("bn-BD")}
              </p>
            </CardContent>
            <CardFooter>
              <Button onClick={logout} variant="outline" className="w-full">
                <LogOut className="mr-2" />
                লগ আউট
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Card className="mt-8 shadow-lg border-destructive/50 bg-destructive/5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-destructive h-6 w-6" />
            <CardTitle className="text-destructive">ডেঞ্জার জোন</CardTitle>
          </div>
          <CardDescription className="text-destructive/80">
            এই অংশের কাজগুলো необратиযোগ্য। অনুগ্রহ করে সতর্কতার সাথে ব্যবহার করুন।
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left p-4 border border-destructive/20 rounded-lg gap-4">
            <div>
              <h4 className="font-bold">অ্যাকাউন্ট মুছুন</h4>
              <p className="text-sm text-muted-foreground">
                আপনার সমস্ত ডেটা স্থায়ীভাবে মুছে ফেলা হবে।
              </p>
            </div>
            <Button
              onClick={handleDeleteAccount}
              variant="destructive"
              className="w-full sm:w-auto"
            >
              <Trash2 className="mr-2" />
              অ্যাকাউন্ট মুছুন
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
