import Layout from "../components/Layout/index";
import Link from "next/link";
import { useFetchUser } from "../lib/user";

function Index() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <div className="home-view columns" style={{ height: "100%" }}>
        <div
          className="column is-7 is-flex"
          style={{ flexDirection: "column", justifyContent: "center" }}
        >
          <h3 className="is-size-1" style={{ color: "#1841D3" }}>
            Learn to code for free with our online platform!
          </h3>
          <a className="signup-btn" href="/api/login">
            CREATE AN ACCOUNT
          </a>
          {/* <p>
            or learn more <Link href="/about">here</Link>
          </p> */}
        </div>
        <div
          className="column is-5 is-flex"
          style={{ justifyContent: "center" }}
        >
          <img src="/static/images/learning.svg" alt="" />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
