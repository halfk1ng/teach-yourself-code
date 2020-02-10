import Link from "next/link";
import { Flex } from "rebass";

const Sidebar = () => (
  <Flex flexDirection="column">
    <Link href="/">
      <a>Teach Yourself Code</a>
    </Link>
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
  </Flex>
);

export default Sidebar;
