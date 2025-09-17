import { type Artist } from '@/lib/music-data';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface ArtistListProps {
  artists: Artist[];
}

export default function ArtistList({ artists }: ArtistListProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold font-headline mb-4">Artists</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
        {artists.map((artist) => (
          <div key={artist.id} className="flex flex-col items-center gap-2 group cursor-pointer">
            <Avatar className="h-32 w-32 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
              <AvatarImage src={artist.coverArt} alt={artist.name} data-ai-hint="artist portrait" />
              <AvatarFallback>{artist.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h3 className="font-medium text-sm text-center group-hover:text-primary">{artist.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
