import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";

const Profile = () => {
  const { user, loading } = useFetchUser({ required: true });

  return (
    <Layout user={user} loading={loading}>
      {user ? <div>Hello, {user.nickname}</div> : "Error retreiving user!"}
    </Layout>
  );
};

export default Profile;
