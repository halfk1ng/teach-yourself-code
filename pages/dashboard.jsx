import Layout from "../components/Layout";
import { useFetchUser } from "../lib/user";

function Dashboard() {
  const { user, loading, error } = useFetchUser({ required: true });

  return (
    <Layout user={user} className="is-flex">
      <div>
        <h3>Dashboard</h3>
      </div>
    </Layout>
  );
}
export default Dashboard;
