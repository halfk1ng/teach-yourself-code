import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useFetchUser } from "../lib/user";
import Video from "../components/Tutorial/Video";
import Description from "../components/Tutorial/Description";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

const apiKey = process.env.YOUTUBE_API_KEY;

Preview.getInitialProps = async ctx => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=id%2C%20snippet&maxResults=50&playlistId=${ctx.query.playlist}&key=${apiKey}`
  );
  const json = await res.json();
  console.log(ctx);
  console.log(json);

  return { video: json.items[0] };
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

export default function Preview({ video }) {
  const { user } = useFetchUser();
  const router = useRouter();

  const { loading, error, data } = useQuery(FETCH_USER, {
    variables: { email: user.name }
  });

  const [addPlaylist] = useMutation(ADD_USER_PLAYLIST);

  return (
    <Layout user={user}>
      {loading ? (
        <h3 className="page-header is-size-5">Preview is loading!</h3>
      ) : (
        <div>
          <div>
            {/* TODO: This needs to the playlisy title */}
            <h3 className="is-size-4">{video.snippet.title}</h3>
          </div>
          <div className="columns">
            <div className="column is-7">
              <Video video={video} className="preview-video" />
            </div>
            <div className="column is-5">
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
              })
            }
          >
            Add Course
          </button>
        </div>
      )}
    </Layout>
  );
}
