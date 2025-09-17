"use client";

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import MiniPlayer from '@/components/player/MiniPlayer';
import SongList from '@/components/library/SongList';
import AlbumGrid from '@/components/library/AlbumGrid';
import ArtistList from '@/components/library/ArtistList';
import PlaylistList from '@/components/library/PlaylistList';
import { musicData } from '@/lib/music-data';
import { Heart, ListMusic, PlayCircleIcon, Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { cn } from '@/lib/utils';

export type View = 'songs' | 'albums' | 'artists' | 'playlists' | 'search' | 'favorites';

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
        return <HomeView setActiveView={setActiveView} />;
      case 'albums':
        return <AlbumGrid albums={musicData.albums} />;
      case 'artists':
        return <ArtistList artists={musicData.artists} />;
      case 'playlists':
        return <PlaylistList playlists={musicData.playlists} />;
      case 'search':
        return <SongList songs={filteredSongs} title={`Search results for "${searchTerm}"`} />;
      case 'favorites':
        return <SongList songs={musicData.songs.slice(0,4)} title="Liked Songs" />;
      default:
        return <HomeView setActiveView={setActiveView} />;
    }
  };

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden font-sans">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <div className="flex-1 overflow-y-auto px-8 pb-8 pt-6">
          {renderView()}
        </div>
        <MiniPlayer />
      </main>
    </div>
  );
}

function HomeView({ setActiveView }: { setActiveView: (view: View) => void }) {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'New Release', 'Trending', 'Top'];
  
  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Hi, Scarlett</h1>
        </div>
        <div className="flex gap-2">
            {tabs.map(tab => (
              <Button 
                key={tab} 
                variant={activeTab === tab ? 'default' : 'secondary'} 
                size="sm"
                className={cn('rounded-full px-4', activeTab === tab ? 'bg-primary' : 'bg-card/80')}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
        </div>
      </header>

      <section>
        <h2 className="text-xl font-bold mb-4">Curated & trending</h2>
        <Card className="bg-accent/80 p-4 rounded-2xl flex gap-6 items-center">
            <CardContent className="p-0">
                <h3 className="text-lg font-bold">Discover weekly</h3>
                <p className="text-sm text-accent-foreground/80 mb-4">The original slow instrumental best playlists.</p>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="h-12 w-12 bg-black/20 rounded-full text-white"><Search className="h-5 w-5" /></Button>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="text-white"><Heart className="h-5 w-5"/></Button>
                        <Button variant="ghost" size="icon" className="text-white"><ListMusic className="h-5 w-5"/></Button>
                        <Button variant="ghost" size="icon" className="text-white">...</Button>
                    </div>
                </div>
            </CardContent>
            <Image src="https://picsum.photos/seed/weekly/200/200" width={150} height={150} alt="Discover weekly" className="rounded-lg aspect-square object-cover" />
        </Card>
      </section>

      <section>
        <div className="flex justify-between items-baseline mb-4">
          <h2 className="text-xl font-bold">Top daily playlists</h2>
          <Button variant="link" className="text-primary" onClick={() => setActiveView('playlists')}>See all</Button>
        </div>
        <div className="space-y-2">
          {musicData.playlists.slice(0, 3).map(playlist => (
            <Card key={playlist.id} className="p-3 bg-card/80 flex items-center gap-4 hover:bg-secondary transition-colors cursor-pointer">
              <Image src={playlist.coverArt} alt={playlist.name} width={48} height={48} className="rounded-md" />
              <div className="flex-1">
                <h3 className="font-semibold">{playlist.name}</h3>
                <p className="text-sm text-muted-foreground">{playlist.songs.length} Songs</p>
              </div>
              <Button variant="ghost" size="icon"><PlayCircleIcon className="h-8 w-8 text-primary" /></Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
