function Video({ video }) {
  console.log(video);
  const playlistVideo = (
    <div>
      <iframe
        src={"https://youtube.com/embed/" + video.snippet.resourceId.videoId}
        title="video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        width="500"
        height="300"
      />
      <div>
        <h3>{video.snippet.title}</h3>
        <br />
        <input type="textarea" placeholder="add a note" />
      </div>
    </div>
  );

  return <div>{playlistVideo}</div>;
}

export default Video;
