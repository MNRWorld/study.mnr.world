"use client";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  Home,
  User,
  Info,
  Mail,
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
    <footer className="w-full mt-16 mb-2 sm:mb-4">
      <div className="bg-card/50 rounded-2xl shadow-lg px-4 sm:px-8 py-8 border border-border mx-2 sm:mx-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.svg"
                alt="Study Platform Logo"
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold">
                <span className="text-primary">Study</span>
              </span>
            </div>
            <p className="text-muted-foreground font-bengali max-w-sm">
              বাংলাদেশের সকল বিশ্ববিদ্যালয়, কলেজ ও ভর্তি পরীক্ষার তথ্য ও
              সহায়তার জন্য আপনার বিশ্বস্ত প্ল্যাটফর্ম।
            </p>
            <div className="flex items-center space-x-3 mt-6">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-transform hover:scale-115"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-transform hover:scale-115"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-transform hover:scale-115"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-transform hover:scale-115"
                aria-label="Youtube"
              >
                <Youtube />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h2 className="text-xl font-semibold inline-block font-bengali relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-blue-500">
              গুরুত্বপূর্ণ লিঙ্ক
            </h2>
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
                );
              })}
            </ul>
          </div>

          <div className="col-span-1">
            <h2 className="text-xl font-semibold inline-block font-bengali relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-blue-500">
              শর্টকাট
            </h2>
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
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
