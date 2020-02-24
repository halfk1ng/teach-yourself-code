import React, { useState } from "react";
import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";
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
  console.log(ctx);
  return { videos: json.items };
};

export default function Tutorial({ videos }) {
  const [selection, setVideo] = useState();
  const { user } = useFetchUser();

  const videoThumbnails = videos.map(video => (
    <li key={video.id}>
      <img
        src={video.snippet.thumbnails.default.url}
        alt="video thumbnail"
        onClick={() => setVideo(video)}
        className="video-list"
      />
      <h2 className="is-size-7">{video.snippet.title}</h2>
    </li>
  ));

  return (
    <Layout user={user}>
      <div className="columns">
        <div className="column is-7 has-text-centered">
          {selection ? (
            <Video video={selection} />
          ) : (
            "Select a video to get started!"
          )}
        </div>

        <div className="column is-5 has-text-centered">
          <ul style={{ height: "60vh", overflow: "scroll" }}>
            {videoThumbnails}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
