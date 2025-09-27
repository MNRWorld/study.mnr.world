
'use client';
import React from 'react';
import Header from '@/components/layout/Header';
import { Inter, Hind_Siliguri } from 'next/font/google';
import { cn } from '@/lib/utils';
import DynamicFooter from '@/components/layout/DynamicFooter';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import BackToTopButton from '@/components/common/BackToTopButton';

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
    hidden: { opacity: 0, filter: 'blur(8px)', scale: 1.05 },
    enter: { opacity: 1, filter: 'blur(0px)', scale: 1 },
    exit: { opacity: 0, filter: 'blur(8px)', scale: 0.95 },
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
          exit="exit"
          transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
          className="flex-grow"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <DynamicFooter />
      <BackToTopButton />
    </div>
  );
}
