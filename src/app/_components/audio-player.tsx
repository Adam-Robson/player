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
      <div className="toggle-x">
       <button onClick={togglePlayer}>
          <X />
        </button>
      </div>
      <section className="playlist">
        <Playlist />
      </section>
      <section className="now-playing">
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
