
import React from 'react';
import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  Newspaper,
  Home,
  User,
  Info,
  Mail,
  ArrowRight,
} from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'হোম', icon: React.createElement(Home, { size: 20 }), href: '/' },
  { id: 'question-bank', label: 'প্রশ্নব্যাংক', icon: React.createElement(BookOpen, { size: 20 }), href: '/question-bank' },
  { id: 'calendar', label: 'ক্যালেন্ডার', icon: React.createElement(CalendarDays, { size: 20 }), href: '/calendar' },
  { id: 'courses', label: 'কোর্স', icon: React.createElement(GraduationCap, { size: 20 }), href: '/courses' },
  { id: 'blog', label: 'ব্লগ', icon: React.createElement(Newspaper, { size: 20 }), href: '/blog' },
];

export const footerLinks = {
  important: [
    { href: '/courses', label: 'আমাদের কোর্স', icon: ArrowRight },
    { href: '/calendar', label: 'ভর্তি ক্যালেন্ডার', icon: ArrowRight },
    { href: '/question-bank', label: 'বই ও প্রশ্নব্যাংক', icon: ArrowRight },
    { href: '/blog', label: 'শিক্ষামূলক ব্লগ', icon: ArrowRight },
  ],
  shortcuts: [
    { href: '/', label: 'হোম', icon: Home },
    { href: '#', label: 'প্রোফাইল', icon: User },
    { href: '#', label: 'আমাদের সম্পর্কে', icon: Info },
    { href: '#', label: 'যোগাযোগ', icon: Mail },
  ],
};
