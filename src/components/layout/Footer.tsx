import {
  BookMarked,
  Home as HomeIcon,
  User,
  Info,
  Mail,
  Moon,
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
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <BookMarked className="h-8 w-8 text-emerald-500" />
              <span className="text-2xl font-bold text-slate-100">
                <span className="logo-study">Study</span>
              </span>
            </div>
            <div className="flex items-center space-x-3 mt-4">
              <a
                href="#"
                className="social-icon"
                style={{ backgroundColor: "#1877F2" }}
              >
                <Facebook className="text-white" />
              </a>
              <a
                href="#"
                className="social-icon"
                style={{ backgroundColor: "#1DA1F2" }}
              >
                <Twitter className="text-white" />
              </a>
              <a
                href="#"
                className="social-icon"
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                }}
              >
                <Instagram className="text-white" />
              </a>
              <a
                href="#"
                className="social-icon"
                style={{ backgroundColor: "#FF0000" }}
              >
                <Youtube className="text-white" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-semibold text-white link-underline inline-block font-bengali">
              লিঙ্কস
            </h3>
            <ul className="mt-4 space-y-3 font-bengali">
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ArrowRight className="text-indigo-500 mr-2 h-5 w-5" />
                  কোর্স
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ArrowRight className="text-indigo-500 mr-2 h-5 w-5" />
                  ভর্তি ক্যালেন্ডার
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ArrowRight className="text-indigo-500 mr-2 h-5 w-5" />
                  বই
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ArrowRight className="text-indigo-500 mr-2 h-5 w-5" />
                  শিক্ষামূলক খবর
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-semibold text-white link-underline inline-block font-bengali">
              শর্টকাট
            </h3>
            <ul className="mt-4 space-y-3 font-bengali">
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <HomeIcon className="w-5 text-center mr-2" />
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <User className="w-5 text-center mr-2" />
                  প্রোফাইল
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <Info className="w-5 text-center mr-2" />
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <Mail className="w-5 text-center mr-2" />
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <button className="fixed bottom-10 right-10 w-14 h-14 rounded-full flex items-center justify-center theme-toggle shadow-lg">
        <Moon className="h-6 w-6 text-yellow-300" />
      </button>
    </footer>
  );
}
