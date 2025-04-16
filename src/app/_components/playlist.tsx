import { useAudioContext } from '@/_contexts/audio-provider';
import { SongType } from '@/_types/audio-provider';

export default function Playlist() {
  
  const { playlist, currentIndex, handleSongChange } = useAudioContext();

  return (
    <div className="audio-playlist">
    <ul className="ul">
      {playlist.map((track: SongType, index: number) => (
        <li
          key={track.id}
          className={
            `li ${currentIndex === index ? "active" : ""}`
          }>
          <button
            className="playlist-button"
            onClick={() => handleSongChange && handleSongChange(index)}
          >
            {track.title} ({track.album})
          </button>
        </li>
      ))}
    </ul>
  </div>
  )
}
