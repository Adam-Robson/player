'use client';

import { AudioProvider } from '@/_contexts/audio-provider';
import { ThemeProvider } from '@/_contexts/theme-provider';

import Footer from './footer';

import '@/_styles/shared-layout.css';
import Navigation from './navigation';
import ThemeButton from './theme-button';

export default function SharedLayout() {
  return (
    <div className="shared-layout">
      <Navigation />
      <ThemeProvider>
        <div className="fixed top-4 right-4 z-50">
          <ThemeButton />
        </div>
        <AudioProvider>
          <Footer />
        </AudioProvider>
      </ThemeProvider>
    </div>
  );
}
