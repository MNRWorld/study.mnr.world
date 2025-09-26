
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  Home,
  User,
  Info,
  Mail
} from "lucide-react";
import Link from "next/link";
import { footerLinks } from "@/lib/data/navigation";
import React from "react";

const icons: { [key: string]: React.ElementType } = {
    ArrowRight,
    Home,
    User,
    Info,
    Mail,
};

export default function Footer() {
  const { important, shortcuts } = footerLinks;

  return (
    <footer className="w-full mt-16 mx-2 sm:mx-4 mb-2 sm:mb-4">
      <div className="container mx-auto">
        <div className="bg-card rounded-2xl shadow-lg px-4 sm:px-8 py-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-3 lg:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" zoomAndPan="magnify" viewBox="0 0 192 171.000002" height="28.5" preserveAspectRatio="xMidYMid meet" version="1.0" className="h-8 w-8"><defs><clipPath id="88c186c220"><path d="M 70.5 59.503906 L 74.226562 59.503906 L 74.226562 65.527344 L 70.5 65.527344 Z M 70.5 59.503906 " clipRule="nonzero"></path></clipPath><clipPath id="7ad24fbbad"><path d="M 0.5 0.503906 L 4.226562 0.503906 L 4.226562 6.527344 L 0.5 6.527344 Z M 0.5 0.503906 " clipRule="nonzero"></path></clipPath><clipPath id="a6440f8e39"><rect x="0" width="5" y="0" height="7"></rect></clipPath><clipPath id="45aa596125"><path d="M 76 1 L 190 1 L 190 120 L 76 120 Z M 76 1 " clipRule="nonzero"></path></clipPath><clipPath id="06345456c5"><path d="M 2.144531 50.269531 L 112.421875 -13.730469 L 189.894531 119.765625 L 79.617188 183.765625 Z M 2.144531 50.269531 " clipRule="nonzero"></path></clipPath><clipPath id="f0c746cdc9"><path d="M 2.144531 50.269531 L 112.421875 -13.730469 L 189.894531 119.765625 L 79.617188 183.765625 Z M 2.144531 50.269531 " clipRule="nonzero"></path></clipPath><clipPath id="e8da47b22c"><path d="M 2 50 L 116 50 L 116 169 L 2 169 Z M 2 50 " clipRule="nonzero"></path></clipPath><clipPath id="09232aead5"><path d="M 2.144531 50.269531 L 112.421875 -13.730469 L 189.894531 119.765625 L 79.617188 183.765625 Z M 2.144531 50.269531 " clipRule="nonzero"></path></clipPath><clipPath id="8f0df3d1af"><path d="M 2.144531 50.269531 L 112.421875 -13.730469 L 189.894531 119.765625 L 79.617188 183.765625 Z M 2.144531 50.269531 " clipRule="nonzero"></path></clipPath></defs><g clipPath="url(#88c186c220)"><g transform="matrix(1, 0, 0, 1, 70, 59)"><g clipPath="url(#a6440f8e39)"><g clipPath="url(#7ad24fbbad)"><path fill="#16c324" d="M 0.5 0.503906 L 4.226562 0.503906 L 4.226562 6.53125 L 0.5 6.53125 Z M 0.5 0.503906 " fillOpacity="1" fillRule="nonzero"></path></g></g></g></g><g clipPath="url(#45aa596125)"><g clipPath="url(#06345456c5)"><g clipPath="url(#f0c746cdc9)"><path fill="#f41212" d="M 149.0625 94.191406 L 76.863281 94.355469 L 91.703125 119.929688 L 189.824219 119.707031 L 121.246094 1.542969 L 101.832031 12.808594 L 149.0625 94.191406 " fillOpacity="1" fillRule="nonzero"></path></g></g></g><g clipPath="url(#e8da47b22c)"><g clipPath="url(#09232aead5)"><g clipPath="url(#8f0df3d1af)"><path fill="#009f0b" d="M 2.144531 50.253906 L 70.722656 168.417969 L 90.140625 157.152344 L 42.910156 75.769531 L 115.109375 75.605469 L 100.265625 50.035156 L 2.144531 50.253906 " fillOpacity="1" fillRule="nonzero"></path></g></g></g></svg>
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
                    গুরুত্বপূর্ণ লিঙ্ক
                    </h3>
                    <ul className="mt-4 space-y-3 font-bengali">
                    {important.map((link, index) => {
                        const Icon = icons[link.icon];
                        return (
                            <li key={index}>
                            <Link
                                href={link.href}
                                className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                            >
                                <Icon className="text-primary mr-2 h-5 w-5" />
                                {link.label}
                            </Link>
                            </li>
                        )
                    })}
                    </ul>
                </div>

                <div className="col-span-1">
                    <h3 className="text-xl font-semibold link-underline inline-block font-bengali">
                    শর্টকাট
                    </h3>
                    <ul className="mt-4 space-y-3 font-bengali">
                    {shortcuts.map((link, index) => {
                        const Icon = icons[link.icon];
                        return (
                            <li key={index}>
                            <Link
                                href={link.href}
                                className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center"
                            >
                                <Icon className="w-5 text-center mr-2" />
                                {link.label}
                            </Link>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
