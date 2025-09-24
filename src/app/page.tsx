
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

export default function HomePage() {
  const studyPlatformImage = PlaceHolderImages.find(p => p.id === 'study-platform');

  return (
    <main className="flex-grow flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="text-center lg:text-left animate-fadeInDown">
                <h1 className="text-4xl md:text-5xl font-bold font-bengali leading-tight gradient-text">
                    স্বপ্ন পূরণের পথে, সবকিছু এক প্ল্যাটফর্মে
                </h1>
                <p className="mt-4 text-lg text-muted-foreground font-bengali">
                    ভর্তি পরীক্ষা থেকে শুরু করে পড়াশোনার প্রতিটি ধাপে আপনার পাশেই আছে MNR Study।
                </p>
                <p className="text-lg text-muted-foreground font-bengali">
                    চলুন, একসাথে শুরু করি আপনার সাফল্যের যাত্রা।
                </p>

                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
                    <Link href="/calendar">
                    <div className="feature-card">
                        <CalendarDays className="h-12 w-12 mx-auto text-primary mb-3" />
                        <h3 className="font-bengali font-semibold text-card-foreground">
                        ক্যালেন্ডার
                        </h3>
                    </div>
                    </Link>
                    <Link href="/question-bank">
                    <div className="feature-card">
                        <BookOpen className="h-12 w-12 mx-auto text-primary mb-3" />
                        <h3 className="font-bengali font-semibold text-card-foreground">
                        প্রশ্নব্যাংক
                        </h3>
                    </div>
                    </Link>
                    <Link href="/courses">
                    <div className="feature-card">
                        <GraduationCap className="h-12 w-12 mx-auto text-primary mb-3" />
                        <h3 className="font-bengali font-semibold text-card-foreground">
                        কোর্স
                        </h3>
                    </div>
                    </Link>
                    <Link href="/university/dhaka">
                    <div className="feature-card">
                        <University className="h-12 w-12 mx-auto text-primary mb-3" />
                        <h3 className="font-bengali font-semibold text-card-foreground">
                        পাবলিক
                        </h3>
                    </div>
                    </Link>
                    <Link href="/private">
                    <div className="feature-card">
                        <Building className="h-12 w-12 mx-auto text-primary mb-3" />
                        <h3 className="font-bengali font-semibold text-card-foreground">
                        প্রাইভেট
                        </h3>
                    </div>
                    </Link>
                    <Link href="/college">
                    <div className="feature-card">
                        <School className="h-12 w-12 mx-auto text-primary mb-3" />
                        <h3 className="font-bengali font-semibold text-card-foreground">
                        কলেজ
                        </h3>
                    </div>
                    </Link>
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
        </div>
    </main>
  );
}
