import React, { useState } from "react";
import Layout from "../components/Layout";
import Video from "../components/Video/Video";
import VideoList from "../components/Video/VideoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useFetchUser } from "../lib/user";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentVideo } from "../store/store";
import { deletePlaylist } from "../lib/mutations";

const apiKey = process.env.YOUTUBE_API_KEY;

Tutorial.getInitialProps = async ctx => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=id%2C%20snippet&maxResults=50&playlistId=${ctx.query.playlist}&key=${apiKey}`
  );
  const json = await res.json();
  return { videoList: json.items };
};

function Tutorial({ videoList }) {
  const router = useRouter();
  const { user, loading, error } = useFetchUser();

  // local state
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  // functions for accessing/setting current video via Redux
  const dispatch = useDispatch();
  const currentVideo = useSelector(state => state.videos.currentVideo);
  const videoToShow = currentVideo != undefined ? currentVideo : videoList[0];

  // methods used for the 'next' and 'previous' video buttons
  let nextVideo = videoList.find(
    (video, index) => index == videoList.indexOf(videoToShow) + 1
  );

  let previousVideo = videoList.find(
    (video, index) => index == videoList.indexOf(videoToShow) - 1
  );

  // methods for accessing GraphQL queries/mutations
  const [removePlaylistFromSubscriptions] = useMutation(deletePlaylist, {
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

  return (
    <Layout user={user}>
      {loading ? (
        "Content is loading..."
      ) : (
        <div className="tutorial-container">
          <div>
            {/* TODO: This needs to the playlisy title */}
            <h3 className="is-size-4">
              <b>{videoToShow.snippet.title}</b>
            </h3>
          </div>
          <div style={{ margin: "1em 0em" }}>
            <Video video={videoToShow} user={user} className="tutorial-video" />
            <button
              onClick={() => dispatch(updateCurrentVideo(previousVideo))}
              className="previous-video-btn is-pulled-left"
            >
              <FontAwesomeIcon
                icon="arrow-alt-circle-left"
                className="video-nav-icon"
              />
            </button>
            <button
              onClick={() => dispatch(updateCurrentVideo(nextVideo))}
              className="next-video-btn is-pulled-right"
            >
              <FontAwesomeIcon
                icon="arrow-alt-circle-right"
                className="video-nav-icon"
              />
            </button>
          </div>
          <div style={{ margin: "4em 0em" }}>
            <button
              className="button add-course-btn"
              onClick={() =>
                removePlaylistFromSubscriptions({
                  variables: {
                    id: router.query.id
                  }
                }).then(() => router.push("/subscriptions"))
              }
            >
              Remove Course
            </button>
            <br />
            <br />
            <div style={{ width: "100%" }}>
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu6"
                  onClick={toggleDropdown}
                >
                  <span>{isOpen ? "Close Playlist" : "View Playlist"}</span>
                  <span className="icon is-small">
                    <FontAwesomeIcon
                      icon="caret-down"
                      className="dropdown-icon"
                    />
                  </span>
                </button>
              </div>
            </div>
            <div
              className="dropdown-menu"
              id="dropdown-menu6"
              role="menu"
              className={isOpen ? "dropdown-active" : "dropdown-hidden"}
            >
              <div className="tutorial-playlist-container">
                <VideoList videos={videoList} />
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Tutorial;
