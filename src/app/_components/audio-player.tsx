'use client';

import { useAudioContext } from '@/_contexts/audio-provider';
import Controls from '@/_components/controls';
import Playlist from '@/_components/playlist';
import { X } from 'lucide-react';
import "@/_styles/audio-player.css";

export default function AudioPlayer() {
  const { song, playback, elapsed, duration, togglePlayer } = useAudioContext();

  return (
    <div className="audio-player p-8 rounded-lg">
      <button className="absolute right-2 top-2 cursor-pointer z-50" onClick={togglePlayer}>
        <X />
      </button>
      <section className="playlist text-sm text-shadow-md text-pretty">
        <Playlist />
      </section>
      <section className="min-h-32 flex-1 text-center flex flex-col items-center justify-center">
        {
          playback && (
            <>
              <div className="text-xl font-normal text-shadow-xl">{song.title}</div>
              <div className="text-lg mt-4 text-shadow-xl">
                {elapsed} / {duration}
              </div>
            </>
          )}
      </section>
      <Controls />
    </div>
  );
}
