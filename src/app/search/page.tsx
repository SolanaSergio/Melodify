import { MainLayout } from "@/components/main-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Music, Mic, Headphones, Radio, BookOpen } from "lucide-react";

export default function SearchPage() {
  // List of categories with icons
  const categories = [
    { name: "Music", icon: <Music className="h-8 w-8" /> },
    { name: "Artists", icon: <Mic className="h-8 w-8" /> },
    { name: "Podcasts", icon: <Headphones className="h-8 w-8" /> },
    { name: "Radio", icon: <Radio className="h-8 w-8" /> },
    { name: "Audiobooks", icon: <BookOpen className="h-8 w-8" /> },
    { name: "Live", icon: <Music className="h-8 w-8" /> },
    { name: "New Releases", icon: <Music className="h-8 w-8" /> },
    { name: "Charts", icon: <Music className="h-8 w-8" /> },
  ];

  return (
    <MainLayout>
      <div className="container py-6 space-y-8">
        <div className="space-y-4">
          <h1 className="heading-1">Search</h1>

          <div className="relative max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="What do you want to listen to?"
              className="pl-10 py-6 text-lg rounded-xl"
            />
          </div>
        </div>

        <div>
          <h2 className="heading-2 mb-4">Browse All</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((category, i) => {
              // Different background colors based on category
              const bgColors = [
                "bg-primary/20",
                "bg-secondary/20",
                "bg-accent/20",
                "bg-muted/30",
                "bg-primary/30",
                "bg-secondary/30",
                "bg-accent/30",
                "bg-muted/40",
              ];

              return (
                <Card
                  key={`category-${category.name}`}
                  className={`card-hover overflow-hidden ${bgColors[i % bgColors.length]}`}
                >
                  <CardContent className="p-6 flex flex-col items-start gap-2">
                    {category.icon}
                    <h3 className="font-semibold">{category.name}</h3>
                  </CardContent>

                  {/* Decorative circle */}
                  <div
                    className={`absolute -bottom-10 -right-10 h-32 w-32 rounded-full
                      ${i % 4 === 0 ? 'bg-primary/10' :
                        i % 4 === 1 ? 'bg-secondary/10' :
                        i % 4 === 2 ? 'bg-accent/10' :
                        'bg-muted/20'}`}
                  />
                </Card>
              );
            })}
          </div>
        </div>

        <div className="pt-4">
          <h2 className="heading-2 mb-4">Recent Searches</h2>

          <div className="flex flex-col items-center justify-center bg-muted/30 rounded-xl p-8 text-center">
            <Search className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="heading-3 mb-2">Search for something</h3>
            <p className="text-muted-foreground max-w-md mb-4">
              Start typing to search for songs, artists, podcasts, and more.
            </p>
            <Button>Explore Featured Content</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
