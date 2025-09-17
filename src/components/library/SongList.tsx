"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { type Song } from '@/lib/music-data';
import { useMusicPlayer } from '@/hooks/use-music-player';
import { Clock, PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface SongListProps {
  songs: Song[];
  title: string;
}

export default function SongList({ songs, title }: SongListProps) {
  const musicPlayer = useMusicPlayer();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="space-y-2">
        {songs.map((song, index) => {
          const isActive = musicPlayer.currentSong?.id === song.id;
          return (
            <div
              key={song.id}
              onClick={() => musicPlayer.playSong(songs, index)}
              className={cn(
                "group cursor-pointer p-2 md:p-3 flex items-center gap-4 rounded-lg",
                isActive ? 'bg-primary/20' : 'hover:bg-secondary'
              )}
            >
              <div className="relative">
                  <Image src={song.coverArt} alt={song.title} width={48} height={48} className="rounded-md" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                      <PlayCircle className="h-6 w-6 text-white" />
                  </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className={cn("font-semibold truncate", isActive && "text-primary")}>{song.title}</div>
                <div className="text-sm text-muted-foreground truncate">{song.artist}</div>
              </div>
              <div className="text-sm text-muted-foreground hidden lg:block flex-shrink-0">{song.album}</div>
              <div className="text-sm text-muted-foreground flex-shrink-0">{song.duration}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
