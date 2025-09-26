
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ImagePlaceholder } from '@/lib/placeholder-images';
import React, { useState, useEffect } from 'react';

interface Feature {
    href: string;
    icon: React.ReactNode;
    label: string;
}

interface HomePageClientProps {
    studyPlatformImage: ImagePlaceholder | undefined;
    characterImage: ImagePlaceholder | undefined;
    features: Feature[];
}

const TypingAnimation = () => {
    const texts = ['একাডেমিক হোক,', 'এডমিশন হোক,', 'অথবা বেসিক গড়ার প্রচেষ্টা,'];
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[textIndex];
            if (isDeleting) {
                if (displayText.length > 0) {
                    setDisplayText(currentText.substring(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                if (displayText.length < currentText.length) {
                    setDisplayText(currentText.substring(0, displayText.length + 1));
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            }
        };

        const typingSpeed = isDeleting ? 100 : 150;
        const timeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex, texts]);

    return (
        <span className="relative">
            {displayText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block"
                style={{ top: '2px' }}
            >
                ।
            </motion.span>
        </span>
    );
};


const HomePageClient = ({ studyPlatformImage, characterImage, features }: HomePageClientProps) => {
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
                    className="text-center"
                    >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bengali leading-tight gradient-text">
                        স্বপ্ন পূরণের পথে, সকল কিছু একসাথে
                    </h1>
                    <div className="mt-4 text-base sm:text-lg text-muted-foreground font-bengali h-14 sm:h-auto">
                        <TypingAnimation />
                        <p>সকল কিছুর জন্যে পাশে আছে <b className="text-primary">“MNR Study”</b></p>
                    </div>

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
                        className="flex justify-center relative"
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
                        {characterImage && (
                            <motion.div
                                className="absolute -top-12 -right-4 w-[200px] h-[200px]"
                                animate={{ y: [0, -15, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Image
                                    src={characterImage.imageUrl}
                                    alt={characterImage.description}
                                    width={200}
                                    height={200}
                                    data-ai-hint={characterImage.imageHint}
                                    className="object-contain"
                                />
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.main>
    )
};

export default HomePageClient;
