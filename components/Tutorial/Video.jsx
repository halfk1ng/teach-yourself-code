function Video({ video }) {
  console.log(video);
  const playlistVideo = (
    <div className="video-box">
      <iframe
        src={"https://youtube.com/embed/" + video.snippet.resourceId.videoId}
        title="video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
      <div>{/* <input type="textarea" placeholder="add a note" /> */}</div>
    </div>
  );

  return <div>{playlistVideo}</div>;
}

export default Video;
