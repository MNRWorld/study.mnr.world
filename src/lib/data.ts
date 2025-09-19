import {
  Book,
  Building,
  CalendarDays,
  Facebook,
  Home,
  Info,
  Instagram,
  Landmark,
  List,
  Newspaper,
  Phone,
  School,
  Twitter,
  User,
  Youtube,
} from 'lucide-react';
import { TelegramIcon } from '@/components/icons/TelegramIcon';

export const heroCards = [
  { icon: CalendarDays, label: 'ক্যালেন্ডার' },
  { icon: Book, label: 'প্রশ্নব্যাংক' },
  { icon: Landmark, label: 'পাবলিক' },
  { icon: Building, label: 'প্রাইভেট' },
  { icon: School, label: 'কলেজ' },
];

export const footerLinks = [
  { icon: List, label: 'কোর্স' },
  { icon: CalendarDays, label: 'ভর্তি ক্যালেন্ডার' },
  { icon: Book, label: 'বই' },
  { icon: Newspaper, label: 'শিক্ষামূলক খবর' },
];

export const footerShortcuts = [
  { icon: Home, label: 'হোম' },
  { icon: User, label: 'প্রোফাইল' },
  { icon: Info, label: 'আমাদের সম্পর্কে' },
  { icon: Phone, label: 'যোগাযোগ' },
];

export const socialLinks = [
  { href: '#', icon: Facebook },
  { href: '#', icon: TelegramIcon },
  { href: '#', icon: Youtube },
  { href: '#', icon: Instagram },
  { href: '#', icon: Twitter },
];
