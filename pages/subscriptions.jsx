import Layout from "../components/Layout";
import Link from "next/link";
import TutorialCard from "../components/Tutorial/TutorialCard";
import { useQuery } from "@apollo/react-hooks";
import { useFetchUser } from "../lib/user";
import { fetchUserPlaylists } from "../lib/queries";

function Subscriptions() {
  const { loading, error, data } = useQuery(fetchUserPlaylists);
  const { user, loading: userLoading } = useFetchUser({ required: true });

  return (
    <Layout user={user} className="is-flex">
      <div
        className="subscriptions-view is-flex"
        style={{ flexDirection: "column" }}
      >
        {user ? (
          <h3 className="subscriptions-header is-size-3 is-size-5-touch">
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
