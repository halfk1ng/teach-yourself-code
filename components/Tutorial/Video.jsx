function Video({ id }) {
  console.log(id);
  const playlistVideo = (
    <iframe
      src={"https://youtube.com/embed/" + id}
      title="video"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width="600"
      height="400"
    />
  );

  return <div className="p-16">{playlistVideo}</div>;
}

export default Video;
