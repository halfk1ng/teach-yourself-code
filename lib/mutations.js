import gql from "graphql-tag";

const addUserPlaylist = gql`
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

const deletePlaylist = gql`
  mutation DeletePlaylist($id: Int) {
    delete_user_playlists(where: { playlist_id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

const addNewNote = gql`
  mutation MyMutation(
    $note: String
    $timestamp: Int
    $user_id: String
    $video_id: String
  ) {
    insert_notes(
      objects: {
        note: $note
        timestamp: $timestamp
        user_id: $user_id
        video_id: $video_id
      }
    ) {
      returning {
        id
        note
        timestamp
        video_id
        user_id
      }
    }
  }
`;

export { addUserPlaylist, deletePlaylist, addNewNote };
