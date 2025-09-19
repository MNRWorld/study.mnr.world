'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { StudyLogo } from '@/components/icons/StudyLogo';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '#', label: 'Question Bank' },
    { href: '#', label: 'Admission Calendar' },
    { href: '#', label: 'Courses' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <nav className="container max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          <Link href="#" className="logo flex items-center gap-3">
            <StudyLogo />
            <div>
              <span className="text-2xl font-bold">Study</span>
              <p className="text-xs text-muted-foreground -mt-1">
                Your Study Partner
              </p>
            </div>
          </Link>
          <ul className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild className="hidden md:block">
            <Link href="#">Join</Link>
          </Button>
          <button onClick={toggleMenu} className="md:hidden text-2xl z-50">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-30 flex items-center justify-center transition-opacity duration-300 md:hidden">
          <ul className="flex flex-col items-center gap-10 font-semibold text-2xl text-foreground">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild size="lg" className="mt-6">
                <Link href="#" onClick={toggleMenu}>
                  Join
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
