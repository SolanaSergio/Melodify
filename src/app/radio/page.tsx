"use client";

import { useState } from "react";
import { Radio as RadioIcon, Wifi, Globe, Users, Music } from "lucide-react";

import { MainLayout } from "@/components/main-layout";
import { RadioStationCard } from "@/components/radio-station-card";
import { radioStations, getAllGenres } from "@/data/radio-stations";
import { useRadioStore } from "@/services/radio-service";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RadioPage() {
  const [activeGenre, setActiveGenre] = useState<string | null>(null);
  const { playStation } = useRadioStore();
  const genres = getAllGenres();

  const filteredStations = activeGenre
    ? radioStations.filter(station => station.genre === activeGenre)
    : radioStations;

  return (
    <MainLayout>
      <div className="container py-6 space-y-8">
        {/* Hero section */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-secondary to-accent p-6 text-white">
          <div className="relative z-10 max-w-lg">
            <Badge className="mb-4 bg-white/20 hover:bg-white/40 text-white">
              <Wifi className="h-3 w-3 mr-1" /> LIVE
            </Badge>
            <h1 className="heading-1 mb-2">Live Radio Stations</h1>
            <p className="mb-6 text-white/80">
              Stream free radio stations from around the world. Discover new music, news, talk shows, and more.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="default" className="bg-white/90 text-primary font-medium hover:bg-white shadow-md">
                Browse Stations
              </Button>
              <Button variant="outline" className="bg-white/30 backdrop-blur-sm border-white text-white font-medium hover:bg-white/50 shadow-sm">
                Popular Genres
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-10 h-60 w-60 rounded-full bg-primary/30 blur-3xl" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="card-hover">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <RadioIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{radioStations.length}</h3>
                <p className="text-muted-foreground">Radio Stations</p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Music className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{genres.length}</h3>
                <p className="text-muted-foreground">Music Genres</p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Global</h3>
                <p className="text-muted-foreground">Coverage</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Genre filter */}
        <div className="bg-card rounded-xl p-4 border shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Browse by Genre</h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeGenre === null ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveGenre(null)}
              className="rounded-full"
            >
              All Genres
            </Button>

            {genres.map(genre => (
              <Button
                key={genre}
                variant={activeGenre === genre ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveGenre(genre)}
                className="rounded-full"
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>

        {/* Radio stations grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="heading-2">
              {activeGenre ? `${activeGenre} Stations` : 'All Radio Stations'}
            </h2>
            <Badge variant="outline" className="px-3 py-1">
              {filteredStations.length} stations
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredStations.map(station => (
              <RadioStationCard key={station.id} station={station} />
            ))}
          </div>
        </div>

        {/* Featured section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="heading-2">Featured Stations</h2>
            <Badge variant="outline" className="text-xs rounded-sm">
              <Users className="h-3 w-3 mr-1" /> Popular
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top Jazz Station */}
            {radioStations.filter(s => s.genre === "Jazz").slice(0, 1).map(station => (
              <Card key={station.id} className="card-hover overflow-hidden group">
                <div className="flex h-full">
                  <div className={`w-1/3 bg-gradient-to-br ${station.color} ${station.secondaryColor} relative overflow-hidden`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_60%)] animate-pulse-slow"></div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <RadioIcon className="h-12 w-12 text-white/80" />
                    </div>

                    {/* Animated equalizer bars */}
                    <div className="absolute bottom-4 left-0 right-0 flex items-end justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((bar) => (
                        <div
                          key={bar}
                          className="w-1 bg-white/70 rounded-full animate-sound-wave"
                          style={{
                            height: `${10 + (bar * 5)}px`,
                            animationDelay: `${bar * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="w-2/3 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{station.name}</h3>
                      <Badge variant="outline" className="text-[10px] h-4 rounded-sm">
                        LIVE
                      </Badge>
                    </div>

                    <p className="text-xs text-muted-foreground mb-3">
                      {station.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {station.genre}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {station.listeners.toLocaleString()} listeners
                        </span>
                      </div>

                      <Button
                        size="sm"
                        onClick={() => playStation(station)}
                        className="shadow-sm"
                      >
                        Listen Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Top Electronic Station */}
            {radioStations.filter(s => s.genre === "Electronic").slice(0, 1).map(station => (
              <Card key={station.id} className="card-hover overflow-hidden group">
                <div className="flex h-full">
                  <div className={`w-1/3 bg-gradient-to-br ${station.color} ${station.secondaryColor} relative overflow-hidden`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_60%)] animate-pulse-slow"></div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <RadioIcon className="h-12 w-12 text-white/80" />
                    </div>

                    {/* Animated equalizer bars */}
                    <div className="absolute bottom-4 left-0 right-0 flex items-end justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((bar) => (
                        <div
                          key={bar}
                          className="w-1 bg-white/70 rounded-full animate-sound-wave"
                          style={{
                            height: `${10 + (bar * 5)}px`,
                            animationDelay: `${bar * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="w-2/3 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{station.name}</h3>
                      <Badge variant="outline" className="text-[10px] h-4 rounded-sm">
                        LIVE
                      </Badge>
                    </div>

                    <p className="text-xs text-muted-foreground mb-3">
                      {station.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {station.genre}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {station.listeners.toLocaleString()} listeners
                        </span>
                      </div>

                      <Button
                        size="sm"
                        onClick={() => playStation(station)}
                        className="shadow-sm"
                      >
                        Listen Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
