"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Shuffle,
  Repeat,
  Heart,
  ListMusic,
  Mic2,
  Maximize2,
  Radio,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRadioStore } from "@/services/radio-service";

export function Player() {
  const {
    currentStation,
    isPlaying,
    togglePlayback,
    stopPlayback,
    volume,
    setVolume
  } = useRadioStore();

  // Handle volume change
  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0] / 100);
  };

  return (
    <div className="sticky bottom-0 z-10 border-t bg-card md:block hidden">
      <div className="grid grid-cols-3 items-center px-4 py-2">
        {/* Media info */}
        <div className="flex items-center gap-3">
          {currentStation ? (
            <>
              <div className={`relative h-14 w-14 overflow-hidden rounded-md bg-gradient-to-br ${currentStation.color} ${currentStation.secondaryColor}`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_60%)] animate-pulse-slow"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <Radio className="h-7 w-7 text-white/80" />
                </div>

                {isPlaying && (
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="w-8 h-8 flex items-end justify-around">
                      {[1, 2, 3].map((bar) => (
                        <div
                          key={bar}
                          className="w-1.5 bg-white/70 rounded-full animate-sound-wave"
                          style={{
                            height: `${Math.random() * 100}%`,
                            animationDelay: `${bar * 0.2}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* "Now Playing" indicator */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary animate-pulse"></div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-medium line-clamp-1">{currentStation.name}</h4>
                  <Badge variant="outline" className="text-[10px] h-4 rounded-sm">
                    LIVE
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-1">
                  {currentStation.genre} • {currentStation.location}
                </p>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="ml-1 text-muted-foreground hover:text-primary"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </>
          ) : (
            <>
              <div className="relative h-14 w-14 overflow-hidden rounded-md bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30" />
              </div>

              <div>
                <h4 className="text-sm font-medium line-clamp-1">No media playing</h4>
                <p className="text-xs text-muted-foreground line-clamp-1">
                  Select a radio station or song
                </p>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="ml-1 text-muted-foreground hover:text-primary opacity-50"
                disabled
              >
                <Heart className="h-5 w-5" />
              </Button>
            </>
          )}
        </div>

        {/* Player controls */}
        <div className="flex flex-col items-center justify-center">
          <div className="player-controls">
            <Button
              variant="ghost"
              size="icon"
              className="player-button"
              disabled={!currentStation}
            >
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="player-button"
              disabled={!currentStation}
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button
              className="player-button-primary"
              size="icon"
              onClick={togglePlayback}
              disabled={!currentStation}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5 ml-0.5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="player-button"
              disabled={!currentStation}
            >
              <SkipForward className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="player-button"
              disabled={!currentStation}
            >
              <Repeat className="h-4 w-4" />
            </Button>
          </div>

          {currentStation ? (
            <div className="flex items-center gap-2 w-full max-w-md">
              <Badge
                variant="outline"
                className="text-xs rounded-sm animate-pulse bg-primary/5 border-primary/20"
              >
                LIVE RADIO
              </Badge>
              <div className="h-1.5 flex-1 bg-muted rounded-full overflow-hidden shadow-inner">
                <div className="h-full w-full bg-gradient-to-r from-primary/40 to-primary/60 animate-progress"></div>
              </div>
              <Badge
                variant="outline"
                className="text-xs rounded-sm"
              >
                {currentStation.listeners.toLocaleString()} listeners
              </Badge>
            </div>
          ) : (
            <div className="flex items-center gap-2 w-full max-w-md">
              <span className="text-xs text-muted-foreground">0:00</span>
              <Slider defaultValue={[0]} max={100} step={1} className="h-1" disabled />
              <span className="text-xs text-muted-foreground">0:00</span>
            </div>
          )}
        </div>

        {/* Volume and other controls */}
        <div className="flex items-center justify-end gap-3">
          <Button
            variant="ghost"
            size="icon"
            className={`player-button ${currentStation ? 'text-primary bg-primary/10' : ''}`}
            asChild
          >
            <Link href="/radio">
              <Radio className="h-4 w-4" />
              {currentStation && <span className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>}
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="player-button">
            <ListMusic className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-2">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <Slider
              value={[volume * 100]}
              max={100}
              step={1}
              className="h-1 w-24"
              onValueChange={handleVolumeChange}
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="player-button"
            asChild
            disabled={!currentStation}
          >
            <Link href="/player">
              <Maximize2 className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile Mini Player - only visible on mobile */}
      <div className="md:hidden fixed bottom-16 left-0 right-0 z-10 bg-card border-t p-2">
        {currentStation ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`relative h-10 w-10 overflow-hidden rounded-md bg-gradient-to-br ${currentStation.color} ${currentStation.secondaryColor}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Radio className="h-5 w-5 text-white/80" />
                </div>
                {isPlaying && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary animate-pulse"></div>
                )}
              </div>
              <div>
                <h4 className="text-xs font-medium line-clamp-1">{currentStation.name}</h4>
                <p className="text-[10px] text-muted-foreground line-clamp-1">
                  {currentStation.genre}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                className="h-8 w-8 rounded-full bg-primary text-primary-foreground"
                size="icon"
                onClick={togglePlayback}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4 ml-0.5" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                asChild
              >
                <Link href="/player">
                  <Maximize2 className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-md bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30" />
              </div>
              <div>
                <h4 className="text-xs font-medium line-clamp-1">No media playing</h4>
                <p className="text-[10px] text-muted-foreground line-clamp-1">
                  Select a radio station or song
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <Button
                className="h-8 w-8 rounded-full bg-muted text-muted-foreground"
                size="icon"
                disabled
              >
                <Play className="h-4 w-4 ml-0.5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
