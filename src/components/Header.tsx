'use client';

import { Menu, Search, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { StudyLogo } from '@/components/icons/StudyLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <nav className="container max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
          <Link href="/" className="logo flex items-center gap-3">
            <StudyLogo />
            <div>
              <span className="text-2xl font-bold">স্টাডি</span>
              <p className="text-xs text-muted-foreground -mt-1">
                আপনার পড়াশোনার সঙ্গী
              </p>
            </div>
          </Link>
          <ul className="hidden lg:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-muted-foreground hover:text-primary transition-colors',
                    pathname === link.href && 'text-primary'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input type="search" placeholder="কিছু খুঁজুন..." className="pl-10" />
            </div>
            <Button asChild>
              <Link href="/login">লগইন</Link>
            </Button>
          </div>
          <button onClick={toggleMenu} className="lg:hidden text-2xl z-50">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center transition-opacity duration-300 lg:hidden',
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <ul className="flex flex-col items-center gap-10 font-semibold text-2xl text-foreground mb-12">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={toggleMenu}
                className={cn(
                  'hover:text-primary transition-colors',
                  pathname === link.href && 'text-primary'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-6 w-full px-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input type="search" placeholder="কিছু খুঁজুন..." className="pl-10 w-full" />
            </div>
            <Button asChild size="lg" className="w-full">
              <Link href="/login" onClick={toggleMenu}>
                লগইন করুন
              </Link>
            </Button>
          </div>
      </div>
    </>
  );
}
