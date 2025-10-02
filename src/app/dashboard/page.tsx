"use client";

import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, LogOut, UserCircle } from "lucide-react";

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
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

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] font-bengali px-4">
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
            আপনার অ্যাকাউন্টে সফলভাবে লগইন হয়েছে।
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
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
          <Button
            onClick={handleLogout}
            variant="destructive"
            className="w-full"
          >
            <LogOut className="mr-2" />
            লগ আউট
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
