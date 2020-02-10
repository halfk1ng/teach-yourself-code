import React from "react";
import Sidebar from "../Menus/Sidebar";
import View from "../View/index";
import { Box, Flex } from "rebass";

// Global styles and component-specific styles.

const Layout = ({ children }) => (
  <Flex
    className="main-container"
    backgroundColor="primary"
    width="100%"
    height="100vh"
    p="2"
    alignItems="center"
    justifyContent="center"
  >
    <Box width={1 / 5} className="sidebar-container">
      <Sidebar />
    </Box>
    <Box width={4 / 5} padding="5" height="100vh" className="view-container">
      <View>{children}</View>
    </Box>
  </Flex>
);

export default Layout;
