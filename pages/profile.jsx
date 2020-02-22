import Layout from "../components/Layout";
import gql from "graphql-tag";
import { useFetchUser } from "../lib/user";

// const query = gql`
//   query {
//     user {
//       id
//       first_name
//       last_name
//       email
//     }
//   }
// `;

const Profile = () => {
  const { user, loading } = useFetchUser({ required: true });

  return (
    <Layout user={user} loading={loading}>
      {user ? <div>Hello, {user.nickname}</div> : "Error retreiving user!"}
    </Layout>
  );
};

export default Profile;
