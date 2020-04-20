import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

function Dashboard() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Layout className="is-flex">
      <div>
        {!user ? <Loader /> : <h3 class="title">Hi, {user.nickname}</h3>}
      </div>
    </Layout>
  );
}
export default Dashboard;
