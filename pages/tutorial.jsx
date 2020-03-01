import React, { useState } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import Video from "../components/Tutorial/Video";
import VideoCard from "../components/Tutorial/VideoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useFetchUser } from "../lib/user";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

const apiKey = process.env.YOUTUBE_API_KEY;

Tutorial.getInitialProps = async ctx => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=id%2C%20snippet&maxResults=50&playlistId=${ctx.query.playlist}&key=${apiKey}`
  );
  const json = await res.json();
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

const DELETE_PLAYLIST = gql`
  mutation DeletePlaylist($id: Int) {
    delete_user_playlists(where: { playlist_id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

const ADD_NOTE = gql`
  mutation MyMutation($note: String, $user_id: Int, $video_id: String) {
    insert_notes(
      objects: { note: $note, user_id: $user_id, video_id: $video_id }
    ) {
      returning {
        id
        note
        video_id
        user_id
      }
    }
  }
`;

const FETCH_NOTES = gql`
  query fetchNotes($user_id: Int, $video_id: String) {
    notes(where: { user_id: { _eq: $user_id }, video_id: { _eq: $video_id } }) {
      note
    }
  }
`;

export default function Tutorial({ videos }) {
  // local state
  const [selection, setVideo] = useState(videos[0]);
  const [noteToggled, toggleNoteInput] = useState(false);
  const [note, setNote] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const { user } = useFetchUser();
  const router = useRouter();

  // methods for accessing GraphQL queries/mutations
  const { loading, error, data } = useQuery(FETCH_USER, {
    variables: { email: user.name }
  });

  const [deletePlaylist] = useMutation(DELETE_PLAYLIST);
  const [addNote] = useMutation(ADD_NOTE);

  // const {
  //   loading: notesQueryLoading,
  //   error: notesQueryError,
  //   data: notes
  // } = useQuery(FETCH_NOTES, {
  //   variables: {
  //     user_id: data.users[0].id,
  //     video_id: selection.snippet.resourceId.videoId
  //   }
  // });

  // console.log(data.users[0].id);
  // console.log(notes);

  // methods used for the 'next' and 'previous' video buttons
  const nextVideo = videos.find(
    (video, index) => index == videos.indexOf(selection) + 1
  );
  const previousVideo = videos.find(
    (video, index) => index == videos.indexOf(selection) - 1
  );

  // loop through videos to create the table of contents located under the main video
  const videoList = videos.slice(1).map(v => <VideoCard v={v} />);

  // const notesList = notes.map(note => <li key={note.id}>{note.note}</li>);

  return (
    <Layout user={user}>
      {loading ? (
        <h3 className="page-header is-size-5">
          <b>Preview is loading!</b>
        </h3>
      ) : (
        <div className="tutorial-container">
          <div>
            {/* TODO: This needs to the playlisy title */}
            <h3 className="is-size-4">
              <b>{selection.snippet.title}</b>
            </h3>
          </div>
          <div className="columns top-preview-row">
            <div className="column video-column is-9">
              <Video video={selection} className="preview-video" />
              <button onClick={() => setVideo(previousVideo)}>Previous</button>
              <button onClick={() => setVideo(nextVideo)}>Next</button>
            </div>
            <div className="column description-column is-3">
              <div className="is-flex">
                <h3>Your Notes</h3>
                {!noteToggled ? (
                  <button
                    className="add-note-btn button"
                    onClick={() => toggleNoteInput(true)}
                  >
                    add a note
                  </button>
                ) : (
                  <button
                    className="add-note-btn button"
                    onClick={() =>
                      addNote({
                        variables: {
                          note: note,
                          user_id: data.users[0].id,
                          video_id: selection.snippet.resourceId.videoId
                        }
                      }).then(() => toggleNoteInput(false))
                    }
                  >
                    save note
                  </button>
                )}
                {/* <ul>{notesList}</ul> */}
              </div>
              {noteToggled ? (
                <input
                  type="textarea"
                  onChange={e => setNote(e.target.value)}
                />
              ) : null}
            </div>
          </div>
          <button
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
          </button>
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
                  <FontAwesomeIcon
                    icon="caret-down"
                    className="dropdown-icon"
                  />
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
      )}
    </Layout>
  );
}
