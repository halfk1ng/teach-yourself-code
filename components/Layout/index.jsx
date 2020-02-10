import React from "react";
import Sidebar from "../Menus/Sidebar";
import { Box, Flex } from "rebass";

// Global styles and component-specific styles.

const Layout = ({ children }) => (
  <div>
    <Flex>
      <Box width={1 / 4}>
        <Sidebar />
      </Box>
      <Box width={3 / 4}>
        <main>{children}</main>
      </Box>
    </Flex>
  </div>
);

export default Layout;
