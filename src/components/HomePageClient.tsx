"use client";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import React, { useState, useEffect } from "react";

interface Feature {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface HomePageClientProps {
  features: Feature[];
}

const TypingAnimation = () => {
  const texts = ["একাডেমিক হোক,", "এডমিশন হোক,", "অথবা বেসিক গড়ার প্রচেষ্টা,"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (index === texts.length) {
      setIndex(0);
      return;
    }

    if (subIndex === texts[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      Math.max(
        reverse ? 75 : subIndex === texts[index].length ? 1000 : 150,
        75,
      ),
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  useEffect(() => {
    setText(texts[index].substring(0, subIndex));
  }, [subIndex, index, texts]);

  return (
    <span className="typing-container">
      <span className="typing-text animate-typing">{text}</span>
      <span className="cursor animate-blink-caret">|</span>
    </span>
  );
};

const HomePageClient = ({ features }: HomePageClientProps) => {
  const studyPlatformImage = PlaceHolderImages.find(
    (p) => p.id === "study-platform",
  );
  const characterImage = PlaceHolderImages.find(
    (p) => p.id === "study-platform-character",
  );
  const characterImage2 = PlaceHolderImages.find(
    (p) => p.id === "study-platform-character-2",
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-bengali leading-tight gradient-text">
            স্বপ্ন পূরণের পথে, সকল কিছু একসাথে
          </h1>
          <div className="mt-4 text-base sm:text-lg text-muted-foreground font-bengali h-14 sm:h-auto">
            <TypingAnimation />
            <p>
              সকল কিছুর জন্যে পাশে আছে{" "}
              <b className="text-primary">“MNR Study”</b>
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {features.map((feature) => (
              <Link
                href={feature.href}
                key={feature.href}
                aria-label={feature.label}
              >
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
        <div className="flex justify-center items-center relative max-w-md w-full h-auto mx-auto aspect-square">
          {characterImage && (
            <div className="absolute inset-0 z-0 animate-float">
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
                fetchPriority="high"
                loading="eager"
              />
            </div>
          )}
          {characterImage2 && (
            <div className="absolute inset-0 z-20 animate-float [animation-direction:reverse]">
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
  );
};

export default HomePageClient;
