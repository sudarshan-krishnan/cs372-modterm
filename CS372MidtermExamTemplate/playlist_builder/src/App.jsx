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
  const [playlist, setPlaylist] = useState([]);
  const [nowPlayingId, setNowPlayingId] = useState(null);

  useEffect(() => {
    document.title = `Playlist Builder${playlist.length ? ` - ${playlist.length} songs` : ""}`;
  }, [playlist]);

  const availableSongs = songCatalog.filter(
    (song) => !playlist.some((item) => item.id === song.id),
  );

  function addSong(songToAdd) {
    setPlaylist((currentPlaylist) => {
      if (currentPlaylist.some((item) => item.id === songToAdd.id)) {
        return currentPlaylist;
      }

      return [...currentPlaylist, songToAdd];
    });
    setNowPlayingId(songToAdd.id);
  }

  function removeSong(songToRemove) {
    setPlaylist((currentPlaylist) =>
      currentPlaylist.filter((item) => item.id !== songToRemove.id),
    );

    if (nowPlayingId === songToRemove.id) {
      setNowPlayingId(null);
    }
  }

  const nowPlayingSong = songCatalog.find((song) => song.id === nowPlayingId);

  return (
    <PlaybackContext.Provider value={{ nowPlayingId, setNowPlayingId }}>
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
                  <SongCard song={song} addSong={addSong} />
                </li>
              ))}
            </ul>
          </section>

          <Playlist songs={playlist} removeSong={removeSong} />
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
