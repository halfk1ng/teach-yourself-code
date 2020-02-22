import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";

export default function Subscriptions() {
  const { user, loading } = useFetchUser({ required: true });

  return (
    <Layout user={user} loading={loading}>
      <p>Your subscribed tutorials</p>
    </Layout>
  );
}
