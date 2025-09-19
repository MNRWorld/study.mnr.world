'use client';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';

export default function Home() {
  return (
    <div className="bg-slate-50 dark:bg-custom-dark text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <div className="main-wrapper border-r-[6px] border-teal-500">
        <Header />
        <main>
          <Hero />
        </main>
        <Footer />
      </div>
      <ThemeToggleButton />
    </div>
  );
}
