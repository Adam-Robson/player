import { Play, Pause, MoveLeft, MoveRight } from "lucide-react";
import { useAudioContext } from '@/_contexts/audio-provider';


export default function Controls() {
  const { volume, playback, handlePlayback, handlePreviousSong, handleNextSong, volumeSliderRef, handleVolumeChange } = useAudioContext();

  return (
    <section className="controls">
      <div className="playback">
      <button onClick={handlePreviousSong} className="control">
        <MoveLeft size={32} />
        <label className="label">Previous</label>
      </button>

      <button onClick={handlePlayback} className="control">
        {playback ? <Pause size={32} /> : <Play size={32} />}
        <label className="label">{playback ? 'Pause' : 'Play'}</label>
      </button>

      <button onClick={handleNextSong} className="control">
        <MoveRight size={32} />
        <label className="label">Next</label>
      </button>
      </div>
      <button className="control">
        <input 
          id="volume"
          className="volume"
          ref={volumeSliderRef}
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </button>
    </section>
  );
}
