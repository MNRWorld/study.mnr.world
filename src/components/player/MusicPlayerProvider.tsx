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
    // Don't set isPlaying to true here, let the useEffect handle it.
  }, []);
  
  useEffect(() => {
    if (!playlist || playlist.length === 0) return;
  
    let songsToShuffle = [...playlist];
    let newCurrentSongIndex = currentSongIndex;
  
    if (shuffle) {
      const currentSongBeforeShuffle = playlist[currentSongIndex];
      // Filter out the current song, shuffle the rest
      const remainingSongs = songsToShuffle.filter((_, i) => i !== currentSongIndex);
      const shuffled = remainingSongs.sort(() => Math.random() - 0.5);
      
      // The new playlist is the current song, then the shuffled rest.
      const newShuffledPlaylist = currentSongBeforeShuffle ? [currentSongBeforeShuffle, ...shuffled] : [...shuffled];
      setShuffledPlaylist(newShuffledPlaylist);
      newCurrentSongIndex = 0; // Current song is now at the start of the shuffled list.
    } else {
      // When turning shuffle off, find the original index of the currently playing song
      const currentSongFromShuffled = shuffledPlaylist[currentSongIndex];
      const originalIndex = playlist.findIndex(song => song.id === currentSongFromShuffled?.id);
      newCurrentSongIndex = originalIndex > -1 ? originalIndex : 0;
    }
    setCurrentSongIndex(newCurrentSongIndex);
  
  }, [shuffle, playlist]);


  useEffect(() => {
    const songToPlay = shuffle ? shuffledPlaylist[currentSongIndex] : playlist[currentSongIndex];
    if (audioRef.current && songToPlay) {
      if (audioRef.current.src !== songToPlay.src) {
        audioRef.current.src = songToPlay.src;
        // Reset progress for new song
        setProgress(0);
      }
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          setIsPlaying(true);
        })
        .catch(error => {
          console.error("Error playing audio:", error)
          setIsPlaying(false);
        });
      }
    }
  }, [currentSongIndex, playlist, shuffledPlaylist, shuffle]);
  

  const togglePlayPause = useCallback(() => {
    if (audioRef.current && currentSong) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(_ => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.error("Error playing audio:", error);
            setIsPlaying(false);
          });
        }
      }
    }
  }, [currentSong, isPlaying]);

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
