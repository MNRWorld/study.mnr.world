import {
  BookMarked,
  Home as HomeIcon,
  User,
  Info,
  Mail,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
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
              বাংলাদেশের সকল বিশ্ববিদ্যালয়, কলেজ ও ভর্তি পরীক্ষার তথ্য ও সহায়তার জন্য আপনার বিশ্বস্ত প্ল্যাটফর্ম।
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
              লিঙ্কস
            </h3>
            <ul className="mt-4 space-y-3 font-bengali">
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <ArrowRight className="text-primary mr-2 h-5 w-5" />
                  কোর্স
                </Link>
              </li>
              <li>
                <Link
                  href="/calendar"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <ArrowRight className="text-primary mr-2 h-5 w-5" />
                  ভর্তি ক্যালেন্ডার
                </Link>
              </li>
              <li>
                <Link
                  href="/question-bank"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <ArrowRight className="text-primary mr-2 h-5 w-5" />
                  বই ও প্রশ্নব্যাংক
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <ArrowRight className="text-primary mr-2 h-5 w-5" />
                  শিক্ষামূলক খবর
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-semibold link-underline inline-block font-bengali">
              শর্টকাট
            </h3>
            <ul className="mt-4 space-y-3 font-bengali">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <HomeIcon className="w-5 text-center mr-2" />
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <User className="w-5 text-center mr-2" />
                  প্রোফাইল
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <Info className="w-5 text-center mr-2" />
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <Mail className="w-5 text-center mr-2" />
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
