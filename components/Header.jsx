import Link from "next/link";

const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/tutorials">
      <a>Tutorials</a>
    </Link>
    <Link href="/profile">
      <a>Profile</a>
    </Link>
  </div>
);

export default Header;
