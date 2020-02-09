import React, { useState } from "react";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Video from "../components/Tutorial/Video";

const apiKey = `AIzaSyA8NbqKMYm6ULAfYpVZMOf9jcrK9MGAcUM`;

Tutorial.getInitialProps = async ctx => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=id%2C%20snippet&maxResults=50&playlistId=${ctx.query.playlist}&key=${apiKey}`
  );
  const json = await res.json();
  console.log(json.items);
  return { videos: json.items };
};

export default function Tutorial({ videos }) {
  const [selection, setVideo] = useState();

  const videoThumbnails = videos.map(video => (
    <li key={video.id}>
      <img
        src={video.snippet.thumbnails.high.url}
        alt="video thumbnail"
        onClick={() => setVideo(video.snippet.resourceId.videoId)}
      />
      <h2>{video.snippet.title}</h2>
    </li>
  ));

  return (
    <Layout>
      <p className="my-16">Tutorial</p>
      <div>{selection ? <Video id={selection} /> : []}</div>

      <div>
        <ul>{videoThumbnails}</ul>
      </div>
    </Layout>
  );
}
