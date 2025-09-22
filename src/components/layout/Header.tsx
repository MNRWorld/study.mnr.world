
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookMarked, Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";

export default function Header() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  }

  return (
    <header className="sticky top-0 z-50 w-full glassmorphism-header">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <BookMarked className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">
                <span className="logo-study">Study</span>
              </span>
            </Link>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/question-bank"
              className="text-muted-foreground header-link font-bengali font-medium"
            >
              প্রশ্নব্যাংক
            </Link>
            <Link
              href="/calendar"
              className="text-muted-foreground header-link font-bengali font-medium"
            >
              এডমিশন ক্যালেন্ডার
            </Link>
            <Link
              href="/courses"
              className="text-muted-foreground header-link font-bengali font-medium"
            >
              কোর্স
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground header-link font-bengali font-medium"
            >
              ব্লগ
            </Link>
          </div>
           <div className="hidden md:flex items-center">
            {!loading && (
              user ? (
                <Button onClick={handleLogout} className="join-btn text-white font-semibold py-2 px-6 rounded-lg font-bengali">
                  লগ আউট
                </Button>
              ) : (
                <Button asChild className="join-btn text-white font-semibold py-2 px-6 rounded-lg font-bengali">
                  <Link href="/login">যোগ দিন</Link>
                </Button>
              )
            )}
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] bg-background border-r-border/50">
                 <div className="flex flex-col h-full p-4">
                    <div className="flex items-center space-x-3 mb-8">
                        <Link href="/" className="flex items-center space-x-3">
                          <BookMarked className="h-8 w-8 text-primary" />
                          <span className="text-2xl font-bold">
                            <span className="logo-study">Study</span>
                          </span>
                        </Link>
                      </div>
                      <nav className="flex flex-col space-y-4">
                         <SheetClose asChild>
                            <Link href="/question-bank" className="text-muted-foreground header-link font-bengali font-medium text-lg">প্রশ্নব্যাংক</Link>
                         </SheetClose>
                         <SheetClose asChild>
                           <Link href="/calendar" className="text-muted-foreground header-link font-bengali font-medium text-lg">এডমিশন ক্যালেন্ডার</Link>
                         </SheetClose>
                         <SheetClose asChild>
                           <Link href="/courses" className="text-muted-foreground header-link font-bengali font-medium text-lg">কোর্স</Link>
                         </SheetClose>
                         <SheetClose asChild>
                           <Link href="/blog" className="text-muted-foreground header-link font-bengali font-medium text-lg">ব্লগ</Link>
                         </SheetClose>
                      </nav>
                      <div className="mt-auto">
                        {!loading && (
                          user ? (
                            <Button onClick={handleLogout} className="w-full join-btn text-white font-semibold py-3 rounded-lg font-bengali text-lg">
                              লগ আউট
                            </Button>
                          ) : (
                            <SheetClose asChild>
                              <Button asChild className="w-full join-btn text-white font-semibold py-3 rounded-lg font-bengali text-lg">
                                <Link href="/login">যোগ দিন</Link>
                              </Button>
                            </SheetClose>
                          )
                        )}
                      </div>
                 </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
