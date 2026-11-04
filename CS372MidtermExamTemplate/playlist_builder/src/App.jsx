import { useEffect, useState } from "react";
import PlaybackContext from "./PlaybackContext";
import SongCard from "./SongCard";
import Playlist from "./Playlist";
import "./App.css";

const songCatalog = [
  { id: 1, title: "Here Comes the Sun", artist: "The Beatles" },
  { id: 2, title: "Dreams", artist: "Fleetwood Mac" },
  { id: 3, title: "Respect", artist: "Aretha Franklin" },
  { id: 4, title: "September", artist: "Earth, Wind & Fire" },
];

export default function App() {
  // TODO (state): Store the playlist and currently playing song ID in state.

  // TODO (side effect): Update the document title when the playlist changes.

  // Only show songs that are not already in the playlist.
  const availableSongs = songCatalog.filter(
    (song) => !playlist.some((item) => item.id === song.id),
  );

  function addSong(songToAdd) {
    //TODO (state): Add the song to the playlist and set it as the currently playing song.
  }

  function removeSong(songToRemove) {
    //TODO (state): Remove the song from the playlist. If it was the currently playing song, set the currently playing song to null.
  }

  const nowPlayingSong = songCatalog.find((song) => song.id === nowPlayingId);

  return (
    // TODO (context): Provide the currently playing song ID and its setter function into the context.
    <PlaybackContext.Provider value={  }>
      <main>
        <div className="app-container">
          <header className="app-header">
            <h1>Playlist Builder</h1>
          </header>

          <section className="section">
            <h2>Available Songs</h2>
            <ul className="card-list">
              {availableSongs.map((song) => (
                <li key={song.id}>
                  {/* TODO: Render SongCard and pass the song and callback. */}
                  
                </li>
              ))}
            </ul>
          </section>

          {/* TODO: Render the Playlist pass the songs and callback. */}
          
        </div>
        <p className="playback-status">
          {nowPlayingSong
            ? `Now playing: ${nowPlayingSong.title}`
            : "Nothing is playing"}
        </p>
      </main>
    </PlaybackContext.Provider>
  );
}
