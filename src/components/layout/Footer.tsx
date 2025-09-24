
import {
  BookMarked,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { footerLinks } from "@/lib/data/navigation";

export default function Footer() {
  const { important, shortcuts } = footerLinks;

  return (
    <footer className="footer-bg w-full mt-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <BookMarked className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">
                <span className="logo-study">Study</span>
              </span>
            </div>
            <p className="text-muted-foreground font-bengali max-w-sm">
              বাংলাদেশের সকল বিশ্ববিদ্যালয়, কলেজ ও ভর্তি পরীক্ষার তথ্য ও সহায়তার জন্য তোমার বিশ্বস্ত প্ল্যাটফর্ম।
            </p>
            <div className="flex items-center space-x-3 mt-6">
              <a href="#" className="social-icon"><Facebook /></a>
              <a href="#" className="social-icon"><Twitter /></a>
              <a href="#" className="social-icon"><Instagram /></a>
              <a href="#" className="social-icon"><Youtube /></a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-semibold link-underline inline-block font-bengali">
              গুরুত্বপূর্ণ লিঙ্ক
            </h3>
            <ul className="mt-4 space-y-3 font-bengali">
              {important.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <link.icon className="text-primary mr-2 h-5 w-5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-semibold link-underline inline-block font-bengali">
              শর্টকাট
            </h3>
            <ul className="mt-4 space-y-3 font-bengali">
              {shortcuts.map((link, index) => (
                 <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <link.icon className="w-5 text-center mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
