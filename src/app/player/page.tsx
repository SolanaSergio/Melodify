"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Shuffle,
  Repeat,
  Heart,
  ListMusic,
  Mic2,
  Minimize2,
  Radio,
  X,
  ChevronDown,
  Music,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRadioStore } from "@/services/radio-service";

export default function PlayerPage() {
  const router = useRouter();
  const {
    currentStation,
    isPlaying,
    togglePlayback,
    stopPlayback,
    volume,
    setVolume
  } = useRadioStore();
  
  const [activeTab, setActiveTab] = useState("visualizer");
  const [muted, setMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(volume);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  
  // Redirect if no station is playing
  useEffect(() => {
    if (!currentStation) {
      router.push("/");
    }
  }, [currentStation, router]);
  
  // Handle volume change
  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0] / 100);
    if (value[0] > 0 && muted) {
      setMuted(false);
    }
  };
  
  // Toggle mute
  const toggleMute = () => {
    if (muted) {
      setVolume(prevVolume);
      setMuted(false);
    } else {
      setPrevVolume(volume);
      setVolume(0);
      setMuted(true);
    }
  };
  
  // Particle class for background effects
  class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    
    constructor(canvas: HTMLCanvasElement) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      
      // Colors based on theme
      const colors = [
        'rgba(0, 123, 255, 0.7)',  // Primary
        'rgba(32, 201, 151, 0.7)',  // Accent
        'rgba(108, 117, 125, 0.5)',  // Muted
      ];
      
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    
    update(canvas: HTMLCanvasElement) {
      this.x += this.speedX;
      this.y += this.speedY;
      
      if (this.x > canvas.width || this.x < 0) {
        this.speedX = -this.speedX;
      }
      
      if (this.y > canvas.height || this.y < 0) {
        this.speedY = -this.speedY;
      }
    }
    
    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  // Initialize canvas and animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reset particles
      particlesRef.current = [];
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push(new Particle(canvas));
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particlesRef.current.forEach(particle => {
        particle.update(canvas);
        particle.draw(ctx);
      });
      
      // Draw audio visualizer if playing
      if (isPlaying) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(canvas.width, canvas.height) * 0.3;
        
        // Draw circular visualizer
        for (let i = 0; i < 360; i += 5) {
          const angle = (i * Math.PI) / 180;
          const amplitude = Math.random() * 50 + (isPlaying ? 30 : 10);
          const x1 = centerX + (radius - amplitude) * Math.cos(angle);
          const y1 = centerY + (radius - amplitude) * Math.sin(angle);
          const x2 = centerX + (radius + amplitude) * Math.cos(angle);
          const y2 = centerY + (radius + amplitude) * Math.sin(angle);
          
          const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
          gradient.addColorStop(0, 'rgba(32, 201, 151, 0.5)');
          gradient.addColorStop(1, 'rgba(0, 123, 255, 0.5)');
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying]);
  
  // Simulated lyrics for demo
  const lyrics = [
    { time: 0, text: "♪ Welcome to Melodify Radio ♪" },
    { time: 5, text: "♪ Streaming the best music ♪" },
    { time: 10, text: "♪ Enjoy your favorite tunes ♪" },
    { time: 15, text: "♪ Anytime, anywhere ♪" },
    { time: 20, text: "♪ With Melodify ♪" },
  ];
  
  const [currentLyric, setCurrentLyric] = useState(lyrics[0].text);
  
  // Update lyrics based on time
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      const time = Math.floor(Date.now() / 1000) % 25;
      const lyric = lyrics.find(l => l.time <= time && (l.time + 5) > time);
      if (lyric) {
        setCurrentLyric(lyric.text);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isPlaying]);
  
  if (!currentStation) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="fixed inset-0 bg-background z-50 overflow-hidden">
      {/* Background canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background/90 z-10" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-background/50 backdrop-blur-md hover:bg-background/70"
            onClick={() => router.back()}
          >
            <ChevronDown className="h-5 w-5" />
          </Button>
          
          <div className="text-center">
            <h1 className="text-lg font-bold">Now Playing</h1>
            <p className="text-sm text-muted-foreground">Full Screen Player</p>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full bg-background/50 backdrop-blur-md hover:bg-background/70"
            onClick={() => router.back()}
          >
            <Minimize2 className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 overflow-hidden">
          {/* Station info */}
          <div className="w-full max-w-md mx-auto mb-8 text-center">
            <div className="relative mx-auto mb-8">
              <div className={`relative h-48 w-48 md:h-64 md:w-64 mx-auto overflow-hidden rounded-xl bg-gradient-to-br ${currentStation.color} ${currentStation.secondaryColor} shadow-xl`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_60%)] animate-pulse-slow"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <Radio className="h-20 w-20 text-white/80" />
                </div>
                
                {isPlaying && (
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="w-24 h-24 flex items-end justify-around">
                      {[1, 2, 3, 4, 5].map((bar) => (
                        <div
                          key={bar}
                          className="w-3 bg-white/70 rounded-full animate-sound-wave"
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
                <div className="absolute top-0 left-0 w-full h-2 bg-primary animate-pulse"></div>
              </div>
              
              {/* Rotating disc effect */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[calc(100%+20px)] w-[calc(100%+20px)] rounded-full bg-background/10 backdrop-blur-sm animate-spin-slow"></div>
            </div>
            
            <div className="mb-2 flex items-center justify-center gap-2">
              <h2 className="text-2xl font-bold">{currentStation.name}</h2>
              <Badge variant="outline" className="text-xs h-5 rounded-sm">
                LIVE
              </Badge>
            </div>
            
            <p className="text-muted-foreground mb-2">
              {currentStation.genre} • {currentStation.location}
            </p>
            
            <p className="text-sm mb-4">
              {currentStation.description}
            </p>
            
            <div className="flex items-center justify-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {currentStation.listeners.toLocaleString()} listeners
              </Badge>
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="w-full max-w-md mx-auto">
            <Tabs defaultValue="visualizer" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="visualizer">Visualizer</TabsTrigger>
                <TabsTrigger value="lyrics">Lyrics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="visualizer" className="h-24 flex items-center justify-center">
                <div className="w-full h-16 flex items-end justify-around">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-primary/60 rounded-full animate-sound-wave"
                      style={{
                        height: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.05}s`
                      }}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="lyrics" className="h-24 flex items-center justify-center">
                <div className="text-center animate-fade-in">
                  <p className="text-xl font-medium">{currentLyric}</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Player controls */}
        <div className="p-4 md:p-6 bg-background/50 backdrop-blur-md">
          <div className="w-full max-w-md mx-auto">
            {/* Progress bar */}
            <div className="mb-6">
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden shadow-inner">
                <div className="h-full w-full bg-gradient-to-r from-primary/40 to-primary/60 animate-progress"></div>
              </div>
            </div>
            
            {/* Main controls */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <Button
                variant="ghost"
                size="icon"
                className="player-button text-foreground/80 hover:text-primary"
              >
                <Shuffle className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="player-button text-foreground/80 hover:text-primary"
              >
                <SkipBack className="h-6 w-6" />
              </Button>
              
              <Button
                className="h-16 w-16 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                size="icon"
                onClick={togglePlayback}
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="h-8 w-8 ml-1" />
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="player-button text-foreground/80 hover:text-primary"
              >
                <SkipForward className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="player-button text-foreground/80 hover:text-primary"
              >
                <Repeat className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Volume control */}
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="player-button"
                onClick={toggleMute}
              >
                {volume === 0 || muted ? (
                  <VolumeX className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Volume2 className="h-5 w-5 text-muted-foreground" />
                )}
              </Button>
              
              <Slider
                value={[volume * 100]}
                max={100}
                step={1}
                className="h-1.5 w-48"
                onValueChange={handleVolumeChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
