import React, { useState } from "react";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Video from "../components/Tutorial/Video";

const apiKey = process.env.YOUTUBE_API_KEY;

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
        src={video.snippet.thumbnails.default.url}
        alt="video thumbnail"
        onClick={() => setVideo(video.snippet.resourceId.videoId)}
      />
      <h2>{video.snippet.title}</h2>
    </li>
  ));

  return (
    <Layout>
      <p>Tutorial</p>
      <div p="2" m="2" width={2 / 3}>
        {selection ? (
          <Video id={selection} />
        ) : (
          "Select a video to get started!"
        )}
      </div>

      <div p="2" m="2" width={1 / 3}>
        <ul style={{ height: "50vh", overflow: "scroll" }}>
          {videoThumbnails}
        </ul>
      </div>
    </Layout>
  );
}
