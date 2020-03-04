import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar({ user, loading }) {
  return (
    <div className="sidebar is-flex">
      <div
        className="brand-name is-flex"
        style={{
          alignItems: "center",
          marginBottom: "3em",
          marginLeft: ".25em"
        }}
      >
        <div
          className="logo-bg is-flex"
          style={{
            backgroundColor: "#d81e5b",
            height: "36px",
            width: "36px",
            borderRadius: "7px",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "0.75em"
          }}
        >
          <h3 className="has-text-white is-size-6">T</h3>
        </div>
        <Link href="/">
          <h3 className="nav-text has-text-white is-size-6">
            Teach Yourself Code
          </h3>
        </Link>
      </div>
      <div className="nav-item">
        <Link href="/">
          <FontAwesomeIcon icon="home" className="nav-icon" />
        </Link>
        <Link href="/">
          <a
            className="nav-text has-text-white is-size-6"
            style={{ margin: ".5em 0em" }}
          >
            Home
          </a>
        </Link>
      </div>
      <div className="nav-item">
        <Link href="/about">
          <FontAwesomeIcon icon="info-circle" className="nav-icon" />
        </Link>

        <Link href="/about">
          <a
            className="nav-text has-text-white is-size-6"
            style={{ margin: ".5em 0em" }}
          >
            About
          </a>
        </Link>
      </div>
      <div className="nav-item">
        <Link href="/topics">
          <FontAwesomeIcon icon={["fab", "youtube"]} className="nav-icon" />
        </Link>
        <Link href="/topics">
          <a
            className="nav-text has-text-white is-size-6"
            style={{ margin: ".5em 0em" }}
          >
            Topics
          </a>
        </Link>
      </div>
      {user ? (
        <div className="nav-item">
          <Link href="/subscriptions">
            <FontAwesomeIcon icon="bookmark" className="nav-icon" />
          </Link>
          <Link href="/subscriptions">
            <a
              className="nav-text has-text-white is-size-6"
              style={{ margin: ".5em 0em" }}
            >
              Your Courses
            </a>
          </Link>
        </div>
      ) : null}

      {!loading &&
        (user ? (
          <>
            <div className="nav-item">
              <Link href="/profile">
                <FontAwesomeIcon icon="user" className="nav-icon" />
              </Link>
              <Link href="/profile">
                <a
                  className="nav-text has-text-white is-size-6"
                  style={{ margin: ".5em 0em" }}
                >
                  Profile
                </a>
              </Link>
            </div>
            <div className="nav-item">
              <Link href="/api/logout">
                <FontAwesomeIcon icon="sign-out-alt" className="nav-icon" />
              </Link>
              <Link href="/api/logout">
                <a
                  className="nav-text has-text-white is-size-6"
                  style={{ margin: ".5em 0em" }}
                >
                  Logout
                </a>
              </Link>
            </div>
          </>
        ) : (
          <div className="nav-item">
            <Link href="/api/login">
              <FontAwesomeIcon icon="user" className="nav-icon" />
            </Link>
            <Link href="/api/login">
              <a
                className="nav-text has-text-white is-size-6"
                style={{ margin: ".5em 0em" }}
              >
                Login
              </a>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Sidebar;
