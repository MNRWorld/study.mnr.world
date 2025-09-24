
'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Home, Bell, Settings, HelpCircle, Shield } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={20} />, href: '#' },
  { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />, href: '#' },
  { id: 'settings', label: 'Settings', icon: <Settings size={20} />, href: '#' },
  { id: 'help', label: 'Help', icon: <HelpCircle size={20} />, href: '#' },
  { id: 'privacy', label: 'Privacy', icon: <Shield size={20} />, href: '#' },
];

export function FloatingNavBar() {
  const [activeId, setActiveId] = useState('settings');

  return (
    <div className="relative">
      <div
        className={cn(
          'flex items-center gap-x-1 rounded-full border border-border bg-card p-1.5 shadow-lg transition-all duration-300'
        )}
      >
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            isActive={activeId === item.id}
            onClick={() => setActiveId(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

interface NavItemProps {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}

function NavItem({ item, isActive, onClick }: NavItemProps) {
  return (
    <a
      href={item.href}
      onClick={onClick}
      className={cn(
        'relative flex cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        {
          'h-9 w-9 text-muted-foreground hover:bg-accent hover:text-accent-foreground': !isActive,
          'h-9 bg-accent text-accent-foreground shadow-inner': isActive,
        }
      )}
      style={{
        width: isActive ? 'auto' : '2.25rem',
      }}
    >
      <div className="flex items-center px-3">
        <div className="shrink-0">{item.icon}</div>
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            width: isActive ? 'auto' : 0,
            marginLeft: isActive ? '0.5rem' : 0,
            opacity: isActive ? 1 : 0,
          }}
        >
          <span className="whitespace-nowrap text-sm font-medium">
            {item.label}
          </span>
        </div>
      </div>
    </a>
  );
}
