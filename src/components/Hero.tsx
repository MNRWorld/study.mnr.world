import { heroCards } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
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
      </div>
      <div className="hero-image flex-1">
        <Image
          src="https://i.ibb.co/L5rPSfX/hero-illustration.png"
          alt="একজন ছাত্র পড়াশোনা করছে এবং তার চারপাশে শিক্ষামূলক আইকন দেখা যাচ্ছে"
          width={600}
          height={500}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
