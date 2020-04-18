import Layout from "../components/Layout/index";
import Loader from "../components/Loader";
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { fetchPlaylists } from "../lib/queries";

function Tutorials(user) {
  const router = useRouter();

  const { loading, error, data } = useQuery(fetchPlaylists, {
    variables: { topic: router.query.topic },
  });

  return (
    <Layout>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <ul className="playlists-list">
          {data.playlists.map((playlist) => (
            <li key={playlist.id}>
              <Link
                href={`/preview?playlist=${playlist.playlist_id}&id=${playlist.id}`}
              >
                <div className="card tutorial-card">
                  <div className="card-image">
                    <img src={playlist.thumbnail} alt="video thumbnail" />
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h2 className="is-size-5">{playlist.title}</h2>
                      <p>by {playlist.channel}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}

export default Tutorials;
