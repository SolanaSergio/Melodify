"use client";

import { RadioStation } from "@/data/radio-stations";
import { useRadioStore } from "@/services/radio-service";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Radio, Play, Pause } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface RadioStationCardProps {
  station: RadioStation;
  variant?: "compact" | "full";
}

export function RadioStationCard({ station, variant = "full" }: RadioStationCardProps) {
  const { currentStation, isPlaying, playStation, togglePlayback } = useRadioStore();

  const isCurrentStation = currentStation?.id === station.id;

  const handlePlayClick = () => {
    if (isCurrentStation) {
      togglePlayback();
    } else {
      playStation(station);
    }
  };

  if (variant === "compact") {
    return (
      <Card className="card-hover overflow-hidden group">
        <CardContent className="p-0">
          <div className="flex items-center gap-3 p-3">
            <div className={`relative h-10 w-10 rounded-md overflow-hidden flex-shrink-0 bg-gradient-to-br ${station.color} ${station.secondaryColor}`}>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_60%)] animate-pulse-slow"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <Radio className="h-5 w-5 text-white" />
              </div>

              {isCurrentStation && isPlaying && (
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="w-6 h-6 flex items-end justify-around">
                    {[1, 2, 3].map((bar) => (
                      <div
                        key={bar}
                        className="w-0.5 bg-white/70 rounded-full animate-sound-wave"
                        style={{
                          height: `${Math.random() * 100}%`,
                          animationDelay: `${bar * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="font-medium text-sm truncate group-hover:text-primary transition-colors">{station.name}</h3>
              <div className="flex items-center gap-1.5">
                <p className="text-xs text-muted-foreground truncate">{station.genre}</p>
                {isCurrentStation && isPlaying && (
                  <Badge variant="outline" className="text-[8px] h-3 rounded-sm px-1 animate-pulse">
                    LIVE
                  </Badge>
                )}
              </div>
            </div>

            <Button
              size="sm"
              variant="ghost"
              className={cn(
                "rounded-full h-8 w-8 p-0 flex-shrink-0 shadow-sm",
                isCurrentStation && isPlaying ? "text-primary bg-primary/10" : "hover:bg-primary/5"
              )}
              onClick={handlePlayClick}
            >
              {isCurrentStation && isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4 ml-0.5" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-hover overflow-hidden group">
      <CardContent className="p-0">
        <div className={`h-32 bg-gradient-to-r ${station.color} ${station.secondaryColor} relative overflow-hidden`}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_60%)] animate-pulse-slow"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYyYzcuNzMyIDAgMTQgNi4yNjggMTQgMTRoMnptLTIgMGMwIDguODM3LTcuMTYzIDE2LTE2IDE2djJjOS45NDEgMCAxOC04LjA1OSAxOC0xOGgtMnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Radio className="h-12 w-12 text-white/80" />
              {isCurrentStation && isPlaying && (
                <div className="absolute -inset-4 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white/20 animate-ping"></div>
                </div>
              )}
            </div>
          </div>

          <div className="absolute bottom-3 left-3">
            <Badge className="bg-black/30 hover:bg-black/40 text-white backdrop-blur-sm">
              {station.listeners.toLocaleString()} listeners
            </Badge>
          </div>

          <Button
            size="icon"
            className={cn(
              "absolute bottom-3 right-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/40 transition-all",
              isCurrentStation && isPlaying && "bg-primary/80 hover:bg-primary text-white",
              "shadow-lg"
            )}
            onClick={handlePlayClick}
          >
            {isCurrentStation && isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4 ml-0.5" />
            )}
          </Button>

          {/* Animated equalizer (only visible when playing) */}
          {isCurrentStation && isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/20">
              <div className="flex h-full items-end justify-around px-2">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-0.5 bg-white/70 rounded-t-sm animate-sound-wave"
                    style={{
                      height: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-semibold line-clamp-1 group-hover:text-primary transition-colors">{station.name}</h3>
          <div className="flex items-center gap-2 mt-1.5">
            <Badge variant="outline" className="text-xs rounded-sm">
              {station.genre}
            </Badge>
            <span className="text-xs text-muted-foreground">• {station.location}</span>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2 mt-2">
            {station.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
