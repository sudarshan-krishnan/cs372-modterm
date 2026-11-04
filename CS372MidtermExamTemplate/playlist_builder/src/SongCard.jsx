import { useContext } from "react";
import PlaybackContext from "./PlaybackContext";

export default function SongCard({ song, addSong, removeSong }) {
  const { nowPlayingId, setNowPlayingId } = useContext(PlaybackContext) ?? {};

  const isPlaying = nowPlayingId === song.id;

  return (
    <div className="song-card">
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
      {isPlaying && <p className="now-playing">Now Playing</p>}
      {addSong && (
        <button className="button" onClick={() => addSong(song)}>
          Add to Playlist
        </button>
      )}
      {removeSong && (
        <>
          <button
            className="button"
            onClick={() => {
              if (isPlaying) {
                setNowPlayingId(null);
                return;
              }

              setNowPlayingId(song.id);
            }}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            className="button btn-danger"
            onClick={() => removeSong(song)}
          >
            Remove
          </button>
        </>
      )}
    </div>
  );
}
