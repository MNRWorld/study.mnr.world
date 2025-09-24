
'use client';
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
import { motion } from 'framer-motion';


export default function HomePage() {
  const studyPlatformImage = PlaceHolderImages.find(p => p.id === 'study-platform');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-grow flex items-center"
    >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className="text-center lg:text-left"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bengali leading-tight gradient-text">
                    স্বপ্ন পূরণের পথে, সবকিছু এক প্ল্যাটফর্মে
                  </h1>
                  <p className="mt-4 text-base sm:text-lg text-muted-foreground font-bengali">
                    ভর্তি পরীক্ষা থেকে শুরু করে পড়াশোনার প্রতিটি ধাপে তোমার পাশেই আছে MNR Study।
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground font-bengali">
                      চলো, একসাথে শুরু করি তোমার সাফল্যের যাত্রা।
                  </p>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5"
                  >
                    <Link href="/calendar">
                    <motion.div variants={itemVariants} className="feature-card">
                        <CalendarDays className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary mb-2 sm:mb-3" />
                        <h3 className="font-bengali font-semibold text-sm sm:text-base text-card-foreground">
                        ক্যালেন্ডার
                        </h3>
                    </motion.div>
                    </Link>
                    <Link href="/question-bank">
                    <motion.div variants={itemVariants} className="feature-card">
                        <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary mb-2 sm:mb-3" />
                        <h3 className="font-bengali font-semibold text-sm sm:text-base text-card-foreground">
                        প্রশ্নব্যাংক
                        </h3>
                    </motion.div>
                    </Link>
                    <Link href="/courses">
                    <motion.div variants={itemVariants} className="feature-card">
                        <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary mb-2 sm:mb-3" />
                        <h3 className="font-bengali font-semibold text-sm sm:text-base text-card-foreground">
                        কোর্স
                        </h3>
                    </motion.div>
                    </Link>
                    <Link href="/university/dhaka">
                    <motion.div variants={itemVariants} className="feature-card">
                        <University className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary mb-2 sm:mb-3" />
                        <h3 className="font-bengali font-semibold text-sm sm:text-base text-card-foreground">
                        পাবলিক
                        </h3>
                    </motion.div>
                    </Link>
                    <Link href="/private">
                    <motion.div variants={itemVariants} className="feature-card">
                        <Building className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary mb-2 sm:mb-3" />
                        <h3 className="font-bengali font-semibold text-sm sm:text-base text-card-foreground">
                        প্রাইভেট
                        </h3>
                    </motion.div>
                    </Link>
                    <Link href="/college">
                    <motion.div variants={itemVariants} className="feature-card">
                        <School className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary mb-2 sm:mb-3" />
                        <h3 className="font-bengali font-semibold text-sm sm:text-base text-card-foreground">
                        কলেজ
                        </h3>
                    </motion.div>
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className="flex justify-center"
                >
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
                </motion.div>
            </div>
        </div>
    </motion.main>
  );
}
