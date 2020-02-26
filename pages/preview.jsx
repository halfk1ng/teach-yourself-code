import Layout from "../components/Layout";
import Router, { useRouter } from "next/router";
import { useFetchUser } from "../lib/user";
import Video from "../components/Tutorial/Video";
import Description from "../components/Tutorial/Description";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Linkify from "react-linkify";

const apiKey = process.env.YOUTUBE_API_KEY;

Preview.getInitialProps = async ctx => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=id%2C%20snippet&maxResults=50&playlistId=${ctx.query.playlist}&key=${apiKey}`
  );
  const json = await res.json();
  console.log(ctx);
  console.log(json);

  return { video: json.items[0], videos: json.items };
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

export default function Preview({ video, videos }) {
  const { user } = useFetchUser();
  const router = useRouter();

  const { loading, error, data } = useQuery(FETCH_USER, {
    variables: { email: user.name }
  });

  console.log(videos);

  const [addPlaylist] = useMutation(ADD_USER_PLAYLIST);

  const videoList = videos.slice(1).map(v => (
    <li key={v.id} className="video-list-description-row">
      <div className="columns">
        <div className="column is-4">
          <img src={v.snippet.thumbnails.high.url} alt="video thumbnail" />
        </div>
        <div className="column video-list-description">
          <h3 className="is-size-5">
            <b>{v.snippet.title}</b>
          </h3>
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
          <button
            onClick={() =>
              addPlaylist({
                variables: {
                  playlist_id: router.query.id,
                  user_id: data.users[0].id
                }
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
          <br />
          <br />
          <div className="tutorial-playlist-container">
            <h3 className="is-size-5" style={{ margin: ".5em 0em" }}>
              <b>Table of Contents</b>
            </h3>
            <ul className="tutorial-playlist">{videoList}</ul>
          </div>
        </div>
      )}
    </Layout>
  );
}
