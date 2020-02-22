import Layout from "../components/Layout/index";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { useFetchUser } from "../lib/user";

const apiKey = process.env.YOUTUBE_API_KEY;

Tutorials.getInitialProps = async ctx => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlists?part=id%2C%20snippet&id=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G%2C%20PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET&key=${apiKey}`
  );
  const json = await res.json();
  console.log(json);
  return { playlist: json.items };
};

export default function Tutorials({ playlist }) {
  const { user, loading } = useFetchUser();

  const playlistItems = playlist.map(item => (
    <li key={item.id}>
      <Link href={{ pathname: "/tutorial", query: { playlist: `${item.id}` } }}>
        <img
          src={item.snippet.thumbnails.default.url}
          alt="playlist thumbnail"
        />
      </Link>
      <h2>{item.snippet.title}</h2>
    </li>
  ));

  return (
    <Layout user={user} loading={loading}>
      <p>This is the tutorials page</p>

      <ul style={{ height: "50%", overflow: "scroll" }}>{playlistItems}</ul>
    </Layout>
  );
}
