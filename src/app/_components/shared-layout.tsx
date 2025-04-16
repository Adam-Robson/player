'use client';

import '@/_styles/shared-layout.css';
import { AudioProvider } from '@/_contexts/audio-provider';
import { ThemeProvider } from '@/_contexts/theme-provider';

import ThemeButton from '@/_components/theme-button';
import PlayerToggle from './player-toggle';

export default function SharedLayout() {
  return (
    <div className="shared-layout">
      <ThemeProvider>
      <AudioProvider>
        <section className="theme-button"><ThemeButton /></section>
        <section className="navigation">navigation</section>
        <section className="main-image">main image</section>
        <section className="player"><PlayerToggle /></section>
      </AudioProvider>
      </ThemeProvider>
    </div>
  );
}
