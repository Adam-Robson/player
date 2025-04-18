'use client';

import { AudioProvider } from '@/_contexts/audio-provider';
import { IconProvider } from '@/_contexts/icon-provider';

import Footer from './footer';

import Navigation from './navigation';

import '@/_styles/shared-layout.css';

export default function SharedLayout() {
  return (
    <div className="shared-layout">
      <IconProvider>
          <Navigation />
          <AudioProvider>
            <Footer />
          </AudioProvider>
      </IconProvider>
    </div>
  );
}
