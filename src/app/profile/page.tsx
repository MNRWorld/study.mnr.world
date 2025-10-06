
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
import { useUser, useFirestore, useAuth, useDoc } from "@/firebase";
import { deleteUser, updateProfile, type User } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

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

const getCreationTime = (user: User | null) => {
  if (user?.metadata?.creationTime) {
    const date = new Date(user.metadata.creationTime);
    return date.toLocaleString("bn-BD");
  }
  return "N/A";
};

// This is a separate component to conditionally use the useDoc hook
function RegisteredUserProfile() {
  const { user } = useUser();
  const firestore = useFirestore();
  const auth = useAuth();
  const { toast } = useToast();

  const { data: userProfile, loading: profileLoading } = useDoc<any>(
    "users",
    user?.uid
  );

  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("ব্যবহারকারী");

  useEffect(() => {
    if (!profileLoading && userProfile) {
        const firestoreName = userProfile.displayName || user?.displayName || "";
        setName(firestoreName);
        setDisplayName(firestoreName || "ব্যবহারকারী");
    } else if (!profileLoading && !userProfile && user?.displayName) {
        // Fallback to auth display name if firestore profile doesn't exist yet
        const authName = user.displayName;
        setName(authName);
        setDisplayName(authName);
    }
  }, [user, userProfile, profileLoading]);

  const handleNameUpdate = async () => {
    if (!auth.currentUser || !firestore) return;
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
      const userRef = doc(firestore, "users", auth.currentUser.uid);
      await updateDoc(userRef, { displayName: name });
      setDisplayName(name);
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

  if (profileLoading) {
    return <div className="text-lg text-center font-bengali">প্রোফাইল লোড হচ্ছে...</div>;
  }

  return (
    <>
      <Card className="w-full p-4 sm:p-6 text-center shadow-lg animate-fade-in-up mb-8">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="relative h-24 w-24">
              {user?.photoURL ? (
                <Image
                  src={user.photoURL}
                  alt={displayName}
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
            স্বাগতম, {displayName}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base pt-1">
            আপনার প্রোফাইল এবং অ্যাকাউন্ট পরিচালনা করুন।
          </CardDescription>
        </CardHeader>
      </Card>
      
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
    </>
  );
}


function AnonymousUserProfile() {
    const { toast } = useToast();
    const [name, setName] = useState("");
    const [displayName, setDisplayName] = useState("অতিথি");

    useEffect(() => {
        const localName = localStorage.getItem("anonymousDisplayName") || "অতিথি";
        setName(localName);
        setDisplayName(localName);
    }, []);

    const handleNameUpdate = () => {
        if (!name.trim()) {
          toast({
            variant: "destructive",
            title: "নাম লেখা হয়নি",
            description: "অনুগ্রহ করে একটি সঠিক নাম লিখুন।",
          });
          return;
        }
        localStorage.setItem("anonymousDisplayName", name);
        setDisplayName(name);
        toast({
            title: "নাম পরিবর্তিত হয়েছে",
            description: `আপনার নতুন নাম "${name}" সফলভাবে সেভ হয়েছে।`,
        });
    };

    return (
        <>
            <Card className="w-full p-4 sm:p-6 text-center shadow-lg animate-fade-in-up mb-8">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="relative h-24 w-24">
                        <UserCircle className="h-24 w-24 text-primary" />
                        <ShieldCheck className="absolute bottom-1 right-1 h-8 w-8 text-yellow-500 bg-card rounded-full p-1" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold">
                    স্বাগতম, {displayName}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base pt-1">
                    আপনি একজন অতিথি হিসেবে লগইন করেছেন।
                  </CardDescription>
                </CardHeader>
            </Card>

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>প্রোফাইল তথ্য</CardTitle>
                    <CardDescription>আপনার অতিথির নাম পরিবর্তন করুন</CardDescription>
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
        </>
    )
}

export default function ProfilePage() {
  const { user, loading: userLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!userLoading && !user) {
      router.push("/login");
    }
  }, [user, userLoading, router]);

  const logout = async () => {
    if (auth) {
      await auth.signOut();
    }
    router.push("/");
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


  if (userLoading || !user) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="text-center font-bengali">
          <p className="text-lg">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }
  
  const isAnonymous = user.isAnonymous;

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl font-bengali">
      
      {isAnonymous ? <AnonymousUserProfile /> : <RegisteredUserProfile />}

      <Card className="my-8 shadow-lg">
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
        {/* Placeholder for the left column, as profile card is now conditional */}
        <div/>
        
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
                  {user.isAnonymous
                    ? "অতিথি"
                    : user.providerData[0]?.providerId.replace(".com", "") ||
                      "অজানা"}
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
                {getCreationTime(user)}
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

    