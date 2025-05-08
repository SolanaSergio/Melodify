import Image from "next/image";
import Link from "next/link";
import { BarChart3, Music, Mic, Headphones, ChevronRight, Radio, Wifi } from "lucide-react";

import { MainLayout } from "@/components/main-layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { RadioStationCard } from "@/components/radio-station-card";
import { radioStations } from "@/data/radio-stations";

export default function Home() {
  return (
    <MainLayout>
      <div className="container py-6 space-y-8">
        {/* Hero section with gradient */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-secondary to-accent p-6 text-white">
          <div className="relative z-10 max-w-lg">
            <Badge className="mb-4 bg-white/20 hover:bg-white/40 text-white">New release</Badge>
            <h1 className="heading-1 mb-2">Discover New Music</h1>
            <p className="mb-6 text-white/80">
              Listen to the latest releases, playlists curated just for you, and your favorite artists.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="default" className="bg-white/90 text-primary font-medium hover:bg-white shadow-md">
                Start Listening
              </Button>
              <Button variant="outline" className="bg-white/30 backdrop-blur-sm border-white text-white font-medium hover:bg-white/50 shadow-sm">
                Browse Categories
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-10 h-60 w-60 rounded-full bg-primary/30 blur-3xl" />
        </div>

        {/* Featured playlists */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="heading-2">Featured Playlists</h2>
            <Button variant="ghost" className="gap-1">
              View all <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {[...Array(8)].map((_, i) => (
                <Card key={i} className="min-w-[160px] sm:min-w-[180px] md:min-w-[220px] card-hover">
                  <CardContent className="p-3 sm:p-4">
                    <AspectRatio ratio={1 / 1} className="relative mb-3 bg-muted overflow-hidden rounded-md">
                      <div className={`absolute inset-0 bg-gradient-to-br ${i % 4 === 0 ? 'from-primary/40 to-accent/40' : i % 4 === 1 ? 'from-secondary/40 to-primary/40' : i % 4 === 2 ? 'from-accent/40 to-secondary/40' : 'from-muted/40 to-accent/30'}`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Music className="h-10 w-10 md:h-12 md:w-12 text-background/80" />
                      </div>
                    </AspectRatio>
                    <h3 className="font-semibold line-clamp-1 text-sm sm:text-base">
                      {["Chill Vibes", "Workout Mix", "Focus Flow", "Party Starters", "Indie Discoveries", "Classic Hits", "Mood Boosters", "Study Beats"][i]}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                      The perfect playlist for {["relaxing and unwinding", "your exercise routine", "deep concentration", "your next gathering", "finding new artists", "nostalgic moments", "lifting your spirits", "productive study sessions"][i]}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        {/* Popular artists */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="heading-2">Popular Artists</h2>
            <Button variant="ghost" className="gap-1">
              View all <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {[...Array(8)].map((_, i) => (
                <Card key={i} className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] card-hover bg-card">
                  <CardContent className="p-3 sm:p-4 flex flex-col items-center text-center">
                    <AspectRatio ratio={1 / 1} className="relative w-full mb-3 overflow-hidden rounded-full">
                      <div className={`absolute inset-0 bg-gradient-to-br ${i % 4 === 0 ? 'from-primary/40 to-accent/40' : i % 4 === 1 ? 'from-secondary/40 to-primary/40' : i % 4 === 2 ? 'from-accent/40 to-secondary/40' : 'from-muted/40 to-accent/30'}`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Mic className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-background/80" />
                      </div>
                    </AspectRatio>
                    <h3 className="font-semibold line-clamp-1 text-sm sm:text-base">
                      {["Artist One", "Artist Two", "Artist Three", "Artist Four", "Artist Five", "Artist Six", "Artist Seven", "Artist Eight"][i]}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">Artist</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        {/* Recent releases */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="heading-2">Recent Releases</h2>
            <Button variant="ghost" className="gap-1">
              View all <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="card-hover">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex gap-2 sm:gap-3">
                    <AspectRatio ratio={1 / 1} className="relative h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <div className={`absolute inset-0 bg-gradient-to-br ${i % 4 === 0 ? 'from-primary/40 to-accent/40' : i % 4 === 1 ? 'from-secondary/40 to-primary/40' : i % 4 === 2 ? 'from-accent/40 to-secondary/40' : 'from-muted/40 to-accent/30'}`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Headphones className="h-5 w-5 sm:h-6 sm:w-6 text-background/80" />
                      </div>
                    </AspectRatio>

                    <div>
                      <h3 className="font-semibold line-clamp-1 text-sm sm:text-base">
                        {["Harmony", "Echoes", "Rhythms", "Melodies"][i]}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                        {["Artist One", "Artist Two", "Artist Three", "Artist Four"][i]}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <Badge variant="outline" className="text-[10px] h-4 rounded-sm">
                          Album
                        </Badge>
                        <span className="text-xs text-muted-foreground">• March 2025</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Live Radio Stations */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="heading-2">Live Radio</h2>
              <Badge variant="outline" className="text-xs rounded-sm animate-pulse">
                <Wifi className="h-3 w-3 mr-1" /> LIVE
              </Badge>
            </div>
            <Button variant="ghost" className="gap-1" asChild>
              <Link href="/radio">
                View all <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
            {/* Featured Radio Stations */}
            {radioStations.filter(s => ["Jazz", "Electronic", "Rock"].includes(s.genre)).slice(0, 3).map((station) => (
              <RadioStationCard key={station.id} station={station} />
            ))}
          </div>

          <ScrollArea className="border rounded-xl p-4 bg-card/50">
            <div className="flex space-x-4 pb-4">
              {radioStations.slice(0, 10).map((station) => (
                <div key={station.id} className="min-w-[280px]">
                  <RadioStationCard station={station} variant="compact" />
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        {/* Charts */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="heading-2">Charts</h2>
            <Button variant="ghost" className="gap-1">
              View all <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="card-hover">
                <CardHeader className="p-3 sm:p-6">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    {["Top 50 Global", "Trending Now", "New Releases"][i]}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-3 sm:px-6 pb-3 sm:pb-6">
                  <ul className="space-y-2">
                    {[...Array(5)].map((_, j) => (
                      <li key={j} className="flex items-center gap-2 sm:gap-3">
                        <span className="text-lg sm:text-xl font-bold text-muted-foreground w-4 sm:w-5">
                          {j + 1}
                        </span>
                        <AspectRatio ratio={1 / 1} className="relative h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 overflow-hidden rounded-md">
                          <div className={`absolute inset-0 bg-gradient-to-br ${(i + j) % 4 === 0 ? 'from-primary/40 to-accent/40' : (i + j) % 4 === 1 ? 'from-secondary/40 to-primary/40' : (i + j) % 4 === 2 ? 'from-accent/40 to-secondary/40' : 'from-muted/40 to-accent/30'}`} />
                        </AspectRatio>
                        <div className="min-w-0">
                          <p className="font-medium text-xs sm:text-sm truncate">Song Title {j + 1}</p>
                          <p className="text-xs text-muted-foreground truncate">Artist {j + 1}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-3 sm:px-6 pb-3 sm:pb-6 pt-0">
                  <Button variant="outline" size="sm" className="w-full">
                    See Full Chart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
