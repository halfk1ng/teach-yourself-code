import Layout from "../components/Layout";
import Link from "next/link";
import TutorialCard from "../components/Tutorial/TutorialCard";
import { useQuery } from "@apollo/react-hooks";
import { useFetchUser } from "../lib/user";
import gql from "graphql-tag";

const FETCH_USER_PLAYLISTS = gql`
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
`;

function Subscriptions() {
  const { loading, error, data } = useQuery(FETCH_USER_PLAYLISTS);
  const { user, loading: userLoading } = useFetchUser({ required: true });

  return (
    <Layout user={user} className="is-flex">
      <div className="is-flex" style={{ flexDirection: "column" }}>
        {user ? (
          <h3 className="subscriptions-header is-size-3">
            Hello, <b>{user.nickname} 👋</b>! Here are your tutorials.
          </h3>
        ) : (
          "Error retrieving user!"
        )}
        <br />

        {loading ? (
          "Loading your library"
        ) : data.user_playlists.length == 0 ? (
          <div>
            <h3 className="page-header is-size-3">
              Add your first <Link href="/topics">tutorial!</Link>
            </h3>
          </div>
        ) : (
          <ul className="subscriptions-list">
            {data.user_playlists.map(up => (
              <li key={up.playlist.id}>
                <TutorialCard tutorial={up} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}

export default Subscriptions;
