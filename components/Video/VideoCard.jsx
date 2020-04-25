import Linkify from "react-linkify";
import { useDispatch } from "react-redux";
import { updateCurrentVideo } from "../../store/store";

function VideoCard({ v }) {
  const dispatch = useDispatch();

  return (
    <li
      key={v.id}
      className="video-list-description-row"
      onClick={() => dispatch(updateCurrentVideo(v))}
    >
      <div className="columns">
        <div className="column is-5">
          <div className="video-thumbnail-container">
            <img
              src={v.snippet.thumbnails.default.url}
              alt="video thumbnail"
              className="video-thumbnail"
            />
          </div>
        </div>
        <div className="column video-list-description">
          <h3 className="is-size-5" style={{ margin: ".5em 0em" }}>
            <b>{v.snippet.title}</b>
          </h3>
        </div>
      </div>
    </li>
  );
}

export default VideoCard;
