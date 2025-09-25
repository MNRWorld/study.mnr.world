import React from 'react';
import Header from '@/components/layout/Header';
import { Inter, Hind_Siliguri } from 'next/font/google';
import { cn } from '@/lib/utils';
import DynamicFooter from '@/components/layout/DynamicFooter';

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
  return (
    <div className={cn("min-h-screen flex flex-col antialiased", inter.variable, hindSiliguri.variable)}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <DynamicFooter />
    </div>
  );
}
