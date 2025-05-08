"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Player } from "@/components/player";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto">
          {children}
        </div>
        <Player />
      </div>
    </div>
  );
}
