import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  BookMarked,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { navItems } from '@/lib/data/navigation';
import HeaderAuth from './HeaderAuth';
import React, { Suspense } from 'react';

// --- Sub-components defined within the same file for better organization ---

interface NavItemProps {
  item: {
    id: string;
    label: string;
    icon: React.ReactNode;
    href: string;
  };
}

function NavItem({ item }: NavItemProps) {
  return (
    <Link
      href={item.href}
      className={cn(
        'relative flex cursor-pointer items-center justify-center rounded-full transition-colors duration-300',
        'h-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'text-muted-foreground hover:text-accent-foreground',
        'px-3 font-bengali'
      )}
    >
      <div className="relative z-10 flex items-center">
        <div className="shrink-0">{item.icon}</div>
        <div className="ml-2">
          <span className="whitespace-nowrap text-sm font-medium">
            {item.label}
          </span>
        </div>
      </div>
    </Link>
  );
}


// --- Main Header Component ---

export default function Header() {
  return (
    <header className="sticky top-4 z-50 w-full flex justify-center">
        <div
            className={cn(
            'flex items-center gap-x-1 rounded-full border border-border bg-card/80 backdrop-blur-lg p-1.5 shadow-lg transition-all duration-300'
            )}
        >
            <Link href="/" className="flex items-center space-x-2 pl-3 pr-2 text-primary">
                <BookMarked className="h-7 w-7" />
            </Link>

            <div className="h-6 w-px bg-border/50"></div>

            {navItems.map((item) => (
                <NavItem
                    key={item.id}
                    item={item}
                />
            ))}

             <div className="h-6 w-px bg-border/50"></div>
            
             <Suspense fallback={<div className="w-20 h-9" />}>
                <HeaderAuth />
             </Suspense>
        </div>
    </header>
  );
}
