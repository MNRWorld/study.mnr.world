
import {
  BookOpen,
  Building,
  CalendarDays,
  GraduationCap,
  School,
  University,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import HomePageClient from "@/components/HomePageClient";

export default function HomePage() {
  const studyPlatformImage = PlaceHolderImages.find(p => p.id === 'study-platform');
  const characterImage = PlaceHolderImages.find(p => p.id === 'study-platform-character');

  const features = [
    { href: "/calendar", icon: <CalendarDays className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary mb-2 sm:mb-3" />, label: "ক্যালেন্ডার" },
    { href: "/question-bank", icon: <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary mb-2 sm:mb-3" />, label: "প্রশ্নব্যাংক" },
    { href: "/courses", icon: <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary mb-2 sm:mb-3" />, label: "কোর্স" },
    { href: "/public", icon: <University className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary mb-2 sm:mb-3" />, label: "পাবলিক" },
    { href: "/private", icon: <Building className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary mb-2 sm:mb-3" />, label: "প্রাইভেট" },
    { href: "/college", icon: <School className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary mb-2 sm:mb-3" />, label: "কলেজ" },
  ];

  return (
    <HomePageClient 
      studyPlatformImage={studyPlatformImage} 
      characterImage={characterImage} 
      features={features} 
    />
  );
}
