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

export { addUserPlaylist, deletePlaylist };
