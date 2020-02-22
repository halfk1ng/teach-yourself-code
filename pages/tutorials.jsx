import Layout from "../components/Layout/index";
import { useRouter } from "next/router";
import { useFetchUser } from "../lib/user";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const FETCH_PLAYLISTS = gql`
  query GetPlaylists($topic: String) {
    playlists(where: { topic: { title: { _eq: $topic } } }) {
      id
      title
      channel
      description
      thumbnail
      playlist_id
      topic_id
    }
  }
`;

export default function Tutorials() {
  const { user } = useFetchUser();
  const router = useRouter();

  const { loading, error, data } = useQuery(FETCH_PLAYLISTS, {
    variables: { topic: router.query.topic }
  });

  console.log(data);
  console.log(router.query.topic);

  return (
    <Layout user={user}>
      <p>This is the tutorials page</p>
      {loading ? (
        "Loading"
      ) : (
        <ul>
          {data.playlists.map(playlist => (
            <li key="playlist.id">
              <img src={playlist.thumbnail} alt="video thumbnail" />
              <h2>{playlist.title}</h2>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}
