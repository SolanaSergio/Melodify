export interface RadioStation {
  id: string;
  name: string;
  genre: string;
  description: string;
  streamUrl: string;
  logoUrl: string;
  color: string; // For theme-matching gradients
  secondaryColor: string; // For gradient effect
  listeners: number;
  location: string;
}

// Real radio stations with free streaming URLs
export const radioStations: RadioStation[] = [
  {
    id: "1",
    name: "Smooth Jazz",
    genre: "Jazz",
    description: "Relaxing smooth jazz for your enjoyment",
    streamUrl: "https://strm112.1.fm/smoothjazz_mobile_mp3",
    logoUrl: "",
    color: "from-blue-400",
    secondaryColor: "to-purple-500",
    listeners: 1245,
    location: "Global"
  },
  {
    id: "2",
    name: "Classic Rock",
    genre: "Rock",
    description: "The best classic rock hits from the 70s and 80s",
    streamUrl: "https://strm112.1.fm/classicrock_mobile_mp3",
    logoUrl: "",
    color: "from-red-500",
    secondaryColor: "to-orange-400",
    listeners: 2567,
    location: "USA"
  },
  {
    id: "3",
    name: "Chillout Lounge",
    genre: "Electronic",
    description: "Ambient and downtempo electronic music",
    streamUrl: "https://strm112.1.fm/chilloutlounge_mobile_mp3",
    logoUrl: "",
    color: "from-teal-400",
    secondaryColor: "to-emerald-500",
    listeners: 1823,
    location: "Europe"
  },
  {
    id: "4",
    name: "Top 40",
    genre: "Pop",
    description: "Today's best pop music hits",
    streamUrl: "https://strm112.1.fm/top40_mobile_mp3",
    logoUrl: "",
    color: "from-pink-400",
    secondaryColor: "to-purple-400",
    listeners: 3421,
    location: "Global"
  },
  {
    id: "5",
    name: "Classical",
    genre: "Classical",
    description: "Soothing classical music masterpieces",
    streamUrl: "https://strm112.1.fm/classical_mobile_mp3",
    logoUrl: "",
    color: "from-amber-400",
    secondaryColor: "to-yellow-300",
    listeners: 987,
    location: "Europe"
  },
  {
    id: "6",
    name: "Blues",
    genre: "Blues",
    description: "Authentic blues music from past and present",
    streamUrl: "https://strm112.1.fm/blues_mobile_mp3",
    logoUrl: "",
    color: "from-indigo-500",
    secondaryColor: "to-blue-600",
    listeners: 765,
    location: "USA"
  },
  {
    id: "7",
    name: "Country",
    genre: "Country",
    description: "The best in country music, new and classic",
    streamUrl: "https://strm112.1.fm/country_mobile_mp3",
    logoUrl: "",
    color: "from-amber-500",
    secondaryColor: "to-yellow-400",
    listeners: 1432,
    location: "USA"
  },
  {
    id: "8",
    name: "Club Dance",
    genre: "Dance",
    description: "Upbeat dance music to get you moving",
    streamUrl: "https://strm112.1.fm/club_mobile_mp3",
    logoUrl: "",
    color: "from-violet-500",
    secondaryColor: "to-purple-400",
    listeners: 2876,
    location: "Global"
  },
  {
    id: "9",
    name: "Reggae",
    genre: "Reggae",
    description: "Authentic reggae music from Jamaica and beyond",
    streamUrl: "https://strm112.1.fm/reggae_mobile_mp3",
    logoUrl: "",
    color: "from-green-500",
    secondaryColor: "to-yellow-400",
    listeners: 1567,
    location: "Caribbean"
  },
  {
    id: "10",
    name: "Trance",
    genre: "Electronic",
    description: "Hypnotic electronic dance music",
    streamUrl: "https://strm112.1.fm/trance_mobile_mp3",
    logoUrl: "",
    color: "from-indigo-400",
    secondaryColor: "to-purple-600",
    listeners: 2134,
    location: "Europe"
  },
  {
    id: "11",
    name: "Disco",
    genre: "Disco",
    description: "Classic disco hits from the 70s and 80s",
    streamUrl: "https://strm112.1.fm/disco_mobile_mp3",
    logoUrl: "",
    color: "from-pink-500",
    secondaryColor: "to-purple-500",
    listeners: 1876,
    location: "Global"
  },
  {
    id: "12",
    name: "Adore Jazz",
    genre: "Jazz",
    description: "Smooth and contemporary jazz",
    streamUrl: "https://strm112.1.fm/ajazz_mobile_mp3",
    logoUrl: "",
    color: "from-blue-500",
    secondaryColor: "to-indigo-600",
    listeners: 1243,
    location: "USA"
  },
  {
    id: "13",
    name: "Absolute 70s",
    genre: "70s",
    description: "The best hits from the 1970s",
    streamUrl: "https://strm112.1.fm/70s_mobile_mp3",
    logoUrl: "",
    color: "from-orange-400",
    secondaryColor: "to-amber-500",
    listeners: 1654,
    location: "Global"
  },
  {
    id: "14",
    name: "Absolute 80s",
    genre: "80s",
    description: "The best hits from the 1980s",
    streamUrl: "https://strm112.1.fm/80s_mobile_mp3",
    logoUrl: "",
    color: "from-purple-400",
    secondaryColor: "to-pink-500",
    listeners: 1987,
    location: "Global"
  },
  {
    id: "15",
    name: "Absolute 90s",
    genre: "90s",
    description: "The best hits from the 1990s",
    streamUrl: "https://strm112.1.fm/90s_mobile_mp3",
    logoUrl: "",
    color: "from-teal-400",
    secondaryColor: "to-blue-500",
    listeners: 2134,
    location: "Global"
  },
  {
    id: "16",
    name: "Ambient",
    genre: "Ambient",
    description: "Relaxing ambient music for focus and meditation",
    streamUrl: "https://strm112.1.fm/ambient_mobile_mp3",
    logoUrl: "",
    color: "from-blue-300",
    secondaryColor: "to-indigo-400",
    listeners: 1432,
    location: "Global"
  }
];

// Get radio stations by genre
export function getRadioStationsByGenre(genre: string): RadioStation[] {
  return radioStations.filter(station => station.genre.toLowerCase() === genre.toLowerCase());
}

// Get all unique genres
export function getAllGenres(): string[] {
  const genres = new Set(radioStations.map(station => station.genre));
  return Array.from(genres);
}

// Get radio station by ID
export function getRadioStationById(id: string): RadioStation | undefined {
  return radioStations.find(station => station.id === id);
}
