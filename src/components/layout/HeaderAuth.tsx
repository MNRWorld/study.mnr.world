'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LogIn,
  LogOut,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface AuthButtonProps {
    isHovered: boolean;
    label: string;
    icon: React.ReactNode;
    onClick?: () => void;
    isDestructive?: boolean;
}

function AuthButton({ isHovered, label, icon, onClick, isDestructive = false }: AuthButtonProps) {
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
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
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

export default function HeaderAuth() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  if (loading) {
    return <div className="w-20 h-9" />; // Placeholder to prevent layout shift
  }

  return (
    <div onMouseLeave={() => setHoveredId(null)}>
        {user ? (
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
        )}
    </div>
  );
}
