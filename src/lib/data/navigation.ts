
import React from 'react';
import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  Newspaper,
  Home
} from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'হোম', icon: React.createElement(Home, { size: 20 }), href: '/' },
  { id: 'question-bank', label: 'প্রশ্নব্যাংক', icon: React.createElement(BookOpen, { size: 20 }), href: '/question-bank' },
  { id: 'calendar', label: 'ক্যালেন্ডার', icon: React.createElement(CalendarDays, { size: 20 }), href: '/calendar' },
  { id: 'courses', label: 'কোর্স', icon: React.createElement(GraduationCap, { size: 20 }), href: '/courses' },
  { id: 'blog', label: 'ব্লগ', icon: React.createElement(Newspaper, { size: 20 }), href: '/blog' },
];
