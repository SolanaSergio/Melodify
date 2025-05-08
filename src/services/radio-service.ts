"use client";

import { create } from 'zustand';
import { RadioStation } from '@/data/radio-stations';

interface RadioState {
  currentStation: RadioStation | null;
  isPlaying: boolean;
  volume: number;
  audioElement: HTMLAudioElement | null;
  
  // Actions
  playStation: (station: RadioStation) => void;
  stopPlayback: () => void;
  togglePlayback: () => void;
  setVolume: (volume: number) => void;
}

export const useRadioStore = create<RadioState>((set, get) => ({
  currentStation: null,
  isPlaying: false,
  volume: 0.7,
  audioElement: typeof Audio !== 'undefined' ? new Audio() : null,
  
  playStation: (station) => {
    const { audioElement, volume } = get();
    
    // Stop current playback if any
    if (audioElement) {
      audioElement.pause();
      audioElement.src = '';
    }
    
    // Create new audio element
    const audio = typeof Audio !== 'undefined' ? new Audio(station.streamUrl) : null;
    
    if (audio) {
      audio.volume = volume;
      audio.play().catch(error => {
        console.error('Error playing radio station:', error);
      });
      
      set({ 
        currentStation: station, 
        isPlaying: true,
        audioElement: audio
      });
    }
  },
  
  stopPlayback: () => {
    const { audioElement } = get();
    
    if (audioElement) {
      audioElement.pause();
      audioElement.src = '';
    }
    
    set({ 
      isPlaying: false,
      currentStation: null
    });
  },
  
  togglePlayback: () => {
    const { isPlaying, audioElement, currentStation } = get();
    
    if (!audioElement || !currentStation) return;
    
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play().catch(error => {
        console.error('Error resuming radio playback:', error);
      });
    }
    
    set({ isPlaying: !isPlaying });
  },
  
  setVolume: (volume) => {
    const { audioElement } = get();
    
    if (audioElement) {
      audioElement.volume = volume;
    }
    
    set({ volume });
  }
}));
