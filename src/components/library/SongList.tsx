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
      <h2 className="text-2xl font-semibold font-headline mb-4">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12"></TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Album</TableHead>
            <TableHead className="text-right">
                <Clock className="inline-block h-4 w-4" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {songs.map((song, index) => {
            const isActive = musicPlayer.currentSong?.id === song.id;
            return (
              <TableRow
                key={song.id}
                onClick={() => musicPlayer.playSong(songs, index)}
                className={cn(
                  "group cursor-pointer",
                  isActive && 'bg-primary/10 hover:bg-primary/20'
                )}
              >
                <TableCell className="relative">
                    <Image src={song.coverArt} alt={song.title} width={40} height={40} className="rounded-md" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <PlayCircle className="h-6 w-6 text-white" />
                    </div>
                </TableCell>
                <TableCell>
                  <div className={cn("font-medium", isActive && "text-primary")}>{song.title}</div>
                  <div className="text-sm text-muted-foreground">{song.artist}</div>
                </TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">{song.album}</TableCell>
                <TableCell className="text-right text-muted-foreground">{song.duration}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
