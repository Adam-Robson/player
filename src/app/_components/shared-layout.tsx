'use client';

import { AudioProvider } from '@/_contexts/audio-provider';
import { ThemeProvider } from '@/_contexts/theme-provider';
import { IconProvider } from '@/_contexts/icon-provider';

import Footer from './footer';

import Navigation from './navigation';
import ThemeButton from './theme-button';

import '@/_styles/shared-layout.css';

export default function SharedLayout() {
  return (
    <div className="shared-layout">
      <IconProvider>
        <ThemeProvider>
          <Navigation />
          <div className="fixed top-4 right-4 z-50">
            <ThemeButton />
          </div>
          <AudioProvider>
            <Footer />
          </AudioProvider>
        </ThemeProvider>
      </IconProvider>
    </div>
  );
}
