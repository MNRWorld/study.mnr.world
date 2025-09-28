
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ImagePlaceholder, PlaceHolderImages } from '@/lib/placeholder-images';
import React, { useState, useEffect } from 'react';

interface Feature {
    href: string;
    icon: React.ReactNode;
    label: string;
}

interface HomePageClientProps {
    features: Feature[];
}

const TypingAnimation = () => {
    return (
        <span className="typing-container">
            <span className="typing-text"></span>
            <span className="cursor">|</span>
        </span>
    );
};


const HomePageClient = ({ features }: HomePageClientProps) => {
    const studyPlatformImage = PlaceHolderImages.find(p => p.id === 'study-platform');
    const characterImage = PlaceHolderImages.find(p => p.id === 'study-platform-character');
    const characterImage2 = PlaceHolderImages.find(p => p.id === 'study-platform-character-2');
      
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
                <div
                className="text-center"
                >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bengali leading-tight gradient-text">
                    স্বপ্ন পূরণের পথে, সকল কিছু একসাথে
                </h1>
                <div className="mt-4 text-base sm:text-lg text-muted-foreground font-bengali h-14 sm:h-auto">
                    <TypingAnimation />
                    <p>সকল কিছুর জন্যে পাশে আছে <b className="text-primary">“MNR Study”</b></p>
                </div>

                <div
                    className="mt-10 grid grid-cols-3 gap-4"
                >
                    {features.map((feature) => (
                         <Link href={feature.href} key={feature.href}>
                            <div className="feature-card">
                                {feature.icon}
                                <p className="font-bengali font-semibold text-sm sm:text-base text-card-foreground">
                                {feature.label}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                </div>
                <div
                    className="flex justify-center items-center relative max-w-md w-full h-auto mx-auto aspect-square"
                >
                     {characterImage && (
                        <div
                            className="absolute inset-0 z-0 floating-animation"
                        >
                            <Image
                                src={characterImage.imageUrl}
                                alt={characterImage.description}
                                fill
                                className="object-contain"
                            />
                        </div>
                    )}
                    {studyPlatformImage && (
                        <div className="relative z-10 w-full h-full">
                            <Image
                                src={studyPlatformImage.imageUrl}
                                alt={studyPlatformImage.description}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    )}
                    {characterImage2 && (
                        <div
                            className="absolute inset-0 z-20 floating-animation-reverse"
                        >
                            <Image
                                src={characterImage2.imageUrl}
                                alt={characterImage2.description}
                                fill
                                className="object-contain"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default HomePageClient;
