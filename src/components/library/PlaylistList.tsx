"use client";

import { Card, CardContent } from '@/components/ui/card';
import { type Playlist } from '@/lib/music-data';
import Image from 'next/image';
import { useMusicPlayer } from '@/hooks/use-music-player';

interface PlaylistListProps {
  playlists: Playlist[];
}

export default function PlaylistList({ playlists }: PlaylistListProps) {
    const musicPlayer = useMusicPlayer();

  const handlePlayPlaylist = (playlist: Playlist) => {
    if (playlist.songs.length > 0) {
      musicPlayer.playSong(playlist.songs, 0);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold font-headline mb-4">Playlists</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="group cursor-pointer" onClick={() => handlePlayPlaylist(playlist)}>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-0">
                <Image
                  src={playlist.coverArt}
                  alt={`Cover for ${playlist.name}`}
                  width={400}
                  height={400}
                  className="aspect-square object-cover w-full h-full"
                  data-ai-hint="playlist cover"
                />
              </CardContent>
            </Card>
            <div className="mt-2">
              <h3 className="font-semibold text-sm truncate group-hover:text-primary">{playlist.name}</h3>
              <p className="text-xs text-muted-foreground truncate">{playlist.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
