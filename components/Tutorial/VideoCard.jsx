import Linkify from "react-linkify";

function VideoCard({ v }) {
  return (
    <li key={v.id} className="video-list-description-row">
      <div className="columns">
        <div className="column is-4">
          <img
            src={v.snippet.thumbnails.high.url}
            alt="video thumbnail"
            onClick={() => setVideo(v)}
            className="video-thumbnail"
          />
        </div>
        <div className="column video-list-description">
          <h3 className="is-size-5">
            <b>{v.snippet.title}</b>
          </h3>
          <p className=" is-size-6-desktop is-7-mobile">
            {<Linkify>{v.snippet.description}</Linkify>}
          </p>
        </div>
      </div>
    </li>
  );
}

export default VideoCard;
