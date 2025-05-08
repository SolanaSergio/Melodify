"use client";

import Link from "next/link";
import { Home, Library, Search, PlusCircle, Mic, Music2, Radio, Headphones } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Sidebar() {
  return (
    <div className="flex flex-col h-full w-[280px] bg-card border-r">
      <div className="flex items-center gap-2 p-6">
        <Music2 className="h-8 w-8 text-primary" />
        <span className="text-2xl font-bold">Melodify</span>
      </div>

      <nav className="px-3 py-2">
        <div className="space-y-1">
          <Link href="/" className="nav-item nav-item-active">
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link href="/search" className="nav-item">
            <Search className="h-5 w-5" />
            Search
          </Link>
          <Link href="/library" className="nav-item">
            <Library className="h-5 w-5" />
            Your Library
          </Link>
          <Link href="/radio" className="nav-item">
            <Radio className="h-5 w-5" />
            Radio
          </Link>
        </div>
      </nav>

      <Separator className="my-4" />

      <div className="px-5 py-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-foreground/70">
            <Library className="h-5 w-5" />
            <span className="text-sm font-medium">Your Library</span>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <PlusCircle className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-1 mb-4">
          <Button variant="secondary" className="w-full justify-start text-sm h-8 px-3">
            Playlists
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sm h-8 px-3">
            Albums
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sm h-8 px-3">
            Artists
          </Button>
        </div>

        <Card className="p-4 bg-muted/40">
          <h3 className="text-sm font-medium mb-2">Create your first playlist</h3>
          <p className="text-xs text-muted-foreground mb-3">It's easy, we'll help you</p>
          <Button size="sm" className="w-full">Create playlist</Button>
        </Card>

        <Card className="p-4 bg-muted/40 mt-4">
          <h3 className="text-sm font-medium mb-2">Browse podcasts</h3>
          <p className="text-xs text-muted-foreground mb-3">We'll keep you updated on new episodes</p>
          <Button size="sm" variant="outline" className="w-full">Browse podcasts</Button>
        </Card>
      </div>

      <div className="mt-auto px-5 py-3">
        <ScrollArea className="h-32">
          <div className="space-y-1 text-xs">
            <p className="text-muted-foreground hover:text-foreground cursor-pointer">Legal</p>
            <p className="text-muted-foreground hover:text-foreground cursor-pointer">Privacy Center</p>
            <p className="text-muted-foreground hover:text-foreground cursor-pointer">Privacy Policy</p>
            <p className="text-muted-foreground hover:text-foreground cursor-pointer">Cookies</p>
            <p className="text-muted-foreground hover:text-foreground cursor-pointer">About Ads</p>
            <p className="text-muted-foreground hover:text-foreground cursor-pointer">Accessibility</p>
          </div>
        </ScrollArea>

        <Button variant="outline" size="sm" className="mt-4 w-full gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <circle cx="12" cy="12" r="10" className="fill-primary" />
          </svg>
          English
        </Button>
      </div>
    </div>
  );
}
