"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Library, Search, Menu, X, Music2, Radio } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[80%] max-w-[300px] p-0">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 p-6">
              <Music2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Melodify</span>
            </div>

            <nav className="px-3 py-2">
              <div className="space-y-1">
                <Link
                  href="/"
                  className="nav-item nav-item-active"
                  onClick={() => setOpen(false)}
                >
                  <Home className="h-5 w-5" />
                  Home
                </Link>
                <Link
                  href="/search"
                  className="nav-item"
                  onClick={() => setOpen(false)}
                >
                  <Search className="h-5 w-5" />
                  Search
                </Link>
                <Link
                  href="/library"
                  className="nav-item"
                  onClick={() => setOpen(false)}
                >
                  <Library className="h-5 w-5" />
                  Your Library
                </Link>
                <Link
                  href="/radio"
                  className="nav-item"
                  onClick={() => setOpen(false)}
                >
                  <Radio className="h-5 w-5" />
                  Radio
                </Link>
              </div>
            </nav>

            <Separator className="my-4" />

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
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-10 bg-card border-t">
        <div className="flex items-center justify-around">
          <Link href="/" className="mobile-nav-item mobile-nav-item-active">
            <Home className="h-5 w-5 mb-1" />
            <span>Home</span>
          </Link>
          <Link href="/search" className="mobile-nav-item">
            <Search className="h-5 w-5 mb-1" />
            <span>Search</span>
          </Link>
          <Link href="/library" className="mobile-nav-item">
            <Library className="h-5 w-5 mb-1" />
            <span>Library</span>
          </Link>
          <Link href="/radio" className="mobile-nav-item">
            <Radio className="h-5 w-5 mb-1" />
            <span>Radio</span>
          </Link>
        </div>
      </div>
    </>
  );
}
