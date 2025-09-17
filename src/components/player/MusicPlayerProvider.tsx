"use client";

import React, { createContext, useState, useRef, useEffect, useCallback, ReactNode } from 'react';
import type { Song } from '@/lib/music-data';

type RepeatMode = 'none' | 'all' | 'one';

interface MusicPlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number;
  duration: number;
  shuffle: boolean;
  repeat: RepeatMode;
  playSong: (songs: Song[], index: number) => void;
  togglePlayPause: () => void;
  playNext: () => void;
  playPrev: () => void;
  seek: (time: number) => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
}

export const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [shuffledPlaylist, setShuffledPlaylist] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState<RepeatMode>('none');
  
  const currentSong = shuffle ? shuffledPlaylist[currentSongIndex] : playlist[currentSongIndex];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio();
      const audio = audioRef.current;

      const handleTimeUpdate = () => setProgress(audio.currentTime);
      const handleLoadedMetadata = () => setDuration(audio.duration);
      const handleEnded = () => playNext();

      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('ended', handleEnded);

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  const playSong = useCallback((songs: Song[], index: number) => {
    setPlaylist(songs);
    setCurrentSongIndex(index);
    setIsPlaying(true);
  }, []);
  
  useEffect(() => {
    if (shuffle) {
      const current = playlist[currentSongIndex];
      const remaining = playlist.filter((_, i) => i !== currentSongIndex);
      const shuffled = remaining.sort(() => Math.random() - 0.5);
      setShuffledPlaylist([current, ...shuffled]);
      setCurrentSongIndex(0);
    } else {
        const current = shuffledPlaylist[currentSongIndex];
        const originalIndex = playlist.findIndex(song => song.id === current?.id);
        setCurrentSongIndex(originalIndex > -1 ? originalIndex : 0);
    }
  }, [shuffle, playlist]);


  useEffect(() => {
    if (audioRef.current && currentSong) {
      if (audioRef.current.src !== currentSong.src) {
        audioRef.current.src = currentSong.src;
      }
      if (isPlaying) {
        audioRef.current.play().catch(error => console.error("Error playing audio:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentSong?.src, isPlaying]);
  

  const togglePlayPause = useCallback(() => {
    if (currentSong) {
      setIsPlaying(prev => !prev);
    }
  }, [currentSong]);

  const playNext = useCallback(() => {
    const currentPlaylist = shuffle ? shuffledPlaylist : playlist;
    if (repeat === 'one') {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      return;
    }
    
    const nextIndex = currentSongIndex + 1;
    if (nextIndex < currentPlaylist.length) {
      setCurrentSongIndex(nextIndex);
    } else if (repeat === 'all') {
      setCurrentSongIndex(0);
    } else {
      setIsPlaying(false);
    }
  }, [currentSongIndex, playlist, shuffledPlaylist, shuffle, repeat]);

  const playPrev = useCallback(() => {
    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      return;
    }
    const prevIndex = currentSongIndex - 1;
    if (prevIndex >= 0) {
      setCurrentSongIndex(prevIndex);
    }
  }, [currentSongIndex]);

  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setProgress(time);
    }
  }, []);
  
  const toggleShuffle = useCallback(() => setShuffle(prev => !prev), []);
  
  const toggleRepeat = useCallback(() => {
    setRepeat(prev => {
        if (prev === 'none') return 'all';
        if (prev === 'all') return 'one';
        return 'none';
    })
  }, []);

  const value = {
    currentSong,
    isPlaying,
    progress,
    duration,
    shuffle,
    repeat,
    playSong,
    togglePlayPause,
    playNext,
    playPrev,
    seek,
    toggleShuffle,
    toggleRepeat,
  };

  return <MusicPlayerContext.Provider value={value}>{children}</MusicPlayerContext.Provider>;
}
