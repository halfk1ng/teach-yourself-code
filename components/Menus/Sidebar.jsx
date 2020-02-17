import Link from "next/link";
function Sidebar({ user, loading }) {
  return (
    <div
      className="sidebar is-flex"
      style={{
        flexDirection: "column",
        height: "100%",
        margin: "8em 1em"
      }}
    >
      <div className="brand-name is-flex">
        <div
          className="logo-bg is-flex"
          style={{
            backgroundColor: "#00BB61",
            height: "36px",
            width: "36px",
            borderRadius: "7px",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "7.5em",
            marginRight: "1em"
          }}
        >
          <h3 className="has-text-white is-size-4">T</h3>
        </div>
        <Link href="/">
          <h3 className="has-text-white is-size-4">Teach Yourself Code</h3>
        </Link>
      </div>
      <Link href="/about">
        <a className="has-text-white" style={{ margin: ".5em 0em" }}>
          About
        </a>
      </Link>
      <Link href="/tutorials">
        <a className="has-text-white" style={{ margin: ".5em 0em" }}>
          Tutorials
        </a>
      </Link>
      <Link href="/subscriptions">
        <a className="has-text-white" style={{ margin: ".5em 0em" }}>
          Your Courses
        </a>
      </Link>
      <Link href="/profile">
        <a className="has-text-white" style={{ margin: ".5em 0em" }}>
          Profile
        </a>
      </Link>
      {!loading &&
        (user ? (
          <>
            <Link href="/profile" style={{ margin: ".5em 0em" }}>
              <a className="has-text-white">Client-rendered profile</a>
            </Link>
            <a href="/api/logout">Logout</a>
          </>
        ) : (
          <a
            href="/api/login"
            className="has-text-white"
            style={{ margin: ".5em 0em" }}
          >
            Login
          </a>
        ))}
    </div>
  );
}

export default Sidebar;
