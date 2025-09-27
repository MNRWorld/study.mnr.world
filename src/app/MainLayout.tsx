
'use client';
import React from 'react';
import Header from '@/components/layout/Header';
import { Inter, Hind_Siliguri } from 'next/font/google';
import { cn } from '@/lib/utils';
import DynamicFooter from '@/components/layout/DynamicFooter';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hind-siliguri',
  display: 'swap',
});

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <div className={cn("min-h-screen flex flex-col antialiased", inter.variable, hindSiliguri.variable)}>
      <Header />
      <AnimatePresence
        mode='wait'
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.main
          key={pathname}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit" // Use exit instead of initial for the exit animation
          transition={{ type: 'linear' }}
          className="flex-grow"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <DynamicFooter />
    </div>
  );
}
