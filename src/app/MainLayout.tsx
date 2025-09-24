import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FloatingNavBar } from '@/components/ui/floating-navbar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <FloatingNavBar />
      </div>
    </div>
  );
}
