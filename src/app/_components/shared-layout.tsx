'use client';

import Image from 'next/image';

import { AudioProvider } from '@/_contexts/audio-provider';
import { IconProvider } from '@/_contexts/icon-provider';
import { ThemeProvider, useThemeProvider } from '@/_contexts/theme-provider';

import Footer from './footer';

import Navigation from './navigation';
import ThemeToggle from './theme-toggle';

export default function SharedLayout() {
  return (
    <div className={`
      h-full max-w-screen-lg w-full mx-auto
      relative flex flex-col justify-between items-center
    `}>
      <ThemeProvider>
        <IconProvider>
          <div className="w-full flex justify-between item-center p-2">
            <Navigation />
            <ThemeToggle />
          </div>
          <Image 
            src="/images/hert.svg"
            alt="logo for le fog" 
            width={400} 
            height={400}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg"
          />
        <AudioProvider>
          <Footer />
        </AudioProvider>
      </IconProvider>
      </ThemeProvider>
    </div>
  );
}
