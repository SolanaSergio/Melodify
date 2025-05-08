"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Player } from "@/components/player";
import { MobileNav } from "@/components/mobile-nav";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar - hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto pb-16 md:pb-0">
          {children}
        </div>
        <Player />

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </div>
  );
}
