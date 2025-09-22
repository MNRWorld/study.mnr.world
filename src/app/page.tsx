import {
  BookOpen,
  BookMarked,
  Building,
  CalendarDays,
  GraduationCap,
  School,
  University,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HomePage() {
  const studyPlatformImage = PlaceHolderImages.find(p => p.id === 'study-platform');

  return (
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
            <Link href="/university/dhaka">
              <div className="feature-card">
                <University className="h-12 w-12 mx-auto text-indigo-400 mb-3" />
                <h3 className="font-bengali font-semibold text-slate-100">
                  পাবলিক
                </h3>
              </div>
            </Link>
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
  );
}
