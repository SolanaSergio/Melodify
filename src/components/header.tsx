"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Bell, User, Search, Music2 } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          {/* Mobile Logo - visible only on mobile */}
          <div className="flex md:hidden items-center gap-1">
            <Music2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Melodify</span>
          </div>

          {/* Navigation Buttons - hidden on small mobile */}
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Desktop Search Bar */}
          <div className="relative ml-4 hidden md:flex items-center">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for songs, artists, or podcasts"
              className="w-72 pl-10 rounded-full bg-muted/40 border-none focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Upgrade Button - hidden on small mobile */}
          <Button className="hidden sm:flex rounded-full px-4 sm:px-6" size="sm">
            Upgrade
          </Button>

          <ThemeToggle />

          {/* Notifications - hidden on small mobile */}
          <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full">
            <Bell className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8 sm:h-9 sm:w-9">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <User className="h-4 w-4 sm:h-5 sm:w-5" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Search Bar - only visible on mobile */}
      <div className="px-4 pb-3 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-full pl-10 rounded-full bg-muted/40 border-none focus-visible:ring-1 focus-visible:ring-primary"
          />
        </div>
      </div>
    </header>
  );
}
