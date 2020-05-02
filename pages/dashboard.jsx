import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Link from "next/link";

function Dashboard() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Layout className="is-flex">
      <div>
        {!user ? <Loader /> : <h3 class="title">👋 Hi, {user.nickname}!</h3>}
        <Link href={"/subscriptions"}>
          <a className="signup-btn" style={{ margin: "0 auto" }}>
            Go to your subscriptions!
          </a>
        </Link>
      </div>
    </Layout>
  );
}
export default Dashboard;
