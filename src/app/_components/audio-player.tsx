'use client';

import { useAudioContext } from '@/_contexts/audio-provider';
import Controls from '@/_components/controls';
import Playlist from '@/_components/playlist';
import { X } from 'lucide-react';
import "@/_styles/audio-player.css";

export default function AudioPlayer() {
  const { song, playback, elapsed, duration, togglePlayer } = useAudioContext();

  return (
    <div className="audio-player">
      <button className="absolute right-4" onClick={togglePlayer}>
        <X />
      </button>
      <section className="playlist text-sm text-shadow-md text-pretty">
        <Playlist />
      </section>
      <section className="flex-1 text-sm text-center">
      {playback && (
          <>
            <div className="song-title">{song.title}</div>
            <div className="song-timing">
              {elapsed} / {duration}
            </div>
          </>
        )}
      </section>
      <Controls />
    </div>
  );
}
