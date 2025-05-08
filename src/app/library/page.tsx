import { MainLayout } from "@/components/main-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, Mic, Disc, Bookmark, ChevronRight, PlusCircle } from "lucide-react";

export default function LibraryPage() {
  return (
    <MainLayout>
      <div className="container py-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="heading-1">Your Library</h1>

          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" className="rounded-full gap-1">
              <PlusCircle className="h-4 w-4" />
              Create
            </Button>
          </div>
        </div>

        <Tabs defaultValue="playlists" className="w-full">
          <TabsList className="bg-muted/40 p-1">
            <TabsTrigger value="playlists" className="rounded-md">
              Playlists
            </TabsTrigger>
            <TabsTrigger value="albums" className="rounded-md">
              Albums
            </TabsTrigger>
            <TabsTrigger value="artists" className="rounded-md">
              Artists
            </TabsTrigger>
            <TabsTrigger value="podcasts" className="rounded-md">
              Podcasts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="playlists" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {/* Create playlist card */}
              <Card className="bg-muted/30 card-hover">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <PlusCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Create Playlist</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    It's easy to create a playlist to organize your favorite music
                  </p>
                  <Button>Create Playlist</Button>
                </CardContent>
              </Card>

              {/* Sample playlists */}
              {[...Array(7)].map((_, i) => {
                const playlistNames = [
                  "Favorites",
                  "Workout Mix",
                  "Chill Vibes",
                  "Morning Coffee",
                  "Evening Relaxation",
                  "Focus Flow",
                  "Party Mix",
                ];

                return (
                  <Card key={`playlist-${i}`} className="card-hover">
                    <CardContent className="p-4">
                      <AspectRatio ratio={1 / 1} className="mb-3 bg-muted/40 rounded-md relative overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${i % 4 === 0 ? 'from-primary/30 to-accent/30' : i % 4 === 1 ? 'from-secondary/30 to-primary/30' : i % 4 === 2 ? 'from-accent/30 to-secondary/30' : 'from-muted/30 to-accent/20'}`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Music className="h-10 w-10 text-background/70" />
                        </div>
                      </AspectRatio>
                      <h3 className="font-semibold truncate">{playlistNames[i]}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {Math.floor(Math.random() * 30) + 10} songs • Created by you
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="albums" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {[...Array(8)].map((_, i) => {
                const albumNames = [
                  "Album One",
                  "Album Two",
                  "Album Three",
                  "Album Four",
                  "Album Five",
                  "Album Six",
                  "Album Seven",
                  "Album Eight",
                ];

                const artistNames = [
                  "Artist One",
                  "Artist Two",
                  "Artist Three",
                  "Artist Four",
                  "Artist Five",
                  "Artist Six",
                  "Artist Seven",
                  "Artist Eight",
                ];

                return (
                  <Card key={`album-${i}`} className="card-hover">
                    <CardContent className="p-4">
                      <AspectRatio ratio={1 / 1} className="mb-3 bg-muted/40 rounded-md relative overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${i % 4 === 0 ? 'from-primary/30 to-accent/30' : i % 4 === 1 ? 'from-secondary/30 to-primary/30' : i % 4 === 2 ? 'from-accent/30 to-secondary/30' : 'from-muted/30 to-accent/20'}`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Disc className="h-10 w-10 text-background/70" />
                        </div>
                      </AspectRatio>
                      <h3 className="font-semibold truncate">{albumNames[i]}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {artistNames[i]} • {2018 + i} • Album
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="artists" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {[...Array(10)].map((_, i) => {
                const artistNames = [
                  "Artist One",
                  "Artist Two",
                  "Artist Three",
                  "Artist Four",
                  "Artist Five",
                  "Artist Six",
                  "Artist Seven",
                  "Artist Eight",
                  "Artist Nine",
                  "Artist Ten",
                ];

                return (
                  <Card key={`artist-${i}`} className="card-hover bg-card">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <AspectRatio ratio={1 / 1} className="w-full mb-3 bg-muted/40 rounded-full relative overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${i % 4 === 0 ? 'from-primary/30 to-accent/30' : i % 4 === 1 ? 'from-secondary/30 to-primary/30' : i % 4 === 2 ? 'from-accent/30 to-secondary/30' : 'from-muted/30 to-accent/20'}`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Mic className="h-10 w-10 text-background/70" />
                        </div>
                      </AspectRatio>
                      <h3 className="font-semibold">{artistNames[i]}</h3>
                      <p className="text-xs text-muted-foreground mt-1">Artist</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="podcasts" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {[...Array(4)].map((_, i) => {
                const podcastNames = [
                  "Tech Talk",
                  "Daily News",
                  "Science Hour",
                  "Creative Minds",
                ];

                return (
                  <Card key={`podcast-${i}`} className="card-hover">
                    <CardContent className="p-4">
                      <AspectRatio ratio={1 / 1} className="mb-3 bg-muted/40 rounded-md relative overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${i % 4 === 0 ? 'from-primary/30 to-accent/30' : i % 4 === 1 ? 'from-secondary/30 to-primary/30' : i % 4 === 2 ? 'from-accent/30 to-secondary/30' : 'from-muted/30 to-accent/20'}`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Bookmark className="h-10 w-10 text-background/70" />
                        </div>
                      </AspectRatio>
                      <h3 className="font-semibold truncate">{podcastNames[i]}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {Math.floor(Math.random() * 100) + 10} episodes
                      </p>
                    </CardContent>
                  </Card>
                );
              })}

              <Card className="bg-muted/30 card-hover">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <PlusCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Discover Podcasts</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Find podcasts on various topics that you'll love
                  </p>
                  <Button>Browse Podcasts</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
