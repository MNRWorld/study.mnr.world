"use client";

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import MiniPlayer from '@/components/player/MiniPlayer';
import SongList from '@/components/library/SongList';
import AlbumGrid from '@/components/library/AlbumGrid';
import ArtistList from '@/components/library/ArtistList';
import PlaylistList from '@/components/library/PlaylistList';
import { musicData } from '@/lib/music-data';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

export type View = 'songs' | 'albums' | 'artists' | 'playlists' | 'search';

export default function StreamFlowApp() {
  const [activeView, setActiveView] = useState<View>('songs');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSongs = musicData.songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.album.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderView = () => {
    switch (activeView) {
      case 'songs':
        return <SongList songs={musicData.songs} title="All Songs" />;
      case 'albums':
        return <AlbumGrid albums={musicData.albums} />;
      case 'artists':
        return <ArtistList artists={musicData.artists} />;
      case 'playlists':
        return <PlaylistList playlists={musicData.playlists} />;
      case 'search':
        return <SongList songs={filteredSongs} title={`Search results for "${searchTerm}"`} />;
      default:
        return <SongList songs={musicData.songs} title="All Songs" />;
    }
  };

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <header className="flex items-center gap-4 px-6 pt-6 pb-2 shrink-0">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for songs, albums, artists..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setActiveView('search');
                if (e.target.value === '') {
                  setActiveView('songs');
                }
              }}
            />
          </div>
        </header>
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {renderView()}
        </div>
        <MiniPlayer />
      </main>
    </div>
  );
}
