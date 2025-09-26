
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ImagePlaceholder } from '@/lib/placeholder-images';

interface Feature {
    href: string;
    icon: React.ReactNode;
    label: string;
}

interface HomePageClientProps {
    studyPlatformImage: ImagePlaceholder | undefined;
    features: Feature[];
}

const HomePageClient = ({ studyPlatformImage, features }: HomePageClientProps) => {
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
                        স্বপ্ন পূরণের পথে, সকল কিছু একসাথে
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
                        className="mt-10 grid grid-cols-3 gap-4"
                    >
                        {features.map((feature) => (
                             <Link href={feature.href} key={feature.href}>
                                <motion.div variants={itemVariants} className="feature-card">
                                    {feature.icon}
                                    <h3 className="font-bengali font-semibold text-sm sm:text-base text-card-foreground">
                                    {feature.label}
                                    </h3>
                                </motion.div>
                            </Link>
                        ))}
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
                        priority
                        />
                    )}
                    </motion.div>
                </div>
            </div>
        </motion.main>
    )
};

export default HomePageClient;
