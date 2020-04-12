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
          <div class="video-thumbnail-container">
            <img
              src={v.snippet.thumbnails.high.url}
              alt="video thumbnail"
              className="video-thumbnail"
            />
          </div>
        </div>
        <div className="column video-list-description">
          <h3 className="is-size-5" style={{ margin: ".5em 0em" }}>
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
