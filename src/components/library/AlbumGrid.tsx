"use client";

import { Card, CardContent } from '@/components/ui/card';
import { type Album } from '@/lib/music-data';
import Image from 'next/image';
import { useMusicPlayer } from '@/hooks/use-music-player';

interface AlbumGridProps {
  albums: Album[];
}

export default function AlbumGrid({ albums }: AlbumGridProps) {
  const musicPlayer = useMusicPlayer();

  const handlePlayAlbum = (album: Album) => {
    if (album.songs.length > 0) {
      musicPlayer.playSong(album.songs, 0);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold font-headline mb-4">Albums</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
        {albums.map((album) => (
          <div
            key={album.id}
            className="group cursor-pointer"
            onClick={() => handlePlayAlbum(album)}
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-0">
                <Image
                  src={album.coverArt}
                  alt={`Cover for ${album.title}`}
                  width={400}
                  height={400}
                  className="aspect-square object-cover w-full h-full"
                  data-ai-hint="album cover"
                />
              </CardContent>
            </Card>
            <div className="mt-2">
              <h3 className="font-semibold text-sm truncate group-hover:text-primary">{album.title}</h3>
              <p className="text-xs text-muted-foreground truncate">{album.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
