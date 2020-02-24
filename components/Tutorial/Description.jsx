function Description({ video }) {
  return (
    <div>
      <p style={{ whiteSpace: "pre-wrap" }} className="is-size-7">
        {video.snippet.description}>
      </p>
    </div>
  );
}

export default Description;
