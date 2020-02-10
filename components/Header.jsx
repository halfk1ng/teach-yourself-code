import Link from "next/link";

const Header = () => (
  <div>
    <div>
      <Link href="/">
        <a>Teach Yourself Code</a>
      </Link>
    </div>
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/tutorials">
        <a>Tutorials</a>
      </Link>
      <Link href="/subscriptions">
        <a>Your Courses</a>
      </Link>
      <Link href="/account">
        <a>Account</a>
      </Link>
    </div>
  </div>
);

export default Header;
