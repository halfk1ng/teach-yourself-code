import gql from "graphql-tag";

const fetchUser = gql`
  query GetUser($sub: String) {
    users(where: { auth0_id: { _eq: $sub } }) {
      id
      created_at
    }
  }
`;

// Fetches playlists the user has subscribed to
const fetchUserPlaylists = gql`
  query GetUserPlaylists($user_id: Int) {
    user_playlists(where: { user_id: { _eq: $user_id } }) {
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

// Fetches playlists for specific topic user chooses
const fetchPlaylists = gql`
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

const fetchNotes = gql`
  query fetchNotes($user_id: String, $video_id: String) {
    notes(where: { user_id: { _eq: $user_id }, video_id: { _eq: $video_id } }) {
      id
      note
      timestamp
    }
  }
`;

export { fetchUser, fetchUserPlaylists, fetchPlaylists, fetchNotes };
