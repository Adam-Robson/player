'use client';

import { AudioProvider } from '@/_contexts/audio-provider';
import { ThemeProvider } from '@/_contexts/theme-provider';

import Footer from './footer';

import '@/_styles/shared-layout.css';
import Navigation from './navigation';

export default function SharedLayout() {
  return (
    <div className="shared-layout">
      <Navigation />
      <ThemeProvider>
        <AudioProvider>
          <Footer />
        </AudioProvider>
      </ThemeProvider>
    </div>
  );
}
