import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const apiKey = `AIzaSyA8NbqKMYm6ULAfYpVZMOf9jcrK9MGAcUM`;

Tutorials.getInitialProps = async ctx => {
  let channelId = `UCW5YeuERMmlnqo4oq8vwUpg`;
  let playlistId = `PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G`;

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?&maxResults=50&part=id%2C%20snippet&playlistId=${playlistId}&key=${apiKey}`
  );
  const json = await res.json();
  console.log(json);
  return { playlist: json.items };
};

export default function Tutorials({ playlist }) {
  const playlistItems = playlist.map(item => (
    <li key={item.id}>{item.snippet.title}</li>
  ));

  return (
    <Layout>
      <p className="my-16">This is the tutorials page</p>
      <ul>{playlistItems}</ul>
    </Layout>
  );
}
