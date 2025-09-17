"use client";

import { cn } from '@/lib/utils';
import { Disc, Home, ListMusic, Music, Music2, User, Mic2, Heart, Search, Library, Settings } from 'lucide-react';
import type { View } from '../StreamFlowApp';
import { musicData } from '@/lib/music-data';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';

interface SidebarProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

export default function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const navItems = [
    { id: 'songs', label: 'Home', icon: Home },
    { id: 'search', label: 'Browse', icon: Search },
    { id: 'albums', label: 'Albums', icon: Disc },
    { id: 'artists', label: 'Artists', icon: Mic2 },
  ];
  
  const libraryItems = [
    {id: 'playlists', label: 'Playlists', icon: Library},
    {id: 'favorites', label: 'Liked Songs', icon: Heart}
  ]

  return (
    <aside className="w-72 shrink-0 bg-card/60 flex flex-col p-4 gap-6 h-full">
       <div className="flex items-center justify-between p-2">
         <div className="flex items-center gap-2">
            <Avatar className="h-10 w-10">
                <AvatarImage src="https://picsum.photos/seed/scarlett/100/100" />
                <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <div>
                <p className="text-sm text-muted-foreground">Welcome back,</p>
                <h2 className="text-lg font-bold">Scarlett</h2>
            </div>
        </div>
        <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon"><Search className="h-5 w-5"/></Button>
            <Button variant="ghost" size="icon"><Heart className="h-5 w-5"/></Button>
        </div>
       </div>

      <nav className="flex flex-col gap-6">
        <div>
            <h2 className="px-3 text-sm font-semibold text-muted-foreground mb-2">Discover</h2>
            <ul className="space-y-1">
            {navItems.map((item) => (
                <li key={item.id}>
                <button
                    onClick={() => setActiveView(item.id as View)}
                    className={cn(
                    'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-md font-medium transition-colors',
                    activeView === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground/80 hover:bg-primary/20 hover:text-foreground'
                    )}
                >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                </button>
                </li>
            ))}
            </ul>
        </div>
        
        <div>
            <h2 className="px-3 text-sm font-semibold text-muted-foreground mb-2">My Library</h2>
            <ul className="space-y-1">
            {libraryItems.map((item) => (
                <li key={item.id}>
                <button
                    onClick={() => setActiveView(item.id as View)}
                    className={cn(
                    'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-md font-medium transition-colors',
                     activeView === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground/80 hover:bg-primary/20 hover:text-foreground'
                    )}
                >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                </button>
                </li>
            ))}
            </ul>
        </div>

      </nav>

      <div className="mt-auto">
        <button
            className={cn(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-md font-medium transition-colors text-foreground/80 hover:bg-primary/20 hover:text-foreground'
            )}
            >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
        </button>
      </div>

    </aside>
  );
}
