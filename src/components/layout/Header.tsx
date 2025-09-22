import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookMarked } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glassmorphism-header">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <BookMarked className="h-8 w-8 text-emerald-500" />
              <span className="text-2xl font-bold text-slate-100">
                <span className="logo-study">Study</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-slate-300 header-link font-bengali font-medium"
            >
              প্রশ্নব্যাংক
            </Link>
            <Link
              href="#"
              className="text-slate-300 header-link font-bengali font-medium"
            >
              এডমিশন ক্যালেন্ডার
            </Link>
            <Link
              href="#"
              className="text-slate-300 header-link font-bengali font-medium"
            >
              কোর্স
            </Link>
          </div>
          <Button className="join-btn text-white font-semibold py-2 px-6 rounded-lg font-bengali">
            যোগ দিন
          </Button>
        </nav>
      </div>
    </header>
  );
}
