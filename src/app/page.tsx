'use client';
import {
  Book,
  Building,
  CalendarDays,
  CircleInfo,
  Display,
  Facebook,
  Github,
  Home,
  Instagram,
  Landmark,
  ListUl,
  Menu,
  Moon,
  Newspaper,
  Phone,
  School,
  Sun,
  User,
  X,
  Youtube,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const StudyLogo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.2268 4.00002C26.2573 4.00002 25.3235 4.25432 24.5427 4.72142C23.7619 5.18852 23.1706 5.84582 22.8468 6.61112C20.4318 12.2355 15.6558 20.3541 12.8796 23.9982C10.1034 27.6423 9.4239 28.5393 9.1416 31.974C9.13653 32.0436 9.13388 32.1132 9.1335 32.1828C9.1335 37.1523 13.155 41.1738 18.1245 41.1738C22.2546 41.1738 25.7511 38.3121 26.6802 34.4532L29.5932 21.8496C30.3459 18.5712 33.2436 16.3263 36.6366 16.3263C40.6386 16.3263 43.866 19.5537 43.866 23.5557C43.866 27.5577 40.6386 30.7851 36.6366 30.7851H32.4828"
      stroke="#4ADE80"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 10l-4 4 6 6 4-16-18 7 4 2 2 6 3-4" />
  </svg>
);

const ThemeToggleButton = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (theme === 'dark' || (!theme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const htmlEl = document.documentElement;
    htmlEl.classList.toggle('dark');
    const newIsDark = htmlEl.classList.contains('dark');
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    setIsDark(newIsDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 w-12 h-12 bg-violet-100 dark:bg-custom-dark-card text-violet-700 dark:text-violet-300 rounded-full flex items-center justify-center text-xl shadow-lg hover:scale-110 transition-all duration-300 z-50 border border-slate-200 dark:border-slate-700"
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroCards = [
    { icon: CalendarDays, label: 'ক্যালেন্ডার' },
    { icon: Book, label: 'প্রশ্নব্যাংক' },
    { icon: Display, label: 'কোর্স' },
    { icon: Landmark, label: 'পাবলিক' },
    { icon: Building, label: 'প্রাইভেট' },
    { icon: School, label: 'কলেজ' },
  ];

  const footerLinks = [
    { icon: ListUl, label: 'কোর্স' },
    { icon: CalendarDays, label: 'ভর্তি ক্যালেন্ডার' },
    { icon: Book, label: 'বই' },
    { icon: Newspaper, label: 'শিক্ষামূলক খবর' },
  ];

  const footerShortcuts = [
    { icon: Home, label: 'হোম' },
    { icon: User, label: 'প্রোফাইল' },
    { icon: CircleInfo, label: 'আমাদের সম্পর্কে' },
    { icon: Phone, label: 'যোগাযোগ' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: TelegramIcon, href: '#' },
    { icon: Youtube, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: X, href: '#' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-slate-50 dark:bg-custom-dark text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <div className="main-wrapper border-r-[6px] border-teal-500">
        <header className="bg-white/80 dark:bg-custom-dark/80 backdrop-blur-sm sticky top-0 z-40 shadow-sm dark:shadow-slate-800">
          <nav className="container max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
            <Link href="#" className="logo flex items-center gap-3">
              <StudyLogo />
              <div>
                <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                  Study
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 -mt-1">
                  Your Study Partner
                </p>
              </div>
            </Link>
            <ul className="hidden md:flex items-center gap-8 font-bangla font-medium">
              <li>
                <Link
                  href="#"
                  className="hover:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  প্রশ্নব্যাংক
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  এডমিশন ক্যালেন্ডার
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  কোর্স
                </Link>
              </li>
            </ul>
            <Link
              href="#"
              className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-colors font-bangla shadow-lg shadow-indigo-500/30"
            >
              যোগ দিন
            </Link>
            <button onClick={toggleMenu} className="md:hidden text-2xl z-50">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>
        </header>

        {isMenuOpen && (
          <div
            className={`fixed inset-0 bg-custom-dark/95 backdrop-blur-sm z-30 flex items-center justify-center transition-opacity duration-300 md:hidden ${
              isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <ul className="flex flex-col items-center gap-10 font-bangla font-semibold text-2xl text-white">
              <li>
                <Link
                  href="#"
                  onClick={toggleMenu}
                  className="menu-link hover:text-green-400 transition-colors"
                >
                  প্রশ্নব্যাংক
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={toggleMenu}
                  className="menu-link hover:text-green-400 transition-colors"
                >
                  এডমিশন ক্যালেন্ডার
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={toggleMenu}
                  className="menu-link hover:text-green-400 transition-colors"
                >
                  কোর্স
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={toggleMenu}
                  className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg transition-colors mt-6"
                >
                  যোগ দিন
                </Link>
              </li>
            </ul>
          </div>
        )}

        <main>
          <section className="container max-w-6xl mx-auto px-5 py-20 flex flex-col lg:flex-row items-center gap-12">
            <div className="hero-content flex-1 text-center lg:text-left">
              <h1 className="font-bangla text-4xl md:text-5xl font-bold leading-tight mb-4">
                স্বপ্ন পূরণের পথে, সকল কিছু একসাথে
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mb-10 font-bangla">
                অথবা বেসিক্স গড়ার প্রঠে। সকল কিছুর জন্য পাশে আছে “MNR Study”
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {heroCards.map((card, index) => (
                  <Link
                    href="#"
                    key={index}
                    className="card bg-white dark:bg-custom-dark-card rounded-xl p-6 flex flex-col items-center justify-center gap-4 font-bangla font-semibold text-base md:text-lg hover:-translate-y-1.5 transition-all duration-300 ease-in-out shadow-sm dark:shadow-2xl dark:shadow-black/20 border border-transparent dark:border-slate-700/50 hover:border-indigo-500 dark:hover:border-indigo-500"
                  >
                    <card.icon className="w-10 h-10 text-indigo-500" />
                    <span>{card.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="hero-image flex-1">
              <Image
                src="https://i.ibb.co/L5rPSfX/hero-illustration.png"
                alt="একজন ছাত্র পড়াশোনা করছে এবং তার চারপাশে শিক্ষামূলক আইকন দেখা যাচ্ছে"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </section>
        </main>

        <footer className="bg-slate-100 dark:bg-slate-800 py-16">
          <div className="container max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center md:text-left">
              <div className="logo flex items-center gap-3 justify-center md:justify-start">
                <StudyLogo />
                <div>
                  <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                    Study
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 -mt-1">
                    Your Study Partner
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-5 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <Link
                    href={social.href}
                    key={index}
                    className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xl transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="footer-heading font-bangla text-xl font-semibold mb-5 relative pb-2">
                লিঙ্কস
              </h3>
              <ul className="space-y-3 font-bangla">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="flex items-center justify-center md:justify-start gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <link.icon className="w-5 h-5" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="footer-heading font-bangla text-xl font-semibold mb-5 relative pb-2">
                শর্টকাট
              </h3>
              <ul className="space-y-3 font-bangla">
                {footerShortcuts.map((link, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="flex items-center justify-center md:justify-start gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <link.icon className="w-5 h-5" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </div>

      <ThemeToggleButton />
    </div>
  );
}
