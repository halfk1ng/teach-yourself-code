import Link from "next/link";

function TutorialCard({ tutorial }) {
  return (
    <Link
      href={`/tutorial?playlist=${tutorial.playlist.playlist_id}&id=${tutorial.playlist.id}`}
    >
      <div className="card tutorial-card">
        <div className="card-image">
          <img src={tutorial.playlist.thumbnail} alt="video thumbnail" />
        </div>
        <div className="card-content">
          <div className="content">
            <h2 className="is-size-5">{tutorial.playlist.title}</h2>
            <p>by {tutorial.playlist.channel}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TutorialCard;
