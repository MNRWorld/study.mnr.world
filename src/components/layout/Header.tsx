
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
import { AnimatePresence, motion } from 'framer-motion';

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
                    <div onMouseEnter={() => setHoveredId('logout')}>
                    <AuthButton
                        isHovered={hoveredId === 'logout'}
                        onClick={handleLogout}
                        label="লগ আউট"
                        icon={<LogOut size={20} />}
                        isDestructive
                    />
                    </div>
                ) : (
                    <Link href="/login" onMouseEnter={() => setHoveredId('login')}>
                    <AuthButton
                        isHovered={hoveredId === 'login'}
                        label="যোগ দিন"
                        icon={<LogIn size={20} />}
                    />
                    </Link>
                )
             )}
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
        'relative flex cursor-pointer items-center justify-center rounded-full transition-colors duration-300',
        'h-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        isHovered ? 'text-accent-foreground' : 'text-muted-foreground',
        'px-3 font-bengali'
      )}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            layoutId="nav-hover-bg"
            className="absolute inset-0 rounded-full bg-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-10 flex items-center">
        <div className="shrink-0">{item.icon}</div>
        <motion.div
          className="overflow-hidden"
          animate={{ width: isHovered ? 'auto' : 0, marginLeft: isHovered ? '0.5rem' : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <span className="whitespace-nowrap text-sm font-medium">
            {item.label}
          </span>
        </motion.div>
      </div>
    </Link>
  );
}

interface AuthButtonProps {
    isHovered: boolean;
    label: string;
    icon: React.ReactNode;
    onClick?: () => void;
    isDestructive?: boolean;
}

function AuthButton({ isHovered, label, icon, onClick, isDestructive=false }: AuthButtonProps) {
    const hoverClasses = isDestructive ? 'hover:bg-destructive/10 hover:text-destructive' : 'hover:bg-accent hover:text-accent-foreground';
    const activeClasses = isDestructive ? 'bg-destructive/10 text-destructive' : 'bg-accent text-accent-foreground';

    return (
         <button
            onClick={onClick}
            className={cn(
                'relative flex cursor-pointer items-center justify-center rounded-full transition-colors duration-300',
                'h-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                isHovered ? activeClasses : 'text-muted-foreground',
                'px-3'
            )}
        >
             <AnimatePresence>
                {isHovered && (
                <motion.div
                    layoutId="auth-hover-bg"
                    className={cn("absolute inset-0 rounded-full", isDestructive ? 'bg-destructive/10' : 'bg-accent')}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
                )}
            </AnimatePresence>
             <div className="relative z-10 flex items-center">
                <div className="shrink-0">{icon}</div>
                 <motion.div
                    className="overflow-hidden"
                    animate={{ width: isHovered ? 'auto' : 0, marginLeft: isHovered ? '0.5rem' : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <span className="whitespace-nowrap text-sm font-medium">
                        {label}
                    </span>
                </motion.div>
            </div>
        </button>
    )
}
