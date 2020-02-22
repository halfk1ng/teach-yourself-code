import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";

export default function About() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <p>This is the about page</p>
    </Layout>
  );
}
