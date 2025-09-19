'use client';
import { heroCards } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="container max-w-6xl mx-auto px-5 py-20 flex flex-col lg:flex-row items-center gap-12">
      <div className="hero-content flex-1 text-center lg:text-left">
        <h1 className="font-bangla text-4xl md:text-5xl font-bold leading-tight mb-4">
          স্বপ্ন পূরণের পথে, সকল কিছু একসাথে
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-10 font-bangla">
          অথবা বেসিক্স গড়ার প্রঠে। সকল কিছুর জন্য পাশে আছে “MNR Study”
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-10">
          {heroCards.map((card, index) => (
            <Link
              href="#"
              key={index}
              className="card bg-white dark:bg-custom-dark-card rounded-xl p-6 flex flex-col items-center justify-center gap-4 font-bangla font-semibold text-base md:text-lg hover:-translate-y-1.5 transition-all duration-300 ease-in-out shadow-sm dark:shadow-2xl dark:shadow-black/20 border border-transparent dark:border-slate-700/50 hover:border-indigo-500 dark:hover:border-indigo-500"
            >
              <card.icon className="w-10 h-10 text-indigo-500" />
              <span>{card.label}</span>
            </Link>
          ))}
        </div>
        <Button
          size="lg"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors font-bangla shadow-lg shadow-indigo-500/30 mx-auto lg:mx-0"
        >
          শুরু করুন <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
      <div className="hero-image flex-1">
        <Image
          src="https://picsum.photos/seed/cool-student/800/600"
          alt="A student is studying and educational icons are visible around him"
          width={800}
          height={600}
          className="w-full h-auto rounded-lg shadow-2xl"
          data-ai-hint="student learning"
        />
      </div>
    </section>
  );
}
