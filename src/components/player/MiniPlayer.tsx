"use client";

import { useMusicPlayer } from '@/hooks/use-music-player';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Repeat1 } from 'lucide-react';
import { Slider } from '../ui/slider';
import { cn } from '@/lib/utils';

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
    return null;
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="flex items-center gap-4 p-3 border-t bg-card/80 backdrop-blur-sm">
      <div className="flex items-center gap-3 w-1/4">
        <Avatar className="h-14 w-14 rounded-md">
          <AvatarImage src={currentSong.coverArt} />
          <AvatarFallback>{currentSong.title.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold truncate">{currentSong.title}</p>
          <p className="text-sm text-muted-foreground truncate">{currentSong.artist}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-1/2">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleShuffle} className={cn(shuffle && 'text-accent')}>
            <Shuffle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={playPrev}>
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button
            variant="default"
            size="icon"
            onClick={togglePlayPause}
            className="h-12 w-12 rounded-full bg-accent hover:bg-accent/90"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={playNext}>
            <SkipForward className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleRepeat} className={cn(repeat !== 'none' && 'text-accent')}>
            {repeat === 'one' ? <Repeat1 className="h-5 w-5" /> : <Repeat className="h-5 w-5" />}
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full">
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
      <div className="w-1/4">
        {/* Volume controls can be added here */}
      </div>
    </div>
  );
}
