import React, { useEffect } from "react";
import Layout from "../components/Layout/index";
import { useFetchUser } from "../lib/user";
import { useDispatch } from "react-redux";
import { updateCurrentUser } from "../store/store";

function Index() {
  const { user, loading } = useFetchUser();
  const dispatch = useDispatch();

  //  if signed-in user exists, add user to Redux state
  useEffect(() => {
    if (user) {
      dispatch(updateCurrentUser(user));
    }
  });

  return (
    <Layout user={user} loading={loading}>
      <div className="home-view columns">
        {/*  touch view */}
        <div className="home-container-mobile is-hidden-desktop">
          <div style={{ padding: "1em", margin: ".75em" }}>
            <img src="/static/images/man-coding.svg" alt="" />
          </div>
          <div style={{ padding: "1em", margin: ".75em" }}>
            <h3
              className="home-main-text is-size-3 has-text-centered"
              style={{ color: "#1a1b25" }}
            >
              Learn to code for free with our online platform!
            </h3>
            <div className="is-flex" style={{ justifyContent: "center" }}>
              <a className="signup-btn" href="/api/login">
                CREATE AN ACCOUNT
              </a>
            </div>
          </div>
        </div>

        {/* desktop view */}
        <div className="column main-home-column is-6 is-flex-desktop is-hidden-touch">
          <h3
            className="home-main-text is-size-2 is-size-4-mobile has-text-centered-touch"
            style={{ color: "#1a1b25" }}
          >
            Learn to code for free with our online platform!
          </h3>
          <a className="signup-btn" href="/api/login">
            CREATE AN ACCOUNT
          </a>

          {/* <p>
            or learn more <Link href="/about">here</Link>
          </p> */}
        </div>
        <div className="column svg-column is-flex is-hidden-touch">
          <img src="/static/images/man-coding.svg" alt="" />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
