
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  BookMarked,
  BookOpen,
  CalendarDays,
  GraduationCap,
  LogIn,
  LogOut,
  Newspaper,
  Home
} from 'lucide-react';
import { Button } from '../ui/button';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'হোম', icon: <Home size={20} />, href: '/' },
  { id: 'question-bank', label: 'প্রশ্নব্যাংক', icon: <BookOpen size={20} />, href: '/question-bank' },
  { id: 'calendar', label: 'ক্যালেন্ডার', icon: <CalendarDays size={20} />, href: '/calendar' },
  { id: 'courses', label: 'কোর্স', icon: <GraduationCap size={20} />, href: '/courses' },
  { id: 'blog', label: 'ব্লগ', icon: <Newspaper size={20} />, href: '/blog' },
];

export default function Header() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <header className="sticky top-4 z-50 w-full flex justify-center">
        <div className="relative">
             <div
                className={cn(
                'flex items-center gap-x-1 rounded-full border border-border bg-card/80 backdrop-blur-lg p-1.5 shadow-lg transition-all duration-300'
                )}
                onMouseLeave={() => setHoveredId(null)}
            >
                <Link href="/" className="flex items-center space-x-2 pl-3 pr-2 text-primary">
                    <BookMarked className="h-7 w-7" />
                </Link>

                <div className="h-6 w-px bg-border/50"></div>

                {navItems.map((item) => (
                    <NavItem
                        key={item.id}
                        item={item}
                        isHovered={hoveredId === item.id}
                        onMouseEnter={() => setHoveredId(item.id)}
                    />
                ))}

                 <div className="h-6 w-px bg-border/50"></div>

                 {!loading && (
                    user ? (
                        <button
                            onClick={handleLogout}
                            onMouseEnter={() => setHoveredId('logout')}
                            className={cn(
                                'relative flex cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out',
                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                                'h-9 w-9 text-muted-foreground hover:bg-destructive/10 hover:text-destructive'
                            )}
                            style={{
                                width: hoveredId === 'logout' ? 'auto' : '2.25rem',
                            }}
                        >
                             <div className="flex items-center px-3">
                                <div className="shrink-0"><LogOut size={20} /></div>
                                <div
                                className="overflow-hidden transition-all duration-300 ease-in-out"
                                style={{
                                    width: hoveredId === 'logout' ? 'auto' : 0,
                                    marginLeft: hoveredId === 'logout' ? '0.5rem' : 0,
                                    opacity: hoveredId === 'logout' ? 1 : 0,
                                }}
                                >
                                <span className="whitespace-nowrap text-sm font-medium">
                                    লগ আউট
                                </span>
                                </div>
                            </div>
                        </button>
                    ) : (
                         <Link
                            href="/login"
                            onMouseEnter={() => setHoveredId('login')}
                            className={cn(
                                'relative flex cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out',
                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                                'h-9 w-9 text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                            )}
                             style={{
                                width: hoveredId === 'login' ? 'auto' : '2.25rem',
                            }}
                        >
                            <div className="flex items-center px-3">
                                <div className="shrink-0"><LogIn size={20} /></div>
                                <div
                                className="overflow-hidden transition-all duration-300 ease-in-out"
                                style={{
                                    width: hoveredId === 'login' ? 'auto' : 0,
                                    marginLeft: hoveredId === 'login' ? '0.5rem' : 0,
                                    opacity: hoveredId === 'login' ? 1 : 0,
                                }}
                                >
                                <span className="whitespace-nowrap text-sm font-medium">
                                    যোগ দিন
                                </span>
                                </div>
                            </div>
                        </Link>
                    )
                 )}
            </div>
        </div>
    </header>
  );
}


interface NavItemProps {
  item: NavItem;
  isHovered: boolean;
  onMouseEnter: () => void;
}

function NavItem({ item, isHovered, onMouseEnter }: NavItemProps) {
  return (
    <Link
      href={item.href}
      onMouseEnter={onMouseEnter}
      className={cn(
        'relative flex cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'h-9 w-9 text-muted-foreground hover:bg-accent hover:text-accent-foreground',
         isHovered && 'bg-accent text-accent-foreground'
      )}
      style={{
        width: isHovered ? 'auto' : '2.25rem',
      }}
    >
      <div className="flex items-center px-3 font-bengali">
        <div className="shrink-0">{item.icon}</div>
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            width: isHovered ? 'auto' : 0,
            marginLeft: isHovered ? '0.5rem' : 0,
            opacity: isHovered ? 1 : 0,
          }}
        >
          <span className="whitespace-nowrap text-sm font-medium">
            {item.label}
          </span>
        </div>
      </div>
    </Link>
  );
}
