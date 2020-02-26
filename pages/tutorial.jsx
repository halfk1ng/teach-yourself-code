import React, { useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useFetchUser } from "../lib/user";
import Video from "../components/Tutorial/Video";
import Description from "../components/Tutorial/Description";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Linkify from "react-linkify";

const apiKey = process.env.YOUTUBE_API_KEY;

Tutorial.getInitialProps = async ctx => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=id%2C%20snippet&maxResults=50&playlistId=${ctx.query.playlist}&key=${apiKey}`
  );
  const json = await res.json();
  console.log(ctx);
  console.log(json);

  return { videos: json.items };
};

const FETCH_USER = gql`
  query GetUser($email: String) {
    users(where: { email: { _eq: $email } }) {
      id
      email
      auth0_id
      created_at
    }
  }
`;

const ADD_USER_PLAYLIST = gql`
  mutation AddUserPlaylist($playlist_id: Int, $user_id: Int) {
    insert_user_playlists(
      objects: { playlist_id: $playlist_id, user_id: $user_id }
    ) {
      returning {
        id
        playlist_id
        user_id
      }
    }
  }
`;

export default function Tutorial({ video, videos }) {
  const { user } = useFetchUser();
  const router = useRouter();

  const { loading, error, data } = useQuery(FETCH_USER, {
    variables: { email: user.name }
  });

  const [selection, setVideo] = useState(videos[0]);

  // methods used for the 'next' and 'previous' video buttons
  const nextVideo = videos.find(
    (video, index) => index == videos.indexOf(selection) + 1
  );
  const previousVideo = videos.find(
    (video, index) => index == videos.indexOf(selection) - 1
  );

  // loop through videos to create the table of contents located under the main video
  const videoList = videos.slice(1).map(v => (
    <li key={v.id} className="video-list-description-row">
      <div>
        <h3 style={{ margin: ".75em 0em" }}>
          <b>{v.snippet.title}</b>
        </h3>
      </div>
      <div className="columns">
        <div className="column is-2">
          <img
            src={v.snippet.thumbnails.high.url}
            alt="video thumbnail"
            onClick={() => setVideo(v)}
            class="video-thumbnail"
          />
        </div>
        <div className="column description-column">
          <p className=" is-size-6-desktop is-size-7-mobile">
            <Linkify>{v.snippet.description}</Linkify>
          </p>
        </div>
      </div>
    </li>
  ));

  return (
    <Layout user={user}>
      {loading ? (
        <h3 className="page-header is-size-5">
          <b>Preview is loading!</b>
        </h3>
      ) : (
        <div className="preview-container">
          <div>
            {/* TODO: This needs to the playlisy title */}
            <h3 className="is-size-4">
              <b>{selection.snippet.title}</b>
            </h3>
          </div>
          <div className="columns top-preview-row">
            <div className="column video-column is-7">
              <Video video={selection} className="preview-video" />
              <button onClick={() => setVideo(previousVideo)}>Previous</button>
              <button onClick={() => setVideo(nextVideo)}>Next</button>
            </div>
            <div className="column description-column is-5">
              <Description video={selection} />
            </div>
          </div>
          <button className="button add-course-btn">Remove Course</button>
          <br />
          <br />
          <div className="tutorial-playlist-container">
            <h3 className="is-size-5" style={{ margin: ".5em 0em" }}>
              <b>Tutorial Directory</b>
            </h3>
            <ul className="tutorial-playlist">{videoList}</ul>
          </div>
        </div>
      )}
    </Layout>
  );
}
