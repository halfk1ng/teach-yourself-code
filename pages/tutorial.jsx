import React, { useState } from "react";
import Layout from "../components/Layout";
import Video from "../components/Video/Video";
import VideoCard from "../components/Video/VideoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const apiKey = process.env.YOUTUBE_API_KEY;

Tutorial.getInitialProps = async ctx => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=id%2C%20snippet&maxResults=50&playlistId=${ctx.query.playlist}&key=${apiKey}`
  );
  const json = await res.json();
  return { videos: json.items };
};

const DELETE_PLAYLIST = gql`
  mutation DeletePlaylist($id: Int) {
    delete_user_playlists(where: { playlist_id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

function Tutorial({ videos, user }) {
  // local state
  const [selection, setVideo] = useState(videos[0]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const router = useRouter();

  // methods for accessing GraphQL queries/mutations

  const [deletePlaylist] = useMutation(DELETE_PLAYLIST, {
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
        `
      }
    ]
  });

  // methods used for the 'next' and 'previous' video buttons
  const nextVideo = videos.find(
    (video, index) => index == videos.indexOf(selection) + 1
  );
  const previousVideo = videos.find(
    (video, index) => index == videos.indexOf(selection) - 1
  );

  // loop through videos to create the table of contents located under the main video
  const videoList = videos.slice(1).map(v => <VideoCard key={v.id} v={v} />);

  return (
    <Layout user={user}>
      <div className="tutorial-container">
        <div>
          {/* TODO: This needs to the playlisy title */}
          <h3 className="is-size-4">
            <b>{selection.snippet.title}</b>
          </h3>
        </div>
        <div style={{ margin: "1em 0em" }}>
          <Video video={selection} user={user} className="tutorial-video" />
          <button
            onClick={() => setVideo(previousVideo)}
            className="previous-video-btn is-pulled-left"
          >
            <FontAwesomeIcon
              icon="arrow-alt-circle-left"
              className="video-nav-icon"
            />
          </button>
          <button
            onClick={() => setVideo(nextVideo)}
            className="next-video-btn is-pulled-right"
          >
            <FontAwesomeIcon
              icon="arrow-alt-circle-right"
              className="video-nav-icon"
            />
          </button>
        </div>

        {/* <button
          className="button add-course-btn"
          onClick={() =>
            deletePlaylist({
              variables: {
                id: router.query.id
              }
            }).then(() => Router.push("/subscriptions"))
          }
        >
          Remove Course
        </button> */}
        <br />
        <br />
        <div
          className={isOpen ? "dropdown is-active" : "dropdown"}
          style={{ width: "100%" }}
        >
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu6"
              onClick={toggleDropdown}
            >
              <span>{isOpen ? "Close Playlist" : "View Playlist"}</span>
              <span className="icon is-small">
                <FontAwesomeIcon icon="caret-down" className="dropdown-icon" />
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu6" role="menu">
            <div className="tutorial-playlist-container">
              <ul className="tutorial-playlist">{videoList}</ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Tutorial;
