import { Button } from "@/components/ui/button";
import {
  BookOpen,
  BookMarked,
  Building,
  CalendarDays,
  GraduationCap,
  School,
  University,
  Home as HomeIcon,
  User,
  Info,
  Mail,
  Moon,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HomePage() {
  const studyPlatformImage = PlaceHolderImages.find(p => p.id === 'study-platform');

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full glassmorphism-header">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <BookMarked className="h-8 w-8 text-emerald-500" />
              <span className="text-2xl font-bold text-slate-100">
                <span className="logo-study">Study</span>
              </span>
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

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left animate-fadeInDown">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-bengali leading-tight gradient-text">
              স্বপ্ন পূরণের পথে, সকল কিছু একসাথে
            </h1>
            <p className="mt-4 text-lg text-slate-400 font-bengali">
              এডমিশন হোক।
            </p>
            <p className="text-lg text-slate-400 font-bengali">
              সকল কিছুর জন্যে পাশে আছে &quot;MNR Study&quot;
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
              <div className="feature-card">
                <CalendarDays className="h-12 w-12 mx-auto text-indigo-400 mb-3" />
                <h3 className="font-bengali font-semibold text-slate-100">
                  ক্যালেন্ডার
                </h3>
              </div>
              <div className="feature-card">
                <BookOpen className="h-12 w-12 mx-auto text-indigo-400 mb-3" />
                <h3 className="font-bengali font-semibold text-slate-100">
                  প্রশ্নব্যাংক
                </h3>
              </div>
              <div className="feature-card">
                <GraduationCap className="h-12 w-12 mx-auto text-indigo-400 mb-3" />
                <h3 className="font-bengali font-semibold text-slate-100">
                  কোর্স
                </h3>
              </div>
              <div className="feature-card">
                <University className="h-12 w-12 mx-auto text-indigo-400 mb-3" />
                <h3 className="font-bengali font-semibold text-slate-100">
                  পাবলিক
                </h3>
              </div>
              <div className="feature-card">
                <Building className="h-12 w-12 mx-auto text-indigo-400 mb-3" />
                <h3 className="font-bengali font-semibold text-slate-100">
                  প্রাইভেট
                </h3>
              </div>
              <div className="feature-card">
                <School className="h-12 w-12 mx-auto text-indigo-400 mb-3" />
                <h3 className="font-bengali font-semibold text-slate-100">
                  কলেজ
                </h3>
              </div>
            </div>
          </div>
          <div className="flex justify-center animate-fadeInUp">
            {studyPlatformImage && (
              <Image
                src={studyPlatformImage.imageUrl}
                alt={studyPlatformImage.description}
                width={600}
                height={450}
                data-ai-hint={studyPlatformImage.imageHint}
                className="max-w-md w-full h-auto object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      </main>

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
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  style={{ backgroundColor: "#1DA1F2" }}
                >
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  }}
                >
                  <i className="fab fa-instagram text-white"></i>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  style={{ backgroundColor: "#FF0000" }}
                >
                  <i className="fab fa-youtube text-white"></i>
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
    </div>
  );
}
