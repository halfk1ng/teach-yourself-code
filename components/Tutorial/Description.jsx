import Linkify from "react-linkify";

function Description({ video }) {
  return (
    <div>
      <p
        style={{ whiteSpace: "pre-wrap" }}
        className="description-text is-size-7"
      >
        <Linkify>{video.snippet.description}></Linkify>
      </p>
    </div>
  );
}

export default Description;
