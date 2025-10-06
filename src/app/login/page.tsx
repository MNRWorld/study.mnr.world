"use client";

import { Button } from "@/components/ui/button";
import { User, Fingerprint, Github } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth, useFirestore, useUser } from "@/firebase";
import {
  signInAnonymously,
  GithubAuthProvider,
  signInWithPopup,
  type UserCredential,
  type FirebaseError,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
  const auth = useAuth();
  const firestore = useFirestore();
  const { user, loading: userLoading } = useUser();
  const [anonymousLoading, setAnonymousLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!userLoading && user) {
      router.push("/profile");
    }
  }, [user, userLoading, router]);

  const handleLoginSuccess = async (userCredential: UserCredential) => {
    const user = userCredential.user;
    if (!user || !firestore) return;

    // Only create Firestore profile for non-anonymous users
    if (!user.isAnonymous) {
      const userRef = doc(firestore, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        // Create a new profile if it doesn't exist for a real user
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          providerId: user.providerData[0]?.providerId || "github.com",
          createdAt: serverTimestamp(),
        });
      }
    }

    toast({
      title: "লগইন সফল হয়েছে",
      description: "আপনার প্রোফাইলে স্বাগতম!",
    });
    router.push("/profile");
  };

  const handleAnonymousLogin = async () => {
    if (!auth) return;
    setAnonymousLoading(true);
    try {
      const userCredential = await signInAnonymously(auth);
      // For anonymous users, we don't create a Firestore doc, just go to profile
      toast({
        title: "অতিথি হিসেবে লগইন সফল হয়েছে",
        description: "আপনার প্রোফাইলে স্বাগতম!",
      });
      router.push("/profile");
    } catch (error) {
      console.error("Anonymous login failed:", error);
      const firebaseError = error as FirebaseError;
      toast({
        variant: "destructive",
        title: "লগইন ব্যর্থ হয়েছে",
        description:
          firebaseError.code === "auth/admin-restricted-operation"
            ? "বেনামী লগইন এই প্রজেক্টের জন্য সক্রিয় করা নেই।"
            : "একটি অপ্রত্যাশিত সমস্যা হয়েছে। আবার চেষ্টা করুন।",
      });
    } finally {
      setAnonymousLoading(false);
    }
  };

  const handleGithubLogin = async () => {
    if (!auth) return;
    setGithubLoading(true);
    const provider = new GithubAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      await handleLoginSuccess(userCredential);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      if (firebaseError.code !== "auth/popup-closed-by-user") {
        console.error("GitHub login failed:", error);
        toast({
          variant: "destructive",
          title: "GitHub লগইন ব্যর্থ হয়েছে",
          description: "একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        });
      }
    } finally {
      setGithubLoading(false);
    }
  };

  const isLoading = userLoading || anonymousLoading || githubLoading;

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] font-bengali px-4">
      <Card className="w-full max-w-md p-6 sm:p-8 space-y-6 sm:space-y-8 shadow-lg animate-fade-in-up text-center">
        <CardHeader>
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-4 mx-auto w-fit">
            <User className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
            আপনার অ্যাকাউন্টে লগইন করুন
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            আপনার পছন্দের পদ্ধতিতে লগইন করে আমাদের সাথে যুক্ত হন।
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={handleGithubLogin}
            size="lg"
            variant="outline"
            className="w-full font-semibold text-base transition-transform hover:scale-105"
            disabled={isLoading}
          >
            <Github className="mr-2" />
            {githubLoading ? "প্রসেসিং..." : "GitHub দিয়ে লগইন করুন"}
          </Button>
          <Button
            onClick={handleAnonymousLogin}
            size="lg"
            className="w-full font-semibold text-base transition-transform hover:scale-105"
            disabled={isLoading}
          >
            <Fingerprint className="mr-2" />
            {anonymousLoading ? "প্রসেসিং..." : "অতিথি হিসেবে লগইন করুন"}
          </Button>
          <div className="text-xs text-muted-foreground mt-6">
            <p>
              অতিথি হিসেবে লগইন করলে আপনার জন্য একটি অস্থায়ী ও সুরক্ষিত সেশন তৈরি
              করা হবে।
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
