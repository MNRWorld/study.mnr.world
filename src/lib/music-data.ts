export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string; // "mm:ss"
  durationSeconds: number;
  src: string;
  coverArt: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
  songs: Song[];
}

export interface Artist {
  id: string;
  name: string;
  coverArt: string; // A representative image for the artist
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverArt: string;
  songs: Song[];
}

const songs: Song[] = [
  {
    id: 'song-1',
    title: 'Ambient Echoes',
    artist: 'Echoes In Rain',
    album: 'Digital Dreams',
    duration: '3:45',
    durationSeconds: 225,
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    coverArt: 'https://picsum.photos/seed/101/400/400',
  },
  {
    id: 'song-2',
    title: 'Midnight Drive',
    artist: 'Night Rider',
    album: 'City Lights',
    duration: '4:12',
    durationSeconds: 252,
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    coverArt: 'https://picsum.photos/seed/102/400/400',
  },
  {
    id: 'song-3',
    title: 'Forest Lullaby',
    artist: 'Willow Creek',
    album: 'Whispering Woods',
    duration: '2:58',
    durationSeconds: 178,
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    coverArt: 'https://picsum.photos/seed/103/400/400',
  },
  {
    id: 'song-4',
    title: 'Oceanic Pulse',
    artist: 'The Tides',
    album: 'Deep Blue',
    duration: '5:02',
    durationSeconds: 302,
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    coverArt: 'https://picsum.photos/seed/104/400/400',
  },
  {
    id: 'song-5',
    title: 'Chasing Sunsets',
    artist: 'Echoes In Rain',
    album: 'Digital Dreams',
    duration: '3:15',
    durationSeconds: 195,
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    coverArt: 'https://picsum.photos/seed/101/400/400',
  },
  {
    id: 'song-6',
    title: 'Neon Dreams',
    artist: 'Night Rider',
    album: 'City Lights',
    duration: '3:30',
    durationSeconds: 210,
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    coverArt: 'https://picsum.photos/seed/102/400/400',
  },
  {
    id: 'song-7',
    title: 'River Flow',
    artist: 'Willow Creek',
    album: 'Whispering Woods',
    duration: '4:05',
    durationSeconds: 245,
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    coverArt: 'https://picsum.photos/seed/103/400/400',
  },
  {
    id: 'song-8',
    title: 'Coral Reef',
    artist: 'The Tides',
    album: 'Deep Blue',
    duration: '3:50',
    durationSeconds: 230,
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    coverArt: 'https://picsum.photos/seed/104/400/400',
  },
];

const albums: Album[] = [
  {
    id: 'album-1',
    title: 'Digital Dreams',
    artist: 'Echoes In Rain',
    coverArt: 'https://picsum.photos/seed/101/400/400',
    songs: songs.filter((s) => s.album === 'Digital Dreams'),
  },
  {
    id: 'album-2',
    title: 'City Lights',
    artist: 'Night Rider',
    coverArt: 'https://picsum.photos/seed/102/400/400',
    songs: songs.filter((s) => s.album === 'City Lights'),
  },
  {
    id: 'album-3',
    title: 'Whispering Woods',
    artist: 'Willow Creek',
    coverArt: 'https://picsum.photos/seed/103/400/400',
    songs: songs.filter((s) => s.album === 'Whispering Woods'),
  },
  {
    id: 'album-4',
    title: 'Deep Blue',
    artist: 'The Tides',
    coverArt: 'https://picsum.photos/seed/104/400/400',
    songs: songs.filter((s) => s.album === 'Deep Blue'),
  },
  {
    id: 'album-5',
    title: 'Solar Flares',
    artist: 'Cosmic Voyager',
    coverArt: 'https://picsum.photos/seed/105/400/400',
    songs: [],
  },
];

const artists: Artist[] = [
  { id: 'artist-1', name: 'Echoes In Rain', coverArt: 'https://picsum.photos/seed/201/400/400' },
  { id: 'artist-2', name: 'Night Rider', coverArt: 'https://picsum.photos/seed/202/400/400' },
  { id: 'artist-3', name: 'Willow Creek', coverArt: 'https://picsum.photos/seed/203/400/400' },
  { id: 'artist-4', name: 'The Tides', coverArt: 'https://picsum.photos/seed/204/400/400' },
  { id: 'artist-5', name: 'Cosmic Voyager', coverArt: 'https://picsum.photos/seed/205/400/400' },
];

const playlists: Playlist[] = [
  {
    id: 'playlist-1',
    name: 'Chill Vibes',
    description: 'Relax and unwind with these calm tracks.',
    coverArt: 'https://picsum.photos/seed/301/400/400',
    songs: [songs[0], songs[2], songs[4]],
  },
  {
    id: 'playlist-2',
    name: 'Late Night Drive',
    description: 'The perfect soundtrack for a drive.',
    coverArt: 'https://picsum.photos/seed/302/400/400',
    songs: [songs[1], songs[5]],
  },
  {
    id: 'playlist-3',
    name: 'Nature Walk',
    description: 'Sounds for a walk through nature.',
    coverArt: 'https://picsum.photos/seed/303/400/400',
    songs: [songs[2], songs[6]],
  },
];

export const musicData = {
  songs,
  albums,
  artists,
  playlists,
};
