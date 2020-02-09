import Link from "next/link";

const Header = () => (
  <div className="absolute top-0 mb-16 bg-blue-500 w-screen">
    <div className="float-left p-4">
      <Link href="/">
        <a className="text-white">Teach Yourself Code</a>
      </Link>
    </div>
    <div className="float-right p-4">
      <Link href="/about">
        <a className="text-white m-2">About</a>
      </Link>
      <Link href="/tutorials">
        <a className="text-white m-2">Tutorials</a>
      </Link>
      <Link href="/subscriptions">
        <a className="text-white m-2">Your Courses</a>
      </Link>
      <Link href="/profile">
        <a className="text-white m-2">Profile</a>
      </Link>
    </div>
  </div>
);

export default Header;
