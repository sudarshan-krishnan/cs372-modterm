import { useContext } from "react";
import PlaybackContext from "./PlaybackContext";

export default function SongCard({ song, addSong, removeSong }) {
  // TODO (context): Read the nowPlayingID and setter from PlaybackContext.
  
  const isPlaying = nowPlayingId === song.id;

  return (
    <div className="song-card">
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
      {isPlaying && <p className="now-playing">Now Playing</p>}
      {addSong && ( 
        <button className="button" >
        {/* TODO: Add the song to playlist when the button is clicked. */}
          Add to Playlist
        </button>
      )}
      {removeSong && (
        <>
          <button
            className="button"
            // TODO: When clicked, if the song is currently playing, pause it. Otherwise, set it as the currently playing song.
            
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            className="button btn-danger"
            // TODO: Remove the song from the playlist when the button is clicked.
            
          >
            Remove
          </button>
        </>
      )}
    </div>
  );
}
