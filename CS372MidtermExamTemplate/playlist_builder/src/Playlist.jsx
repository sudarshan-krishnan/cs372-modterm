import SongCard from "./SongCard";

export default function Playlist({ songs = [], removeSong }) {
  return (
    <section className="section">
      <h2>My Playlist: ({songs.length} songs)</h2>
      {songs.length === 0 ? (
        <p className="empty-message">No songs in your playlist</p>
      ) : (
        <ul className="card-list">
          {songs.map((song) => (
            <li key={song.id}>
              <SongCard song={song} removeSong={removeSong} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
