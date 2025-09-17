"use client";

import { useMusicPlayer } from '@/hooks/use-music-player';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Repeat1, ListMusic } from 'lucide-react';
import { Slider } from '../ui/slider';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function MiniPlayer() {
  const {
    currentSong,
    isPlaying,
    togglePlayPause,
    playNext,
    playPrev,
    progress,
    duration,
    seek,
    shuffle,
    toggleShuffle,
    repeat,
    toggleRepeat,
  } = useMusicPlayer();

  if (!currentSong) {
    return (
        <div className="flex items-center justify-center p-3 border-t bg-card/80 backdrop-blur-sm h-24">
            <p className="text-muted-foreground">No song selected</p>
        </div>
    );
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="flex items-center gap-4 p-4 border-t bg-background/80 backdrop-blur-md">
      <div className="flex items-center gap-3 w-1/4">
        <Image src={currentSong.coverArt} alt={currentSong.title} width={56} height={56} className="rounded-md"/>
        <div>
          <p className="font-semibold truncate">{currentSong.title}</p>
          <p className="text-sm text-muted-foreground truncate">{currentSong.artist}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 flex-1">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleShuffle} className={cn('text-muted-foreground hover:text-foreground', shuffle && 'text-primary')}>
            <Shuffle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={playPrev} className="text-muted-foreground hover:text-foreground">
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button
            variant="default"
            size="icon"
            onClick={togglePlayPause}
            className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90"
          >
            {isPlaying ? <Pause className="h-6 w-6 fill-black text-black" /> : <Play className="h-6 w-6 fill-black text-black" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={playNext} className="text-muted-foreground hover:text-foreground">
            <SkipForward className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleRepeat} className={cn('text-muted-foreground hover:text-foreground', repeat !== 'none' && 'text-primary')}>
            {repeat === 'one' ? <Repeat1 className="h-5 w-5" /> : <Repeat className="h-5 w-5" />}
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-xs text-muted-foreground">{formatTime(progress)}</span>
          <Slider
            value={[progress]}
            max={duration}
            step={1}
            onValueChange={(value) => seek(value[0])}
            className="w-full"
          />
          <span className="text-xs text-muted-foreground">{formatTime(duration)}</span>
        </div>
      </div>
      <div className="w-1/4 flex justify-end">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <ListMusic className="h-5 w-5" />
        </Button>
        {/* Volume controls can be added here */}
      </div>
    </div>
  );
}