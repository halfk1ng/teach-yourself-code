import React from "react";
import Layout from "../components/Layout";
import Router, { useRouter } from "next/router";
import Video from "../components/Video/Video";
import Description from "../components/Tutorial/Description";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useSelector } from "react-redux";
import { addUserPlaylist } from "../lib/mutations";
import gql from "graphql-tag";
import Linkify from "react-linkify";

const apiKey = process.env.YOUTUBE_API_KEY;

Preview.getInitialProps = async (ctx) => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=id%2C%20snippet&maxResults=50&playlistId=${ctx.query.playlist}&key=${apiKey}`
  );
  const json = await res.json();
  return { video: json.items[0], videos: json.items };
};

function Preview({ video, videos }) {
  const router = useRouter();
  const user = useSelector((state) => state.user.currentUser);

  // const { error, data } = useQuery(fetchUser, {
  //   variables: { email: user.name }
  // });

  const [addPlaylist] = useMutation(addUserPlaylist, {
    refetchQueries: [
      {
        query: gql`
          query GetUserPlaylists {
            user_playlists(where: { user_id: { _eq: 2 } }) {
              playlist {
                id
                title
                description
                thumbnail
                playlist_id
                channel
              }
            }
          }
        `,
      },
    ],
  });

  const videoList = videos.slice(1).map((v) => (
    <li key={v.id} className="video-list-description-row">
      <div className="columns">
        <div className="column is-4">
          <img
            src={v.snippet.thumbnails ? v.snippet.thumbnails.default.url : null}
            alt="video thumbnail"
          />
        </div>
        <div className="column video-list-description">
          <h3 className="is-size-5">
            <b>{v.snippet.title}</b>
          </h3>
        </div>
      </div>
    </li>
  ));

  return (
    <Layout>
      <div className="preview-container">
        <div>
          {/* TODO: This needs to the playlisy title */}
          <h3 className="is-size-4">
            <b>{video.snippet.title}</b>
          </h3>
        </div>
        <div className="columns top-preview-row">
          <div className="column video-column is-7">
            <Video video={video} className="preview-video" />
          </div>
          <div className="column description-column is-5">
            <Description video={video} />
          </div>
        </div>
        {user ? (
          <button
            onClick={() =>
              addPlaylist({
                variables: {
                  playlist_id: router.query.id,
                  // TODO: Replace hard-coded user id
                  user_id: 2,
                },
              }).then(() =>
                Router.push(
                  `/tutorial?playlist=${router.query.playlist}&id=${router.query.id}`
                )
              )
            }
            className="button add-course-btn"
          >
            Add Course
          </button>
        ) : null}

        <br />
        <br />
        <div className="tutorial-playlist-container">
          <h3
            className="is-size-5 has-text-centered"
            style={{ margin: ".5em 0em" }}
          >
            <b>Table of Contents</b>
          </h3>
          <ul className="tutorial-playlist">{videoList}</ul>
        </div>
      </div>
    </Layout>
  );
}

export default Preview;
