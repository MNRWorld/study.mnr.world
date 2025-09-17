"use client";

import { cn } from '@/lib/utils';
import { Disc, Home, ListMusic, Music, User } from 'lucide-react';
import type { View } from '../StreamFlowApp';
import { musicData } from '@/lib/music-data';

interface SidebarProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

export default function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const navItems = [
    { id: 'songs', label: 'Songs', icon: Music },
    { id: 'albums', label: 'Albums', icon: Disc },
    { id: 'artists', label: 'Artists', icon: User },
    { id: 'playlists', label: 'Playlists', icon: ListMusic },
  ];

  return (
    <aside className="w-60 shrink-0 border-r border-border/50 bg-card/60 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold font-headline text-accent flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7"
          >
            <path d="M2 17s.34-2.18 2.39-3.39" />
            <path d="M22 17s-.34-2.18-2.39-3.39" />
            <path d="M2 7s.34 2.18 2.39 3.39" />
            <path d="M22 7s-.34 2.18-2.39 3.39" />
            <path d="M12 2v20" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10" />
            <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2" />
          </svg>
          StreamFlow
        </h1>
      </div>
      <nav className="flex-1 px-4">
        <h2 className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Library</h2>
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveView(item.id as View)}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  activeView === item.id
                    ? 'bg-primary/20 text-primary-foreground'
                    : 'text-foreground/70 hover:bg-primary/10 hover:text-foreground'
                )}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
        <h2 className="px-2 mt-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Playlists</h2>
        <ul className="space-y-1">
          {musicData.playlists.map((playlist) => (
             <li key={playlist.id}>
              <button
                // onClick={() => setActiveView(playlist.id as View)}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors text-foreground/70 hover:bg-primary/10 hover:text-foreground'
                )}
              >
                <ListMusic className="w-4 h-4" />
                <span className="truncate">{playlist.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
