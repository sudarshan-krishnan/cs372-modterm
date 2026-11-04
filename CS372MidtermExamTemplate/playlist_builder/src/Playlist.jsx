import SongCard from "./SongCard";

//TODO (props): Accept the appropriate props.
export default function Playlist() {
  return (
    <section className="section">
      <h2>My Playlist: ({songs.length} songs)</h2>
      {songs.length === 0 ? (
        <p className="empty-message">No songs in your playlist</p>
      ) : (
        <ul className="card-list">
          {songs.map((song) => (
            <li key={song.id}>
              {/* TODO: Render a SongCard and pass the song and callback. */}
              
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
